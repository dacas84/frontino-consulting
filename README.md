# Frontino Consulting

Static marketing site built with Vite, ready for AWS Amplify Hosting.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview with `npm run preview`.

## Deploy to AWS Amplify

1. Push this project to a Git repository (GitHub, GitLab, etc.).
2. In [AWS Amplify Console](https://console.aws.amazon.com/amplify) → **New app** → **Host web app**.
3. Connect your Git provider and select this repo.
4. Amplify uses the root `amplify.yml`:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Deploy. Your site will be available at `https://<branch>.<app-id>.amplifyapp.com`.

### Optional: use `npm ci` for faster, reproducible builds

If you commit `package-lock.json` (created by `npm install`), you can change `amplify.yml` to use `npm ci` instead of `npm install` in the `preBuild` phase.
