# Ziki Agent Readiness

A standalone interactive proposal for Ziki’s logged-in Product → Inbox page. The original Baton project is separate.

## Improvement

Replace vague agent readiness with a compact Your agents dropdown showing connection state, last-check information, an explicit next action, and a clear Coming soon label for work automation. Put the Inbox instructions in a separate collapsed disclosure so the workspace stays focused.

The page uses an example workspace. All counts are illustrative. The connection check is a browser-local demonstration of the unavailable configuration state: it never claims to have checked a real agent. Manage agent opens the real Ziki settings in a new tab. No credentials, live agent integration, or user data are stored.

## Run

Requires Node.js, with no third-party dependencies:

```sh
npm run dev
```

Open http://127.0.0.1:4174.

## Build and deploy

```sh
npm run build
```

Import this repository into Vercel. Use preset Other, build command `npm run build`, output directory `dist`. No environment variables are required. The configuration is included in vercel.json.

## Interactions

- Your agents: open, close, click outside, Escape, and focus-leave dismissal.
- How the Inbox works: expandable instructions; only one disclosure is open at a time.
- Check connection: explicit simulated check with an honest unavailable state.
- Inbox categories: clickable tabs with arrow-key, Home, and End navigation.
- Search and clear filters: browser-local empty-state filtering.
- Responsive layout and reduced-motion support.

Product reference: https://ziki.dev/issues
