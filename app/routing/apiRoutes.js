var friends = require("../data/friend")

module.exports = function(app){

	app.get("/api/friends",function(req, res){
		res.json(friends);

	});

	app.post("/api/friends",function(req,res){
		console.log("post api");
		var newFriend = req.body;
		console.log(newFriend);

		var compArray=[];
		
		for (i=0;i<friends.length;i++){
			var compatabilityRating=0;
			console.log("made it into i for loop")
			for (j=0;j<friends[i].responses.length;j++){
				compatabilityRating += Math.abs(parseInt(friends[i].responses[j])-parseInt(newFriend.responses));
				console.log(compatabilityRating);
			}//closes j
			console.log(compatabilityRating);
			compArray.push(compatabilityRating);
		}//closes i
		console.log(compArray);
		var arrayMin = Math.min.apply(Math, compArray);
		console.log(arrayMin);
		matchPosition = compArray.indexOf(arrayMin);
		console.log(matchPosition);
		var match = friends[matchPosition];
		console.log(match);

		friends.push(newFriend);
		res.send(match);
	})
};