angular.module('HotelRoomApp',[]);
var locationListCtrl = function ($scope) {
    $scope.data = {
    locations: [{
        name: 'Tulips',
        address: 'jodimetla,pocharam,hyderabad',
        rating: 3,
        facilities:['rooms', 'Food', 'Spa'],
        distance: '100m',
        href: '/location'
    }, {
        name: 'Novotel',
        address: 'Hi-Tech City',
        rating: 4,
        facilities: ['Clean and spacious Rooms', 'Restaurant', 'wellness center'],
        distance: '200m',
        href: '/location2'
    }, {
        name: 'ITc Kaktaiya',
        address: 'Begumpet,hyderabad',
        rating: 2,
        facilities: ['Food', 'Rooms'],
        distance: '250m',
        href: '/location3'
    }]};
    $scope.getLocationURL = function(index) {
        if (index === 0) {
            return '/location';
        } else {
            return '/location' + (index + 1);
        }
    };    
};

angular
    .module('HotelRoomApp')
    .controller('locationListCtrl', locationListCtrl)