import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';


//type Props = {};
export class LoginScreen extends Component {
  constructor(Props){
    super(Props);
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.logIn = this.logIn.bind(this)
    this.state={
      username: "",
      password: ""
    }
  }

  setUsername(text){
    this.setState({
      ...this.state,
       username:text
    })
  }

  setPassword(text){
    this.setState({
    ...this.state,
    password:text
    })
  }

  logIn(text){
    if (this.state.username == this.state.password){
      this.setUsername("batata")
    }
  }

  render() {
    return (
      <View flex paddingH-25 paddingT-120>
        <Text blue30 text30>Acessar Ecompen</Text>
        <TextInput text50 placeholder="usuário" dark10
          onChangeText={this.setUsername}
          value={this.state.username}
        />
        <TextInput text50 placeholder="senha" secureTextEntry dark10
          onChangeText={this.setPassword}
          value={this.state.password}
        />
        <View marginT-100 center>
          <Button text70 white background-blue20 label="Login"
            onPress={this.logIn}
          />
        </View>
      </View>
    );
  }
}
