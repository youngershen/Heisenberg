
/*
 * author : younger.shen
 * email  : younger.x.shen@gmail.com
 */


// a game logic object
// it can own a picture or a animaton or nothing
// but it shou own the logic

(function(window){

    var HActor = {};
    if(window.Heisenberg){
        //window.Heisenberg.HActor = HActor;
        //actorContext {canvasContext, graphPattern}

        Heisenberg.HActor = function(image, callback){

            this.image = image;
            this.callback = callback;
         
            var actorConfig = {

                _x : 0,
                _y : 0
            }
            
            this.draw = function(){
                
                //save
                callback(actorConfig);
                Heisenberg.HVideo.stage2d.context.drawImage(image, actorConfig._x, actorConfig._y, image.width, image.height);
                //draw
                //restore 
            }


        }
    
    }else{

        HDebug.logger("HActor module init error!!!");
    }
})(window);
