import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';


class Loader extends Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1500
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
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
