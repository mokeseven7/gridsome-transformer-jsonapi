(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.jsonapi = factory());
}(this, function () { 'use strict';

	function jsonapi(json){
		
		try{
			const parsed = JSON.parse(json);

			return parsed;
		}catch(e){
			console.log('unable to parse json', e);
		}

		return parsed;
	}

	return jsonapi;

}));
