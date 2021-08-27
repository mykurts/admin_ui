const port = ":4000";
const host = "http://localhost"

const base_api_url = `${host}${port}/api/v1`;

export const ERROR_TYPE = {
	SUCCESS: "success",
	FAILD: "error"
}

export const RESPONSE_TYPE = {
	SUCCESS: 200,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401
}

export const URL_RESQUEST = {
	USER_SIGNIN: base_api_url + "/admin/login",
	SIGNOUT_USER: base_api_url + "/admin/logout"
}
