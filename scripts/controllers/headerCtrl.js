/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define([],
          function(){
    
   function headerCtrl($http,$rootScope){
         var that = this;
         var site = 'http://jkula';
         //Loaging images in javascript
         that.Img = {
             linkin: site +'/wImages/slinkedin.png',
             face: site +'/wImages/sface.png',
             gplus : site +'/wImages/sgplus.png',
             twitt: site + '/wImages/stwitter.png'
         };

  
        that.gplus = function(){
            window.open("https://plus.google.com/106589448849905491636/about");
        };
        that.openrepo = function(){ 
            window.open("https://github.com/Jportofolio");
         }; 
        
        that.linkedin = function(){
            window.open("https://www.linkedin.com/pub/josue-kula/99/8b5/2");
         };
        
        that.faceme = function(){
          window.open("https://www.facebook.com/kool.max1");  
        };
        
        that.twitt = function(){
            window.open("https://twitter.com/j_kuler");
        };
        that.home = function(){
           window.location.href ="#home";  
        };
      return that;
    };
    return headerCtrl;
});