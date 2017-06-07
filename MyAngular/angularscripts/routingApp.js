var app = angular.module("routingApp",["ngRoute"]);

app.config(['$routeProvider', function($routeProvider){
                $routeProvider.
                when('/home',{
                    templateUrl : 'home.html',
                    controller: 'HomeController'
                    
                }).
                when('/offices',{
                    templateUrl : 'offices.html',
                    controller: 'OfficeController'

                }).
                when('/location',{
                    templateUrl : 'location.html',
                    controller: 'locationController'

                }).
                otherwise({
                    redirectTo : '/home'
                });                 
      }]);



app.controller("HomeController", function($scope,$route){
    $scope.priorities = ['Quality','Time'];
    
    $scope.$on('$routeChangeSuccess', function(){
        $('.active').removeClass('active');
        $('#homeMenu').addClass('active');
    });
});

app.controller("OfficeController", function($scope, $route){
    
    $scope.$on('$routeChangeSuccess', function(){
        $('.active').removeClass('active');
        $('#officeMenu').addClass('active');
    });
    
});

app.controller("locationController", function($scope, $route){
    
    $scope.$on('$routeChangeSuccess', function(){
        $('.active').removeClass('active');
        $('#officeMenu').addClass('active');
    });
    
});