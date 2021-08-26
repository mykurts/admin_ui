import {ERROR_TYPE, RESPONSE_TYPE, URL_RESQUEST} from "./constant";


export function HandleResponse(data, actionCreatorError, actionCreatorSuccess){
	let action_type =  actionCreatorSuccess;
  let action_status = ERROR_TYPE.SUCCESS;

  if(data.status && data.status != RESPONSE_TYPE.SUCCESS){
    action_type = actionCreatorError;
    action_status = ERROR_TYPE.FAILD;
  }

	return [action_type, action_status];
}