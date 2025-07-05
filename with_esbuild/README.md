## ESBUILD

# Setup

# JavaScript:

```bash
cd js
npm init -y
npm install react react-dom esbuild
```

Then you will need make an `index.html` and an `app.jsx` for your build to show the index.html and read the add.jsx.

Then you have to build and run your server in this case locally with:

```bash
npx esbuild app.jsx --bundle --outfile=dist/app.js --loader:.js=jsx --servedir=.
```

# TypeScript:

```bash
npx create-next-app ts --typescript
cd ts
npm run dev
```

Then you will need make an `index.html` and an `app.tsx` for your build to show the index.html and read the add.jsx.

Then you have to build and run your server in this case locally with:

```bash
npx esbuild app.tsx --bundle --outfile=dist/app.js --loader:.tsx=tsx --servedir=.
```

You also typically add tsconfig.json to configure strictness.

Pros of JS:
Very fast bundling and you typically control everything.

Pros of TS:
minimal build needed.

Cons generally:
No dev tooling and must write configs for big [rojects yourself].

Cons of TS:
Manual setup and no type checks or build and it needs a separate tsc
