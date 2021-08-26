import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects'
import actionCreators from "../../redux/actions/accountActions";
import {ERROR_TYPE, RESPONSE_TYPE, URL_RESQUEST} from "../../utilities/constant";
import * as Api from "../../utilities/api";
import { HandleResponse } from "../../utilities/accountFunctions";



function* sigInUser(action){

    try {
      
      const data = yield call(function() {
          return Api.SignInUser(action, URL_RESQUEST.USER_SIGNIN);
      });       


    }catch (e) {
      yield put({ type: actionCreators.usersignin.index.resendError, payload: {request_msg: {msg: e.message, type: ERROR_TYPE.FAILD} } });        
    }
}

export function* userSignIn(){

  yield takeLatest(
      actionCreators.usersignin.index.signin,
      sigInUser
    )
}

