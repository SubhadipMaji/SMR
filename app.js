function initMap(){

	//Map Options

	var options = {
		center: {lat: 22.5726 , lng: 88.3639},
		zoom: 12
	}

	//New Map
	map = new google.maps.Map(document.getElementById("map"), options)

	//Add Marker
	function addMarker(props){
		const marker = new google.maps.Marker({
			position: props.location,
			map: map,
			// icon: props.imageIcon
		});

		//check for custom icon
		if(props.imageIcon){
			marker.setIcon(props.imageIcon);
		}

		//add infowindow
		if(props.content){
			const detailWindow = new google.maps.InfoWindow({
				content: props.content
			});
			marker.addListener("click", () =>{
				detailWindow.open(map, marker);
			})
		}

	}

	//Add Markers to array
	let MarkerArray = [
		{location:{lat: 22.8610, lng: 88.3877}, 
		imageIcon:"https://img.icons8.com/nolan/2x/marker.png", 
		content: `<h2>Bhatpara Dumpyard</h2>`},
		{location:{lat: 22.57847086755344, lng: 88.35110664245686}}
	]
	
	for (let i = 0; i<MarkerArray.length;i++){
		addMarker(MarkerArray[i]);
	}

}
