import React, {Component} from 'react';
import {View, Text, Button, Typography} from 'react-native-ui-lib';


//type Props = {};
 export class StatusScreen extends Component {
  constructor(Props){
    super(Props);
      this.changeDoorStatus = this.changeDoorStatus.bind(this);
      this.changeKeyHolder = this.changeKeyHolder.bind(this);
      this,this.returnKey = this.returnKey.bind(this);
      this.state={
        username: "Pedroke",
        door_is_open: true,
        key_holder: "Sede",
      }
    }

    returnKey(){
        this.setState({
            ...this.state,
            key_holder = "Secretaria"
        })
    }

    catchKey(){
        this.setState({
            ...this.state,
            key_holder = this.state.username
        })
    }

    changeDoorStatus(){
        if(key_holder == this.username){
            this.setState({
                ...this.state,
                door_is_open:!this.state.door_is_open
            })
            if(door_is_open)
                this.state.key_holder = "Sede"
            else
                this.state.key_holder = this.state.username 
        }
  }
  
  render() {
    return (
      <View flex paddingH-25 paddingT-20 style={ this.state.door_is_open ? style.closeDoorBackground : style.openDoorBackground } >
        <View style={{flexDirection: 'row'}}>
          <Text h4 blue50 >Usuário:</Text>
          <Text h4 blue40 marginH-20 >{this.state.username}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text h4 blue50 >Status Sede:</Text>
          <Text h4 blue40 marginH-20 >{this.state.door_is_open ? "Aberta" : "Fechada"}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text h4 blue50 >Chave: </Text>
          <Text h4 blue40 marginH-20 >{this.state.key_holder}</Text>
        </View>
          <Text h4 blue50 >{this.state.message}</Text>
          <View marginT-100 center>
          {(this.state.door_is_open || this.state.key_holder == this.state.username)?
            <Button text70 white background-blue20 label={this.state.door_is_open ? "Fechar Sede" : "Abrir Sede"}
                onPress={this.changeDoorStatus}
            />:null
          }
          {!this.state.door_is_open && this.state.key_holder == this.state.username?
              <Button text70 white background-blue20 label= "devolver chave" 
                onPress={this.returnKey}
              />:null
          }
          {!this.state.door_is_open && this.state.key_holder == "Secretaria"?
              <Button text70 white background-blue20 label = "pegar chave" 
                onPress={this.catchKey}
              />:null
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    closeDoorBackground: {
        backgroundCollor = '#ff350d'
    },
    openDoorBackground: {
        backgroundCollor = '#00000'//'#4fc6ff'
    }
})

Typography.loadTypographies({
  h4: {fontSize: 20, fontWeight: '200', lineHeight: 34},
  h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
});
