({
  
     paths  : {
        "jquery" : "../scripts/jquery/jquery",
        "angular" : "../scripts/angular/angular", 
        "angularoute" : "../scripts/angular/angularoute",
        "container" : "../scripts/modules/container",
        "config"       : "../scripts/modules/config",
        "headerCtrl" : "../scripts/controllers/headerCtrl",
        //controllers
        "homeCtrl" : "../scripts/controllers/homeCtrl",
        "myblogCtrl": "../scripts/controllers/myblogCtrl",
        "portfolioCtrl": "../scripts/controllers/portfolioCtrl",
        "footerCtrl" : "../scripts/controllers/footerCtrl",
        "bottomCtrl": "../scripts/controllers/bottomCtrl",
        "core" : "../scripts/controllers/core"
    },
    shim    : {
        //angular dependenc
        "core" : {
           deps : ['angular','angularoute'],
           exports: "core"
        },
        "headerCtrl" : {
            deps : ['angular'],
            exports: "headerCtrl"
            }
        },
  baseUrl: '../scripts',
  mainConfigFile: '../scripts/main.js',
  name: '../scripts/main',
  out: '../scripts/dist/main.js',
  removeCombined: true,
  findNestedDependencies: true

})





