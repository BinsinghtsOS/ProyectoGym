import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native';
class Loggin extends Component {
  handlePress = () =>{
     this.props.navigation.navigate('Home')
  }
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.top} >
             <Image
                source={require('../../img/logo1.png')}
                 style={styles.logo}
              />
        </View>
             <View style={styles.center}>
                 <Text style={styles.title}>Usuario</Text>
                     <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Correo "
                        placeholderTextColor = "#767676"
                        autoCapitalize = "none"
                      />
                    <Text style={styles.title}>Contraseña</Text>
                        <TextInput style = {styles.input}
                         underlineColorAndroid = "transparent"
                        placeholder = "Contraseña "
                        placeholderTextColor = "#767676"
                        autoCapitalize = "none"
                        secureTextEntry
                    />
                </View>
             <View style={styles.center2}>
            <View style={styles.sepa}></View>
            <View>
            <Text style={styles.title2}>OR</Text>
            </View>

            <View style={styles.sepa}></View>
         </View>
        <View style={styles.footer}>
         <View style={styles.bott}>
         <Button    
            onPress={this.handlePress}
            title="Facebook"
            color="#3b5998"
            accessibilityLabel="Learn more about this purple button"
        />
        </View>   
         <View style={styles.bott}>
         <Button
            onPress={this.handlePress}
            title="Google"
            color="#db4a39"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>   
        </View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
    text:{
        color:'white'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 80,

      },
      title:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:17,
        color: '#0197F6',
        fontWeight: 'bold',
      },
      logo: {
        height: 150,
        resizeMode: 'contain',
      },
      top:{
          paddingBottom:30,
          
      },
      input: {
        margin: 1,
        height: 40,
        width:270,
        borderColor: '#0197F6',
        borderWidth: 1,
        
     },
     center:{
        paddingBottom:50,
     },
     sepa:{
        borderColor: 'black',
        borderWidth: 1,
        width:110,
        height:1,
     },
     center2:{
        flexDirection: 'row',
        paddingBottom:20,
        justifyContent:'center',
        alignItems:'center',

     
     },
     title2:{
        paddingLeft:10,
        paddingRight:10,
        fontSize:17,
        color: 'black',
        fontWeight: 'bold',
        
      },
      footer:{
        flexDirection: 'row',
        paddingBottom:10, 
     },
     bott:{
         paddingHorizontal:20,
         width:150,
     },
  })

export default Loggin;
