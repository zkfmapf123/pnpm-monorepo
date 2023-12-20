# pnpm + turberepo

## Why Turborepo

> Power Caching

- ![before](./pubilc/before.png)
- ![after](./pubilc/after.png)

> Simple CLI

```sh
  ## pnpm (기존 pnpm 으로 하나하나 설정해야 함)
  pnpm init
  touch pnpm-workspace.yaml
  ...

  ## turborepo
  pnpm dlx create-turbo@latest
```

> Simple Outputs

```json
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./button": "./src/button.tsx", // export button
    "./card": "./src/card.tsx", // export card
    "./code": "./src/code.tsx" // export code
  },
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "generate:component": "turbo gen react-component"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*", // Reference @repo/eslint-config
    "@repo/typescript-config": "workspace:*", // Reference @repo/typescript-config
    "@turbo/gen": "^1.10.12",
    "@types/node": "^20.5.2",
    "@types/eslint": "^8.44.7",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.53.0",
    "react": "^18.2.0",
    "typescript": "^5.2.2"
  }
}
```

> common-command

```json
// @server/turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

## pnpm + turborepo 구축

![turborepo](./pubilc/turborepo.png)

```sh

## pnpm 구축
pnpm dlx create-turbo@latest

> @server
> pnpm workspace
```

## Execute

```
  cd @server

  turbo build
  turbo start

  curl -i -X GET localhost:3000
  curl -i -X GET localhost:3000/add
  curl -i -X GET localhost:3000/min
  curl -i -X GET localhost:3000/mul
  curl -i -X GET localhost:3000/div
  curl -i -X GET localhost:3001
```

## Reference

- <a href="https://turbo.build/repo/docs/core-concepts/monorepos"> turborepo monorepo </a>
- <a href="https://turbo.build/repo/docs/handbook/publishing-packages"> 내부 모듈관리 </a>
- <a href="https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined"> export is not defined error </a>
