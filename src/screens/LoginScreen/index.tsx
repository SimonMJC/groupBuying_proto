import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin'


interface Props{

}

export default class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          pushData: [],
          loggedIn: false
        }
      }

    static navigationOptions = {
        header: null,
    };


 componentDidMount() {
    GoogleSignin.configure({
      webClientId: '880902530386-1i6bbms57fppirph5ba3jio90lu228pt.apps.googleusercontent.com', 
      offlineAccess: true, 
      hostedDomain: '', 
      forceConsentPrompt: true, 
    });
  }

  

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo, loggedIn: true });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated

      } else {
        // some other error happened

      }
    }
    this.props.navigation.replace('TabNavigator')

  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

    _doLogin(){
        // do something
        this.props.navigation.replace('TabNavigator')
    }

    createAccount(){
      // go create account page
      this.props.navigation.replace('CreateAccountScreen')
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Image style={{width:250, height:80}} source={require('../../img/alife.png')}/>
                    <Text style={styles.title}>Group Buying</Text>
                    
                </View>
                <View style={styles.formArea}>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"ID"}/>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"Password"}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this._doLogin.bind(this)}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonArea}>
                <GoogleSigninButton
              style={styles.g_button}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn.bind(this)}
              disabled={this.state.isSigninInProgress}
               />

               <View style={styles.buttonArea}>
                  <TouchableOpacity
                  onPress={this.createAccount.bind(this)}
                style={styles.sign_button}> 
                 <Text style={styles.sign_button_title}>회원가입</Text>
               </TouchableOpacity>
               </View>
              
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#46c3ad',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center'
    },
    titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center'
    },
    title: {
        color: "#ffffff",
        marginTop: 20,
        fontSize: wp('9%'),
        fontWeight:'bold'
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%')
    },
    textForm: {
        borderWidth: 0.5,
        backgroundColor:'white',
        borderColor: 'white',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%')
    },
    twosideArea:{
        width: '50%',
        height:  hp('5%')
    },
    button: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    g_button: {
        width: "100%",
        height: "110%",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    sign_button:{
        backgroundColor: '#46c3ad',
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'

    },
    sign_button_title:{
      color: 'white',
      // width: "100%",
      //   height: "100%",
      //   justifyContent: 'center',
      //   alignItems: 'center'
    },
    buttonTitle: {
        color: '#46c3ad'
    },
})