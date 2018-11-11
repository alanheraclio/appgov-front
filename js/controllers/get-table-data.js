console.log("get-table-data Running...");
var app = angular.module("myApp", []);
const url = "http://159.65.98.32/api/obras";
app.controller("myCtrl", function($scope, $http) {
	$http.get(url).then(function(response) {
        $scope.records = response.data;
    });
});