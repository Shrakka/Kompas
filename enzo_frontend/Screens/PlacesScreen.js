'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, Navigator, TouchableOpacity } from 'react-native';


export default class PlacesScreen extends Component {

	static get defaultProps() { 
	    return { title: 'PlacesScreen' };
	}

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    	places: ds.cloneWithRows([])
    }
  }

  fetchPlaces(){
    const URL_PLACES = 'http://localhost:3000/places'
    return fetch(URL_PLACES).then((res) => res.json());
  }

  componentWillMount() {
    this.fetchPlaces().then((res) => {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        places: ds.cloneWithRows(res)
      })
    }).done();
  }

  calculStars(rating){
  	switch (rating) {
  		case 1:
  			return "*";
  		case 2:
			return "* *";
		case 3:
			return "* * *";
		case 4:
			return "* * * *";
		case 5: 
			return "* * * * *";
		default:
			return "- - - - -";
  	}
  }

  render() {
    return (

    	<View style={styles.viewContainer}>

			<Image style={{height: 5,marginTop:22, marginBottom: 40}} source={require('../img/ColourStrip.jpg')} />
			<Image style={{height: 55, width:320}} source={require('../img/Explore.png')} />

      <TouchableOpacity style={styles.goBackButton} onPress={() => this.props.navigator.pop()}>
				<Text style={styles.textStyle}>Go back</Text>
			</TouchableOpacity>

			<View style={styles.listStyle}>
				<ListView
          dataSource={this.state.places}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          renderRow={(rowData) => 
					
					<View style={styles.touchableStyle}>
		          		<TouchableOpacity>
		          			<View style={styles.rowStyle}>
		          				<Image style={styles.iconStyle} source={require('../img/Place.png')} />
		          				<View>
		          					<Text>{rowData.name}   ~ {rowData.type.toUpperCase()} ~     {this.calculStars(rowData.rating)}</Text>
		          					<Text>{rowData.city} - {rowData.adress}</Text>
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
