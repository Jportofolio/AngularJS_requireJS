/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],function(){
   var bottomCtrl = function(){
       var bt = this;
        bt.gplus = function(){
            window.open("https://plus.google.com/106589448849905491636/about");
        };
        bt.w3 = function(){ 
            window.open("http://www.w3.org");
         }; 
        
        bt.linkedin = function(){
            window.open("https://www.linkedin.com/pub/josue-kula/99/8b5/2");
         };
        
        bt.faceme = function(){
          window.open("https://www.facebook.com/kool.max1");  
        };
        
        bt.twitt = function(){
            window.open("https://twitter.com/j_kuler");
        };
       return bt;
   };
    return bottomCtrl;
});
