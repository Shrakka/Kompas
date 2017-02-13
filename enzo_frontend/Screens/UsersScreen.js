'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, Navigator, TouchableOpacity } from 'react-native';


export default class UsersScreen extends Component {

  static get defaultProps() { 
      return { title: 'UsersScreen' } 
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      users: ds.cloneWithRows([])
    }
  }

  fetchUsers(){
    const URL_USERS = 'http://localhost:3000/users'
    return fetch(URL_USERS).then((res) => res.json());
  }

  componentWillMount() {
    this.fetchUsers().then((res) => {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        users: ds.cloneWithRows(res)
      })
    }).done();
  }


  render() {
      return (
        
      <View style={styles.viewContainer}>

        <Image style={{height: 5,marginTop:22}} source={require('../img/ColourStrip.jpg')} />

        <Text style={styles.titleStyle}>USERS</Text>

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.goBackButton} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.textStyle}>Go back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.goBackButton,{backgroundColor:'rgb(53,173,234)', marginBottom:80}]} onPress={() => this.props.navigator.push({title: "AddUser"})}>
          <Text style={styles.textStyle}>Add users</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.listStyle}>
          <ListView
            dataSource={this.state.users}
            enableEmptySections
            renderRow={(rowData) => 
            
              <View style={styles.touchableStyle}>
                <TouchableOpacity>
                  <View style={styles.rowStyle}>
                    <Image style={styles.iconStyle} source={require('../img/User.png')} />
                    <View>
                      <Text>{rowData.firstname} {rowData.lastname}</Text>
                      <Text>{rowData.age} years old - Living in {rowData.city}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

            }>
          </ListView>
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
    marginTop:30,
    marginBottom:10,
  },

  listStyle:{
    alignItems: 'center',
    height:440,
  },

  touchableStyle:{
    padding:(0,0,0,5),
  },

  rowStyle:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 60,
    width: 360,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'rgb(217,217,217)',
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
    margin: (0,10,10,10),
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