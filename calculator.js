// //DISPLY FUNCTION: this only displays the user input, followed by the results

// function dis(calculate) {
//     document.getElementById("king").value+=calculate
// };

// //SOLVE FUNCTION: eval() is a global function in JavaScript and has a defined purpose of solving JavaScript codes

// function solve() {
//     let a= document.getElementById("king").value
//     let b= eval(a)
//     document.getElementById("king").value= b
// };

// //CLEAR FUNCTION: we only need a void in between the quotes to perform this function

// function clr() {
//     document.getElementById("king").value=""
// };

// //COLOR FUNCTION: it generates new random color

// function changeBg() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     const body = document.getElementById("king");
//     body.style.backgroundColor = "#" + randomColor;
// };

//     document.getElementById("text");
//     changeBg();


var app = angular.module('Calculator', []);

app.controller('DisplayController', ['$scope', function($scope) {

	$scope.display = "";

}]);

app.controller('ArthmeticController', ['$scope', function($scope){

	$scope.operatorLastUsed = false;
	$scope.equation = "0";
	$scope.isFloat = false;
	$scope.isInit = true;
	$scope.isOff = false;

	$scope.concatOperator = function(operator) {
		
		if(operator === 'AC')
		{
			$scope.equation = "0";
			$scope.isInit = true;
		}
		else
		{
			if(!$scope.equation[$scope.equation.length - 1].match(/[-+*\/]/))
			{
				$scope.equation += operator;
				$scope.isFloat = false;
			}	
		}
	}
	
	$scope.command = function(command) {
		if(command === 'Off')
		{
			if($scope.isOff === false)
			{
				$(".display").css("color", '#95A799');
				$("button:contains('OFF')").text("ON");
				$scope.isOff = true;
			} else 
			{
				$(".display").css("color", 'black');
				$("button:contains('ON')").text("OFF");
				$scope.isOff = false;
			}
		} else if(command === '%') 
		{
			if(!$scope.equation[$scope.equation.length - 1].match('%'))
			{
				$scope.equation += "%";
			}
		} else if(command === 'DEL')
		{
			if($scope.equation.length == 1)
			{
				$scope.equation = $scope.equation.substring(0,$scope.equation.length - 1);
				$scope.equation = "0";
				$scope.isInit = true;
			} else {
				$scope.equation = $scope.equation.substring(0,$scope.equation.length - 1);
			}
		} 
	}
	
	$scope.addDecimal = function() {
		$scope.isFloat = true;
		$scope.equation += ".";
	}

	$scope.updateCurrNum = function(num) {
		if($scope.isInit)
		{
			$scope.equation = num.toString();
			$scope.isInit = false;
		} else 
			$scope.equation += num;
		
	}

	$scope.calculate = function() {
		$scope.equation = eval($scope.equation).toString();
	}

}]);

