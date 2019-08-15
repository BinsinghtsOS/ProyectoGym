import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Picker
} from 'react-native';
const DismissKeyBoard= ({children})=>(
  <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class newSeries extends Component {
  state = {datepickerValue: 'Repeticion',
          }

  valueOption() {
          switch(this.state.datepickerValue) {
          case 'Repeticion':
            return ('Cantidad')
          case 'Tiempo':
            return ('Minutos')
       }
     } 
       valueSubOption() {
        switch(this.state.datepickerValue) {
        case 'Repeticion':
          return ('#')
        case 'Tiempo':
          return ('min')
     }
     }     
  handlePress = () =>{
     this.props.navigation.navigate('Home')
     Alert.alert('Floating Button Clicked');
     
  }
  updateDatePicker = (datepickerValue) => {
    this.setState({ datepickerValue: datepickerValue })     
 }
  render() {
    return (
      <DismissKeyBoard>
    <View style={styles.container}>
        <View style={styles.conhead}>
            <Text style={styles.tittle}>
            Nueva Serie
            </Text>  
            <View style={styles.SectionStyle}>
             <Text>Ejercicio </Text>
            <TextInput

              style={styles.text3}
              placeholder="Nombre Ejercicio "
              underlineColorAndroid="transparent"
            />
            </View>
            <View style={styles.SectionStyle}>
             <Text>Peso</Text>
            <TextInput

              style={styles.text3}
              placeholder="Kg"
              underlineColorAndroid="transparent"
            />
            </View>
            <View style={styles.SectionStyle}>
             <Text style={{textAlign:'left'}}>Objetivo</Text>
            <View style={styles.selectorr}>
                  <Picker
                  style={{ width: 128,color: '#aeabab',}} selectedValue={this.state.datepickerValue} onValueChange={this.updateDatePicker}
                   >
                    <Picker.Item label="Repeticion" value="Repeticion" />
                    <Picker.Item label="Tiempo" value="Tiempo"/>
                    </Picker>
            </View>
            </View>
            <View style={styles.container2} > 
            <Text style={styles.tittle}>
            {this.state.datepickerValue}
            </Text>  
            </View>

            <View style={styles.SectionStyle}>
             <Text > {this.valueOption()}</Text>
            <TextInput

              style={styles.text3}
              placeholder= {this.valueSubOption()}
              underlineColorAndroid="transparent"
            />
            </View>
        </View>
            <View  style={styles.container3} >
            <TouchableOpacity 
            style={styles.fab2}
            activeOpacity={0.7}
            
          >    
         <Text style={styles.text}>Aceptar </Text>
          </TouchableOpacity>  
              
            </View>
           
    </View>
    </DismissKeyBoard>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        paddingTop:35,
        flex: 1,
        padding: 20,
      },
      container2: {
        paddingTop:35,   
        flexDirection: 'row',
        //alignItems: 'center',
       // justifyContent: 'center',
      },
      container3: {
        
        alignItems: 'center',
        top:'30%'
        
      },
        fab2:{
        borderRadius: 200,  
        height: 40,
        width: 130,
       // position: 'absolute',
       //// bottom: 30,
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
    selectorr:{
      color: '#aeabab',
       flex: 1, 
      marginLeft:"50%",
    }
  })

export default newSeries;
