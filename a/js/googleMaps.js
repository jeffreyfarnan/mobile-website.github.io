var directionOutput;
		
function initialize() 
{		
	
	directionOutput = new google.maps.DirectionsRenderer();
		
	var mapOptions = {
		center: new google.maps.LatLng(53.652307,-6.684451),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		navigationControl: true
	};
        
	var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
		
	directionOutput.setMap(map);
	
	//direction panel is set
	
	directionOutput.setPanel(document.getElementById("directionsPanel"));
			
	//marker created
	
	var newMarker = new google.maps.Marker({
		//position on map
		position: new google.maps.LatLng(53.652307,-6.684451),     
		map: map,
		title:"claccic cars",
		draggable:false
	})
		
		//info window created
		var infoWindow = new google.maps.InfoWindow({
		
			//display message when marker is clicked
			content:"<img src=\"garage.jpg\" <p>this is the garage</p> "
		})
		
		//event listener created for when marker is clicked
		google.maps.event.addListener(newMarker,'click',function(){
		
			infoWindow.open(map,newMarker);
		})
}

//function that gives directions to garage
function getDirections()
{	
	//this is where you start from in google directions
	var userStartPoint = document.getElementById("userStartPoint").value;
		
	//gets the directions from google
	var request = {
	origin:userStartPoint,
	destination:"53.652307,-6.684451",
	
	
	//directions are giving for driving
	travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	var directions = new google.maps.DirectionsService();
	
	//checks if status is ok before it outputs directions
	
	directions.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionOutput.setDirections(response);
			infoWindow.close;
		}
	});
}