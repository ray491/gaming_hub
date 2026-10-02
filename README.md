# Gaming HP

The existing game portal is served by a small, dependency-free Node.js HTTP server. The game pages and their assets stay in their current folders.

## Run locally

Requires Node.js 22 or newer.

```sh
npm start
```

Open `http://localhost:3000`. Set `PORT` to use a different port.

## Deploy with Appwrite Sites

`appwrite.config.json` contains the Appwrite CLI settings for this site: Node.js 22, SSR, the npm build/start commands, and the repository root as the site path and output directory.

Before using it, replace `<APPWRITE_PROJECT_ID>`, `<APPWRITE_REGION>`, and `<APPWRITE_SITE_ID>` with values from your Appwrite project. Create the site in the Console first (or initialize it with the Appwrite CLI) to obtain its site ID. Then install/log in to the Appwrite CLI and deploy with `appwrite push sites` from the repository root. The server listens on Appwrite's `PORT` environment variable.

For Git-connected deployments, configure the same build settings in the Appwrite Console: enable **Server-side rendering**, select the **Node.js 22** runtime, and use `npm install`, `npm run build`, `npm start`, and `.` for the install, build, start, and output settings respectively.

The customer-facing site-moved notice is at `/newsite/init/` (file: `newsite/init/index.html`). Update its copy with the replacement website address when you have the new domain.
