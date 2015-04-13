/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],function(){function e(e){e.when("/home",{templateUrl:"wpages/entree.html",controller:"homeCtrl"}).when("/aboutme",{templateUrl:"wpages/aboutme.html"}).when("/myblog",{templateUrl:"wpages/myblog.html",controller:"myblogCtrl",controllerAs:"blg"}).when("/portfolio",{templateUrl:"wpages/portfolio.html",controller:"portfolioCtrl"}).otherwise({redirectTo:"/home"})}return["$routeProvider",e]});