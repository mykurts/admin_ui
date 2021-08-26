import { createActions } from 'redux-actions';

export default createActions({
    USERSIGNIN:{
      INDEX:{
        SIGNIN: data => ({data}),
        SIGNIN_ERROR: data => ({data}),
        SIGNIN_SUCCESS: data => ({data})
      }
    }

  });
  