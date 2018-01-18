//Inserts one data entry into the database

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;

	var dbObj = db.db("mydb");
	var myDataObj = {game: "Paladins", genre: "FPS"};
	
	dbObj.collection("games").insertOne(myDataObj, function(err, res){
		if(err) throw err;
		console.log("One game inserted");
		
		db.close();
	});
	
});