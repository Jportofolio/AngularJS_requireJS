/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

   define([],function(){
    
        function MessageHttp($q,$http,$rootScope){
            var Messhttp = this;
            Messhttp.tokens = {};
          Messhttp.sending = function(Messhttp){
              var process = $q.defer();
            $http.post($rootScope.endPoint + '/cgi-pages/contactme.php',Messhttp)
                    .success(function(res){
                        process.resolve(res);
                    })
                    .error(function(err, status){
                        process.reject(err);
                    });
          return process.promise;
        };
            //Starting the promise
            
        }
       MessageHttp.$inject = ['$q','$http','$rootScope'];
       return MessageHttp;
              
}); 
       


  
    

     

