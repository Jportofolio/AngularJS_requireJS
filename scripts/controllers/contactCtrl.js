/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


     
angular.module('jkula',[])
        .run(function($rootScope){
                $rootScope.endPoint = 'http://jkula';
            })
        .controller('contactCtrl',contactCtrl);
        
        var contactCtrl = function($scope,$q,$http,$rootScope){
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
            };
            contactCtrl.$inject = ['$scope','$q','$http','$rootScope',contactCtrl];
 
