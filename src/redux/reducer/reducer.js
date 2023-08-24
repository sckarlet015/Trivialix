import { SELECT_GENRE, LIFE_TAKE, LIFE_ADD, SELECT_DIFFICULTY } from "../actions/actions";

const initialState = {
    selectGenre: "Historia",
    difficulty: "facil",
    lifes: 10,
    hints: 10,
    quizPassed: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SELECT_GENRE:
            return{
                ...state,
                selectGenre: payload
            }
        case LIFE_TAKE:
            return{
                ...state,
                lifes: payload
            }
        case LIFE_ADD:
            return{
                ...state,
                lifes: payload
            }
        case SELECT_DIFFICULTY:
            return{
                ...state,
                difficulty: payload
            }
        default:
            return state
            break;
    }
}

export default rootReducer;