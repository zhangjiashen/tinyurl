/**
 * Created by zjs on 2017/6/16.
 */
var myApp = angular.module('myApp', ["ngRoute", "ngResource"])
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"./public/views/home.html",
            controller:"homeController"
        })
        .when("/urls/:shortUrl", {
            templateUrl:"./public/views/url.html",
            controller:"urlController"
        });
}]);