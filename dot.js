class Dot{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sprite = createSprite(x,y,10,10);
        this.sprite.shapeColor = "blue";
        this.flag = true;
        dotsGroup.add(this.sprite);
    }
    check(){

        if(this.flag === true && player.isTouching(this.sprite)){
            this.sprite.remove(); 
            this.flag = false;
            score++;
            
            var point = createSprite(player.x, player.y-25,20,20);
            point.addImage(point1_img); 
            point.scale = 0.7; 
            point.lifetime = 50; 
            point.velocityY = -4;
        }            
    }
}

