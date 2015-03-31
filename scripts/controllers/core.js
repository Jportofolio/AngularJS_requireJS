/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([
        'container',
        'config',
        'headerCtrl',
        'homeCtrl',
        'myblogCtrl',
        'portfolioCtrl',
        'footerCtrl'],

  function(
           container,
           config,
           headerCtrl,
           homeCtrl,
           myblogCtrl,
           portfolioCtrl,
           footerCtrl){
             var jkula = angular.module('jkula',
            ['ngRoute','ui.bootstrap']);
            jkula.config(config);
            jkula.directive('wrapper',container); 
            jkula.controller('HeaderCtrl',headerCtrl);
            jkula.controller('homeCtrl',homeCtrl);
            jkula.controller('myblogCtrl',myblogCtrl);
            jkula.controller('portfolioCtrl',portfolioCtrl);
            jkula.controller('footerCtrl',footerCtrl);
            jkula.controller('aboutMeCtrl',function(){
                     var abt = this;
                    abt.hist ='hist';
                 });
            
            jkula.run(function($rootScope){
                $rootScope.endPoint = 'http://jkula';
            });
                   
                      
            
});
        

