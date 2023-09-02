import { interval } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/finalize
// Example 1: Execute callback function when the observable completes

//emit value in sequence every 1 second
const srcInterval$ = interval(1000);
//output: 0,1,2,3,4,5....
const example = srcInterval$.pipe(
  take(5), //take only the first 5 values
  finalize(() => console.log('Sequence complete')) // Execute when the observable completes
);
const subscribe = example.subscribe((val) => console.log(val));
