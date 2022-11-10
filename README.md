# SILKROAD

This template should help get you started developing with Vue 3 in Vite.
## Setup
You can use Vue directly from a CDN via a script tag:
html

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
Install [Node.js](https://nodejs.org/) version 16.0 or higher

The below command will install and execute create-vue: 

```sh
> npm init vue@latest
```
Once the project is created, follow the instructions to install dependencies and start the dev server:

```sh
    > cd <your-project-name>
    > npm install
    > npm run dev
```

When you are ready to ship your app to production, run the following:

```sh
  > npm run build
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

> Hint:  in index.js
```js
  const history = createWebHistory(import.meta.env.BASE_URL)
```
> 1. Not correct {process.env.BASE_URL}
>2. Correct {import.meta.env.BASE_URL}

# Vercel

**Setup**

1. Create an account with [vercel](vercel.com)

2. Import your GitHub Repo (Make sure you don't have me50 account activated)

3. Create a file called `vercel.json` and dump this content in it
```json 
{"rewrites": [{ "source": "/:path*", "destination": "/index.html" }]}
```
