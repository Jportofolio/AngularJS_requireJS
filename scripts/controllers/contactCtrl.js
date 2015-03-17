/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["angular"],
     function (angular){
     
    angular.module('contact',[])
            .controller('contactCtrl',function(){
               this.submit = function(){
                   console.log("sending");
               }; 
            });
});
