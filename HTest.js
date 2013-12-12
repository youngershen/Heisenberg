//test init
Heisenberg.init(400, 300, "center", {});
Heisenberg.HVideo.init(60);


var drawPlain = function(ctx, e){
    var ctx = Heisenberg.context;
    ctx.clearRect(0, 0, ctx.canvas.getAttribute("width"), ctx.canvas.getAttribute("height"));
    ctx.beginPath();
    //ctx.strokeRect(e.clientX - (window.innerWidth / 2 - ctx.canvas.width / 2),e.clientY - (window.innerHeight/2 - ctx.canvas.height/2), 50, 50)
    var _x = e.clientX - (window.innerWidth / 2 - ctx.canvas.width / 2);
    var _y = e.clientY - (window.innerHeight/2 - ctx.canvas.height/2);
    ctx.arc(_x, _y, 50, 0, Math.PI * 2, true);
    //ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
//for test only
var drawCircle = function(position, radius){
    var ctx = Heisenberg.context;
    ctx.beginPath();
    if(position.x && position.y){
      x = position.x;
      y = position.y;
    }else{
      x = 0;
      y = 0;
    }

    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
}

//for test only
var random_move = function(){
    
    var position = {};
    var vector = {}; //  {{x, y},direction }
    //point location
    var p_x = Math.random() * 10;
    var p_y = Math.random() * 10;
    // vector 
    var v_x = Math.random() * 10;
    var v_y = Math.random() * 10;
    var point = {};
    point.x = p_x;
    point.y = p_y;
    var vector = {}
    vector.x = v_x;
    vector.y = v_y;
    vector.dir = (Math.random() * 10) % 2;


    var getVector = function(){

      var newVector = {};

    }

}


var drawCircle = function(){
   var ctx = Heisenberg.context;
   ctx.beginPath();
   ctx.arc();


}

 Heisenberg.context.canvas.onmousemove = function(e){

        HDebug.logger(e.clientX + ":" + e.clientY);
        drawPlain(Heisenberg.context, e);
}


var cycleCallback = function(timer){

     
}

//Heisenberg.HVideo.gameCycle(cycleCallback);

