var planta1Img,planta2Img,planta3Img,planta4Img,planta5Img,planta6Img, fondo1img,fondo2img;
var planta1,planta2,planta3,planta4,planta5,planta6,fondo1,fondo2;
var gotas=0, Gstate="inicio";

//var cactus ={
  //name: "San Pedro Cactus",
  //scientificname:"Echinopsis pachanoi",
  //foundin: ["Argentina", "Bolivia", "Colombia"],
  //img: "cactusImg"
//}

function preload() {
planta1Img =loadImage("cactus1.png")
planta2Img =loadImage("cactinumber2.png")
planta3Img =loadImage("cutecacti.png")
planta4Img =loadImage("flowernumber2.jpg")
planta5Img =loadImage("planta.jpg")
planta6Img =loadImage("roseplant.jpg")

fondo1img = loadImage("background.webp")  
fondo2img= loadImage("fence.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  fondo1= createSprite(windowWidth/2, windowHeight/2, 20,20);
  fondo1.addImage(fondo1img);
  fondo1.visible=false
  fondo1.scale=.8;

  planta1= createSprite(windowWidth/4, windowHeight/6,20,20);
  planta2= createSprite(windowWidth/4, windowHeight*3/6,20,20);
  planta3= createSprite(windowWidth/4, windowHeight*5/6,20,20);
  planta4= createSprite(windowWidth*3/4, windowHeight/6,20,20);
  planta5= createSprite(windowWidth*3/4, windowHeight*3/6,20,20);
  planta6= createSprite(windowWidth*3/4, windowHeight*5/6,20,20);

  planta1.addImage(planta1Img)
  planta1.scale=.1
  planta1.visible=false;
  planta2.addImage(planta2Img)
  planta2.scale=.1
  planta2.tint=1
  planta2.visible=false;
  planta3.addImage(planta3Img)
  planta3.scale=.15
  planta3.tint=1
  planta3.visible=false;
  planta4.addImage(planta4Img)
  planta4.scale=.15
  planta4.tint=1
  planta4.visible=false;
  planta5.addImage(planta5Img)
  planta5.scale=.1
  planta5.tint=1
  planta5.visible=false;
  planta6.addImage(planta6Img)
  planta6.scale=.3
  planta6.tint=1
  planta6.visible=false;

  fondo2= createSprite(windowWidth/2, windowHeight/2, 20,20);
  fondo2.addImage(fondo2img);
  fondo2.scale=.5;fondo2.visible=false;

 // input=createInput();
 // input.position(windowWidth/4,windowHeight/18+50)
}

function draw() {
  if (Gstate ==="inicio"){
   background("olive");
   fondo2.visible=true
    textSize(20)
    fill("white")
    text("Please choose the user.", windowWidth*3/7, windowHeight/18)
    text("   Teacher/Maestro=T               Student/Estudiante=S", windowWidth*2/6, windowHeight*5/18)
    text("Por favor,elige el usuario.",windowWidth*3/7, windowHeight*3/18) 
    //var value=input.value();
    drawSprites();
    if (keyDown ("s")){
      Gstate="play";
    }      
    else{
      if (keyDown ("t")){
        Gstate="admin";
      }
    }
  } 
  else{
    if (Gstate ==="play"){
      fondo1.visible=true
      fondo2.visible=false
      planta1.visible=true;
      planta2.visible=true;
      planta3.visible=true;
      planta4.visible=true;
      planta5.visible=true;
      planta6.visible=true;
      drawSprites();
      textSize(20)
      fill("white")
      text("Para regar la planta una vez, oprime las teclas. Para salir, E. To water the plants one time, press the letters. To exit, E", windowWidth/6, windowHeight/18)
      text("Write out G.O.T.A to fully grow the plant. Escribe cada letra de G.O.T.A para compltar la planta", windowWidth*1/6, windowHeight*6/18)
      text("Gotas/Drops:"+gotas, windowWidth*5/12, windowHeight*4/18)
      text("(5 frops for each plant, 5 gotas para cada planta)", windowWidth*2/6, windowHeight*3/18)
      
      if (keyDown("g")){
        gotas=gotas-5
        planta1.scale=.10;
       }
       if (keyDown("o")){
        gotas=gotas-5
        planta1.scale=.12;
      }
      if (keyDown("t")){
        gotas=gotas-5
        planta1.scale=.14;
      }
      if (keyDown("a")){
        gotas=gotas-5
        planta1.scale=.16;
      }
      
  }  
  else{
    if(Gstate==="admin"){
      fondo2.visible=false;
      drawSprites();
      background("white");
      textSize(20)
    }
    fill("black")
    text("Para aumentar el número de gotas, oprime flecha arriba.", windowWidth/4, windowHeight/18)
    text("Salir=E Exit=E", windowWidth/4, windowHeight*6/18)
    text("Down arrow to decrease/Flecha abajo para desminuir.",windowWidth/4, windowHeight*4/18)
    text("To increase the amount of drops press the up arrow.", windowWidth/4, windowHeight*2/18)
    text("Gotas disponibles/Drops available: "+gotas,windowWidth/4,windowHeight*8/18)
    if (keyDown("up")){
      gotas=gotas+1;
    }
    if (keyDown("down")){
     gotas=gotas-1;
    }
    
  }
  
  if (keyDown("e")){
    fondo1.visible=false;
    planta1.visible=false;
      planta2.visible=false;
      planta3.visible=false;
      planta4.visible=false;
      planta5.visible=false;
      planta6.visible=false;
    Gstate="inicio"
  }
  console.log (Gstate)
  
}
}