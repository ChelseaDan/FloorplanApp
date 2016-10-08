import {Component} from '@angular/core';

import {NavController, Alert} from 'ionic-angular';

import {FORM_DIRECTIVES,
				FormBuilder,
				ControlGroup,
				Validators,
				AbstractControl} from '@angular/common';
				
import {LoginService} from './login.service';
import {User} from './user';

@Component({
	selector: 'app-login',
  templateUrl: 'build/pages/login/login.html',
	directives: [FORM_DIRECTIVES]
})

export class LoginPage {
	authForm: ControlGroup;
	username: AbstractControl;
	password: AbstractControl;
	pages = [];

	constructor(private nav: NavController,
						 	private fb: FormBuilder,
						  private loginService: LoginService) {
		this.nav = nav;
		this.authForm = fb.group({
						'username': ['', Validators.compose([Validators.required])],
						'password': ['', Validators.compose([Validators.required])]
		});

		this.username = this.authForm.controls['username'];
		this.password = this.authForm.controls['password'];
  }

	onSubmit(value: string) {
		if (this.authForm.valid) {
			let user: User = this.loginService.login(this.username.value, this.password.value)
			if (user == null) {
				this.loginUnsuccessfulAlert();
			} else {
			  /* Set Root instead of push because the back feature bottoms at
				 * the root. */
				console.log('Login successful');
			}
		}
	}

  loginUnsuccessfulAlert() {
	  let alert = Alert.create({
      title: 'Login Unsuccessful!',
      subTitle: 'Please check username and password.',
      buttons: ['OK']
    });
    this.nav.present(alert);
  }

}
