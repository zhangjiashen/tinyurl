/**
 * Created by zjs on 2017/6/16.
 */

angular.module("myApp").controller("homeController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    $scope.submit = function () {
        $http.post("/api/v1/urls", {
            longUrl:$scope.longUrl
        }).success(function (data) {
            $location.path("/urls/" + data.shortUrl);
                console.log(data);
            });
    }
}]);
