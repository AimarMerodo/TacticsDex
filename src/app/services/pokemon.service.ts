import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { PokemonListResponse, SmallPokemon, SimplePokemon } from '../interfaces/pokemon.interface';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  private http = inject(HttpClient)
  pokeApi = environment.pokeApiUrl;

  getAllPokemons(): Observable<SimplePokemon[]> {
    return this.http.get<PokemonListResponse>(this.pokeApi + "pokemon?limit=100000&offset=0").pipe(
      map(response => {
        return response.results.map<SimplePokemon>(smallPokemon => {
          const arrayOfSplitedUrl = smallPokemon.url.split("/")
          const pokemonId = arrayOfSplitedUrl[6]
          return {
            id: pokemonId,
            name: smallPokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
          }
        });
      })
    );
  }
}
