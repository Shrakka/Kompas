// HANDMADE script to generate the collections, use
// `node generateDB.js` in shell to generate the database
// if necessary

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/enzodb';
mongoose.connect(url);

var users = mongoose.model('users',{firstname: String, lastname: String, age: Number, city: String});

var places = mongoose.model('places', {name: String, city: String, adress: String, type: String, rating: Number});

var usersArray =  [
	{"firstname" : "Enzo","lastname":"Testa","age":22,"city":"Nantes"},
	{"firstname" : "Tom","lastname":"Charman","age":11,"city":"London"},
	{"firstname" : "Doug","lastname":"Walker","age":12,"city":"London"},
	{"firstname" : "Olivia","lastname":"Higgs","age":13,"city":"London"},
	{"firstname" : "Kurt","London":"Henderson","age":14,"city":"London"},
	{"firstname" : "Damien","lastname":"Gallagher","age":15,"city":"London"},
	{"firstname" : "Alice","lastname":"Schmitt","age":16,"city":"Barcelona"},
	{"firstname" : "Bob","lastname":"Bolton","age":16,"city":"Lisbon"},
	{"firstname" : "Carol","lastname":"Stark","age":17,"city":"Berlin"},
	{"firstname" : "Damien","lastname":"Lanister","age":18,"city":"Berlin"},
	{"firstname" : "Eve","lastname":"Tully","age":19,"city":"Washington"},
	{"firstname" : "Fanny","lastname":"Tyrel","age":20,"city":"Paris"},
	{"firstname" : "George","lastname":"Varys","age":21,"city":"Sydney"},
	{"firstname" : "Hugh","lastname":"Targaryen","age":22,"city":"Bogota"},
	{"firstname" : "Ines","lastname":"Obama","age":23,"city":"Washington"}
];

var placesArray = [
	{"name" : "AlphaBlue","city":"London","adress":"1 East Road","type":"bar","rating":1},
	{"name" : "BetaGreen","city":"Dublin","adress":"2 West Road","type":"bar","rating":2},
	{"name" : "Alpha restaurant","city":"London","adress":"3 South Road","type":"restaurant","rating":3},
	{"name" : "Beta restaurant","city":"Paris","adress":"1 rue de la paix","type":"restaurant","rating":4},
	{"name" : "Gamma","city":"Paris","adress":"5 rue de France","type":"park","rating":5},
	{"name" : "Delta","city":"Paris","adress":"6 route de la pyramide","type":"park","rating":3},
	{"name" : "Epsilon","city":"Paris","adress":"7 rue Alfred Kastler","type":"park","rating":2},
	{"name" : "Dzeta","city":"Paris","adress":"8 rue George Pompidou","type":"restaurant","rating":1},
	{"name" : "Eta","city":"Berlin","adress":"9 Schlafen","type":"restaurant","rating":4},
	{"name" : "Theta","city":"Berlin","adress":"10 Artung","type":"restaurant","rating":10},
	{"name" : "Iota","city":"Berlin","adress":"11 Bitte","type":"place","rating":2},
	{"name" : "Kappa","city":"Barcelona","adress":"12 calle grande","type":"place","rating":5},
	{"name" : "Lambda","city":"Barcelona","adress":"13 calle de la muerte","type":"mall","rating":5},
	{"name" : "Ksi","city":"Barcelona","adress":"14 paseo de gracia","type":"mall","rating":3},
	{"name" : "Sigma","city":"Barcelona","adress":"15 paseo del mar","type":"mall","rating":2},
];

for(var i=0;i < usersArray.length; i++){
  var u = new users(usersArray[i]);
  var p = new places(placesArray[i]);
  u.save();
  p.save();
}

mongoose.connection.close();