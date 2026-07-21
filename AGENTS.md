<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment (EC2 — production)

This is the **HK Tech landing page**, deployed at `https://portal.hktech.in/` (root
path). It is NOT on `crm.hktech.in` — that was an earlier planning assumption that
changed. Do not reference `crm.hktech.in` in any deploy instructions.

- **Server**: EC2 instance (Ubuntu), same box that also hosts the existing CRM app
  (unrelated FastAPI + React app, deployed separately — do not touch its files or
  config when deploying this landing page)
- **Repo location on server**: `/home/ubuntu/landing`
- **Build**: `npm run build` — outputs to `.output/` (Nitro `node-server` preset,
  NOT the default `cloudflare-module` preset — this is a real Node SSR server, not a
  Cloudflare Worker or static export)
- **Process manager**: PM2
- **PM2 process name**: `hktech-landing` (exact name — NOT `hktech-crm`, NOT
  anything else. Using the wrong name will start a second, conflicting process on
  the same port instead of restarting the existing one.)
- **Port**: 3000 (hardcoded default from the Nitro node-server preset; respects
  `PORT`/`NITRO_PORT` env vars if ever changed, but currently just uses the default)
- **Nginx**: reverse-proxies `portal.hktech.in/` (root path only — `/app/` and
  `/api/` are separately routed to the existing CRM app and its backend, don't touch
  those blocks) to `http://127.0.0.1:3000`. This is already configured correctly on
  the server — deploying this app never requires touching Nginx config.

### Standard deploy sequence (existing process, most common case)
```bash
cd /home/ubuntu/landing
git pull origin main
npm install
npm run build
pm2 restart hktech-landing
```

### Only if the PM2 process doesn't exist yet (rare — e.g. after a server rebuild)
```bash
cd /home/ubuntu/landing
git pull origin main
npm install
npm run build
pm2 start ".output/server/index.mjs" --name hktech-landing
pm2 save
pm2 startup   # then run the printed sudo command
```

There is currently no CI/CD pipeline for this app — deploys are manual, run directly
on the EC2 box over SSH. (The existing CRM app at `/app` does have GitHub Actions
CI/CD — don't confuse the two when suggesting deploy steps.)
