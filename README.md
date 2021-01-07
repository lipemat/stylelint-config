# Lipemat Stylelint Config

<p>
<a href="https://www.npmjs.com/package/@lipemat/stylelint-config">
<img alt="npm" src="https://img.shields.io/npm/v/@lipemat/stylelint-config.svg">
</a>
    <img alt="node" src="https://img.shields.io/node/v/@lipemat/stylelint-config.svg">
</p>

Stylelint configuration for all `@lipemat` packages.

## Usage

Used directly inside of `@lipemat/postcss-boilerplate` so it does not need to be added to your project,
although if you are using Yarn V2 with PNP, you will need to add `stylelint` to your package to
allow PHPStorm to use Stylelint.

```json
{
  "dependencies": {
    "stylelint": "^13.7.0"
  }
}

```