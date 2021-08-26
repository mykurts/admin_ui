import actionCreators from "../actions/accountActions";
import { handleActions } from 'redux-actions';

const initState = {
  current_user: null,
  request_msg: {
    msg: null,
    type: null
  }

};

export default handleActions(
   {
      [actionCreators.usersignin.index.signinError]: (state, action) => (
        Object.assign(
          {},
          state,
          action.payload
        )
      ),
      [actionCreators.usersignin.index.signinSuccess]: (state, action) => (
        Object.assign(
          {},
          state,
          action.payload
        )
      ),
	},
  initState
);


