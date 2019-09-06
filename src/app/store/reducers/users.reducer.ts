import { User } from '../../models/user.model';
import * as fromUser from '../actions';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

const initState: UsersState = { 
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usersReducers( state = initState, action: fromUser.usersActions ) : UsersState {
    switch (action.type) {
        case fromUser.GET_USERS:
            return { 
                ...state,
                loading: true
            };
        case fromUser.GET_USERS_SUCCESS:
            return { 
                ...state,
                users: [...action.users],
                loaded: true,
                loading: false
            };
        case fromUser.GET_USERS_FAIL:
            return { 
                ...state,
                loaded: true,                
                loading: false,
                error: action.payload
            };
    
        default:
            return state;
    }
}