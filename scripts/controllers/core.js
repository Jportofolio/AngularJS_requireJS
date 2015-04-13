/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["container","config","headerCtrl","homeCtrl","myblogCtrl","portfolioCtrl","footerCtrl","bottomCtrl"],function(e,t,n,r,i,s,o,u){var a=angular.module("jkula",["ngRoute","ui.bootstrap"]);a.config(t),a.directive("wrapper",e),a.controller("HeaderCtrl",n),a.controller("homeCtrl",r),a.controller("myblogCtrl",i),a.controller("portfolioCtrl",s),a.controller("footerCtrl",o),a.controller("bottomCtrl",u),a.controller("aboutMeCtrl",function(){var e=this;e.hist="hist"}),a.run(function(e){e.endPoint="http://jkula"})});