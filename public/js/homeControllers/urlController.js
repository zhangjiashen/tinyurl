/**
 * Created by zjs on 2017/6/16.
 */
var app = angular.module("myApp", ["ngRoute", "ngResource"]);
app.controller("urlController", ["$scope", "$http", "$routeParams",
    function ($scope, $http, $routeParams) {
        $http.get("/api/v1/urls/" + $routeParams.shortUrl)
            .success(function (data) {
                $scope.shortUrl = data.shortUrl;
                $scope.longUrl = data.longUrl;
                $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
        });

}]);
