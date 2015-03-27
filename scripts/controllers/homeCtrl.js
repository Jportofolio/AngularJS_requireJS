/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],function(){
    var homeCtrl = function($location){
       var hm = this;
       
       hm.aboutme = function(){
          $location.path ='/aboutme';   
       };
    };
    return ['location',homeCtrl];
});
