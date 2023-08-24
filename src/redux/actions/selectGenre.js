import { select_genre } from "./actions";

export function selectGenre(payload){
    return dispatch => {
        dispatch(select_genre(payload))
    }
}