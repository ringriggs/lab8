function initMap() {
	// add your code here
	L.mapquest.key = 'A0or6qowJoUkyo6uku9oT2V1OifDIwx9';
	
	var map = L.mapquest.map('map', {
		center: [32.8794378,-117.240223],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8794378,-117.240223]).addTo(map);
}