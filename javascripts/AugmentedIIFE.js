var FruitMakerPlus = (function(newFruitmaker){
  newFruitmaker.slices = function(fruits,numberofslices){
  	

  	ArrayofFruit = [];
  	for(var x = 0; x<numberofslices; x++) {
  		ArrayofFruit.push(fruits);
  	}
  	
  	console.log("ArrayofFruit", ArrayofFruit);
  	return ArrayofFruit;
  	}
  }(FruitMaker));

console.log("Augmented FruitMaker", FruitMaker.slices("cherries", 3));