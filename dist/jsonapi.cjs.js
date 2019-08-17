'use strict';

function jsonapi(json){
	
	try{
		const parsed = JSON.parse(json);

		return parsed;
	}catch(e){
		console.log('unable to parse json', e);
	}

	return parsed;
}

module.exports = jsonapi;
