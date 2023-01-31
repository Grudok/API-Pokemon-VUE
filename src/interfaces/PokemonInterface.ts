export interface PokemonInterface  {
    id: number; // id
    name: string; // name
    height: number; // height
    weight: number; // weight
    base_experience: number; // base_experience
    sprites: {
        front_default: string; // front_default
        back_default: string; // back_default
    };
    types: Array<{
        type: {
            name: string; // type
        };
    }>;
    abilities: Array<{
        ability: {
            name: string; // ability
        };
    }>;
    stats: Array<{
        base_stat: number; // base_stat
        stat: {
            name: string; // stat
        };
    }>;
}
