var player

var gameState = "play"
function setup(){
  over = createSprite(200,-1400,400,400)
  over.shapeColor = "limegreen"
player = createSprite(200,200,30,30)

barrier1 = createSprite(200,400,400,20)
barrier2 = createSprite(410,-400,20,1600)
barrier3 = createSprite(-10,-400,20,1600)

obstacle1 = createSprite(425,75,20,20)
obstacle1.velocityX = -8.5

obstacle2 = createSprite(435,-150,20,20)
obstacle2.velocityX = -8.5

obstacle3 = createSprite(445,-375,20,20)
obstacle3.velocityX = -8.5


obstacle4 = createSprite(-25,-37.5,20,20)
obstacle4.velocityX = 8.5

obstacle5 = createSprite(-35,-262.5,20,20)
obstacle5.velocityX = 8.5

obstacle6 = createSprite(-45,-487.5,20,20)
obstacle6.velocityX = 8.5


obstacle7 = createSprite(425,-600,20,20)
obstacle7.velocityX = -8.5

obstacle8 = createSprite(435,-825,20,20)
obstacle8.velocityX = -8.5


obstacle9 = createSprite(-35,-712.5,20,20)
obstacle9.velocityX = 8.5

obstacle10 = createSprite(-45,-937.5,20,20)
obstacle10.velocityX = 8.5


obstacle11 = createSprite(425,-1050,20,20)
obstacle11.velocityX = -8.5

obstacle12 = createSprite(435,-1275,20,20)
obstacle12.velocityX = -8.5


obstacle13 = createSprite(-35,-1162.5,20,20)
obstacle13.velocityX = 8.5

obstacle14 = createSprite(-45,-1387.5,20,20)
obstacle14.velocityX = 8.5

end = createSprite(200,900,400,400)

obstacle1.shapeColor = "orange"
obstacle2.shapeColor = "orange"
obstacle3.shapeColor = "orange"
obstacle4.shapeColor = "orange"
obstacle5.shapeColor = "orange"
obstacle6.shapeColor = "orange"
obstacle7.shapeColor = "orange"
obstacle8.shapeColor = "orange"
obstacle9.shapeColor = "orange"
obstacle10.shapeColor = "orange"
obstacle11.shapeColor = "orange"
obstacle12.shapeColor = "orange"
obstacle13.shapeColor = "orange"
obstacle14.shapeColor = "orange"

player.shapeColor = "cyan"

}

function draw(){
  background("brown")
player.collide(barrier1)
player.collide(barrier2)
player.collide(barrier3)

end.shapeColor = "darkorange"
if(gameState === "play"){
  if(keyDown("up")){
    player.y -= 5
  }
  if(keyDown("down")){
    player.y += 5
  }
  if(keyDown("left")){
    player.x -= 5
  }
  if(keyDown("right")){
    player.x += 5
  }
  end.velocityY = -3.95
  
}
 if(player.isTouching(end) || player.isTouching(obstacle1) || player.isTouching(obstacle2) || player.isTouching(obstacle3) || player.isTouching(obstacle4) || player.isTouching(obstacle5) || player.isTouching(obstacle6) || player.isTouching(obstacle7) || player.isTouching(obstacle8) || player.isTouching(obstacle9) || player.isTouching(obstacle10) || player.isTouching(obstacle11) || player.isTouching(obstacle12) || player.isTouching(obstacle13) || player.isTouching(obstacle14)){
gameState = "end"
  }

  if(player.isTouching(over)){
    gameState = "over"
    end.velocityY = 0
  }

  if(gameState === "end"){
    end.velocityY = 0
  }
 
  if(obstacle1.isTouching(barrier3)){
    obstacle1.x = 425
  }

  if(obstacle2.isTouching(barrier3)){
    obstacle2.x = 425
  }

  if(obstacle3.isTouching(barrier3)){
    obstacle3.x = 425
  }


  if(obstacle4.isTouching(barrier2)){
    obstacle4.x = -25
  }

  if(obstacle5.isTouching(barrier2)){
    obstacle5.x = -25
  }

  if(obstacle6.isTouching(barrier2)){
    obstacle6.x = -25
  }


  if(obstacle7.isTouching(barrier3)){
    obstacle7.x = 425
  }

  if(obstacle8.isTouching(barrier3)){
    obstacle8.x = 425
  }

  if(obstacle9.isTouching(barrier2)){
    obstacle9.x = -25
  }

  if(obstacle10.isTouching(barrier2)){
    obstacle10.x = -25
  }

  if(obstacle11.isTouching(barrier3)){
    obstacle11.x = 425
  }

  if(obstacle12.isTouching(barrier3)){
    obstacle12.x = 425
  }

  if(obstacle13.isTouching(barrier2)){
    obstacle13.x = -25
  }

  if(obstacle14.isTouching(barrier2)){
    obstacle14.x = -25
  }

  barrier1.visible = false
  barrier2.visible = false
  barrier3.visible = false

  camera.position.y = player.y

  drawSprites()
  //text(player.x + "    " + player.y,player.x - 75,player.y - 75)

  if(gameState === "over"){
    textSize(40)
    textAlign(CENTER)
    fill("darkblue")
    stroke(0)
    text("YOU WIN!!!",player.x,player.y)
   
  }
  if(gameState === "end"){
    textAlign(CENTER)
    textSize(30)
    fill("darkblue")
    text("GAME OVER!",player.x, player.y)
  }

}