import { of, identity } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export default Rx.of(1).pipe(
  map(value => value + 1),
  mergeMap(identity)
)
