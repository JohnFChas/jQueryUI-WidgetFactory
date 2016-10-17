/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

            $scope.changeState = function () {
                $("#button1").stateButton("option", { state: "changeState" });
            };
        }
    ]);