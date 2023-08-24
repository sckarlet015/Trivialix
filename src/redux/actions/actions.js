export const SELECT_GENRE = "SELECT_GENRE"
export const LIFE_TAKE = "LIFE_TAKE"
export const LIFE_ADD = "LIFE_ADD"
export const SELECT_DIFFICULTY = "SELECT_DIFFICULTY"


export function select_genre(payload){
    return{
        type: SELECT_GENRE,
        payload: payload
    }
}

export function life_take(payload){
    return{
        type: LIFE_TAKE,
        payload: payload
    } 
}

export function life_add(payload){
    return{
        type: LIFE_ADD,
        payload: payload
    } 
}

export function select_difficulty(payload){
    return{
        type: SELECT_DIFFICULTY,
        payload: payload
    }
}