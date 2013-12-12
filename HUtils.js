/*
 *the util module file 
 *contains some kind of util method
 *Dependences : none
 */

 (function(window){

    var HUtils = {}
    if(!window.HUtils){

        window.HUtils = HUtils;
    }

    HUtils.objectConfig = function(sourceObject, attrs){

        for(var i in attrs){
            
            if(sourceObject[i] != "undefined"){
                sourceObject[i] = attrs[i];
            }
        }
    }

 })(window);