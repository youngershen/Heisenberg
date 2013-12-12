// a game logic object
// it can own a picture or a animaton or nothing
// but it shou own the logic

(function(window){

    var HActor = {};
    if(window.Heisenberg){
        window.Heisenberg.HActor = HActor;
        //actorContext {canvasContext, graphPattern}

        HActor.crateActor = function(actorID, actorContext){
            this.actorId = actorID;
            this.actorContext = actorContext;
        }
    }else{

        HDebug.logger("HActor module init error!!!");
    }

})(window);