/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([
        'container',
        'config',
        'headerCtrl',
        'contactCtrl',
        'homeCtrl'],

  function(
           container,
           config,
           headerCtrl,
           contactCtrl,
           homeCtrl){
             var jkula = angular.module('jkula',
            ['ngRoute','ui.bootstrap']);
            jkula.config(config);
            jkula.directive('wrapper',container); 
            jkula.controller('HeaderCtrl',headerCtrl);
            jkula.controller('homeCtrl',homeCtrl);
            jkula.controller('contactCtrl',contactCtrl);
            jkula.controller('aboutMeCtrl',function(){
                     var abt = this;
                    abt.hist ='hist';
                 });
            
            jkula.run(function($rootScope){
                $rootScope.endPoint = 'http://jkula';
            });
                   
                      
            
});
        

