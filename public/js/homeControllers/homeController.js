/**
 * Created by zjs on 2017/6/16.
 */
angular.module("tinyurlApp").controller("homeController", ["$scope", "$http", function ($scope) {
    $scope.submit = function () {
        $http.post("/api/v1/urls", {
            longUrl:$scope.longUrl
        }).success(function (data) {
                console.log(data);
            });

    }
}]);
