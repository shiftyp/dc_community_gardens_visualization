$(function(){
	var mapOptions = {
		center: new google.maps.LatLng(38.89,-77.04),
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	var map = new google.maps.Map($("#map")[0],mapOptions);
	var bounds = new google.maps.LatLngBounds();
	var markers = [];

	$.get('data.json', function(data){
		_.forOwn(data, function(datum){
			var coords = _.map(datum.coordinates, parseFloat);
			var location = new google.maps.LatLng(coords[1],coords[0]);
			markers.push(new google.maps.Marker({
				position: location,
				map: map
			}));
			bounds.extend(location);
			map.fitBounds(bounds);
		});
	});
});
