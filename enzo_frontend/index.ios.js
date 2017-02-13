/**
 * KOMPAS Challenge 
 * Enzo TESTA
 * February 2017
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, TouchableOpacity } from 'react-native';
import PlacesScreen from './Screens/PlacesScreen.js'
import UsersScreen from './Screens/UsersScreen.js'
import AddUser from './Screens/AddUser.js'

export default class enzo_frontend extends Component {


  render() {
    return (

      <Navigator 
        initialRoute={{ title:"Main"}} 
        renderScene={
          (route, navigator) => { 

            switch (route.title) {
              case "UsersScreen":
                return <UsersScreen navigator={navigator}/>;
              case "PlacesScreen":
                return <PlacesScreen navigator={navigator}/>;
              case "AddUser":
                return <AddUser navigator={navigator} />
              default:
                return this.renderMain(route,navigator);

        }}} />
    );
}
  
  renderMain(route,navigator){
    return (

      <View style={styles.viewContainer}>

        <Image style={{height: 50, width: 300, marginTop:110}} source={require('./img/KOMPAS.png')} />

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigator.push({title:'PlacesScreen'})}>
          <Text style={styles.textStyle}>Discover Places</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.buttonStyle,{marginTop:-70}]} onPress={() => navigator.push({title:'UsersScreen'})}>
          <Text style={styles.textStyle}>See Users</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor:'rgb(43,62,80)'}]} onPress={() => navigator.push({title:'AddUser'})}>
          <Text style={styles.textStyle}>Add User</Text>
        </TouchableOpacity>        

        <Image style={{height: 5}} source={require('./img/ColourStrip.jpg')} />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  
  viewContainer:{
    flex: 1,  
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'rgb(230,230,225)',
  },

  buttonStyle:{
    width: 200,
    padding: (10, 10, 10, 10),
    backgroundColor: 'rgb(53,173,234)',
    borderRadius: 5,
    alignItems: 'center',
  },

  textStyle:{
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontSize: 17
  }
  
});


AppRegistry.registerComponent('enzo_frontend', () => enzo_frontend);
