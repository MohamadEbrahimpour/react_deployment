## PARCEL

# Setup

# JavaScript:

```bash
cd js
npm init -y
npm install react react-dom parcel
npx parcel index.html
```

# TypeScript:

```bash
cd ts
npm init -y
npm install react react-dom parcel
npm install typescript @types/react @types/react-dom
npx parcel index.html
```

Pros of JS:
There is minimal config and it has auto detect JSX.

Pros of TS:
Handles `.tsx` transparently and reads `tsconfig.json` automatic.
Cons of JS:
It has less control for fine-tuning.

Cons of TS:
You must install many things manually such as `@types/react`.
