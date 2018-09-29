import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';


//type Props = {};
export class RegisterScreen extends Component {
  constructor(Props){
    super(Props);
    this.setUsername = this.setUsername.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setPasswordConfirmation = this.setPasswordConfirmation.bind(this)
    this.register = this.register.bind(this)
    this.state={
      error: null,
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  setUsername(text){
    this.setState({
      ...this.state,
       username:text
    })
  }

  setEmail(text){
    this.setState({
      ...this.state,
       email:text
    })
  }

  setPassword(text){
    this.setState({
    ...this.state,
    password:text
    })
  }

  setPasswordConfirmation(text){
    this.setState({
      ...this.state,
       passwordConfirmation:text
    })
  }

  register(text){
    fetch("http://192.168.0.35:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      })
    })
    .then(response => response.json())
    .then(response => {
      if (!response.error) {
        // deu boa
        this.setState({
          ...this.state,
          error: null,
        })
      } else {
        this.setState({
          ...this.state,
          error: response.message
        })
      }
    })
    .catch(error => this.setState({
      ...this.state,
      error: error.message
    }))
  }

  render() {
    return (
      <View flex paddingH-25 paddingT-80>
        <Text blue30 text30>Registrar</Text>
          <View flex paddingT-15>
            <TextInput text50 placeholder="usuário" dark10
              onChangeText={this.setUsername}
              value={this.state.username}
            />
            <TextInput text50 placeholder="email" dark10
              onChangeText={this.setEmail}
              value={this.state.email}
            />
            <TextInput text50 placeholder="senha" secureTextEntry dark10
              onChangeText={this.setPassword}
              value={this.state.password}
            />
            <TextInput text50 placeholder="confirmação de senha" secureTextEntry dark10
              onChangeText={this.setPasswordConfirmation}
              value={this.state.passwordConfirmation}
            />  
            <View marginT-50 center>
            {this.state.error ? <Text style={{color:"red"}}>{this.state.error}</Text>:null}
              <Button text70 white background-blue20 label="Cadastrar"
                onPress={this.register}
              />
          </View>
        </View>
      </View>
    );
  }
}
