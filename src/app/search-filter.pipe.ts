import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
  }
  // filter items array, items which match and return true will be
  // kept, false will be filtered out
  return items.filter(item => (item.Name.indexOf(filter) !== -1 || item.Email.indexOf(filter) !== -1 ));
}

}
