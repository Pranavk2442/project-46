class spaceShip{

    constructor(x,y,width,height){

        this.spaceshipSprite=createSprite(x,y,width,height);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;



        this.spaceshipimg=loadImage("spaceshipProject.png");
        this.shotimg=loadImage("spacelaser.png");

        shipGroup.add(this.spaceshipSprite);

    }

    display(){
        this.spaceshipSprite.addImage(this.spaceshipimg);
        this.spaceshipSprite.scale=0.55;

        if(gameState===1){

        if(keyDown("right_arrow")){
            this.spaceshipSprite.x+=5;
        }
    
        if(keyDown("left_arrow")){
            this.spaceshipSprite.x-=5;
        }
    
        if(keyDown("space")){
            spaceshot=createSprite(600,500,50,50);
            spaceshot.x=this.spaceshipSprite.x;
            spaceshot.addImage(this.shotimg);
            spaceshot.scale=0.5;
            spaceshot.velocityY=-4;
            spaceshotGroup.add(spaceshot);
        }

    }
}

}