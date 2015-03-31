/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],function(){
    var homeCtrl = function(){
       var hm = this;
       
       hm.aboutme = function(){
          window.location.href ="#aboutme";  
       };
       hm.myblog = function(){
           window.location.href="#myblog";
       };
       hm.portfolio = function(){
           window.location.href="#portfolio";
       };
       return hm;
    };
    return homeCtrl;
});
