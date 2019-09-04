```bash
webpack
# Inspect output, look for "unused harmony export"
code ./target/index.js
```

## Results

|  #  | Test suite                                            | Method                                             | Bundle size¹ | Tree-shaken |
| :-: | ----------------------------------------------------- | -------------------------------------------------- | ------------ | ----------- |
|  1  | Baseline                                              | `import { fromNullable } from "fp-ts/es6/Option";` | 8K           | Yes         |
|  2  | Namespace                                             | `import * as option from "fp-ts/es6/Option";`      | 8K           | Yes         |
|  3  | Facade                                                | `import { fromNullable } from './facade';`         | 8K           | Yes         |
|  4  | Facade with a single export                           | `import { fromNullable } from './facade';`         | 8K           | Yes         |
|  5  | Facade without any executed code (import/export only) | `import { fromNullable } from './facade';`         | 8K           | Yes         |
|  6  | Namespace facade import                               | `import * as facade from './facade';`              | 8K           | Yes         |

¹ Measured with `du -hs target/index.js`

## Using Webpack Bundle Analyzer

Run `yarn webpack` and navigate to http://127.0.0.1:8888/ in your browser.
