import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    public modal: NgbActiveModal,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async signIn() {
    try {
      const { email, password } = this.form.value;
      console.log(email);
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
        console.log('response: ', res);
        this.router.navigate(['users']);
      });
      this.modal.close();
    } catch (err) {
      console.log(err)
    }
  }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss()
  }

}
