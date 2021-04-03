canvas = new fabric.Canvas("my_canvas");

playerx = 10;
playery = 10;

block_img_w = 30;
block_img_h = 30;

player_object = "";
block_img_obj = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx

        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_obj= Img;
        block_img_obj.scaleToWidth(block_img_w);
        block_img_obj.scaleToHeight(block_img_h);
        block_img_obj.set({
            top:playery,
            left:playerx

        });
        canvas.add(block_img_obj);
    });

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey ==true && keypressed =="80")
    {
        console.log("P & shift pressed togther");
        block_img_w = block_img_w + 10;
        block_img_h = block_img_h + 10;
        document.getElementById("current_width").innerHTML = block_img_w;
        document.getElementById("current_height").innerHTML = block_img_h;
    }

    if (e.shiftKey ==true && keypressed == "77")
    {
        console.log("M & shift pressed togther");
        block_img_w = block_img_w - 10;
        block_img_h = block_img_h - 10;
        document.getElementById("current_width").innerHTML = block_img_w;
        document.getElementById("current_height").innerHTML = block_img_h;
    }

    if (keypressed == "37")
    {
        left();
        console.log("left Key is pressed");
    }

    if (keypressed == "38")
    {
        up();
        console.log("up Key is pressed");
    }

    if (keypressed == "39")
    {
        right();
        console.log("right Key is pressed");
    }
    
    if (keypressed == "40")
    {
        down();
        console.log("down Key is pressed");
    }

    if (keypressed == "87")
    {
        new_image("wall.jpg");
        console.log("w Key is pressed");
    }

    if (keypressed == "71"){
        new_image("ground.png");
        console.log("g Key is pressed");
    }

    if (keypressed == "76"){
        new_image("light_green.png");
        console.log("l Key is pressed");
    }

    if (keypressed == "84"){
        new_image("trunk.jpg");
        console.log("t Key is pressed");
    }

    if (keypressed == "82"){
        new_image("roof.jpg");
        console.log("r Key is pressed");
    }

    if (keypressed == "89"){
        new_image("yellow_wall.png");
        console.log("y Key is pressed");
    }

    if (keypressed == "68"){
        new_image("dark_green.png");
        console.log("d Key is pressed");
    }

    if (keypressed == "85"){
        new_image("unique.png");
        console.log("u Key is pressed");
    }

    if (keypressed == "67"){
        new_image("cloud.jpg");
        console.log("c Key is pressed");
    }

    if (keypressed == "69"){
        new_image("images.png");
        console.log("e Key is pressed");
    }
}

function up(){
    if (playery >0){

        playery = playery-block_img_h;
        console.log("block img height ="+ block_img_h);
        console.log("when up in pressed y ="+ playery + "  x="+ playerx);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (playery <=500){

        playery = playery+block_img_h;
        console.log("block img height ="+ block_img_h);
        console.log("when down in pressed y ="+ playery + "  x="+ playerx);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (playerx >0){

        playerx = playerx-block_img_w;
        console.log("block img width ="+ block_img_w);
        console.log("when left in pressed y ="+ playery + "  x="+ playerx);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (playerx <=850){

        playerx = playerx+block_img_w;
        console.log("block img width ="+ block_img_w);
        console.log("when right in pressed y ="+ playery + "  x="+ playerx);
        canvas.remove(player_object);
        player_update();
    }
}
