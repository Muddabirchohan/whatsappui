import { CHECK_REDUX, USER_LOGIN } from "../Types/type";

const initialState = {
name: 'from the redux store',
user: 'muddabir',
password: 123
}

export default function(state = initialState, action) {

    switch(action.type){

        case CHECK_REDUX: 
        return {
            ...state,
            name: state.name
        }

        case USER_LOGIN:
        return {

        }

default:
 return state;
    }

}

