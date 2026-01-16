import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { PokemonListResponse, PokemonCard, SimplePokemon, PokemonDetailResponse, TypesOfPokemon, TypesListResponse } from '../interfaces/pokemon.interface';
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

  getPokemonById(id: string): Observable<PokemonCard> {
    return this.http.get<PokemonDetailResponse>(this.pokeApi + "pokemon/" + id).pipe(
      map(response => {
        return {
          id: response.id,
          name: response.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
          types: response.types.map(v => v.type.name)
        }
      }
      )
    )
  }

  getAllTypes(): Observable<TypesOfPokemon[]> {
    return this.http.get<TypesListResponse>(this.pokeApi + "type").pipe(
      map(response => {
        return response.results.map<TypesOfPokemon>(type => {
          return {
            name: type.name,
            url: type.url
          }
        });
      })
    );
  }



}
