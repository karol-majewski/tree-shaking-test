import { fromNullable, bifunctor, zip, throwError } from './facade';
import { Subject, scheduled, range, merge } from 'rxjs';

console.log(fromNullable(1));
