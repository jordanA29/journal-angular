import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberToArray' })
export class NumberToArray implements PipeTransform {
  transform(value: number): number[] {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
