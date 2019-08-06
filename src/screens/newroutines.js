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

class newRoutines extends Component {
  handlePress = () =>{
     this.props.navigation.navigate('newSet')
  }



  render() {
    return (
    <View style={styles.container}>
        <View style={styles.conhead}>
            <Text style={styles.tittle}>
            Nueva Rutina
            </Text>  
            <View style={styles.SectionStyle}>
             <Text>Nombre </Text>
            <TextInput

              style={styles.text3}
              placeholder="Nombre "
              underlineColorAndroid="transparent"
            />
            </View>
        </View>

        <View style={styles.containerr} >
        <Text style={styles.tittle2}>
            Calentamiento
        </Text>
        <View style={styles.SectionStyle2}>
        <Text style={{ paddingLeft:25, }} >
            Circuito 1 
        </Text>
        <Text style={styles.text3} > 3 Rept  </Text>
        </View>
        <View style={styles.SectionStyle2}>
        <Text  style={{ paddingLeft:50, }} >
            Ejercicio 1 
        </Text>
        <Text style={styles.text3} > 40 kg - 10 rpts  </Text>
        </View>
        <View style={styles.SectionStyle2}>
        <Text style={{ paddingLeft:50, }} >
            Ejercicio 2 
        </Text>
        <Text style={styles.text3} > 40 kg - 10 rpts  </Text>
        
        </View>
        </View>
        
        <TouchableOpacity 
            style={styles.fab}
            activeOpacity={0.7}
            onPress={this.handlePress}
          >    
         <Text style={styles.text2}>+SET</Text>
          </TouchableOpacity>

      

        
        <TouchableOpacity 
            style={styles.fab2}
            activeOpacity={0.7}
          >    
         <Text style={styles.text}>Aceptar </Text>
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
       // alignItems: 'center',
       // justifyContent: 'center',
      },
      
      fab:{
        height: 30,
        width: 80,
        borderRadius: 200,
        position: 'absolute',
       bottom : 90,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3CDABF',
      },fab2:{
        borderRadius: 200,  
        height: 40,
        width: 130,
        position: 'absolute',
        bottom: 30,
        left: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3CDABF',
      },

      text2:{
        fontSize:16,
        color:'white'
      },
      text:{
        fontSize:25,
        color:'white'
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

export default newRoutines;
