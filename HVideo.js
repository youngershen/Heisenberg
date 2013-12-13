/*
 * author : younger.shen
 * email  : younger.x.shen@gmail.com
 */

/*
 * the video module contins many video control method for the canvas
 */

 (function(window){

    var HVideo       = {};
    var actorBuffer  = new Array();
    var stage2d      = {};
    stage2d.frameTime    = 0;
    stage2d.thisLoopTime = 0;
    stage2d.lastLoopTime = 0;


    if(!window.Heisenberg){

        HDebug.logger("video init error !!!");
    }else{

        window.Heisenberg.HVideo = HVideo;

    }

    HVideo.actorCtl = {

        addActor : function(actor){

            actorBuffer.push(actor);
        },

        removeActor : function(){

        }

    }
 
    stage2d.frameLoop = function(){
    
        stage2d.thisLoopTime = new Date();
        stage2d.frameTime = stage2d.thisLoopTime - stage2d.lastLoopTime ;
        stage2d.lastLooptime = stage2d.thisLooptime;
    }

    stage2d.saveCanvasStatus = function(){

        stage2d.context.save()
    }

    stage2d.restoreCanvasStatus = function(){
        Heisenberg.context.restore();
    }

    stage2d.cleanCanvasStage = function(){
    
        stage2d.context.clearRect(0, 0, stage2d.ctxWidth, stage2d.ctxHeight);
        stage2d.context.fillStyle = "black";
        stage2d.context.fillRect(0, 0, stage2d.ctxWidth, stage2d.ctxHeight);
        
    }

    HVideo.drawHActor = function(){
       
        stage2d.lastLoopTime = new Date();
        //draw the spirits

        for(var i = 0 ; i < actorBuffer.length; i++){
        
            stage2d.cleanCanvasStage();
            actorBuffer[i].draw();
        }

        stage2d.frameLoop();
         
        HDebug.logger((1000 / stage2d.frameTime).toFixed(1));
        setTimeout("Heisenberg.HVideo.drawHActor()",0);
    }
   

    var stageCtl = {

        setBackgroundColor : function(color){
            
        }
    }
    
    HVideo.init = function(){

        stage2d.context     = Heisenberg.context;
        stage2d.ctxWidth    = stage2d.context.canvas.getAttribute("width");
        stage2d.ctxHeight   = stage2d.context.canvas.getAttribute("height");
        HVideo.stage2d      = stage2d;
    }
    
    HVideo.setCanvasAttr = function(canvasAttr){

        HUtils.objectConfig(Heisenberg.context, canvasAttr);
    }


 })(window);
