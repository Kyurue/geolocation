import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 52.290700,
          longitude: 5.615620,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker
      coordinate={{latitude: 52.290700,
          longitude: 5.615620,}}
      title={"marker.title"}
      description={"desss"}
    />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
