import React, {Component} from "react";
import history from "../../utilities/history";
import { connect } from "react-redux";
import createActions from '../../redux/actions/accountActions';
import { Link } from "react-router-dom";

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.is_login == false){
      history.push("/");
    }
  }

  handleClickLogout=(evt)=>{
    evt.preventDefault();
    this.props.signOut();
  }

  render() {
 
    return (
      <div className="d-flex flex-column flex-root">
        <center className="mt-10">
          <h1>Hello Welcome to Dashboard</h1>
          <Link to="#"><span style={{fontSize: 20}}onClick={this.handleClickLogout}>Logout here</span></Link>
          
        </center>
        
      </div>
    );
  }
  
}

const mapStateToProps= state =>{
  return{
      is_login: state.account.is_login,
      update_msg: state.account.request_msg,
      
  }
}

const mapDispatchToProps= dispatch =>{
  return{
      signOut: data => dispatch(createActions.resetactions.index.logout(data))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
