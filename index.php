<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>J_KULA</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <script type="text/javascript" data-main="scripts/main.js" src="scripts/require.js"></script>
         <link rel="stylesheet" href="../css/styleHead.css"/>
         <link href="css/aboutme.css" rel="stylesheet" type="text/css"/>
         <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Josefin+Slab" />
    </head>
    <body style="margin: 0; padding: 0;"> 
        <header ng-controller="HeaderCtrl as hd">
             <div id="smHeader">
                 <div class="socialm">
                     <div class="github">
                         <img ng-click="hd.openrepo()" src="../wImages/sgithub.png"/>
                        <p>Public Repo...</p> 
                     </div>
                         
                     <div class="others">
                         <img ng-click="hd.linkedin()" src="../wImages/slinkedin.png"/>
                         <img ng-click="hd.gplus()" src="../wImages/sgplus.png"/>
                         <img ng-click="hd.faceme()" src="../wImages/sface.png"/>
                         <img ng-click="hd.twitt()" src="../wImages/stwitter.png"/>
                     </div>
                 </div>
            </div> 
            <div id="bnavi" >
            <nav> 
                <ul>
                    <li>
                <a href="#aboutme"> <img src="../wImages/0-saboutme.png"/>About J.kula</a></li>
                <li><a href="#myblog"><img src="../wImages/4-smyblog.png"/>MyBlog</a></li>
                <li><a href="#portfolio"><img src="../wImages/3sportfolio.png"/>Portfolio</a></li>
                <li><a href="wpages/contact.html"><img src="../wImages/1-contact.png"/>Contact</a></li>
            </ul>
            </nav>
           
        </div>
            <!--Square Background -->
            <div id="squareback">
                <div class="mdetails">
                    <div class="mimage">
                        <img ng-click="hd.home()" alt="Jkula profile Picture" src="../wImages/Jkula_001.png"/>
                        
                    </div>
                    <div  class="mprof">
                        <p>JOSUE KULA</p>
                        <p>Software Developer</p>
                        <p>Josh.kula@outlook.com</p>
                  </div>
                </div>     
            </div>
        </header>
            
    <wrapper>
        <div id="Loader">
            <div class="LoaderWrapper">
                <div class="centerloader">
                    <img src="techImage/Jloader.GIF" alt="loader"/>
                </div>
            </div>
            
        </div>
    </body>
</html>
    </wrapper>
    
     <!-- This is the TECHNOLOGY -->
     <div id="Learntech" ng-controller="footerCtrl as ft">
           <div class="yeswecan">Learn More</div>
           <div id="techwrapper">
               <!--- LEARN MORE --->
               <div class="learnmore">
                   <div class="techimg">
                    <img ng-click="ft.html()" alt="Lear more about HTML5" src="../techImage/shtml5.png" />
                    <img ng-click="ft.jav()" alt="Learn more about Java" src="../techImage/sjava.png" />
                    <img ng-click="ft.mysql()" alt="Learn more about Mysql" src="../techImage/smysql.png" />
                    <img ng-click="ft.angulus()" alt="Learn more about Angularjs" src="../techImage/sangular.png" />
                    <img ng-click="ft.nod()" alt="Learn more about Nodejs" src="../techImage/snode.png" />
                    <img ng-click="ft.apache()" alt="Learn more about Apache Server" src="../techImage/sapache.png" />
                  </div>
                   
               </div>
                
           </div>  
       </div>
       <!-- This is the Footer -->
    <footer>
           <!-- this is the sub-menu -->
           <div id="wrapper2">
               <div id="submenu">
               <ul>
                   <li><a href="#aboutme">About J.kula</a></li>
                   <li><a href="#myblog">Myblog</a></li>
                   <li><a href="#portfolio">Portfolio</a></li>
                   <li><a href="wpages/contact.html">Contact</a></li>
               </ul> 
               </div>
               <div id="lastblock" ng-controller="bottomCtrl as bt">
               <!-- Connect block -->
               <div class="connect" >
                   <p>Connect <span> </span>></p>
                   <div class="subsmedia">
                       <img ng-click="bt.linkedin()" src="../wImages/slinkedin.png"/>
                       <img ng-click="bt.gplus()" src="../wImages/sgplus.png"/>
                       <img ng-click="bt.faceme()" src="../wImages/sface.png"/>
                       <img ng-click="bt.twitt()" src="../wImages/stwitter.png"/>
                   </div>
                   <div class="rights">
                       &COPY; Josue Kula.com
                   </div>
               </div>
               <!-- WWW Consortium -->
               <div class="w3c">
                   <img ng-click="bt.w3()" src="../techImage/sw3.png" />
               </div>
               <!-- contact me -->
               <div class="contact">
                   <div class="mnom"><img src="../wImages/myname.png" /></div>
                   <div class="place"><img src="../wImages/splace.png" /></div>
                   <div class="semail"><img src="../wImages/semail.png" /></div>
               </div>
               
               </div>
           </div>  
       </footer>
    </body>
</html>
