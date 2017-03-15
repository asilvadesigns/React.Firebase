import React, { Component } from 'react';
import * as firebase from 'firebase';

//  Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBsh_o7KATURdBa3cEOVEnGP_XYuoJR39k",
  authDomain: "react-firebase-126c1.firebaseapp.com",
  databaseURL: "https://react-firebase-126c1.firebaseio.com",
  storageBucket: "react-firebase-126c1.appspot.com",
  messagingSenderId: "358399071715"
});

class Login extends Component {
  constructor() {
    super();

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
    firebase.auth().signInWithEmailAndPassword(
      this.state.formEmail,
      this.state.formPassword
    )
    .then(resolve => console.log(resolve))
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
    return (
      <form autoComplete="on">
        <h3>Login</h3>
        <div><input onChange={this._setEmail} id="loginEmail" type="email" placeholder="Email"/></div>
        <div><input onChange={this._setPassword} id="loginPassword" type="password" placeholder="Password"/></div>
        {
          this.state.loggedIn ? (
            <div>
              <button type="button" onClick={this._handleLogout} id="loginLogout">Log Out</button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={this._handleLogin} id="loginLogin">Log In</button>
              <button type="button" onClick={this._handleSignup} id="loginSignup">Sign Up</button>
            </div>
          )
        }
        <div>{this.state.error}</div>
      </form>
    )
  }
};

export default Login;

