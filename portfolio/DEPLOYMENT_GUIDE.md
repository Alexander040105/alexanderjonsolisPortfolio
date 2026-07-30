# Deploying to Netlify — Step-by-Step Guide

## Option A: Deploy via Netlify Website (Easiest)

### Step 1 — Build the project
```bash
npm run build
```
This creates a `dist/` folder with your production-ready files.

### Step 2 — Go to Netlify
1. Open [https://app.netlify.com](https://app.netlify.com)
2. Sign up / log in (you can use your GitHub account)

### Step 3 — Drag and drop deploy
1. Go to **Sites** → click **Add new site** → **Deploy manually**
2. Drag the entire `dist/` folder into the upload area
3. Your site is live! You'll get a URL like `https://random-name.netlify.app`

### Step 4 — Change your site name
1. Go to **Site settings** → **Change site name**
2. Set it to something like `alexanderjonsolis-portfolio`
3. Your URL becomes `https://alexanderjonsolis-portfolio.netlify.app`

---

## Option B: Deploy via Git (Auto-deploys on every push)

### Step 1 — Push your code to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2 — Connect Netlify to GitHub
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and authorize Netlify
4. Select your repository `alexanderjonsolisPortfolio`

### Step 3 — Configure build settings
Netlify should auto-detect Vite. If not, set these:

| Setting         | Value            |
|-----------------|------------------|
| Build command   | `npm run build`  |
| Publish directory | `dist`         |

### Step 4 — Deploy
1. Click **Deploy site**
2. Wait for the build to finish (usually 1-2 minutes)
3. Your site is live!

Every time you `git push` to `main`, Netlify will automatically rebuild and redeploy your site.

---

## Option C: Deploy via Netlify CLI

### Step 1 — Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2 — Login
```bash
netlify login
```
This opens a browser to authenticate.

### Step 3 — Initialize the site
```bash
netlify init
```
Follow the prompts to create a new site or link an existing one.

### Step 4 — Deploy
```bash
netlify deploy --build
```
Use `--prod` flag for a production deploy:
```bash
netlify deploy --prod --build
```

---

## Your `netlify.toml` (Already Created)

A `netlify.toml` file is already in your project root. It tells Netlify:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA redirect**: All routes redirect to `index.html` (so client-side routing works)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Custom Domain (Optional)

1. In Netlify, go to **Domain settings** → **Add custom domain**
2. Enter your domain (e.g., `alexanderjonsolis.com`)
3. Update your domain registrar's DNS to point to Netlify
4. Netlify automatically provisions HTTPS via Let's Encrypt

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check that `npm run build` works locally |
| Blank page after deploy | Ensure `publish = "dist"` (not `build`) for Vite |
| Routes 404 on refresh | The `redirects` block in `netlify.toml` handles this |
| `prop-types` not found | Run `npm install prop-types` before deploying |
