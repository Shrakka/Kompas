'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, ScrollView,ListView, TouchableHighlight, Navigator, TouchableOpacity, AlertIOS } from 'react-native';


export default class AddUser extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      firstname: '',
      lastname:'',
      age:0,
      city:'',
      buttonIsPressed:false,
       };
  }

  static get defaultProps() { 
      return { title: 'AddUser' } 
  }

  isNumber (o) {
    return ! isNaN (o-0) && o != null;
  }

  sendPOST(){

    if(this.isNumber(this.state.age)){

    if (this.state.firstname !== '' && this.state.lastname !== '' && this.state.age !== 0 && this.state.city !== ''){
      fetch('http://localhost:3000/sent', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          age: Number(this.state.age),
          city: this.state.city,
        })
      }).done();

      AlertIOS.alert( 'Congratulation', this.state.firstname+' '+ this.state.lastname+ ' has been added to the database', 
      () => this.props.navigator.push({title: "Main"}));
    }else{
      AlertIOS.alert( 'Try again', 'Fill all forms please')
    }}else{
      AlertIOS.alert( 'Try again', 'Your age should be a number right?')
    }
  }

  render() {
      return (
        <View style={styles.viewContainer}>

        <Image style={{height: 5,marginTop:22}} source={require('../img/ColourStrip.jpg')} />
        
        <View style={{height:30}}></View>

        <Text style={styles.titleStyle}>SIGN UP</Text>
        
        <View style={{height:50}}></View>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.inputStyle}
            placeholder="First Name"
            onChangeText={(text) => this.setState({firstname:text})}
            autoCorrect={false}
            placeholderTextColor={'rgb(120,120,120)'}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Last Name"
            onChangeText={(text) => this.setState({lastname:text})}
            autoCorrect={false}
            placeholderTextColor={'rgb(120,120,120)'}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Age"
            onChangeText={(text) => this.setState({age:text})}
            autoCorrect={false}
            placeholderTextColor={'rgb(120,120,120)'}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="City"
            onChangeText={(text) => this.setState({city:text})}
            autoCorrect={false}
            placeholderTextColor={'rgb(120,120,120)'}
          />

        </View>

        <View style={{height:100}}></View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.goBackButton,{backgroundColor:'rgb(53,173,234)'}]} onPress={() =>
            this.sendPOST()}>
            <Text style={styles.textStyle}>Subscribe</Text>
          </TouchableOpacity>
            
          <TouchableOpacity style={styles.goBackButton} onPress={() => 
            this.props.navigator.pop()}>
            <Text style={styles.textStyle}>Forget it !</Text>
          </TouchableOpacity>
        </View>

      </View>
      );
    }

}


const styles = StyleSheet.create({

  viewContainer:{
    flex: 1,  
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'rgb(230,230,225)',
    alignItems:'center',
  },

  titleStyle:{
    color: 'rgb(77,77,77)',
    fontFamily: 'Helvetica Neue',
    fontSize: 65,
    fontWeight:'bold',
    textAlign: 'center',
  },

  inputContainer:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems:'center',

  },

  inputStyle:{
    height: 40, 
    width:200,
    borderColor: 'gray', 
    borderWidth: 1,
    textAlign:'center',
    backgroundColor: 'rgb(43,62,80)',
    color:'white',
    borderRadius:10,
    marginBottom:30,
  },

  iconStyle:{
  height:40,
  width:40,
  marginLeft: 15,
  marginRight: 15,
  },

  buttonContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',

  },

  goBackButton:{
    alignItems:'center',
    padding: (10,10,10,10),
    margin: (0,10,10,20),
    borderRadius: 40,
    width:100,
    height:40,
    backgroundColor:'rgb(153, 90, 102)'

  },

  textStyle:{
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontSize: 14
  },

});

