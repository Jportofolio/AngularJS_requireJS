/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(function(){
    
  function contactform(checking){
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
              };
    return contactform;
});



