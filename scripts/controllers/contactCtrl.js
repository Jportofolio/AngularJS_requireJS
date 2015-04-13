/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("jkula",[]).run(function(e){e.endPoint="http://jkula.azurewebsites.net"}).controller("header",function(){var e=this;return e.gplus=function(){window.open("https://plus.google.com/106589448849905491636/about")},e.linkedin=function(){window.open("https://www.linkedin.com/pub/josue-kula/99/8b5/2")},e.faceme=function(){window.open("https://www.facebook.com/kool.max1")},e.twitt=function(){window.open("https://twitter.com/j_kuler")},e}).controller("contactCtrl",["$scope","$q","$http","$rootScope",function(e,t,n,r){this.status="submit",e.tokens={mail:"",fname:"",lname:"",title:"",organiz:"",comment:""},this.sending=function(){var i=t.defer();return n.post(r.endPoint+"/cgi-pages/contactme.php",e.tokens).success(function(e){i.resolve(e)}).error(function(e,t){i.reject(e,t)}),i.promise},e.resetform=function(){e.tokens={}},this.submit=function(){var t=this.sending();t.then(function(){e.tokens={}},function(){e.tokens={}})}}]);