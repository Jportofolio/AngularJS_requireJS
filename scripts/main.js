/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 require.config({
    appDir : '',
    //baseUrl : './scripts',
    
    //Defining paths
    paths  : {
        "jquery" : "../scripts/jquery/jquery",
        "angular" : "../scripts/angular/angular", 
        "bootstrap" : "../scripts/bootstrap/ui-bootstrap-tpls-0.12.1",
        "angularoute" : "../scripts/angular/angular-route",
        "container" : "../scripts/modules/container",
        "config"       : "../scripts/modules/config",
        "headerCtrl" : "../scripts/controllers/headerCtrl",
        //controllers
        "homeCtrl" : "../scripts/controllers/homeCtrl",
        "contactCtrl" : "../scripts/controllers/contactCtrl",
        "ModalObject" : "../scripts/controllers/ModalObject",
        "core" : "../scripts/controllers/core"
    },
    shim    : {
        //angular dependency
        "angular" : {
            deps:  ['jquery']
        },
        "bootstrap" : {
            deps : ['angular','jquery']
        },
        //angular-route dependency
        "angularoute" : {
            deps : ['angular']
        },
        
        "container" : {
            deps : ['config']
        }, 
        "config" : {
            deps : ['angular','angularoute']
        },
        "core" : {
           deps : ['angular','container','angularoute','bootstrap',
        'config',
        'headerCtrl',
        'contactCtrl',
        'ModalObject',
        'homeCtrl'] 
        },
        "headerCtrl" : {
            deps : ['angular']
        },
        "contactCtrl" : {
            deps : ['angular','angularoute','ModalObject']
        },
        "homeCtrl" : {
            deps : ['angular']
        }
    }
     
 });
 
 require(["angular","core"],function(){
    angular.bootstrap(document, ['jkula']); 
 });
 
 })();