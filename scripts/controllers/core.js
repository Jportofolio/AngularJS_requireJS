/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['container',
        'config',
        'headerCtrl',
        'contactCtrl',
        'homeCtrl'],

  function(container,config,headerCtrl,contactCtrl,homeCtrl){
   var jkula = angular.module('jkula',
            ['ngRoute']);
            jkula.config(config);
            jkula.controller('contactCtrl',contactCtrl);
            jkula.controller('homePageCtrl',homeCtrl);
            jkula.controller('HeaderCtrl',headerCtrl);
            jkula.controller('aboutMeCtrl',function(){
                     var abt = this;
                    abt.hist ='hist';
                 });
            jkula.directive('wrapper',container);
            jkula.run(function($rootScope){
                $rootScope.endPoint = 'http://jkula';
            });
                   
                      
            
});
        

