/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],
  function(){
      var footerCtrl = function(){
        var ft = this;
        //technologies part
        ft.html = function(){
          window.open("http://www.w3.org/html5");  
        };
        ft.jav = function(){
            window.open("https://netbeans.org/kb/articles/learn-java.html");
        };
        ft.mysql = function(){
            window.open("https://www.mysql.com");
        };
        ft.angulus = function(){
          window.open("https://angular.io/");
          
        };
        ft.nod = function(){
          window.open("https://nodejs.org/");  
        };
        ft.apache = function(){
          window.open("http://projects.apache.org/indexes/releases.html");  
        };
        return ft;
     };
     return footerCtrl;
    
});
