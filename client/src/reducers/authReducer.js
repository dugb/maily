import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			//this next line is a little tricky.  If not logged on then the server returns an empty string like "" js evaluates an emtpy string as false. so ("" || false) will return false since (false||false) is false.  and we want to return false if no user is logged in.
			return action.payload || false;
		default:
			return state;
	}
}
