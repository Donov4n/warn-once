# warning-once

> Like [warning()](https://www.npmjs.com/package/warning), but warn only once for each error.

## Installation

```bash
# - Yarn
yarn add warning-once

# - NPM
npm install warning-once
```

## Usage

```js
import warningOnce from 'warning-once';

warningOnce(valid, `You should pass a valid (...).`); // - Message displayed only once.
```
