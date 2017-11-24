myapp.controller('mainController',['$scope','$http',function($scope,$http){

    $scope.user={};

    $scope.Authentication = function () {
        console.log($scope.user)
        $http(
            {
                method: 'GET',
                url: '/api/login'
            }
        ).then(
            function successCallback(response) {
                $scope.userName = response.data.userDetails[0].name;
            },
            function errorCallback(error) {
                $scope.userName = '';
            }
        );
    }
}])