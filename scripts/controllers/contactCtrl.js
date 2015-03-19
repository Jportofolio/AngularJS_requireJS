/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


     
 define([],
    function(){
        
           function contactCtrl($scope,$q,$http,$rootScope){
               $scope.msgsent = false;
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
                       $scope.msgsent = true;
                       console.log("Message has been sent");
                   },function(){
                       console.log("failed");
                   });
                };
            }
            return ['$scope','$q','$http','$rootScope',contactCtrl];
 
});
