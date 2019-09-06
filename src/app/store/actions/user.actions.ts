import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const GET_USER = ' [User] Get user '
export const GET_USER_FAIL = ' [User] Get user fail '
export const GET_USER_SUCCESS = ' [User] Get user success '

export class GetUserAction implements Action {
    readonly type = GET_USER;

    constructor( public id: string ) {}
}
export class GetUserFailAction implements Action {
    readonly type = GET_USER_FAIL;

    constructor( public payload: any ) {}
}
export class GetUserSuccesAction implements Action {
    readonly type = GET_USER_SUCCESS;

    constructor( public user: User ) {}
}

export type userActions = GetUserAction | GetUserFailAction | 
    GetUserSuccesAction ; ;  