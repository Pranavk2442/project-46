var spacebg,spacebgimg;

var spaceship,spaceshipimg;

var spaceshotimg,spaceshot;

var asteroidimg,asteroid;

var asteroidGroup;

var life=3;

var score=0;
var spaceshotGroup;

var spaceshipGroup;

var gameState=0;

function preload (){

spacebgimg=loadImage("spacebg1.png");
//spaceshipimg=loadImage("spaceshipProject.png");
spaceshotimg=loadImage("spacelaser.png");
asteroidimg=loadImage("asteroid1.png");

}

function setup(){

    createCanvas(1200,700);



   //spacebg=createSprite(950,350,50,50);
    //spacebg.addImage(spacebgimg);
   //spaceship=createSprite(600,590);
  // spaceship.addImage(spaceshipimg);
   //spaceship.scale=0.55;

   asteroidGroup=new Group();
    spaceshotGroup= new Group();
    shipGroup=new Group();

   spaceship=new spaceShip(600,590);

   
  
}

function draw(){
    
   // background(spacebgimg);

    if(gameState===0){
        background("black");
        textSize(30);
        fill("white");
        text("Press R Key To Start!",470,300);

        if(keyDown("r")){
            gameState=1;
        }
    }

    if(gameState===1){


        background(spacebgimg);


        obstacles();


    for (var i = 0; i < asteroidGroup.length; i++) {
        if (asteroidGroup.get(i).isTouching(spaceshotGroup)) {
            asteroidGroup.get(i).destroy();
            spaceshotGroup.destroyEach();
            
            score+=1;
          
        }
      
    }

    if(asteroidGroup.isTouching(shipGroup)){
        life-=1;
        asteroidGroup.destroyEach();
    }

    if(life===0){
        gameState=3;
    }

    if(gameState===3){
        background("black");
        textSize(30);
        text("GAME OVER", 470,300);
        spaceshotGroup.destroyEach();
     }

}
    

    

    


    textSize(20);
    fill("white");
    text("Life:"+life,1070,640);

    text("Score:"+score,1070,670);
    

spaceship.display();
 
   


    drawSprites();
}

function obstacles(){

    

    if(frameCount%20===0){
        var rand= Math.round(random(100,1100));
        var rand2=Math.round(random(0,4));

       

        console.log(rand2);
        asteroid=createSprite(500,50,20,20);
        asteroid.x=rand;
        asteroid.addImage(asteroidimg);

        switch(rand2){
            case 1:asteroid.scale=0.5;
            break;
            case 2:asteroid.scale=0.6;
            break;
            case 3:asteroid.scale=0.7;
            break;
            case 4:asteroid.scale=0.8;
            break;
            case 0:asteroid.scale=0.4;
            break;
            default:break;
        }

       // asteroid.scale=rand2;
        asteroid.velocityY=7;

        asteroidGroup.add(asteroid);
       // drawSprites();
    }
}