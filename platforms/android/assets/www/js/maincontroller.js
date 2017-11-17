
// app.js - Business logic here

    // Creating module with name cordovaApp
    var demo = angular.module('cordovaApp', []);

    // creating the controller and inject Angular's $scope
    demo.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'show this notification message';

        $scope.showNotification = function(){
            
        }
    });
