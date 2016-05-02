'use strict';

var app = angular.module('myApp');

app.controller('homeCtrl', function() {
    console.log('homeCtrl loaded');
});



app.controller('listCtrl', function($scope, Items) {
    console.log('listCtrl loaded');
    $scope.items = items;

    $scope.sortBy = (order) => {
        if ($scope.order === order) {
            $scope.order = `-${order}`;
            document.getElementById(`${order}Scaret`).style.transform = "rotate(0deg)";
        } else {
            $scope.order = order;
            document.getElementById(`${order}Scaret`).style.transform = "rotate(180deg)";

        }
    }

    $scope.addNewItem = () => {
        $scope.items.push($scope.newItem);
        $scope.newItem = [];
    }

});

app.controller('detailCtrl', function($stateParams, $scope) {
    console.log('detailCtrl loaded');
    var id = $stateParams.id;
    $scope.item = items[id];
    $scope.item.id = id;
    $scope.editItem = (id) => {
        console.log('iddd: ', id);
        $scope.edittedItem = angular.copy(items[id]);
    }
    $scope.deleteItem = (id) => {
        console.log('iddd: ', id);
        items.splice(id,1);
    }
    $scope.updateOldItem = (id) => {
        console.log('updateOldItem: ', id);
        console.log('$scope.edittedItem: ', $scope.edittedItem);
        items[id] = $scope.edittedItem;
        $scope.item =$scope.edittedItem;
        $scope.edittedItem= null;
    }
    $scope.cancelClick = () => {
        $scope.edittedItem= null;
    }
});
app.controller('summaryCtrl', function($stateParams, $scope) {
    console.log('summaryCtrl loaded');
    $scope.totalNum = () => {
        return items.length;
    }
    $scope.totalValue = () => {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].price;
        }
        return Math.round(total*100)/100;
    }
});

var items = [{
    "name": "Higgins",
    "desc": "sit pariatur aliqua nulla veniam",
    "cate": "aute",
    "price": 57.43,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Pacheco",
    "desc": "velit labore quis sit eu",
    "cate": "amet",
    "price": 33.83,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Sloan",
    "desc": "proident nisi quis Lorem amet",
    "cate": "qui",
    "price": 39.74,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Cross",
    "desc": "voluptate excepteur dolor ad labore",
    "cate": "id",
    "price": 49.58,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Dale",
    "desc": "proident occaecat officia irure magna",
    "cate": "deserunt",
    "price": 4.24,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Fuentes",
    "desc": "consequat sunt qui anim sit",
    "cate": "et",
    "price": 45.63,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Schwartz",
    "desc": "voluptate id reprehenderit reprehenderit sint",
    "cate": "ea",
    "price": 66.4,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "Petersen",
    "desc": "ad dolore do dolore Lorem",
    "cate": "ut",
    "price": 64.68,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}]
