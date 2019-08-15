import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Picker
} from 'react-native';
const DismissKeyBoard= ({children})=>(
  <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
class newSet extends Component {
  state = {datepickerValue: 'Calentamiento',
}
  handlePress = () =>{
     this.props.navigation.navigate('newSeries')
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
            Nuevo Set
            </Text>  
            <View style={styles.SectionStyle}>
             <Text>Nombre </Text>
            <TextInput

              style={styles.text3}
              placeholder="Nombre "
              underlineColorAndroid="transparent"
            />
            </View>
            <View style={styles.SectionStyle}>
             <Text>Repeticiones</Text>
            <TextInput

              style={styles.text3}
              placeholder="#Rep "
              underlineColorAndroid="transparent"
            />
            </View>
            <View style={styles.SectionStyle}>
             <Text style={{textAlign:'left'}}>Etiqueta</Text>
            <View style={styles.selectorr}>
                  <Picker
                  style={{ width: 150,color: '#aeabab',}} selectedValue={this.state.datepickerValue} onValueChange={this.updateDatePicker}
                   >
                    <Picker.Item label="Calentamiento" value="Calentamiento" />
                    <Picker.Item label="Intermedio" value="Intermedio" />
                    <Picker.Item label="Estiramiento" value="Estiramiento"/>
                    </Picker>
            </View>
            </View>
        </View>

        <View style={styles.containerr} >
        <Text style={styles.tittle2}>
           Series
        </Text>
        <View style={styles.SectionStyle}>
             <Text>Ejercicio 1</Text>
             <Text style={styles.text3} > 40 kg - 10 rpts  </Text>
            </View>
       
        </View>
        <View  style={styles.container3} >
                <TouchableOpacity 
                onPress={this.handlePress}
                    style={styles.fab}
                    activeOpacity={0.7}
                  >    
                <Text style={styles.text2}>+SERIE</Text>
          </TouchableOpacity>
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
       // alignItems: 'center',
       // justifyContent: 'center',
      },
      container3: {
        alignItems: 'center',
        top:'20%' 
      },
      selectorr:{
        color: '#aeabab',
         flex: 1, 
        marginLeft:"40%",
      },
      
      fab:{
        height: 30,
        width: 80,
        borderRadius: 200,
       // position: 'absolute',
        top : "40%",
        left: "35%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3CDABF',
      },fab2:{
        borderRadius: 200,  
        height: 40,
        width: 130,
       // position: 'absolute',
        top: "45%",
       // left: 110,
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

export default newSet;
