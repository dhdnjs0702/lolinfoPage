export type ChampionData = {
    [key:string]: ChampionType;
}

export type ChampionType = {
    name: string;
    id: string;
    title: string;
    key: number;
    blurb: string;
    info:{
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image:{
        full: string;
        sprite: string;
        group: string;
    }
    tags:string[];
}
