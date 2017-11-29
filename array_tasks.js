var arrayTasks = {

	concat: function (arr1, arr2) {
   var result = [];
	 return result.concat(arr1, arr2);
	},
	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var result = [];
		arr.forEach(function(element){
			result.push(element ** 2);
		})
		return result;
	},

	sum: function (arr) {
		var total = arr.reduce(function(acc, index){
			return acc + index;
		}, 0)
		return total;
	},

	findDuplicates: function (arr) {
		var duplicates = [];
		arr.forEach(function(element, index){
			if (arr.indexOf(element, index + 1) > -1 &&
			duplicates.indexOf(element) === -1){
					duplicates.push(element);
			}
		});
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		return result = arr.filter(number => number !== valueToRemove);
	},

	findIndexesOf: function (arr, itemToFind) {
		var result = [];
		arr.forEach(function(element, index){
			if (element === itemToFind){
				result.push(index);
			}
		})
		return result;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evens = arr.filter(number => number % 2 === 0);
		var result = evens.reduce(function(acc, element){
			return acc + (element ** 2);
		}, 0)
		return result;
	}

}

module.exports = arrayTasks
