# AYADMO Analytics

Data intelligence platform. Transform data into strategic economic insights with real-time indicators, correlation analysis, and 5-year forecasts.

## Stack

- **Nuxt 3** – Vue 3, SSR
- **Tailwind CSS** – Styling, dark/light theme
- **VueUse** – `useDark`, `useToggle`, `useIntersectionObserver`, `useEventListener`
- **ECharts** (vue-echarts) – Demo page charts

## Setup

```bash
npm install
```

If you see npm cache permission errors, use a temporary cache:

```bash
npm install --cache /tmp/npm-cache-ayadmo
```

Or fix permissions: `sudo chown -R $(whoami) ~/.npm`

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Pages

- **/** – Home (hero, features, stats, testimonials)
- **/pricing** – Enterprise & Starter plans, comparison, FAQ
- **/features** – How it works (4 steps, data flow, example insights)
- **/demo** – Sample dashboard, chart, sample CSV download, video placeholder
- **/about** – Mission, team, tech stack, contact form modal
- **/docs** – API overview, auth, endpoints, data format, integration, FAQ

## Environment

For the basic marketing site, no environment variables are required.

### Enquiry email setup

To enable the enquiry modal on the About page to send emails, configure these variables in a `.env` file:

```bash
NUXT_EMAIL_SMTP_HOST=mail.netpoc.com.ng
NUXT_EMAIL_SMTP_PORT=465
NUXT_EMAIL_SMTP_SECURE=true
NUXT_EMAIL_SMTP_USER=ayadmo@netpoc.com.ng
NUXT_EMAIL_SMTP_PASS=<mailbox password>

NUXT_EMAIL_FROM="AYADMO Enquiries <ayadmo@netpoc.com.ng>"
NUXT_EMAIL_TO=ayenotopeter@hotmail.com
```

The backend route `/api/enquiry` uses these values to send messages via SMTP.
