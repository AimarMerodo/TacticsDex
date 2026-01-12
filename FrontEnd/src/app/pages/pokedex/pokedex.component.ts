import { Component, inject, signal, OnInit } from '@angular/core';
import type { SimplePokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FiltersComponent } from './components/filters.component/filters.component';

@Component({
  selector: 'app-pokedex',
  imports: [PokemonCardComponent, FiltersComponent],
  templateUrl: './pokedex.component.html',
})
export class PokedexPageComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  allPokemons = signal<SimplePokemon[]>([]);
  pokemonsToShow = signal<SimplePokemon[]>([]);
  isLoading = signal(false);


  currentPage = signal<number>(0);
  allPokemonsCounter = signal<number>(0);
  pokemonsRenderCounter = signal<number>(0);

  ngOnInit() {
    this.isLoading.set(true);
    this.pokemonService.getAllPokemons().subscribe(
      (data) => {
        this.allPokemons.set(data);
        this.allPokemonsCounter.set(this.allPokemons().length);
        this.loadFirstPage();
        this.isLoading.set(false);
      }
    );
  }

  loadFirstPage() {
    this.pokemonsToShow.set(this.allPokemons().slice(0, 30));
    this.pokemonsRenderCounter.set(this.pokemonsToShow().length);
    this.currentPage.update(v => v + 1);
  }

  nextPage() {
    this.currentPage.update(v => v + 1);
    const pageSize = 30;

    let startLimit = this.currentPage() * pageSize;
    let endLimit = startLimit + pageSize;

    this.pokemonsToShow.set(this.allPokemons().slice(startLimit, endLimit));
    this.pokemonsRenderCounter.set(this.pokemonsToShow().length);
  }

  showPokemonDetails(pokemon: SimplePokemon) {
    console.log("Hola " + pokemon.name)
  }


}