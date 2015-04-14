/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs.config({
    
      shim    : {
        //angular dependency
        "angular" : {
            deps:  ['jquery'],
            exports: "angular"
        },
        //angular-route dependency
        "angularoute" : {
            deps : ['angular'],
            exports : "angularoute"
        },
        "angular-animate" :{
            deps : ['angular'],
            exports: "angular-animate"
        },
        "container" : {
            deps : ['config'],
            exports: "container"
        }, 
        "config" : {
            deps : ['angular','angularoute'],
            exports: "config"
        },
        "core" : {
           deps : ['angular','angularoute'],
           exports: "core"
        },
        "headerCtrl" : {
            deps : ['angular'],
            exports: "headerCtrl"
        },
        "homeCtrl" : {
            deps : ['angular'],
            exports: "homeCtrl"
        },
        "myblogCtrl" : {
            deps: ['angular'],
            exports: "myblogCtrl"
        },
        "portfolioCtrl" : {
            deps: ['angular'],
            exports: "portfolioCtrl"
        },
        "footerCtrl" : {
            deps: ['angular'],
            exports: "footerCtrl"
        },
        "bottomCtrl":{
            deps : ['angular'],
            exports: "bottomCtrl"
        }
    } 
});
 