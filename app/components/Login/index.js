import React, { Component } from 'react';

import CONFIG from 'Config/firebase';
import * as firebase from 'firebase';

import { connect } from 'react-redux';
import { userLogin } from 'Ducks/login';

//  Initialize Firebase
firebase.initializeApp(CONFIG);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      formEmail: "email",
      formPassword: "password",
      error: ""
    }

    this._setEmail = this._setEmail.bind(this);
    this._setPassword = this._setPassword.bind(this);
    this._handleError = this._handleError.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        this.setState({ loggedIn: true });
        console.log('you are logged in as:', firebaseUser);
        this._handleError('');
      } else {
        this.setState({ loggedIn: false });
        console.log('you are not logged in');
      }
    });
  }

  _setEmail(evt) {
    this.setState({ formEmail: evt.target.value })
  }

  _setPassword(evt) {
    this.setState({ formPassword: evt.target.value })
  }

  _handleError(code, message) {
    console.log('error code: ', code);
    switch(code) {
      case 'auth/invalid-email':
        console.log('handle wrong email');
        break;
      case 'auth/wrong-password':
        console.log('handle wrong password');
        break;
      case 'auth/user-not-found':
        console.log('handle no user');
        break;
    }
    this.setState({ error: message })
  }

  _handleLogin() {

    this.props.dispatch(
      userLogin(
        this.state.formEmail,
        this.state.formPassword
      )
    );

    firebase.auth().signInWithEmailAndPassword(
      this.state.formEmail,
      this.state.formPassword
    )
    .then(resolve => console.log('resolve', resolve))
    .catch(error => this._handleError(error.code, error.message));
  }

  _handleLogout() {
    firebase.auth().signOut();
  }

  _handleSignup() {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.formEmail,
      this.state.formPassword
    )
    .catch(error => this._handleError(error.code, error.message));
  }

  render() {

    //const { dispatch } = this.props;

    return (
      <form autoComplete="on">
        <div><input onChange={this._setEmail} id="loginEmail" type="email" placeholder="Email"/></div>
        <div><input onChange={this._setPassword} id="loginPassword" type="password" placeholder="Password"/></div>
        {
          this.state.loggedIn ? (
            <div>
              <button onClick={this._handleLogout} id="loginLogout" type="button">Log Out</button>
            </div>
          ) : (
            <div>
              <button onClick={this._handleLogin} id="loginLogin" type="button">Log In</button>
              <button onClick={this._handleSignup} id="loginSignup" type="button">Sign Up</button>
            </div>
          )
        }
        <div>{this.state.error}</div>
      </form>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Login);
