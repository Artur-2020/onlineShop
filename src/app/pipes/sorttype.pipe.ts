import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorttype'
})
export class SorttypePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    value=value.filter(a=> a.type==args[0] )
    return value
  }

}
