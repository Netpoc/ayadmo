import { d as defineEventHandler, g as getMethod, c as createError, r as readBody, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const EnquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(1)
});
const enquiry_post = defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }
  const body = await readBody(event);
  const parsed = EnquirySchema.safeParse(body);
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid enquiry payload",
      data: parsed.error.flatten()
    });
  }
  const { name, email, phone, message } = parsed.data;
  const config = useRuntimeConfig().email;
  if (!(config == null ? void 0 : config.smtpHost) || !(config == null ? void 0 : config.smtpPort) || !(config == null ? void 0 : config.smtpUser) || !(config == null ? void 0 : config.smtpPass) || !(config == null ? void 0 : config.to) || !(config == null ? void 0 : config.from)) {
    throw createError({
      statusCode: 500,
      statusMessage: "Email configuration is incomplete on the server"
    });
  }
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: String(config.smtpSecure).toLowerCase() === "true" || Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  });
  const subject = `New AYADMO enquiry from ${name}`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    "",
    message,
    "",
    `Received at: ${(/* @__PURE__ */ new Date()).toISOString()}`
  ].join("\n");
  try {
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      subject,
      text: textBody
    });
  } catch (err) {
    console.error("Failed to send enquiry email", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send enquiry email"
    });
  }
  return { ok: true };
});

export { enquiry_post as default };
//# sourceMappingURL=enquiry.post.mjs.map
