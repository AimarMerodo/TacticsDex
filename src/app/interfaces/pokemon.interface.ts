export interface SmallPokemon {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: SmallPokemon[];
}

export interface SimplePokemon {
    id: string,
    name: string,
    image: string
}