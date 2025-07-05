## NEXT.JS

# Setup

# JavaScript:

```bash
npx create-next-app js
cd js
npm run dev
```

Then you will need to edit `app/page.js` to the thing you want, in my case just a simple hello world.

# TypeScript:

```bash
npx create-next-app ts --typescript
cd ts
npm run dev
```

Then you will need to edit `app/page.tsx` to the thing you want, in my case just a simple hello world.

Pros of JS:
It has file based routing so it is easier to manage and Server-side rendering (SEO).

Pros of TS:
Can be set by the interactive command line or by adding `--typescript` to the end of the setup line, it has Type-safe data fetching and it is good for large apps.

Cons generally:
Cpmlexity grows with project size.
