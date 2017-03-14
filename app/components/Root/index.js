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

class Root extends Component {
  constructor() {
    super();

    this.state = {
      email: "email",
      password: "password",
      error: ""
    }

    this._setEmail = this._setEmail.bind(this);
    this._setPassword = this._setPassword.bind(this);
    this._handleError = this._handleError.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
    this._authenticate = this._authenticate.bind(this);
  }

  _setEmail(evt) {
    this.setState({
      email: evt.target.value
    })
  }

  _setPassword(evt) {
    this.setState({
      password: evt.target.value
    })
  }

  _handleError(error) {
    this.setState({
      error: error
    })
  }

  _handleLogin() {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
    .then(response => this._authenticate())
    .catch(error => this._handleError(error.message));
  }

  _handleSignup() {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
    .then(response => this._authenticate())
    .catch(error => this._handleError(error.message));
  }

  _handleLogout() {
    firebase.auth().signOut();
  }

  _authenticate() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log('logged in as:', firebaseUser.email);
      } else {
        console.log('not logged in');
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div><input onChange={this._setEmail} id="loginEmail" type="email" placeholder="Email"/></div>
        <div><input onChange={this._setPassword} id="loginPassword" type="password" placeholder="Password"/></div>
        <div><button onClick={this._handleLogin} id="loginLogin">Log In</button></div>
        <div><button onClick={this._handleSignup} id="loginSignup">Sign Up</button></div>
        <div><button onClick={this._handleLogout} id="loginLogout">Log Out</button></div>
        <div>{this.state.error}</div>
      </div>
    )
  }
};

export default Root;
