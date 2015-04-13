/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
<<<<<<< HEAD
define([
        'container',
        'config',
        'headerCtrl',
        'homeCtrl',
        'myblogCtrl',
        'portfolioCtrl'],

  function(
           container,
           config,
           headerCtrl,
           homeCtrl,
           myblogCtrl,
           portfolioCtrl){
             var jkula = angular.module('jkula',
            ['ngRoute','ui.bootstrap']);
            jkula.config(config);
            jkula.directive('wrapper',container); 
            jkula.controller('HeaderCtrl',headerCtrl);
            jkula.controller('homeCtrl',homeCtrl);
            jkula.controller('myblogCtrl',myblogCtrl);
            jkula.controller('portfolioCtrl',portfolioCtrl);
            jkula.controller('aboutMeCtrl',function(){
                     var abt = this;
                    abt.hist ='hist';
                 });
            
            jkula.run(function($rootScope){
                $rootScope.endPoint = 'http://jkula';
            });
                   
                      
            
});
        
=======
>>>>>>> 4c3c352791d56ab124ec2e67e2d40e303cfb1425

define(["container","config","headerCtrl","homeCtrl","myblogCtrl","portfolioCtrl","footerCtrl","bottomCtrl"],function(e,t,n,r,i,s,o,u){var a=angular.module("jkula",["ngRoute","ui.bootstrap"]);a.config(t),a.directive("wrapper",e),a.controller("HeaderCtrl",n),a.controller("homeCtrl",r),a.controller("myblogCtrl",i),a.controller("portfolioCtrl",s),a.controller("footerCtrl",o),a.controller("bottomCtrl",u),a.controller("aboutMeCtrl",function(){var e=this;e.hist="hist"}),a.run(function(e){e.endPoint="http://jkula"})});
