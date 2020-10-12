$(document).ready(function(){
  $("#setname").click(()=>{
    let name = $("#name").val();
    $("#yourname").text(`Your name: ${name}`);
  });
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  document.addEventListener("keydown", move);
  setInterval(playGame, 1000/15);
  let x_vel = 0;
  let y_vel = 0;
  let x_pos = 10;
  let y_pos = 10;
  let apple_x = 15;
  let apple_y = 15;
  let snake = [];
  let length = 5;
  function playGame(){
    x_pos += x_vel;
    y_pos += y_vel;
    context.fillStyle = "black";                          //create game board
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    for(var i = 0; i < trail.length; i++){
      context.fillRect(20*trail[i].x, 20*trail[i].y, 18, 18);
      if(trail[i].x == x_pos && trail[i].y == y_pos){
        length = 5;
      }
    }
    snake.push({x:x_pos, y:y_pos});
    while(snake.length > length){
     snake.shift(); 
    }
    if(apple_x == x_pos && apple_y == y_pos){
      tail++;
      apple_x = Math.floor(Math.random()*20);
      apple_y = Math.floor(Math.random()*20);
    }
    context.fillStyle = "red";                            //create apple
    context.fillRect(20*apple_x, 20*apple_y, 18, 18);
  }
  
  function move(evt){
    switch(evt.keyCode){
      case 37: //left movement
        x_vel = -1;
        y_vel = 0;
        break;
      case 38: //up movement
        x_vel = 0;
        y_vel = -1;
        break;
      case 39: //right movement
        x_vel = 1;
        y_vel = 0;
        break;
      case 40: //down movement
        x_vel = 0;
        y_vel = 1;
        break;
    }
  }
});
