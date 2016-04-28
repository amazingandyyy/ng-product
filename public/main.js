'use strict';
var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {

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
        } else {
            $scope.order = order
        }
    }

    $scope.getBalence = () => {
        var total = 0;
        for (var i = 0; i < $scope.records.length; i++) {
            var credits = $scope.records[i].credits;
            var debits = $scope.records[i].debits;
            total += (credits - debits);
        }
        return Math.round(total * 100) / 100;;
    }
    $scope.getDebitsTotal = () => {
        var total = 0;
        for (var i = 0; i < $scope.records.length; i++) {
            total +=  $scope.records[i].debits;
        }
        return Math.round(total * 100) / 100;
    }
    $scope.getCreditsTotal = () => {
        var total = 0;
        for (var i = 0; i < $scope.records.length; i++) {
            total += $scope.records[i].credits;
        }
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
        $scope.edittedRecord = angular.copy(record);
    }
    $scope.saveEdit = () => {
        $scope.records[edittingIndex] = $scope.edittedRecord;
        $scope.edittedRecord = null;
    }
    $scope.cancelEdit = () => {
        $scope.edittedRecord = null;
    }


    $scope.records = [
  {
    "date": "2015-03-16",
    "description": "officia",
    "debits": 321.41,
    "credits": 70.78,
    "notes": "pariatur pariatur elit"
  },
  {
    "date": "2014-02-07",
    "description": "irure",
    "debits": 116.98,
    "credits": 174.82,
    "notes": "quis ad in"
  },
  {
    "date": "2016-03-25",
    "description": "commodo",
    "debits": 35.4,
    "credits": 415.64,
    "notes": "ad qui sunt"
  },
  {
    "date": "2014-09-27",
    "description": "commodo",
    "debits": 66.25,
    "credits": 321.41,
    "notes": "laborum excepteur fugiat"
  },
  {
    "date": "2015-05-15",
    "description": "ut",
    "debits": 257.8,
    "credits": 2.93,
    "notes": "eiusmod sit velit"
  },
  {
    "date": "2014-02-14",
    "description": "deserunt",
    "debits": 13.68,
    "credits": 407.36,
    "notes": "dolor amet dolore"
  },
  {
    "date": "2016-04-11",
    "description": "culpa",
    "debits": 405.71,
    "credits": 225.7,
    "notes": "et id dolore"
  },
  {
    "date": "2015-05-21",
    "description": "incididunt",
    "debits": 461.9,
    "credits": 475.96,
    "notes": "exercitation ut adipisicing"
  }
]

});
