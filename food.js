class Food {
    constructor(x,y,width,height){
        
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("Images/Milk.png")
    }
    display(){
        var x=80,y=100;
        var foodStock;
        imageMode(CENTER);
        image(this.image,250,150,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }





        }
    }
}