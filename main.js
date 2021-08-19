var canvas=new fabric.Canvas("myCanvas");
Blocks_width=30;
Blocks_height=30;

Player_x=10;
Player_y=10;
var Player_object="";
var Blocks_object="";
function Player_Update(){
fabric.Image.fromURL("player.png",function(Img){
    Player_object=Img;
    Player_object.scaleToWidth(150);
    Player_object.scaleToHeight(140);
    Player_object.set({
        top:Player_y,left:Player_x
    });
    canvas.add(Player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        Blocks_object=Img;
        Blocks_object.scaleToWidth(Blocks_width);
        Blocks_object.scaleToHeight(Blocks_height);
        Blocks_object.set({
            top:Player_y,left:Player_x
        });
        canvas.add(Blocks_object);
    });
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey==true && keyPressed=='80'){
            console.log("p and shift pressed together");
Blocks_width=Blocks_width+10;
Blocks_height=Blocks_height+10;
document.getElementById("current_width").innerHTML=Blocks_width;
document.getElementById("current_height").innerHTML=Blocks_height;
        }
        if(e.shiftKey==true && keyPressed=='77'){
            console.log("m and shift pressed together");
Blocks_width=Blocks_width-10;
Blocks_height=Blocks_height-10;
document.getElementById("current_width").innerHTML=Blocks_width;
document.getElementById("current_height").innerHTML=Blocks_height;
        }
        if(keyPressed=='37'){
            left();
            console.log("left");

        }
        if(keyPressed=='38'){
            up();
            console.log("up");
            
        }
        if(keyPressed=='39'){
            right();
            console.log("right");
            
        }
        if(keyPressed=='40'){
            down();
            console.log("down");
            
        }
        if(keyPressed=='87'){
            new_image('wall.jpg');
            console.log("w");

        }
        if(keyPressed=='71'){
            new_image('ground.png');
            console.log("g");
            
        }
        if(keyPressed=='76'){
            new_image('light_green.png');
            console.log("l");
            
        }
        if(keyPressed=='84'){
            new_image('trunk.jpg');
            console.log("t");
            
        }
        if(keyPressed=='82'){
            new_image('roof.jpg');
            console.log("r");
            
        }
        if(keyPressed=='89'){
            new_image('yellow_wall.png');
            console.log("y");
            
        }
        if(keyPressed=='68'){
            new_image('dark_green.png');
            console.log("d");
            
        }

        if(keyPressed=='85'){
            new_image('unique.png');
            console.log("u");
            
        }

        if(keyPressed=='67'){
            new_image('cloud.jpg');
            console.log("c");
            
        }
    }