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

// Interfaces para las cards de pokemon

export interface PokemonCard {
    id: number;
    name: string;
    image: string;
    types: string[];
}

export interface PokemonDetailResponse {
    id: number;
    name: string;
    types: PokemonTypeSlot[];
}

export interface PokemonTypeSlot {
    slot: number;
    type: {
        name: string;
    };
}

// Interfaces para los tipos de pokemon (planta, fuego, ect...)

export interface TypesOfPokemon {
    name: string;
    url: string;
}

export interface TypesListResponse {
    count: number;
    next: string;
    previous: string;
    results: TypesOfPokemon[];
}