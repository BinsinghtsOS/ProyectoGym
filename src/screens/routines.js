import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ajax from '../../service/FetchData';

class Routines extends Component {
 
  state = {
    routines: [],
  }
  async componentDidMount() {
    const routines = await ajax.fetchRoutines();
    this.setState({routines});
  }

  

  handlePress = () =>{
    this.props.navigation.navigate('newRoutines')
 }

  render() {
    console.log(this.state)
    return (
    <View style={styles.container}>
        <View style={styles.conhead}>
            <Text style={styles.tittle}>
            Mis Rutinas 
            </Text>  
              
           <View style={styles.SectionStyle}>
             <Image
               source={require('../../img/sr.png')}
                style={styles.ImageStyle}
              />
            <TextInput
             style={{ flex: 1 }}
              placeholder="Search"
              underlineColorAndroid="transparent"
            />
            </View>
        </View>

        <FlatList
          data={this.state.routines}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) => <View style={{paddingTop:10}}>
                                  <View style={styles.containerr}>
                                  <Text style={styles.tittle2}>
                                  {item.nameRoutine}                                
                                  </Text>
                                    <FlatList
                                      data={item.seto}
                                       showsVerticalScrollIndicator={false}
                                      renderItem={({item,index}) => 
                                        <Text style={styles.item}>{item.typeSet}</Text>
                                        
                                         }
                                          keyExtractor={(item, index) => index.toString()}
                                         />     
                                    </View>
                                  </View>
                                }
                                keyExtractor={(item, index) => index.toString()}
           />
          <TouchableOpacity 
            style={styles.fab}
            activeOpacity={0.7}
            onPress={this.handlePress}
          >    
         <Text style={styles.text}>+</Text>
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
      flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
      },

    containerr: {
        padding: 15,
         borderRadius: 4,
        backgroundColor:'#41B5E6',
       // alignItems: 'center',
       // justifyContent: 'center',
      },
      conhead:{
        paddingBottom:25
      },
        fab:{
        height: 50,
        width: 50,
        borderRadius: 200,
        position: 'absolute',
        bottom: 30,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3CDABF',
      },
      text:{
        fontSize:30,
        color:'white'
      },
      tittle:{
          fontSize:38,
          fontWeight:'bold',
         paddingBottom:10, 
      },
      tittle2:{
        color:'white',
        fontSize:28,
        fontWeight:'bold',
       paddingBottom:3, 
    },
    item: {
      padding:3,
      paddingLeft:20,
      fontSize: 18,
      color:'white'
      
    },
      SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#eaeaea',
        height: 40,
        borderRadius: 5,
        fontSize: 15,
      },
     
      ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },


  })

export default Routines;
