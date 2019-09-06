import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usuarioActions from "src/app/store/actions";
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user: User;
  loading: boolean;
  error: any;

  constructor( private router: ActivatedRoute, private store: Store<AppState> ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      const id = params['id'];
      this.store.dispatch( new usuarioActions.GetUserAction(id) )
    })

    this.store.select('user').subscribe( data => {
      this.user = data.user
      this.loading = data.loading
      this.error = data.error
    })
  }

}
