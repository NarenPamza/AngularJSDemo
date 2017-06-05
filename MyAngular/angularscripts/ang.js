var app= angular.module("firstapp",[]);

app.controller("firstController", function($scope,$rootScope){
               console.log("The Controller is working properly");
    $scope.x = "This is under first controller";
    
    $scope.info = "Not initialized yet";
    $rootScope.parentInfo = "Parent Not initialized yet";
    $scope.handleChange= function(){
        $scope.info = "Length of variable x is " + $scope.x.length;
    }
    
     $scope.handleParent= function(){
         
         $rootScope.parentInfo = ""
        $rootScope.parentInfo = "Length of Parent variable x is " + $rootScope.x.length;
    }
               
});


app.controller("dataController", function($scope,$rootScope){
               
               $scope.things=['pen','Pencil', 'mat'];
    
    $scope.addItem = function(){
        $scope.things.push($scope.currentValue);
    }
    
    $scope.people=[
        {sno:112,name:"rajan",age:45,salary:10000},
        {sno:113,name:"ravi",age:47,salary:15000},
        {sno:114,name:"suresh",age:48,salary:"15000"},
        {sno:115,name:"kumar",age:49,salary:"15000"},
        {sno:116,name:"ravi kumar",age:50,salary:"15000"}
        
        
    ];
    
});