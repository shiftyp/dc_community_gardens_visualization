window.onload = function(){
	var mapOptions = {
		center: new google.maps.LatLng(38.89,-77.04),
		zoom: 9,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	var map = new google.maps.Map($("#map")[0],mapOptions);
 	var bounds = new google.maps.LatLngBounds();
	var markers = [];

	console.log("here")
	$.getJSON('cleaned.json', function(datum) {
		$.each(datum,function(key,val) {
			console.log(datum["Lat"]);
			/*var lat = _.map(datum.Lat, parseFloat),
			    lon = _.map(datum.Lon, parseFloat),
			    location = new google.maps.LatLng(lat,lon);
			    mkr = markers.push(new google.maps.Marker({
					position: location,
					map: map
				}));
			bounds.extend(location);
			map.fitBounds(bounds);
			
			// Set metadata for marker tooltip
			mkr.set('name',datum.Name);
			mkr.set('website',datum.Website);
			mkr.set('address',datum.Address);
			mkr.set('plots',datum.Plots);
			mkr.set('list',datum.List);
			mkr.set('email',datum.Email);
			mkr.set('phone',datum.Phone);
			
			//tt(foo,mkr);*/
		})
	});
	
	/*$.get('cleaned.json', function(data){
		console.log('in get');
		_.forOwn(data, function(datum){
			console.log(datum);
			var lat = _.map(datum.Lat, parseFloat),
			    lon = _.map(datum.Lon, parseFloat),
			    location = new google.maps.LatLng(lat,lon);
			    mkr = markers.push(new google.maps.Marker({
					position: location,
					map: map
				}));
			bounds.extend(location);
			map.fitBounds(bounds);
			
			// Set metadata for marker tooltip
			mkr.set('name',datum.Name);
			mkr.set('website',datum.Website);
			mkr.set('address',datum.Address);
			mkr.set('plots',datum.Plots);
			mkr.set('list',datum.List);
			mkr.set('email',datum.Email);
			mkr.set('phone',datum.Phone);
			
			//tt(foo,mkr);
		});
	});
/* 
	// Tooltip function w/callback
	function tt(clbk,mkr) {
		clbk(mkr);
	}
	function foo(mkr) {
		makeTooltip(mkr);
	}

	// Map mouseover tooltip
	function makeTooltip(mkr) {
		var tooltipHTML = "<h3>"+mkr.get('name')+"</h3>";

		if (mkr.get('address') != '') {
			tooltipHTML = tooltipHTML+"<br>"
			+"<b>Address: </b>"+mkr.get('address');
		}
		if (mkr.get('email') != '') {
			tooltipHTML = tooltipHTML + "<br>"
			+"<b>Email: </b>"+mkr.get('email');
		}
		if (mkr.get('phone') != '') {
			tooltipHTML = tooltipHTML+"<br>"
			+"<b>Phone: </b>"+mkr.get('phone');
		}
		if (mkr.get('plots') != ''){
			tooltipHTML = tooltipHTML+"<br>"
			+"<b>Number of plots: </b>"+mkr.get('plots');
		}
		if (mkr.get('list') != ''){
			if (mkr.get('list') == 'Y') {
				tooltipHTML = tooltipHTML+"<br>"
				+"<b>Waiting list: </b> Yes";
			} else {
				tooltipHTML = tooltipHTML+"<br>"
				+"<b>Waiting List: </b> No";
			}
		}

		//create an options object
		var tooltipOptions={ marker:mkr, content:tooltipHtml, cssClass:'tooltip'};
		// create the tooltip
		var tooltip = new Tooltip(tooltipOptions);
	}

	function Tooltip(options) {
    // Now initialize all properties.
		this.marker_ = options.marker;
		this.content_ = options.content;
		this.map_ = options.marker.get('map');;
		this.cssClass_ = options.cssClass||null;
		// We define a property to hold the content's
		// div. We'll actually create this div
		// upon receipt of the add() method so we'll
		// leave it null for now.
		this.div_ = null;
		//Explicitly call setMap on this overlay
		this.setMap(this.map_);
		var me = this;
		// Show tooltip on mouseover event.
		google.maps.event.addListener(me.marker_, 'mouseover', function() {
			me.show();
		});
		// Hide tooltip on mouseout event.
		google.maps.event.addListener(me.marker_, 'mouseout', function() {
			me.hide();
		});
	}

	// Now we extend google.maps.OverlayView()
	Tooltip.prototype = new google.maps.OverlayView();
	// onAdd is one of the functions that we must implement,
	// it will be called when the map is ready for the overlay to be attached.
	Tooltip.prototype.onAdd = function() {
		// Create the DIV and set some basic attributes.
		var div = document.createElement('DIV');
		div.style.position = "absolute";
		// Hide tooltip
		div.style.visibility = "hidden";
		if(this.cssClass_)
			div.className += " "+this.cssClass_;
		//Attach content to the DIV.
		div.innerHTML = this.content_;
		// Set the overlay's div_ property to this DIV
		this.div_ = div;
		// We add an overlay to a map via one of the map's panes.
		// We'll add this overlay to the floatPane pane.
		var panes = this.getPanes();
		panes.floatPane.appendChild(this.div_);
	}

	// We here implement draw
	Tooltip.prototype.draw = function() {
		// Position the overlay. We use the position of the marker
		// to peg it to the correct position, just northeast of the marker.
		// We need to retrieve the projection from this overlay to do this.
		var overlayProjection = this.getProjection();
		// Retrieve the coordinates of the marker
		// in latlngs and convert them to pixels coordinates.
		// We'll use these coordinates to place the DIV.
		var ne = overlayProjection.fromLatLngToDivPixel(this.marker_.getPosition());
		// Position the DIV.
		var div = this.div_;
		div.style.left = ne.x + 'px';
		div.style.top = ne.y + 'px';
	}

	// We here implement onRemove
	Tooltip.prototype.onRemove = function() {
		this.div_.parentNode.removeChild(this.div_);
	}

	// Note that the visibility property must be a string enclosed in quotes
	Tooltip.prototype.hide = function() {
		if (this.div_) {
			this.div_.style.visibility = "hidden";
		}
	}

	Tooltip.prototype.show = function() {
		if (this.div_) {
			this.div_.style.visibility = "visible";
		}
	} */
};

