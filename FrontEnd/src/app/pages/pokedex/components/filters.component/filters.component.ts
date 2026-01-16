import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-filters-pokedex',
  imports: [AsyncPipe],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  private PokemonService = inject(PokemonService);

  typesOfPokemons = this.PokemonService.getAllTypes();
  gensOfPokemons = this.PokemonService.getAllGens();
}
