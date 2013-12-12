
(function(window){

    var Heisenberg = {};
    if(!window.Heisenberg){

        window.Heisenberg = {};
        Heisenberg = window.Heisenberg;
    }else{

        console.log("init failed !!!");

    }

    // init the context
    // width      : int | the width of your canvas
    // height     : int | the height of your canvas
    // position   : emu | "left" | "right" | "center"
    /* canvasAttr : object contains the attributes the CanvasRenderingContext2D object has, it do not support the attrs it will be default value
     * {
     *   canvas                   : "currentCanvas",
     *   fillStyle                : "#000000", 
     *   globalAlpha              : "1",
     *   globalCompositeOperation : "source-over",
     *   lineJoin                 : "miter",
     *   lineCap                  : "butt",
     *   lineWidth                : "1",
     *   miterLimit               : "10",
     *   shadowBlur               : "0",
     *   shadowColor              : "rgba(0, 0, 0, 0)",
     *   shadowOffsetX            : "0",
     *   shadowOffsetY            : "0",
     *   strokeStyle              : "#000000"
     * }
     */   
    var init2dContext = function(width, height, position, canvasAttr){

        if(Heisenberg.context){
            return Heisenberg.context;
        }else{
            var canvas = window.document.createElement("canvas");
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            if(canvas){
                window.document.body.appendChild(canvas);
                var cxt = canvas.getContext("2d");
                Heisenberg.context = cxt;
                //define position
                canvas.style.position = "absolute";
                var wHeight = window.innerHeight;
                var wWidth  = window.innerWidth;
                canvas.style.top = (wHeight / 2) - (height / 2) + "px";
                
                switch(position){
                    
                    case "left"  :
                    //  
                        canvas.style.left = 0 + "px";
                        break;
                    case "right" :
                    //  
                        canvas.style.right = 0 + "px";
                        break
                    case "center":
                    //  
                       canvas.style.left  = (wWidth / 2) - (width / 2) + "px";
                        break;
                    default:
                        canvas.style.left   = (wWidth / 2) - (width / 2) + "px";

                }
                //init CanvasRenderingContext2D object attributes
                HUtils.objectConfig(Heisenberg.context, canvasAttr);
            }else{
                console.log("init failed");
            }
       }
    }
    //init the engine

    Heisenberg.init = function(width, height, position, canvasAttr){

        init2dContext(width, height, position, canvasAttr)
    }
    
})(window)