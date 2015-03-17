/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(["container","config"],

  function(container,config){
   var jkula = angular.module('jkula',
            ['ngRoute']);
            jkula.config(config); 
            jkula.factory('contactMe',[function(checking){
                    
                     'use strict';
                checking = {};
        
                checking.email = function(e,f){
                   var ex = [f,e];
                        //checking email
                        return ex.join('.');
                };
                
                checking.fname = function(e,f){
                  var ex = [f,e];
                  return ex.join('.');
                };
                checking.lname = function(e,f){
                    var ex = [f,e];
                    return ex.join('.');
                };
                 checking.title = function(e,f){
                   var ex = [f,e];
                   return ex.join('.');
                 };
                 checking.orgiz= function(e,f){
                    var ex = [f,e];
                    return ex.join('.');
                 };
                 checking.comment = function(f,e){
                     var ex = [f,e];
                     return ex.join('.');
                 };
                return checking;
            }]); 
            jkula.controller('contactMeCtrl', function(contactMe){
                        
                         this.mail = contactMe.email("email","kcontact");
                         this.fn = contactMe.fname("fname","kcontact");
                         this.ln = contactMe.fname("lname","kcontact");
                         this.tit = contactMe.title("title","kcontact");
                         this.comment = contactMe.comment("comment","kcontact");
                         this.orgz = contactMe.orgiz("organiz","kcontact");
                         // 
                         
                         this.submit = function(){
                            
                         };
                
               });
          
           jkula.controller('homePageCtrl',function(){
                     var hom = this;
                     hom.name ="J_kula";
                 });
           jkula.controller('aboutMeCtrl',function(){
                     var abt = this;
                    abt.hist ='hist';
                 });
            jkula.directive('wrapper',container);
                   
                      
            
});
        

