import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hari'
})
export class HariPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): unknown {
    return value*value*value;
    
  }

}
