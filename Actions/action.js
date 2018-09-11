
import {CHECK_REDUX,USER_LOGIN} from '../Types/type';

export const CheckRedux = () => dispatch => {
    dispatch({
        type: CHECK_REDUX
    })
}

export const UserLogin = () => dispatch => {
    dispatch({
        type: UserLogin
    })
}



