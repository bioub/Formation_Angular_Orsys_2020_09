import { Pipe, PipeTransform } from '@angular/core';
import { kebabCase } from "lodash-es";

@Pipe({
  name: 'kebab'
})
export class KebabPipe implements PipeTransform {

  transform(value: string): unknown {
    return kebabCase(value);
  }

}
