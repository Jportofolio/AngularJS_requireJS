/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['container',
        'config',
        'homeCtrl'],

  function(container,config){
   var jkula = angular.module('jkula',
            ['ngRoute']);
            jkula.config(config);
            jkula.controller('contactCtrl',['$scope','$q','$http','$rootScope'
                ,function($scope,$q,$http,$rootScope){
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
                                process.reject(err);
                            });
                  return process.promise;
                };
                this.submit = function(){
                   var promise = this.sending();
                   promise.then(function(){
                       $scope.tokens={};
                       console.log("Message has been sent");
                   },function(){
                       console.log("failed");
                   });
                };
            }]);
            jkula.controller('homePageCtrl',function(){
                     var hom = this;
                     hom.name ="J_kula";
                 });
           jkula.controller('aboutMeCtrl',function(){
                     var abt = this;
                    abt.hist ='hist';
                 });
            jkula.directive('wrapper',container);
            jkula.run(function($rootScope){
                $rootScope.endPoint = 'http://jkula';
            });
                   
                      
            
});
        

