## VITE

# Setup

# JavaScript:

```bash
npm create vite@latest js -- --template react
cd js
npm install
npm run dev
```

Then you will need to edit `src/App.js` to the thing you want, in my case just a simple hello world.

# TypeScript:

```bash
npm create vite@latest ts -- --template react-ts
cd ts
npm install
npm run dev
```

Then you will need to edit `src/App.tsx` to the thing you want, in my case just a simple hello world.

Pros of JS:
It is fast and simple to implement.

Pros of TS:
To have Ts is as simple as writing the `--template` attribute in the command as `react-ts`.

Cons of JS:
Is a newer way to implement react so it doesn't have as reach of an audience as other ways like CRA.

Cons of TS:
On top of above you need to also maintain a `tsconfig.json` file.
