import { select_difficulty } from "./actions";

export function selectDifficulty(payload){
    return dispatch => {
        dispatch(select_difficulty(payload))
    }
}