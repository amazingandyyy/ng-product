'use strict';
var app = angular.module('myApp', []);

app.constant('myName', 'Andy');

app.controller('mainCtrl', function($scope, myName, recordsService) {

    $scope.records = recordsService.getAll;

    console.log(myName);

    $scope.addRecord = () => {
        $scope.records.push($scope.newRecord);
        $scope.newRecord = {};
    }
    $scope.removeRecord = (record) => {
        var index = $scope.records.indexOf(record);
        $scope.records.splice(index, 1);
    }

    $scope.sortBy = (order) => {
        if ($scope.order === order) {
            $scope.order = `-${order}`;
            document.getElementById(`${order}Scaret`).style.transform = "rotate(0deg)";
        } else {
            $scope.order = order;
            document.getElementById(`${order}Scaret`).style.transform = "rotate(180deg)";

        }
    }

    $scope.getBalence = () => {
        return Math.round(($scope.getCreditsTotal()-$scope.getDebitsTotal())*100)/100;
    }
    $scope.getDebitsTotal = () => {
        var total = 0;
        $scope.records.forEach(record => {
            total += record.debits || 0;
        })
        return Math.round(total * 100) / 100;
    }
    // $scope.getTotal = (method) => {
    //     var total = 0;
    //     console.log(method);
    //     $scope.records.forEach(record => {
    //         total += record.method || 0;
    //     })
    //     return Math.round(total * 100) / 100;
    // }
    $scope.getCreditsTotal = () => {
        var total = 0;
        $scope.records.forEach(record => {
            total += record.credits || 0;
        })
        return Math.round(total * 100) / 100;
    }
    $scope.getTotal = (items) => {
        var total = 0;
        for (var i = 0; i < $scope.records.length; i++) {
            total += $scope.records[i].items;
        }
        return total;
    }

    var edittingIndex;

    $scope.editRecord = (record) => {
        edittingIndex = $scope.records.indexOf(record);
        $scope.edittedRecord = angular.copy(record); // we don't bind
    }
    $scope.saveEdit = () => {
        $scope.records[edittingIndex] = $scope.edittedRecord;
        $scope.edittedRecord = null;
    }
    $scope.cancelEdit = () => {
        $scope.edittedRecord = null;
    }


});
