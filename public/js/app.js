/**
 * Created by zjs on 2017/6/16.
 */

var app = angular.module("tinyurlApp", ["ngRoute", "ngResource"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"./public/views/home.html",
            controller:"homeController"
        });
});