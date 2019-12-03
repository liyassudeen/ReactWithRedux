import React from 'react';
import { connect } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import { isAuth } from "./action"


class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAuthenticated: false}
  }

  googleResponse = (e) => {
    this.props.isAuth(e);
  };

  render() {
    let content = !!this.props.isAuthenticated ? 
    (
      <div>Authenticated</div>
    ) :
    (
      <div>
        <GoogleLogin
            clientId="440546925968-rq6hk1ghgr076jatrka82mb7tvnctbgr.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={(e) => this.googleResponse(e)}
            onFailure={(e) => this.googleResponse(e)}
        />
      </div>
    )
    return(
      <div>
          {content}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isAuth: e => dispatch(isAuth(e)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);