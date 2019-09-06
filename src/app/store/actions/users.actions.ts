import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const GET_USERS = ' [Users] Get users '
export const GET_USERS_FAIL = ' [Users] Get users fail '
export const GET_USERS_SUCCESS = ' [Users] Get users success '

export const GET_USER = ' [Users] Get user '

export class GetUsersAction implements Action {
    readonly type = GET_USERS;
}
export class GetUsersFailAction implements Action {
    readonly type = GET_USERS_FAIL;

    constructor( public payload: any ) {}
}
export class GetUsersSuccesAction implements Action {
    readonly type = GET_USERS_SUCCESS;

    constructor( public users: User[] ) {}
}

export class GetUserAction implements Action {
    readonly type = GET_USER;

    constructor( public user: User ) {}
}

export type usersActions = GetUsersAction | GetUsersFailAction | 
    GetUsersSuccesAction | GetUserAction;  