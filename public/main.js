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
            total += Math.round((credits - debits)*100)/100;
        }
        return total;
    }
    $scope.getDebitsTotal = () => {
        var total = 0;
        for (var i = 0; i < $scope.records.length; i++) {
            total += $scope.records[i].debits;
        }
        return total;
    }
    $scope.getCreditsTotal = () => {
        var total = 0;
        for (var i = 0; i < $scope.records.length; i++) {
            total += $scope.records[i].credits;
        }
        return total;
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
    "date": "2016-03-21",
    "description": "non",
    "debits": 364.89,
    "credits": 147.37
  },
  {
    "date": "2014-03-05",
    "description": "culpa",
    "debits": 416.5,
    "credits": 237.21
  },
  {
    "date": "2016-01-29",
    "description": "reprehenderit",
    "debits": 266.09,
    "credits": 132.99
  },
  {
    "date": "2015-02-06",
    "description": "nostrud",
    "debits": 328.72,
    "credits": 366.11
  },
  {
    "date": "2014-04-01",
    "description": "ut",
    "debits": 170.34,
    "credits": 395.05
  },
  {
    "date": "2015-01-11",
    "description": "et",
    "debits": 347.94,
    "credits": 498.2
  },
  {
    "date": "2015-07-08",
    "description": "adipisicing",
    "debits": 20.07,
    "credits": 19.89
  },
  {
    "date": "2016-01-08",
    "description": "cillum",
    "debits": 277.81,
    "credits": 454.62
  },
  {
    "date": "2014-03-05",
    "description": "voluptate",
    "debits": 428.17,
    "credits": 255.19
  },
  {
    "date": "2014-08-14",
    "description": "minim",
    "debits": 335.88,
    "credits": 419.41
  },
  {
    "date": "2014-08-17",
    "description": "veniam",
    "debits": 383.09,
    "credits": 383.42
  },
  {
    "date": "2015-12-23",
    "description": "proident",
    "debits": 102.74,
    "credits": 432.44
  },
  {
    "date": "2014-05-11",
    "description": "occaecat",
    "debits": 324.86,
    "credits": 425.13
  },
  {
    "date": "2015-07-23",
    "description": "ut",
    "debits": 256.5,
    "credits": 60.14
  },
  {
    "date": "2014-09-21",
    "description": "pariatur",
    "debits": 177.94,
    "credits": 419.94
  }
]

});
