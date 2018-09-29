import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib';

export class WelcomeScreen extends React.Component {
    render() {
        return (
        <View flex paddingH-25 paddingT-80>
            <Text blue20 text20>Ecompen v0.1</Text>
            <View style={{flexDirection: 'row'}}>
            <Text blue40 text15>Build With</Text>
            <Text blue30 text15 marginH-5>&lt;3</Text>
            </View>
            <Text blue40 text15>Marcelo &amp; Pedroke</Text>
            <View marginT-100 center>
            <Button text50 white background-blue40 label="Acessar"
                onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button text50 white background-blue20 marginT-25 label="Cadastrar"
                onPress={() => this.props.navigation.navigate('Register')}
            />
            {/* <Button text50 white background-blue10 marginT-25 label="Ver Status"
                onPress={() => this.props.navigation.navigate('Status')}
                />
            </View> */}
        </View>
        );
    }
}