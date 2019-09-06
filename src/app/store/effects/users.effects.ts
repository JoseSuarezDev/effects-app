import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as usersActions from "../actions";
import { of } from "rxjs";
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
    constructor( private actions$ : Actions, public userService: UserService ) {}

    @Effect()
    loadUsers$ = this.actions$.pipe(ofType( usersActions.GET_USERS ),
        switchMap( () => 
        this.userService.getUsers().pipe(map( users => 
            new usersActions.GetUsersSuccesAction( users ) ),
            catchError( error => of(new usersActions.GetUsersFailAction( error )) ) 
            )
        )
    );
}