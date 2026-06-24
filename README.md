# React TypeScript Library Starter

[![CI](https://github.com/manisuec/react-ts-lib-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/manisuec/react-ts-lib-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, batteries-included skeleton for building your own **React component
library** with TypeScript. Bundled with Vite (library mode), Vitest, Storybook,
Sass, ESLint, Prettier and a Changesets-based release flow.

## Why this starter?

Skip days of boilerplate and tooling decisions — this starter wires together a
production-grade workflow so you can focus on building components, not config.

- ⚡ **Fast, modern build** — Vite library mode with `vite-plugin-dts` produces
  dual **ESM + CJS** bundles, an `exports` map, and `.d.ts` declarations that
  tree-shake cleanly in any modern bundler.
- 🔒 **Type-safe by default** — strict TypeScript (ESM-first) and per-component
  `*.types.ts` files keep public APIs explicit and self-documenting.
- 🧪 **Testing built in** — Vitest + Testing Library + jsdom are pre-configured
  with a coverage script, so every component ships with confidence.
- 📚 **Living documentation** — Storybook (React + Vite builder) auto-deploys to
  GitHub Pages, giving you an interactive component playground for free.
- 🎨 **Real styling, not just CSS-in-JS** — Sass with `@use` modules, shared
  variables/typography, and a compiled `style.css` consumers can import.
- 🚦 **Quality gates that run themselves** — ESLint (flat config, a11y + hooks
  rules), Prettier, and husky + lint-staged hooks catch issues before commit.
- 📦 **Effortless releases** — Changesets-driven versioning, changelogs, and npm
  publishing via GitHub Actions; cut a release without leaving your PR flow.
- 🟢 **Up to date** — React 19, TypeScript 6, Vite 8, and Node 24 ready out of
  the box, with an `.nvmrc` to pin your toolchain.
- 🧩 **Scalable structure** — opinionated `components/`, `hooks/`, `services/`,
  `store/`, and `utils/` layout that grows with your library.

## Stack

| Concern        | Tooling                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| Build          | [Vite](https://vite.dev) library mode + `vite-plugin-dts`                                              |
| Language       | [TypeScript](https://www.typescriptlang.org/) (ESM-first)                                              |
| Styling        | [Sass](https://sass-lang.com/) (`@use` modules)                                                        |
| Components doc | [Storybook](https://storybook.js.org/) (React + Vite builder)                                          |
| Tests          | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)                        |
| Lint / format  | [ESLint](https://eslint.org/) (flat config) + [Prettier](https://prettier.io/)                         |
| Releases       | [Changesets](https://github.com/changesets/changesets)                                                 |
| Git hooks      | [husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) |

The package ships dual ESM/CJS builds with TypeScript declarations and an
`exports` map, so it resolves and tree-shakes correctly in modern bundlers.

[See the component library in action ▸](https://manisuec.github.io/react-ts-lib-starter/)

## Requirements

- Node.js **>= 24** (an `.nvmrc` is provided — run `nvm use`)

## Getting started

```bash
npm install
```

### Develop with Storybook

```bash
npm run storybook        # live-reload dev server on http://localhost:6006
npm run build-storybook  # static build into storybook-static/
```

### Test

```bash
npm run test           # run once
npm run test:watch     # watch mode
npm run test:coverage  # with coverage report
```

### Lint, format & types

```bash
npm run lint           # eslint
npm run format         # prettier --write
npm run typecheck      # tsc --noEmit
```

### Build the library

```bash
npm run build
```

This emits to `dist/`:

- `index.js` — ESM bundle
- `index.cjs` — CommonJS bundle
- `index.d.ts` — TypeScript declarations (entry)
- `style.css` — compiled component styles

## Project structure

```
src
├── assets
│   └── scss
│       ├── typography.scss
│       └── variables.scss
├── components
│   └── TestComponent
│       ├── TestComponent.scss
│       ├── TestComponent.stories.tsx
│       ├── TestComponent.test.tsx
│       ├── TestComponent.tsx
│       ├── TestComponent.types.ts
│       └── index.ts
├── hooks
├── index.ts
├── services
├── store
└── utils
```

## Consuming the published package

```tsx
import { TestComponent } from 'react-ts-lib-starter';
import 'react-ts-lib-starter/styles.css';

export const App = () => (
  <TestComponent heading="Hello" content={<p>World</p>} />
);
```

## Publishing & releases

Releases are driven by [Changesets](https://github.com/changesets/changesets).

1. After making changes, record one: `npm run changeset` and follow the prompts.
2. Commit the generated file under `.changeset/`.
3. On merge to `master`, the **Release** workflow opens a "Version Packages" PR;
   merging that PR publishes to npm.

For this to work, add an `NPM_TOKEN` secret to the repository and update the
`name` field in `package.json` to your npm package name.

To publish manually instead:

```bash
npm run changeset   # record changes
npm run version     # bump version + changelog
npm run release     # build + npm publish
```

## Deploy Storybook to GitHub Pages

The included **Deploy Storybook** workflow builds and publishes Storybook to
GitHub Pages on every push to `master`. Enable Pages for the repo
(Settings → Pages → Source: GitHub Actions) and you're done.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## Credits

Originally forked from
[HarveyD/react-component-library](https://github.com/HarveyD/react-component-library);
since modernized to the current toolchain.

## License

[MIT](LICENSE)
