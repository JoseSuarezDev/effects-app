import { User } from '../../models/user.model';
import * as fromUser from '../actions';

export interface UserState {
    user: User,
    loaded: boolean,
    loading: boolean,
    error: any
}

const initState: UserState = { 
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function userReducers( state = initState, action: fromUser.userActions ) : UserState {
    switch (action.type) {
        case fromUser.GET_USER:
            return { 
                ...state,
                loading: true,
                error: null
            };
        case fromUser.GET_USER_SUCCESS:
            return { 
                ...state,
                user: {...action.user},
                loaded: true,
                loading: false
            };
        case fromUser.GET_USER_FAIL:
            return { 
                ...state,
                loaded: true,                
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
    
        default:
            return state;
    }
}