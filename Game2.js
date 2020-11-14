const canvas = document.getElementById("game")
const ctx= canvas.getContext("2d"); 

const ground =new Image();
ground.src="img/ground2.png";

const Health =new Image();
Health.src="img/heard.png";

const aim =new Image();
aim.src="img/snow-alt.svg";


let Hero =new Image();
Hero.src="img/Hero.png";

let men={
    x:-10,
    y:300,
};

left=50;
let hp=3;
let atac={
x: 800,
y:Math.floor((Math.random() * 20+1))*20,

};


document.addEventListener("keydown",up);

function up(event){
    if(event.keyCode==38)
    men.y-=50;
    if(event.keyCode==38)
    atac.x+=-10;
}

let grove=10;
function drawGame(){
    ctx.drawImage(ground,0,0);
    ctx.drawImage(Health,0,0);
    ctx.drawImage(Hero,men.x,men.y,150,200);
    ctx.drawImage(aim,atac.x,atac.y,40,40);
    ctx.fillStyle="white";
    ctx.font="50px Arial";
    if(men.y==atac.y&&men.x==atac.x){
        hp++;
        atac={
            x: 800,
            y:Math.floor((Math.random() * 20+1))*20,
            };
    }
    if(atac.x<-20||men.y<1){
       
        if(hp>=1){
            hp--;
            men.y=300;
            atac={
                x: 800,
                y:Math.floor((Math.random() * 20+1))*20,
                };
        }
        else if(hp<1){
            location.reload()
        }
    }
   
    
    ctx.fillText(hp,65,50);

    if(men.y<-100){
        if(hp==0){
            alert("Game over");
            clearInterval(game);
            location.reload()
            }
        
        else{
        hp--;
        men.y=300;
        }
     
    }   
if(men.y==300){
    men.y=300;  
}
else {men.y+=grove;
 
}
atac.x-=10; 
    }

  
   

let game=setInterval(drawGame,100);
