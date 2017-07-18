/**
 * Created by zjs on 2017/6/16.
 */
(function(){
    var myapp = angular.module('myApp', ["ngRoute", "ngResource"]);
    myapp.controller("urlController", ["$scope", "$http", "$routeParams",
        function ($scope, $http, $routeParams) {
            $http.get("/api/v1/urls/" + $routeParams.shortUrl)
                .success(function (data) {
                    $scope.shortUrl = data.shortUrl;
                    $scope.longUrl = data.longUrl;
                    $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
                });

        }]).controller('homeController', ["$scope", "$http", "$location", function ($scope, $http, $location) {
        $scope.submit = function () {
            $http.post("/api/v1/urls", {
                longUrl:$scope.longUrl
            }).success(function (data) {
                $location.path("/urls/" + data.shortUrl);
                console.log(data);
            });
        }
    }]);
    myapp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl:"./public/views/home.html",
                controller:'homeController'
            })
            .when("/urls/:shortUrl", {
                templateUrl:"./public/views/url.html",
                controller:'urlController'
            })
            .otherwise({
                redirectTo : '/'
            });
    }]);
}());