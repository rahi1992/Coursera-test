(function () {
    'use strict';
    angular.module('myFirstApp', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    var checkError;
    function LunchCheckController($scope) {
        $scope.items = "";
        $scope.output = function () {
            checkError = false;
            var value = rateFood($scope.items);
            $scope.outputValue = value;
            checkError ? $scope.errorValue = "Please enter some fields!" : $scope.errorValue = "";
            value == "Please enter data first" ? $scope.messageType = "danger" : $scope.messageType = "success";
            console.log(value)
        }
    }
    function rateFood(string) {
        var message = "";
        var dishes = string.split(',');
        var mealCount =checkMealCount(dishes);
        if (mealCount <= 0) message = "Please enter data first";
        else if(mealCount > 0 && mealCount <= 3 ) message = "Enjoy!";
        else if(mealCount > 3) message = "TooMuch!";
        return message
    }
    function checkMealCount(dishes) {
        var mealCount = dishes.length;
        for(var i = 0; i <dishes.length; i++){
            if(dishes[i].trim().length == 0){
                mealCount -= 1;
                checkError = true;
            }
        }
        return mealCount;
    }

})();
