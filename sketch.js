//-----------------------------------------------------------------------------------------------------//
Log( "Log" , "Creating Variables & Constants" );
//--------------------------------//
//constants
//--------------------------------//
//variables
var Player , PlayerIMG;
var obstacle1 , obstacle2 , obstacle3 , obstacle4 , obstacle5 , obstacleIMG;
var score , GM;
var bgIMG;
//--------------------------------//
Log( "Log" , "Created Variables & Constants" );
//-----------------------------------------------------------------------------------------------------//
Log( "Log" , "Preloading" );
//--------------------------------//
//preload
function preload()
{
  PlayerIMG = loadImage( "Player.png" );
  obstacleIMG = loadImage( "obstacle.png" );
  bgIMG = loadImage( "bgIMG.png" );
}
//--------------------------------//
Log( "Log" , "Preload Complete" );
//-----------------------------------------------------------------------------------------------------//
//setup
function setup()
{
  //--------------------------------//
  Log( "Log" , "Setting Up" );
  //--------------------------------//
  createCanvas( 700 , 600 );
  //--------------------------------//
  Player = createSprite( 500 , 500 , 20 , 20 ) ;
  Player.addImage( PlayerIMG );
  Player.scale = 0.1;
  Player.shapeColor = "green" ;
  //--------------------------------//
  obstacle1 = createSprite( 0 , random( 0 , 600 ) , 200 , 20 ) ;
  obstacle2 = createSprite( -240 , random( 0 , 600 ) , 200 , 20 ) ;
  obstacle3 = createSprite( -380 , random( 0 , 600 ) , 200 , 20 ) ;
  obstacle4 = createSprite( -520 , random( 0 , 600 ) , 200 , 20 ) ;
  obstacle5 = createSprite( -660 , random( 0 , 600 ) , 200 , 20 ) ;

  obstacle1.velocityX = 10 ;
  obstacle2.velocityX = 10 ;
  obstacle3.velocityX = 10 ;
  obstacle4.velocityX = 10 ;
  obstacle5.velocityX = 10 ;

  obstacle1.rotationSpeed = 10 ;
  obstacle2.rotationSpeed = 10 ;
  obstacle3.rotationSpeed = 10 ;
  obstacle4.rotationSpeed = 10 ;
  obstacle5.rotationSpeed = 10 ;

  obstacle1.shapeColor = "red" ;
  obstacle2.shapeColor = "red" ;
  obstacle3.shapeColor = "red" ;
  obstacle4.shapeColor = "red" ;
  obstacle5.shapeColor = "red" ;

  obstacle1.addImage( obstacleIMG );
  obstacle2.addImage( obstacleIMG );
  obstacle3.addImage( obstacleIMG );
  obstacle4.addImage( obstacleIMG );
  obstacle5.addImage( obstacleIMG );
  //--------------------------------//
  score = 0;
  GM = "on";
  //--------------------------------//
  Log( "Log" , "Setup Done" );
  //--------------------------------//
}
//-----------------------------------------------------------------------------------------------------//
//loop
function draw()
{
  needs( bgIMG );
  if( GM === "on" )
  {
    Player.y = mouseY;
    fill( "red" );
    textSize( 20 );
    text( score , 400 , 50 );
    if( obstacle1.x > 700 )
    {
      obstacle1.y = random( 0 , 600 );
      obstacle1.x = -380;
      score++;
    }
    if( obstacle2.x > 700 )
    {
      obstacle2.y = random( 0 , 600 );
      obstacle2.x = -380;
      score++;
    }
    if( obstacle3.x > 700 )
    {
      obstacle3.y = random( 0 , 600 );
      obstacle3.x = -380;
      score++;
    }
    if( obstacle4.x > 700 )
    {
      obstacle4.y = random( 0 , 600 );
      obstacle4.x = -380;
      score++;
    }
    if( obstacle5.x > 700 )
    {
      obstacle5.y = random( 0 , 600 );
      obstacle5.x = -380;
      score++;
    }
    if( Player.isTouching( obstacle1 ) )
    {
      if( Player.x >= obstacle1.x )
      {
        Player.velocityX = 20;
        Player.velocityY = 20;
      }
      if( Player.x < obstacle1.x )
      {
        Player.velocityX = -20;
        Player.velocityY = 20;
      }
      GM = "game over";
    }
    if( Player.isTouching( obstacle2 ) )
    {
      if( Player.x >= obstacle2.x )
      {
        Player.velocityX = 20;
        Player.velocityY = 20;
      }
      if( Player.x < obstacle2.x )
      {
        Player.velocityX = -20;
        Player.velocityY = 20;
      }
      GM = "game over";
    }
    if( Player.isTouching( obstacle3 ) )
    {
      if( Player.x >= obstacle3.x )
      {
        Player.velocityX = 20;
        Player.velocityY = 20;
      }
      if( Player.x < obstacle3.x )
      {
        Player.velocityX = -20;
        Player.velocityY = 20;
      }
      GM = "game over";
    }
    if( Player.isTouching( obstacle4 ) )
    {
      if( Player.x >= obstacle4.x )
      {
        Player.velocityX = 20;
        Player.velocityY = 20;
      }
      if( Player.x < obstacle4.x )
      {
        Player.velocityX = -20;
        Player.velocityY = 20;
      }
      GM = "game over";
    }
    if( Player.isTouching( obstacle5 ) )
    {
      if( Player.x >= obstacle5.x )
      {
        Player.velocityX = 20;
        Player.velocityY = 20;
      }
      if( Player.x < obstacle5.x )
      {
        Player.velocityX = -20;
        Player.velocityY = 20;
      }
      GM = "game over";
    }
  }
  if( GM === "game over" )
  {
    fill( "red" );
    textSize( 50 );
    text( "YOU ARE OUT" , 150 , 200 );
    text( "Press SPACE to restart" , 100 , 300 );
    text( "Score : " + score  , 200 , 400 );
    if( keyCode === 32 )
    {
      GM = "hold";
    }
  }
  if( GM === "hold" )
  {
    score = 0;
    fill( "red" );
    textSize( 50 );
    text( "Press S if you are ready" ,75 , 300 );
    if( keyCode === 83 )
    {
      GM = "on";
      Player.velocityX = 0;
      Player.velocityY = 0;
      Player.x = 500;
      obstacle1.x = 0;
      obstacle2.x = -240;
      obstacle3.x = -380;
      obstacle4.x = -520;
      obstacle5.x = -660;
    }
  }
}
//-----------------------------------------------------------------------------------------------------//