```bash
webpack
# Inspect output, look for "unused harmony export"
code ./target/index.js
```

## Results

|  #  | Test suite                                            | Method                                             | Bundled identifiers (`usedExports`)                | Bundle size¹ | Tree-shaken |
| :-: | ----------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | ------------ | ----------- |
|  1  | Baseline                                              | `import { fromNullable } from "fp-ts/es6/Option";` | fromNullable, identity, pipeable                   | 36K          | Yes         |
|  2  | Namespace                                             | `import * as option from "fp-ts/es6/Option";`      | fromNullable, identity, pipeable                   | 36K          | Yes         |
|  3  | Facade                                                | `import { fromNullable } from './facade';`         | getApplicativeComposition, array, cons, copy ... ∞ | 336K         | No          |
|  4  | Facade with a single export                           | `import { fromNullable } from './facade';`         | getApplicativeComposition, array, cons, copy ... ∞ | 336K         | No          |
|  5  | Facade without any executed code (import/export only) | `import { fromNullable } from './facade';`         | getApplicativeComposition, array, cons, copy ... ∞ | 336K         | No          |

¹ Measured with `du -hs target/index.js`
