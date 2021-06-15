function createWall(x,y,width,height){
    wall = createSprite(x,y,width,height);
    wall.shapeColor = "red";
    wallGroup.add(wall);
}

function wallCreation() {
    //vertical line
    createWall(30,190,20,100);
    //horizontal line
    createWall(90,125,100,20);
    createWall(195,125,100,20);
    createWall(300,125,100,20);
    createWall(405,125,100,20);
    createWall(555,125,100,20);
    createWall(510,125,100,20);
    createWall(660,125,100,20);
    createWall(766,125,100,20);  
    createWall(870,125,100,20);
    //vertical line
    createWall(930,190,20,100);
    createWall(30,297,20,100);
    createWall(930,297,20,100);
    createWall(30,402,20,100);
    createWall(930,402,20,100);
    //horizontal line
    createWall(90,460,100,20);
    createWall(200,460,100,20);
    createWall(305,460,100,20);
    createWall(408,460,100,20);
    createWall(512,460,100,20);
    createWall(615,460,100,20);
    createWall(718,460,100,20);
    createWall(820,460,100,20);
    createWall(898,460,40,20);
    //lines
    createWall(250,400,20,100); 
    createWall(400,300,100,20);
    createWall(680,280,20,100);
    createWall(680,340,100,20);
    }


    
