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


app.controller("dataController", function($scope,$rootScope,$interval){
               
               $scope.things=['pen','Pencil', 'mat'];
    
    $scope.names=['Ajay','Akram', 'Roger'];
    
    $scope.addItem = function(){
        $scope.things.push($scope.currentValue);
    }
    
    $scope.addPeople = function(){
        var temp = {};
        temp.sno = Math.round(Math.random() *1200) +1;
        temp.name = $scope.names[Math.floor(Math.random()*3)];
        temp.age= Math.round(Math.random() *79) +1;
        temp.salary = 5000 + Math.round(Math.random()*20000);
        console.log(temp);
        $scope.people.push(temp);
        
    }
    
    $interval(function(){$scope.addPeople()},3000);
    
    
    
    $scope.onSelect = function(p){
        
        if(p == $scope.sort){
            $scope.sort = "-"+p;
        }else
            {
                $scope.sort =p;
            }
        
    }
    
    $scope.people=[
        {sno:117,name:"rajan",age:45,salary:10000},
        {sno:113,name:"ravi",age:47,salary:15000},
        {sno:114,name:"suresh",age:48,salary:"15000"},
        {sno:115,name:"kumar",age:49,salary:"15000"},
        {sno:116,name:"ravi kumar",age:50,salary:"15000"}
        
        
    ];
    
});


app.controller("parent", function($scope){
    
    $scope.x = "Parent Value";
    $scope.toggle = false;
    $scope.btnText = "hide";
    $scope.handle = function(){
        if($scope.btnText == "hide"){
            $scope.toggle = true;
             $scope.btnText = "show";
            
        }else{
            $scope.toggle = false;
             $scope.btnText = "hide";
        }
        
    }
    
    $scope.eventHandler = function(){
        $scope.y = "The Value of Y is: " + $scope.x + " " + Math.random();
    }   
    
});

app.controller("child", function($scope){
               
      
    
});