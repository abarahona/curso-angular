(function () {
	'use strict'; // se usa para que sea estricto a la hora de definir variables (sintactica y semanticamente estricto)
	angular.module('adivinaElNumero', [])

	.controller('GuessTheNumberController', GuessTheNumberController);

	function GuessTheNumberController($scope){
		$scope.verifyGuess =  function () {
			$scope.deviation = $scope.original - $scope.guess;
			$scope.noOfTries = $scope.noOfTries + 1;
		}

		$scope.initializeGame= function() {
			$scope.noOfTries = 0;
			$scope.original = Math.floor((Math.random()*1000) + 1);
			$scope.guess = null;
			$scope.deviation = null;
		}

		$scope.initializeGame();

	}	
	// funcion anonima 
	//.controller('MyFirstController',function($scope){
	//	$scope.numero = "hoa"
	//})

	// funcion normal 

})();