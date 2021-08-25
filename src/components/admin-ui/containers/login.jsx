import '../../../assets/application_setup/css/login_application.scss';
import Logo from "../../../assets/images/logo.png"
function Login() {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="login login-3 wizard d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="login-aside d-flex flex-column">
          <img className="mb-5" style={{height: 125}} alt="" src={{Logo}}/>
          <h1 style={{fontSize: 100}}>
            OPENGOV <br/>CITY
            </h1>
          <h3>OpenGov</h3>
        </div>

        <div className="login-content flex-row-fluid d-flex flex-column p-10">
          <div className="d-flex flex-row-fluid flex-center">
              <div className="login-form">
                <form className="form" id="kt_login_singin_form" action="/admin/login" acceptCharset="UTF-8" method="post">
                  <input type="hidden" name="authenticity_token" value="paSALdz65puyw9X05nu3ldoF55TFc8vpqEnVTuUXGKX+/zqKO4THIxzYgWjchP4T2UBBybpNo0697v0ZwT8ZCQ=="/>
                  <div className="pb-5 pb-lg-15">
                    <h3 className="font-weight-boldest text-dark font-size-h2 font-size-h1-lg text-center">Welcome to OpenGov Admin</h3>
                  </div>
                  <div className="form-group">
                    <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
                    <input autoFocus="autofocus" autoComplete="off" className="form-control h-auto py-7 px-6 rounded-lg border-0 font-weight-bolder" type="email" value="" name="account[email]" id="account_email"/>
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between mt-n5">
                      <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                    </div>
                    <input autoComplete="off" className="form-control h-auto py-7 px-6 rounded-lg border-0 font-weight-bolder" type="password" name="account[password]" id="account_password"/>
                  </div>
                  <div className="pb-lg-0 pb-5">
                    <input type="submit" name="commit" value="Sign In" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3" data-disable-with="Sign In"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
