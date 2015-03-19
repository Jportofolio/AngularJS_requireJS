/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define([],function(){
    return function container(){
        //wrapper = {};
        return {
            scope :true,
            restrict:'E',
            link:function(s,e,a){
               //angular.element(e).fadeIn(300);
               
            },
            template:'<div ng-view="" id="bicong"> Loading...</div>'
        };
    };
 
});
