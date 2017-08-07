var app = angular.module('app', []);

app.controller('tableDataCtrl', ['$scope', '$http', 'orderByFilter', '$timeout', ($scope, $http, orderBy, $timeout) => {
    $scope.json = 'Data not yet loaded.';

    $http.get('disposition/getAllLocations.json')
      .success(function(data) {
          $scope.json = data['jsonData'];
      })
      .error(function(error) {
        console.log(error);
      });

    $scope.id = true;
    $scope.locationCode = true;
    $scope.city = true;
    $scope.street = true;
    $scope.sPresentCars = true;
    $scope.sRequiredCars = true;
    $scope.mePresentCars = true;
    $scope.meRequiredCars = true;
    $scope.lPresentCars = true;
    $scope.lRequiredCars = true;
    $scope.xxxlPresentCars = true;
    $scope.xxxlRequiredCars = true;
    $scope.propertyName = 'id';
    $scope.reverse = true;

    $timeout(function(){
      $scope.rentData = orderBy($scope.json, $scope.propertyName, $scope.reverse);
    }, 100);

    $scope.sortBy = function(propertyName) {
      $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
          ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
      $scope.rentData = orderBy($scope.json, $scope.propertyName, $scope.reverse);
    };
    $scope.toggleId = function(){
      $scope.id = $scope.id === true ? false : true;
    }
    $scope.toggleLocationCode = function(){
      $scope.locationCode = $scope.locationCode === true ? false : true;
    }
    $scope.toggleCity = function(){
      $scope.city = $scope.city === true ? false : true;
    }
    $scope.toggleStreet = function(){
      $scope.street = $scope.street === true ? false : true;
    }
    $scope.togglesPresentCars = function(){
      $scope.sPresentCars = $scope.sPresentCars === true ? false : true;
    }
    $scope.togglesRequiredCars = function(){
      $scope.sRequiredCars = $scope.sRequiredCars === true ? false : true;
    }
    $scope.togglemePresentCars = function(){
      $scope.mePresentCars = $scope.mePresentCars === true ? false : true;
    }
    $scope.togglemeRequiredCars = function(){
      $scope.meRequiredCars = $scope.meRequiredCars === true ? false : true;
    }
    $scope.togglelPresentCars = function(){
      $scope.lPresentCars = $scope.lPresentCars === true ? false : true;
    }
    $scope.togglelRequiredCars = function(){
      $scope.lRequiredCars = $scope.lRequiredCars === true ? false : true;
    }
    $scope.togglemexxxlPresentCars = function(){
      $scope.xxxlPresentCars = $scope.xxxlPresentCars === true ? false : true;
    }
    $scope.togglexxxlRequiredCars = function(){
      $scope.xxxlRequiredCars = $scope.xxxlRequiredCars === true ? false : true;
    }

    $('.export').on('click', function(e){
        e.preventDefault();
        ResultsToTable();
    });

    function ResultsToTable(){
        $('.tableClass').table2excel({
            exclude: '.noExl',
            name: 'Results'
        });
    }
}]);
