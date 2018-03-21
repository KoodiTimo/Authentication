import React, { Component } from 'react';
import { View } from 'react-native';
// Authentication
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCBTmu1asp8WVLgqETfQmiN80Km3Xa8Apg',
        authDomain: 'authentication-d9046.firebaseapp.com',
        databaseURL: 'https://authentication-d9046.firebaseio.com',
        projectId: 'authentication-d9046',
        storageBucket: 'authentication-d9046.appspot.com',
        messagingSenderId: '284552695214'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      <CardSection>
      <Button>
      Log out
      </Button>
      </CardSection>
      case false:
      return <LoginForm />;
      default:
      return (
      <CardSection>
      <Spinner size="large" />
      </CardSection>
    )
    }
  }



  render () {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
