/**
 * @class Home
 */

import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";

import Button from "apsl-react-native-button";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Hideo} from "react-native-textinput-effects";

import CommonStyle from "../styles/common.css";
// import Database from "../firebase/database";
import DismissKeyboard from "dismissKeyboard";
import firebase from 'firebase'
// import Swiper from 'react-native-swiper';
import Slider from '../components/slider';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            mobile: "",
            mobileForm: ""
        };

        this.logout = this.logout.bind(this);
        // this.saveMobile = this.saveMobile.bind(this);

    }

    async logout() {
        // Database.setUserMobile(this.state.uid, this.state.mobileForm);

        try {

            await firebase.auth().signOut();

            this.props.navigator.push({
                name: "Login"
            })

        } catch (error) {
            console.log(error);
        }

    }

    async componentDidMount() {

        try {

            // Get User Credentials
            let user = await firebase.auth().currentUser;


            this.setState({
                uid: user.uid
            });

        } catch (error) {
            console.log(error);
        }

    }

    

    render() {

        return (
                
                <View style={styles.container}>
                    <Slider/>
                    <TouchableOpacity style={styles.button}>
                    <Text onPress={this.logout} style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity> 
                    
                </View>
            
        );
    }
}

const styles = StyleSheet.create({

    heading: {
        textAlign: "center"
    },
    container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
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

    logout: {
        padding: 50
    },

    form: {
        paddingTop: 50
    },
    wrapper: {
  }


});

module.exports = Home;
