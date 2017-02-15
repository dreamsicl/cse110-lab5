/*global alert,angular,Firebase*/
angular
    .module('ngTeam')
    .controller('teamController', function ($scope, $timeout) {
    
        'use strict';
    
        $scope.myData = new Firebase("https://cse110project-bbc68.firebaseio.com/");
        $scope.teammate = {};
        $scope.teammatesData = {};
        $scope.myTeammateData = new Firebase("https://cse110project-bbc68.firebaseio.com/teammates");
    
        $scope.myTeammateData.on('value', function (dataSnapshot) {
            $timeout(function () {
                $scope.teammatesData = dataSnapshot.val();
            });
        });
    
        $scope.saveMember = function () {
            var teammateRef, entryKey;
            /*Creates a ref to the teammates table of the database*/
            teammateRef = $scope.myData.child("teammates");
            /*Use this for your key to enter data*/
            entryKey = $scope.teammate.name;
            teammateRef.child(entryKey).set($scope.teammate);
            /*Will erase the fields on the screen containing the name and age*/
            $scope.teammate.name = "";
            $scope.teammate.full_name = "";
            $scope.teammate.age = 0;
        };
    
    });
