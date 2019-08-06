import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';

class Home extends Component {
  handlePress = () =>{
     this.props.navigation.navigate('Home')
     Alert.alert('Floating Button Clicked');
  }



  render() {
    return (
    <View style={styles.container}>
    <Text style={styles.text}>Hola Carlos,</Text>    
         <Text style={styles.text}>Logeaste con Tu red social</Text>  
        
        <TouchableOpacity 
            style={styles.fab2}
            activeOpacity={0.7}   >    
         <Text style={styles.text2}>Mis Rutinas </Text>
          </TouchableOpacity>
       


          
    </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        paddingTop:35,
        flex: 1,
        padding: 20,
        alignItems: 'center',
       // justifyContent: 'center',
      },

      fab2:{
        borderRadius: 200,  
        height: 40,
        width: 130,
        position: 'absolute',
        bottom: 150,
        left: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#41B5E6',
      },

      text2:{
        fontSize:16,
        color:'white'
      },
      text:{
        fontSize:25,
         color: '#0197F6',
      },
      text3:{
        flex: 1, 
        textAlign:'right',
        color: '#aeabab',
      },
      SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#eaeaea',
        borderBottomWidth:1,
        height: 40,
        borderRadius: 2,
        fontSize: 15,
        paddingLeft:5,
        paddingRight:5,
      },
      SectionStyle2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#eaeaea',
        borderBottomWidth:1,
        height: 40,
        borderRadius: 2,
        fontSize: 15,
        paddingLeft:5,
        paddingRight:5,
      },

      conhead:{
        paddingBottom:25
      },
        
      tittle:{
          fontSize:38,
          fontWeight:'bold',
         paddingBottom:10, 
      },

      tittle2:{
        color:'black',
        fontSize:28,
        fontWeight:'bold',
       paddingBottom:15, 
    },
    item: {
      padding:3,
      paddingLeft:20,
      fontSize: 18,
      color:'black'
      
    },


  })

export default Home;
