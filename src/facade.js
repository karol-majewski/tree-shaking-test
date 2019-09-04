import * as FP from 'fp-ts';
import { alternative } from 'fp-ts';
import { fromNullable } from "fp-ts/es6/Option";
import * as Rx from 'rxjs';
import * as operators from 'rxjs/operators';

export const { zip, throwError } = Rx;
export const { bifunctor, boundedMeetSemilattice } = FP;
export const { map, mergeMap, switchMap } = operators;

export { fromNullable, alternative };

export * from '.';
