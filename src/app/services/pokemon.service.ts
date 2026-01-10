import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonListResponse } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  constructor() { }

  private http = inject(HttpClient)

  async getPokemons() {

    this.http.get<PokemonListResponse>("https://pokeapi.co/api/v2/pokemon?limit=1500")

  }
}
