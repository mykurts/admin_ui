import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects'
import actionCreators from "../../redux/actions/accountActions";
import {ERROR_TYPE, RESPONSE_TYPE, URL_RESQUEST} from "../../utilities/constant";
import * as Api from "../../utilities/api";
import { HandleResponse } from "../../utilities/accountFunctions";
import history from "../../utilities/history";


function* userSignOut(action){
  try{

    yield call(function() {
      return Api.signOutUser(URL_RESQUEST.SIGNOUT_USER);
    });
  
    localStorage.removeItem("is_login");
    yield put({ type: actionCreators.resetactions.index.logoutSuccess, payload: {is_login: false, request_msg: {msg: "Successfully Logout!", type: ERROR_TYPE.SUCCESS}} }); 
    history.push("/");

  }catch(e){
    yield put({ type: actionCreators.resetactions.index.logoutError, payload: { request_msg: {msg: e.message, type: ERROR_TYPE.FAILD}} });        
  }

}

function* sigInUser(action){

    try {
      
      const data = yield call(function() {
          return Api.SignInUser(action, URL_RESQUEST.USER_SIGNIN);
      });  
      let action_type, action_status;
      let message = ""; 
      let is_login = false;
      if(data.status != 200){
        message = data.custom_message.content
      }
      [action_type, action_status] =  HandleResponse(data, actionCreators.usersignin.index.signinError, actionCreators.usersignin.index.signinSuccess);
      is_login = action_status == ERROR_TYPE.FAILD ? false : true;

      yield put({ type: action_type, payload: { is_login: is_login, request_msg: {msg: message, type: action_status} } });        
      if(is_login){
        localStorage.setItem("is_login", is_login);  
        history.push('/dashboard');
      }
    }catch(e) {
     yield put({ type: actionCreators.usersignin.index.signinError, payload: {request_msg: {msg: e.message, type: ERROR_TYPE.FAILD} } });        
   }
}

export function* userSignIn(){

  yield takeLatest(
      actionCreators.usersignin.index.signin,
      sigInUser
    )
}

export function* userLogOut(){
  yield takeEvery(
      actionCreators.resetactions.index.logout,
      userSignOut
    );
}
