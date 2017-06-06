var app = angular.module("todayapp", ["ngResource"]);

app.constant("tax", 0.05);

app.service("personProvider", function(tax){
    this.person = [];
    this.addPerson = function(x){
        
        if(x.salary > 20000){
            x.salary = x.salary * tax;
        }
        
        this.person.push(x);
    }
    
});

app.controller("formController", function($scope, personFactory, $resource, $rootScope){
    
    $scope.addPerson = function(){
        x= {};
        x.ProductID = $scope.sno;
        x.ProductName = $scope.name;
        x.ProductType = $scope.age;
        x.Price = $scope.salary;
        
        $scope.msg1 = "";
        $scope.msg2 = "";
        $scope.msg3 = "";
        $scope.msg4 = "";
        
        if($scope.sno.length == 0 || $scope.sno < 0){
            $scope.msg1 = "SNO Cannot be empty or negative";
        }
        
        if($scope.name.length == 0){
            $scope.msg2 = "Name Cannot be empty";
        }
        
        if($scope.age.length == 0 || $scope.age < 12){
            $scope.msg3 = "Age Cannot be empty or less than 12";
        }
        
        
        if($scope.msg1 === "" && $scope.msg2 === "" && $scope.msg3 === ""){
            personFactory.addPerson(x);    
        }
        
        var prod = $resource("https://sheetsu.com/apis/v1.0/d63ce3b699c2");
        
        prod.save(x).$promise.then(function(date){
            alert('saved');
            // BroadCast the event
            $rootScope.$broadcast('added', x);
        });
        
        $scope.$watch('name',function(ov,nv){
            
            console.log(ov + " " + nv);
            console.log("name value has changed");
            
        });
        
    }
});

// Using Service As injection
/*app.controller("tableController", function($scope,personProvider){
    
   $scope.people = personProvider.person; 
});*/

// Using Factory as injection
app.controller("tableController", function($scope,personFactory, $http, $resource){
    
   //$scope.people = personFactory.person; 
    
   /* $http.get("https://sheetsu.com/apis/v1.0/d63ce3b699c2").then(
    function(res){
        
        $scope.products = res.data;
    }
    
    )*/
    
    var prod = $resource("https://sheetsu.com/apis/v1.0/d63ce3b699c2");
    prod.query().$promise.then(function(res){
        alert("got response");
        
        $scope.products = res;
        
        
        
    });
    
    //Listening broadcasted event
   $scope.$on("added",function(event,pro){
       $scope.products.push(pro);
       console.log("subsribed");
   });
    
    $scope.$watchCollection('products',function(){
       console.log("Something is changed in Products"); 
    });
    
    
});

app.factory("personFactory", function(tax){
            return {
            person:[],
            addPerson: function(x){
        if(x.salary > 20000){
            x.salary = x.salary * tax;
        }
        
        this.person.push(x);
}
            
            }
            
            });

app.controller("factoryController", function($scope,consoleFactory){
    
    consoleFactory("test");
   
});

app.factory("consoleFactory",function(){
    
    return function(x){
       console.log(x + " is running");
        
    }
    
});

app.filter("texit", function(){
    
   return function(value){
       if(value > 40000){
           return value = value *0.05;       
       }
       else if (value > 20000){
           return value = value * 0.03;
       }
       else {
           return value= value * 0.02;
       }
   } 
});

app.filter("searchNames", function(){
    
   return( function(all,pattern){
       
       var reg = new RegExp(pattern);
       var result =[];
       
       for( var x in all){
           if(reg.test(all[x].name)){
               result.push(all[x]);
           }
       }
       return result;
   })
});