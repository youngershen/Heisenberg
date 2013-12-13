/*
 * author : younger.shen
 * email  : younger.x.shen@gmail.com
 */


Heisenberg.init(800, 600, "center", {});
Heisenberg.HVideo.init();


//add some actor
var image = new Image();
image.src = "lizi.png";

var callback = function(config){

    config._x += 1;
    config._y += 1;

}

image.onload = function(){

    HDebug.logger("load image complete");
    var actor = new Heisenberg.HActor(image, callback);
    Heisenberg.HVideo.actorCtl.addActor(actor);    
    //Heisenberg.HVideo.drawHActor();
}



