var tj = require('togeojson'),
		fs = require('fs'),
		jsdom = require('jsdom').jsdom,
		_ = require('lodash');

var kmls = [
	"./data/DCCommunitygardens.kml",
	"./data/CommunityGarden.kml"
];
var kmlsToJson = [];

//get json
for (var i = 0; i < kmls.length; i++) {
	var kml = kmls[i];
	var kml = jsdom(fs.readFileSync(kml, 'utf8'));
	var converted = tj.kml(kml);

	kmlsToJson.push(converted);
	//console.log(JSON.stringify(converted));
	//console.log('-----');
}

//combine
function truncCoords(item) {
	return (item + "").replace(/(-?\d+.\d{3})\d.+/, '$1');
}

var collectedDataPoints = {};
for (var j = 0; j < kmlsToJson.length; j++) {
	var json = kmlsToJson[j];
	var properties = json.features;
	for (var k = 0; k < properties.length; k++) {
		var property = properties[k];
		var key;
		var coords;
		//console.log(property);
		if (!property.geometry.geometries) { //single set of coords
			coords = _.map(property.geometry.coordinates, truncCoords);
		} else { //many coords (polygon)
			coords = _.map(property.geometry.geometries[1].coordinates, truncCoords);
		}
		key = _.reduce(coords, function(accum, item) { return accum + "x" + item; });
		key = key.substring(0, key.length);

		if (key in collectedDataPoints) {
			//console.log("already exists");
			//console.log(key);
			//console.log("-----");
			if (property.properties && property.properties.description) {
				collectedDataPoints[key].description = property.properties.description;
			}
		} else {
			collectedDataPoints[key] = {
				coordinates: coords,
				name: property.properties.name
			};
		}
	}
}

console.log(_.values(collectedDataPoints));
