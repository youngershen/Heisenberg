/*
 * author : younger.shen
 * email  : younger.x.shen@gmail.com
 */


//debug module
//dependences : noting 
//for test only better load the file in the first time when test the code 

(function(window){
    var HDebug = {};
    if(!window.HDebug){
        window.HDebug = HDebug;
    }

    HDebug.logger = function(args){

        var time = new Date();
        var loggerInfo = "";
        for(var i = 0 ; i < arguments.length ; i++){

            loggerInfo = loggerInfo +arguments[i] + " , ";
        }
        console.log(time + ":****** " + loggerInfo + "******");
    }

})(window);
