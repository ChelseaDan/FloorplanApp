import { Injectable } from '@angular/core';

import {USERS} from './mock-users';
import {User} from './user';

@Injectable()
export class LoginService {
	login(username: string, password: string) {
		for (let USER of USERS) {
			if ((username == USER.username) && (password == USER.password)) {
				console.log('Login successful!');	
				return USER;
			} else {
				console.log('Login unsuccessful!');
			}
		}
		return null;
	}

	addUser(name: string, username: string, password: string) {
		let user: User = {
			id: USERS.length + 1,
			name: name,
			username: username,
			password: password
		}

		console.log('Adding user: ' + user.username + ',' + user.password);

		USERS.push(user);

		console.log('USERS-');		
		for (let USER of USERS) {
			console.log(user.username + ',' + user.password);
		}
		console.log('------');
	}

}
