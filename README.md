# rollup-plugin-postcss-hot

This is a fork of [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) with added support for hot CSS injection during HMR, with [rollup-plugin-hot ](https://github.com/rixo/rollup-plugin-hot).

The intention is to provide a fillgap solution for HMR and, ideally, to integrate HMR support into the original plugin. If someone is interested is pushing Rollup's HMR cause by discussing this and submitting clean PRs to the original project, that would be huge!

**NOTE** Hot CSS injection only works when the [inject](https://github.com/egoist/rollup-plugin-postcss#inject) option is `true`.

**NOTE 2** This has only be tested with default options, so if you find a bug with HMR support, please open an issue _in this repo_ (not `rollup-plugin-postcss` repo).

A [basic example](https://github.com/rixo/rollup-plugin-hot/blob/90f7eb8f4fb4a9d550c94283822e7d12c5c26980/example/rollup.config.js#L44) is available in `rollup-plugin-hot`'s repository.

## Install

```bash
yarn add rollup-plugin-postcss-hot --dev
```

## Usage

Usage should be exactly the same as the original plugin. Please refer to `rollup-plugin-postcss`'s docs.

There's only a `hot` option added:

```js
const HOT = !!process.env.HOT // for example

...

postcss({
  hot: HOT,
  extract: path.resolve(''),
  sourceMap: true,
}),
```

When the `hot` option is `true`, [inject](https://github.com/egoist/rollup-plugin-postcss#inject) option will be forcefully enabled and, if you have [extract](https://github.com/egoist/rollup-plugin-postcss#extract) option (like in the above example), an empty file will be written in this location.

The empty file avoid a 404 if your app tries to load the file normally. It is emptied because otherwise the content of the file initially loaded by the browser could conflict with CSS inject by HMR.
