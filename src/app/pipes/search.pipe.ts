import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    if(args[0].length!=0){
      let s = new RegExp(args[0],'i')
      value=value.filter(a=>a.name.search(s)!=-1)

    }
    return value
  }

}
