# AdgeCalculator — Deployment Guide

This guide provides step-by-step instructions for deploying **AdgeCalculator** to **Vercel**, **Cloudflare Pages**, **Netlify**, or containerized **Docker** environments.

---

## 1. Deploying to Vercel (Recommended)

Vercel provides native, zero-configuration deployment for Next.js applications.

### Option A: Via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Login to your Vercel account:
   ```bash
   vercel login
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option B: Via Vercel Dashboard (GitHub Integration)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new) and select **Import Project**.
3. Select the `adge-calculator` repository.
4. Set Framework Preset: **Next.js**.
5. Add Environment Variables (Optional):
   - `NEXT_PUBLIC_APP_URL`: `https://adgecalculator.com`
   - `NEXT_PUBLIC_ANALYTICS_ID`: `G-XXXXXXXXXX`
   - `NEXT_PUBLIC_ENABLE_ADS`: `true`
6. Click **Deploy**.

---

## 2. Deploying to Netlify

1. Connect your GitHub repository in the [Netlify Console](https://app.netlify.com).
2. Configure build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next`
3. Netlify will automatically detect Next.js App Router and deploy using `@netlify/plugin-nextjs`.

---

## 3. Deploying via Docker Container

1. Build the multi-stage Docker image:
   ```bash
   docker build -t adge-calculator:latest .
   ```
2. Run the container on port 3000:
   ```bash
   docker run -d -p 3000:3000 --name adge-calc-app adge-calculator:latest
   ```
3. Access the app locally at `http://localhost:3000`.

---

## 4. Custom Domain & DNS Setup

To link your custom domain (e.g., `adgecalculator.com`):

### DNS Records Configuration
Add the following DNS records with your domain registrar (Cloudflare, Namecheap, GoDaddy):

| Type | Name | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` *(for Vercel)* | Auto / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Auto / 3600 |

### SSL / TLS Security
Vercel automatically issues and renews free SSL/TLS certificates via Let's Encrypt once DNS records propagate.
