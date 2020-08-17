import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SignInComponent } from './sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn$: Observable<boolean>
  loggedOut$: Observable<boolean>

  constructor(
    private modal: NgbModal,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loggedIn$ = this.afAuth.authState.pipe(
      map(user => !!user)
    )

    this.loggedOut$ = this.loggedIn$.pipe(
      map(loggedIn => !loggedIn)
    )
  }

  signIn() {
    this.modal.open(SignInComponent)
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    await this.router.navigateByUrl("/")
  }
}
