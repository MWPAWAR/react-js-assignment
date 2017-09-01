import { 
  LOGIN
} from '../action-types';

const init = {
	isLoggedIn: false
}

export default function (state=init, action) {
  const isLoggedIn = state.isLoggedIn;

  switch(action.type) {
    case LOGIN:
	
	  return {
        isLoggedIn
      };
    default:
      return state;
  }
}