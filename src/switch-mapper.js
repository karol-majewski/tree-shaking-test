import * as Rx from './facade';

export default Rx.of(1).pipe(
  Rx.map(value => value + 1),
  Rx.switchMap(Rx.identity)
)
