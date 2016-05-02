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
    "name": "Apple",
    "desc": "sit pariatur aliqua nulla veniam",
    "cate": "fruits",
    "price": 57.43,
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg"
}, {
    "name": "Old Table",
    "desc": "velit labore quis sit eu",
    "cate": "furniture",
    "price": 33.83,
    "img": "http://www.ikea.com/PIAimages/0106117_PE253936_S5.JPG"
}, {
    "name": "Fancy Table",
    "desc": "proident nisi quis Lorem amet",
    "cate": "furniture",
    "price": 39.74,
    "img": "http://ak1.ostkcdn.com/images/products/6626651/6626651/Cottage-Oak-Dining-Table-P14192779.jpg"
}, {
    "name": "Beats Headphones",
    "desc": "voluptate excepteur dolor ad labore",
    "cate": "accesory",
    "price": 49.58,
    "img": "https://red.org/wp-content/uploads/2015/10/product-cat-tech2.jpg?w=1192"
}, {
    "name": "Apple Watch",
    "desc": "proident occaecat officia irure magna",
    "cate": "Devices",
    "price": 4.24,
    "img": "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/M/LD/MLDJ2/MLDJ2?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=RW-kR1"
}, {
    "name": "Banana",
    "desc": "consequat sunt qui anim sit",
    "cate": "fruits",
    "price": 45.63,
    "img": "http://s7d2.scene7.com/is/image/samsclub/0071752480873_A?wid=1500&hei=1500&fmt=jpg&qlt=80"
}, {
    "name": "HTC Vive",
    "desc": "voluptate id reprehenderit reprehenderit sint",
    "cate": "Devices",
    "price": 299.00,
    "img": "https://www.htcvive.com/managed-assets/shared/desktop/vive/VR_Web_Product_HMD.png"
}, {
    "name": "iPad",
    "desc": "ad dolore do dolore Lorem",
    "cate": "Devices",
    "price": 464.68,
    "img": "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/air/ipad-air-witb-gray-cel-201410_GEO_US?wid=366&hei=519&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=DN9lf2"
}]
