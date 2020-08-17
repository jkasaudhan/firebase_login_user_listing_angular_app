import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthTokenHttpInterceptorProvider } from './http-interceptors/auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    UsersModule,
  
    NgbModule,

    ReactiveFormsModule
  ],
  providers: [AuthTokenHttpInterceptorProvider, NgbActiveModal],
  entryComponents: [
    SignInComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
