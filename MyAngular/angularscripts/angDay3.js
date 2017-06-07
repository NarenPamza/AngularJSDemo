var app = angular.module("third",[]);

app.controller("rootController",function($scope,$rootScope){
    $scope.animals = ['rat','rabbit','tiger'];
    $scope.things=['pen','pencil'];
    $scope.vehicles=['car','lorry'];
    $scope.name = "Rajan";
    
    $rootScope.parentName = "Rajan";
});

app.directive("myDir", function(){
    var object = {
        
        scope : true,
        
        link: function($scope,element,attr){
            console.log(element);
            console.log(attr);
            element.append("<h1> This data is added by directory");
            console.log(attr.current);
            element.css("backgroundColor", "tomato");
            
            switch(attr.current){
                    
                case "animals":
                    $scope.current = $scope.animals;
                    break;
                    
                    case "things":
                    $scope.current = $scope.things;
                    break;
                    
                    case "vehicles":
                    $scope.current = $scope.vehicles;
                    break;
                    
            }
            
            console.log($scope.current);
            
        }
        
    }
    return object;
    
    
});

app.directive("scopeDefiner", function(){
    var obj = {scope:{
        // = means , we are going to pass object for x
        x: '=',
        
        // @ means, we are going to pass string for y
        // & means, we can pass function name 
        y: '@'
        
    },
               
    controller: function($scope){
        
        $scope.data = "Raj";
        
    },
              
    template: "<div class='alert alert-success'> {{x}}, {{y}}, {{data}} <br> <input type = 'text' ng-model='x'>  </div>"
               
                        
              
              
    }
    
    return obj;
    
})