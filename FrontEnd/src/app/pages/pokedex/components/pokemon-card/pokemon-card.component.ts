import { Component, effect, inject, input, signal } from '@angular/core';
import type { SimplePokemon, PokemonCard } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TYPE_COLORS, TYPE_COLORS_LIGHT, HOVER_TEXT_COLORS } from 'src/app/shared/constants/type-colors';
import { PokemonIdFormatPipe } from 'src/app/shared/pipes/pokemonIdFormat-pipe';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonIdFormatPipe],
  templateUrl: './pokemon-card.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PokemonCardComponent {

  typeColors = TYPE_COLORS
  typeColorsLight = TYPE_COLORS_LIGHT
  hoverTextColors = HOVER_TEXT_COLORS
  pokemon = input.required<SimplePokemon>()
  pokemonDetails = signal<PokemonCard | null>(null)

  private pokemonService = inject(PokemonService);

  constructor() {
    effect((onCleanup) => {
      const nextPage = this.pokemon()
      const id = this.pokemon().id
      this.pokemonDetails.set(null)
      const subscription = this.pokemonService.getPokemonById(id).subscribe(data => {
        this.pokemonDetails.set(data)
      }
      )
      onCleanup(() => {
        subscription.unsubscribe()
      })
    }

    )
  }


}
