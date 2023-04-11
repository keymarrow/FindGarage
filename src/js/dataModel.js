/**
 * @file Data Model
 * @version 1.0
 * @author Patrick Kimaro [bit.ly/kimarotech]
 */

/**
 * Data Model
 * @type {Object}
 */
var dataModel = {};

/**
 * ES6 Promises Polyfill
 * @type {object}
 * @external 'ES6Promise.Promise;'
 * @see {@link https://github.com/jakearchibald/es6-promise}
 */
var Promise = Promise || ES6Promise.Promise;

/**
 * Places Array
 * @type {Array.<Object>}
 */
dataModel.places = [
	// {
	// 	/**
	// 	 * Place Name
	// 	 * @type {String}
	// 	 */
	// 	name: 'Airports',
	// 	/**
	// 	 * Place Description
	// 	 * @type {String}
	// 	 */
	// 	description: 'description',
	// 	/**
	// 	 * Place Type. Set to a supported value for the types property in the Google Places API
	// 	 * @type {String}
	// 	 * @see {@link https://developers.google.com/places/supported_types}
	// 	 */
	// 	type: 'airport', 
	// 	/**
	// 	 * Place Icon. Set to a Font Awesome CSS class.
	// 	 * @type {String}
	// 	 * @see {@link https://fortawesome.github.io/Font-Awesome/icons/}
	// 	 */
	// 	icon: 'fa-plane',
	// 	/**
	// 	 * Marker Icon. Set to Font Awesome SVG marker.
	// 	 * @type {Object}
	// 	 * @see {@link https://github.com/mikejoyceio/fontawesome-markers}
	// 	 */
	// 	marker: { path: fontawesome.markers.PLANE,
	// 							fillColor: '#2c3e50',
	// 							fillOpacity: 1,
	// 							scale: 0.31,
	// 							strokeColor: '#ffffff',
	// 							strokeWeight: 1 }
	// },
	{
		name: 'Car Repair',
		description: 'description',
		type: 'car_repair',
		icon: 'fa-wrench',
		marker: { path: fontawesome.markers.WRENCH,
								fillColor: '#7f8c8d',
								fillOpacity: 1,
								scale: 0.34,
								strokeColor: '#ffffff',
								strokeWeight: 1 }
	}
]

/**
 * Foursquare API Request
 * @param  {Object} request
 * @return {Object} 
 */
dataModel.foursquare = function(request) {

	/**
	 * Foursquare API URL
	 * @type {String}
	 * @see {@link https://developer.foursquare.com/docs/venues/search}
	 */
	var foursquareAPI = 'https://api.foursquare.com/v2/venues/search';

	/**
	 * Return
	 * @external 'Promise.resolve'
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve}
	 * @external '$.ajax'
	 * @see {@link http://api.jquery.com/jquery.ajax/}
	 */
	return Promise.resolve($.ajax({
		url: foursquareAPI,
		dataType: 'json',
		data: {
			ll: request.venueLat+','+request.venueLng,
			query: request.venueName,
			intent: 'match',
			client_id: 'T3NSPSCOLUQ5R0OGEZCKUX0MOEUOEPW1HGFXYOF3ZKCYDQXD',
			client_secret: 'J2LN1WHKPT2MAQAP3POZP1REU2AWLYGM3S24B0DSLHZNHKJR',
			v: '20151230',
			m: 'foursquare' 
		}
	}));

}

/**
 * Uber API Request
 * @param  {Object} request
 * @return {Object}
 */
dataModel.uber = function(request) {

	/**
	 * Uber API URL
	 * @type {String}
	 * @see {@link https://developer.uber.com/v1/endpoints/}
	 */
	var uberAPI = 'https://api.uber.com/v1/estimates/price';
	var uberClientId = 'sF0uXRb14_xpSGdnNlfl8KgOVSgt6IXt';
	var uberServerToken = 'AKvxnyDLDHBO86RoOC0vcMNTByH1BRHDgerhfNmh';

	/**
	 * Return
	 * @external 'Promise.resolve'
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve}
	 * @external '$.ajax'
	 * @see {@link http://api.jquery.com/jquery.ajax/}
	 */
	return Promise.resolve($.ajax({
		url: uberAPI,
		headers: {
			Authorization: "Token "	+ uberServerToken
		},
		data: {
			start_latitude: request.startLat,
			start_longitude: request.startLng,
			end_latitude: request.endLat,
			end_longitude: request.endLng
		}
	}));

}

/**
 * Get Local Storage Value
 * @param  {string} item Name of the item  
 * @return {string}
 * @external 'localStorage.getItem()'
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem}
 */
dataModel.get = function(item) {

	return localStorage.getItem(item);

}

/**
 * Set Local Storage value
 * @param {string} item Name of the item
 * @param {string} value Value of the item
 * @external 'localStorage.setItem()'
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem}
 */
dataModel.set = function(item, value) {

	localStorage.setItem(item, value);	

}
