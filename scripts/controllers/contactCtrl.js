/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([],function(){
    
    function contactCtrl(contactMe){
                        
                         this.mail = contactMe.email("email","kcontact");
                         this.fn = contactMe.fname("fname","kcontact");
                         this.ln = contactMe.fname("lname","kcontact");
                         this.tit = contactMe.title("title","kcontact");
                         this.comment = contactMe.comment("comment","kcontact");
                         this.orgz = contactMe.orgiz("organiz","kcontact");
                         // 
                         
                         this.submit = function(){
                             
                         };
                
                 }
    
    return contactCtrl;
});
