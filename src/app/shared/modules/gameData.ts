export interface GameData {
    cover : {
        id : number,
        url : string
    },
    first_release_date : number,
    game_egines : [{
        id : number,
        name : string
    }],
    game_modes : [{
        id : number,
        name : string
    }],
    involved_companies : [{
        id : number,
        company : number
    }],
    name : string,
    platforms : [{
        id : number,
        name : string,
        abbreviation : string
    }],
    player_perspectives : [{
        id : number,
        name : string
    }],
    release_dates : [{
        id : number, 
        date : number,
        region : number,
        y : number
    }],
    storyline : string,
    summary : string,
    themes : [{
        id : number, 
        name : string
    }],
    url : string
}