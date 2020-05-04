import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any {
    
    if(args[0]=='price'){
      value.sort((a,b)=>b.price-a.price)
    }
    if(args[0]=='date'){
      value.sort((a,b)=>b.date-a.date)
    }
    
    return value;
    
  }

}
