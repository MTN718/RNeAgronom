
import
{
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({  
  bg:{
  	backgroundColor:'#fff',
    alignItems:'center'
  },
  logoImg:{
      marginTop:70,
      width:150,
      height:30
  },
  fullScreen:{
      width:'100%',
      height:'100%'
  },
  fullWidth:{
    width:'100%',
  },
  inputBox:{
      marginTop:5,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:5,
      paddingRight:5,
      borderWidth:1,
      borderColor:'#d0d0d0',
      borderRadius:5
  },
  inputContainer:{
      marginLeft:20,
      marginRight:20
  },
  btnPrimary:{
      backgroundColor:'#37a447',
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5
  },
  btnText:{
    color:'#fff',
    textAlign:'center'
  }
});

export default {
    styles
};
