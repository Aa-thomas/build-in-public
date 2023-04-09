(function () {
	/**
	 * @param {Function} callback - The function to call on each element of the array.
	 * @param {Object} thisObj - The value of `this` provided for the call to callback.
	 * @return {Array} - A new array with the results of calling the callback function on each element of the original array.
	 */

	Array.prototype.arrayMap = function (callback, thisObj) {
		console.log('hello');
	};
})();
