/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


     
angular.module('jkula',[])
        .run(function($rootScope){
                $rootScope.endPoint = 'http://www.josuekula.com';
            })
        .controller('header',function(){
            var bt = this;
        bt.gplus = function(){
            window.open("https://plus.google.com/106589448849905491636/about");
        };
        bt.linkedin = function(){
            window.open("https://www.linkedin.com/pub/josue-kula/99/8b5/2");
         };
        
        bt.faceme = function(){
          window.open("https://www.facebook.com/kool.max1");  
        };
        
        bt.twitt = function(){
            window.open("https://twitter.com/j_kuler");
        };
        return bt;    
        })
        .controller('contactCtrl',['$scope','$q','$http','$rootScope',
           function($scope,$q,$http,$rootScope){
              this.status = 'submit';
               $scope.tokens = {
                    mail: '',
                    fname : '',
                    lname: '',
                    title :'',
                    organiz: '',
                    comment :''
                };
                this.sending = function(){
                     var process = $q.defer();
                    $http.post($rootScope.endPoint+ '/cgi-pages/contactme.php',$scope.tokens)
                            .success(function(res){
                                process.resolve(res);
                                
                            }). error(function(err, status){
                                process.reject(err,status);
                            });
                  return process.promise;
                };               
                 $scope.resetform = function(){
                 $scope.tokens = {};
              };
                this.submit = function(){
                   var promise = this.sending();
                   promise.then(function(){
                        $scope.tokens = {};
               
                   },function(){
                       $scope.tokens = {};
                   });
                };
            }]);
 