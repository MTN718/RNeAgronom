import React, { Component } from 'react';
import {KeyboardAvoidingView,TouchableOpacity,StyleSheet, Text, View,Image,TextInput} from 'react-native';
import Styles  from '../common/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import NetInfo from "@react-native-community/netinfo";


const { styles } = Styles;

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userPw: '',
      userEmail: '',
      isShowPassword:false
    }
  }

  componentDidMount()
  {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable) {
        showMessage({
          message: "You're online",
          type: "success",
          icon:"none"
        });
      } else {
        showMessage({
          message: "You're offline",
          type: "default"
        });
      }
    })
  }

  actionShowPassword()
  {
    this.setState({isShowPassword:!this.state.isShowPassword});
  }
  actionLogin()
  {
    this.setState({userEmail:'',userPw:''});
    
  }

  render = () => (
    <View style={[styles.bg,styles.fullScreen]}>
        <Image source={require('../../assets/eagronom.png')} style={[styles.logoImg]} resizeMode="stretch"/>
        <View style={[styles.fullWidth]}>
          <View style={[styles.inputContainer,{marginTop:20}]}>
            <Text>Email or username</Text>
            <TextInput style={[styles.inputBox]} placeholder="Enter your email" value={this.state.userEmail} keyboardType={"email-address"} onChangeText={(text) => this.setState({userEmail:text})}></TextInput>
          </View>

          <View style={[styles.inputContainer,{marginTop:10}]}>
            <Text>Password</Text>
            <View style={[styles.inputBox,{flexDirection:'row'}]}>
              <TextInput 
                style={{flex:1}}
                placeholder="Enter your password" 
                value={this.state.userPw} 
                secureTextEntry={!this.state.isShowPassword}
                onChangeText={(text) => this.setState({userPw:text})}>  
              </TextInput>
              <TouchableOpacity onPress={()=> this.actionShowPassword()}>
                {
                  this.state.isShowPassword ? 
                    <Icon name="visibility-off" size={20} color="#646468" />
                  :
                    <Icon name="visibility" size={20} color="#646468"/>
                }
                
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={[styles.inputContainer,{marginTop:20}]} onPress={()=> this.actionLogin()}>
              <View style={[styles.btnPrimary]}>
                <Text style={styles.btnText} >Log in</Text>
              </View>
          </TouchableOpacity>
        </View>
        <FlashMessage 
          ref="myLocalFlashMessage" 
          hideStatusBar={true} 
          position="top" 
          duration={5000} 
          titleStyle={{textAlign:'center'}}
          icon={{ icon: "info", position: "right" }}/>
    </View>
  )

}

export default LoginScreen;
