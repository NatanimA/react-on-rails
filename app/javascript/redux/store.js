const LOAD_GREETINGS = 'LOAD_GREETINGS'
const URL = 'http://127.0.0.1:3000/api/v1/greetings'

const initialState = {}

export const fetchGreetings = () => async (dispatch) => {
    try {
        const response = await fetch(URL);
        const json = await response.json();
        dispatch({ type: "LOAD_GREETINGS", payload: json });
    } catch (error) {
        console.error(error);
    }
};

const greetings_reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_GREETINGS:
            return action.payload.data
        default:
            return state
    }
}

export default greetings_reducer;
