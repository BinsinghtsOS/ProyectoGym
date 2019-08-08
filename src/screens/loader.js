import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
class Loader extends Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      this.props.navigation.navigate('Loggin');
    }, 2000);
  }
   render() {
    return (
      <View style={styles.container}>
      <SafeAreaView>
        <View >
          <Image
            source={require('../../img/logo1.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  logo: {
    height: 200,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 190,

  },
})
export default Loader;
