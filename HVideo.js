/*
 * author : younger.shen
 * email  : younger.x.shen@gmail.com
 */

/*
 * the video module contins many video control method for the canvas
 */

 (function(window){

    var HVideo = {};
    if(!window.Heisenberg){

        HDebug.logger("video init error !!!");
    }else{

        window.Heisenberg.HVideo = HVideo;

    }
    //private methods
    var saveCanvasStatus = function(){

        Heisenberg.context.save()
    }
    var clearnCanvasStage = function(){
        var ctx = Heisenberg.context;
        ctx.clearRect(0, 0, ctx.canvas.getAttribute("width"), ctx.canvas.getAttribute("height"));
    }
    //private method end
    var restoreCanvasStatus = function(){
        Heisenberg.context.restore();
    }
    //private methods ends

    HVideo.drawHActor = function(HActorObj){

        saveCanvasStatus();
        HVideo.setCanvasAttr(HActorObj.actorContext.canvasContext);
        //draw graph
        //restore canvas
        restoreCanvasStatus();


    }

    
    HVideo.init = function(fps){

        HVideo.FPS = fps || 60
    }
    
    HVideo.setCanvasAttr = function(canvasAttr){

        HUtils.objectConfig(Heisenberg.context, canvasAttr);
    }

    HVideo.gameCycle = function(callback){

        var ctx = Heisenberg.context;
        var x = 0;
        var y = 0;
        if(!HVideo.timer){

            HVideo.timer = setInterval(function(){
            
              
            clearnCanvasStage();
            },1000 / HVideo.FPS);

        }else{

            HDebug.logger("game cycle init error !!!");
        }

    }

 })(window);
