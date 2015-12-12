var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";

$(document).ready(function(){
      $("#jquery_output").text("This content generated with jQuery");
    });

function modulus(first, second) {
	var a = first;
	var b = second;
	var c = a % b;
	return(c);
};

console.log(modulus(10,3));

function doMath(first, second, third) {

};



function sortedPlanets() {
	var alphaplanets = Planets.sort();
	return (alphaplanets);
};

console.log(sortedPlanets());

function reversethis() {
  for (var i in Planets){
  var w = Planets[i].split("").reverse().join("");  
  console.log(w);
  };
};

reversethis();

function seven(element) {
  if (element.length === 7) {
    return element;
   };
};

var filterplanet = Planets.filter(seven);
console.log(filterplanet);




function getAnimals() {
	$.ajax({
		type: "GET",
		url: "data/animals.json",
		success: function(data){
			console.log("animals",data.animals);
		},
		fail: function() {
			console.log("AJAX Failed");
		}
	});
};

getAnimals();





