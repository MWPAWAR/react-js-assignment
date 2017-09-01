import { 
  LOGIN
} from '../action-types';

const DUMMY_CRED = { 
  userName: 'Mahesh', 
  password: 'Mahesh'
};

export function attemptToLogin(userName, password) {
  if (userName === DUMMY_CRED.userName && password === DUMMY_CRED.password) {
	  return {
		type: LOGIN,
		payload: {
		  isLoggedIn: true
		}
	  };	
  }

  return {
    type: LOGIN,
    payload: {
      isLoggedIn: false
    }
  };
}