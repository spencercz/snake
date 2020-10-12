$(document).ready(function(){
  var name = "Guest";
  $("#setname").click(()=>{
    name = $("#name").val();
    $("#yourname").text(`Your name: ${name}`);
  });
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  document.addEventListener("keydown", move);
  setInterval(playGame, 1000/15);
  var x_vel = 0;
  var y_vel = 0;
  var x_pos = 10;
  var y_pos = 10;
  var apple_x = 15;
  var apple_y = 15;
  var snake = [];
  var length = 5;
  function resetGame(){
    alert(`Game over! Your score: ${length}`);
    x_vel = 0;
    y_vel = 0;
    x_pos = 10;
    y_pos = 10;
    apple_x = 15;
    apple_y = 15;
    snake = [];
    length = 5;
  }
  
  function playGame(){
    x_pos += x_vel;
    y_pos += y_vel;
    context.fillStyle = "black";                          //create game board
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    
    for(var i = 0; i < snake.length; i++){
      context.fillRect(snake[i].x*20, snake[i].y*20, 18, 18);
      if((snake[i].x == x_pos && snake[i].y == y_pos) && (snake.length > 5)){     //snake hits itself
        resetGame();
      }
    }
    if(x_pos < 0 || x_pos > 19 || y_pos < 0 || y_pos > 19){
      resetGame();                                        //snake hits border
    }
    snake.push({x:x_pos, y:y_pos});
    while(snake.length > length){
     snake.shift(); 
    }
    if(apple_x == x_pos && apple_y == y_pos){            //apple gets eaten
      length++;
      apple_x = Math.floor(Math.random()*20);
      apple_y = Math.floor(Math.random()*20);
    }
    context.fillStyle = "red";                            //create apple
    context.fillRect(20*apple_x, 20*apple_y, 18, 18);
  }
  
  function move(evt){
    switch(evt.keyCode){
      case 37:                                            //left movement
      case 65:
        if(x_vel != 1 && !$("#name").is(':focus')){
          x_vel = -1;
          y_vel = 0;
        }
        break;
      case 38:                                            //up movement
      case 87:
        if(y_vel != 1 && !$("#name").is(':focus')){
          x_vel = 0;
          y_vel = -1;
        }
        break;
      case 39:                                            //right movement
      case 68:
        if(x_vel != -1 && !$("#name").is(':focus')){
          x_vel = 1;
          y_vel = 0;
        }
        break;
      case 40:                                            //down movement
      case 83:
        if(y_vel != -1 && !$("#name").is(':focus')){
          x_vel = 0;
          y_vel = 1;
        }
        break;
    }
  }
});
