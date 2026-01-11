import { Component, inject, signal, OnInit } from '@angular/core';
import type { PokemonListResponse, SimplePokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FiltersComponent } from './components/filters.component/filters.component';


@Component({
  selector: 'app-pokedex',
  imports: [PokemonCardComponent, FiltersComponent],
  templateUrl: './pokedex.component.html',
})
export class PokedexPageComponent {
  private pokemonService = inject(PokemonService)
  allPokemons = signal<SimplePokemon[]>([])
  pokemonsToShow = signal<SimplePokemon[]>([])
  isLoading = signal(false)
  currentPage = 0

  ngOnInit() {
    this.isLoading.set(true)
    this.pokemonService.getAllPokemons().subscribe(
      (data) => {
        this.allPokemons.set(data)
        this.nextPage()
        this.isLoading.set(false)
      }
    )
  }

  nextPage() {
    const pageSize = 30
    let newLimit = (this.currentPage * pageSize) + pageSize
    this.pokemonsToShow.set(this.allPokemons().slice(0, newLimit))
    this.currentPage++
  }

}
