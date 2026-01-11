import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {

  name = input.required()
  image = input.required()

}
