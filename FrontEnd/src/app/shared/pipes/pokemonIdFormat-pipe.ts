import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPokemonIdFormat',
})
export class PokemonIdFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let idString = String(value)
    if (idString.length <= 3) {
      return "#" + idString.padStart(3, "0")
    } else {
      return "#" + idString
    }
  }

}
