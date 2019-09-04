import { of, identity } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export default Rx.of(1).pipe(
  map(value => value + 1),
  switchMap(identity)
)
