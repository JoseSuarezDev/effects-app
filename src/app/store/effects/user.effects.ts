import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as userActions from "../actions";
import { of } from "rxjs";
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
    constructor( private actions$ : Actions, public userService: UserService ) {}

    @Effect()
    loadUser$ = this.actions$.pipe(
        ofType( userActions.GET_USER ),
        switchMap( action => {
          const id = action['id'];
          return this.userService.getUser( id ).pipe(
              map( user => new userActions.GetUserSuccesAction( user ) ),
              catchError( error => of(new userActions.GetUserFailAction( error )) ) 
              )
        })
    );
}