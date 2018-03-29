/**
 * @class Login
 */

import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    dismissKeyboard,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";

import React, {Component} from "react";
import * as firebase from "firebase";
import Button from "apsl-react-native-button";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Sae} from "react-native-textinput-effects";
import DismissKeyboard from "dismissKeyboard";
import Logo from '../components/logo';

import CommonStyle from "../styles/common.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    async signup() {

        DismissKeyboard();

        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "account created"
            });

            setTimeout(() => {
                this.props.navigator.push({
                    name: "Home"
                })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    async login() {

        DismissKeyboard();

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "Logged In!"
            });

            setTimeout(() => {
                this.props.navigator.push({
                    name: "Home"
                })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <View style={styles.container}>
                    <Logo />
                    <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              
              onChangeText={(email) => this.setState({email})}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              
              onChangeText={(password) => this.setState({password})}
              />  
           <TouchableOpacity style={styles.button}>
             <Text onPress={this.signup} style={styles.buttonText}>SignUp</Text>
           </TouchableOpacity> 
           <TouchableOpacity style={styles.button}>
             <Text onPress={this.login} style={styles.buttonText}>Login</Text>
           </TouchableOpacity>     
                    
                    <View>
                        <Text style={styles.response}>{this.state.response}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({

    formGroup: {
        padding: 50
    },
    container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },

    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.8,
    },

    submit: {
        paddingTop: 30
    },

    response: {
        textAlign: "center",
        paddingTop: 0,
        padding: 50
    }
});

module.exports = Login;
