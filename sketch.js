var drawing=[];
var currentPath=[];
var isDrawing = false;

function setup() {
  canvas = createCanvas(1000, 600);
  canvas.mousePressed(start);
  canvas.mouseReleased(end);

  database = firebase.database();

  form = new Form();
  form.display();
  
}

function draw() {
  background("lightblue");

  if(isDrawing){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  
  strokeWeight(4);
  noFill();
  stroke("red");
 
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

  form.button.mousePressed(() => {
    saveDrawing();
    
});

}
function start(){
    isDrawing = true;
  currentPath=[];
  drawing.push(currentPath);
}
function end(){
    isDrawing = false;
  }
  function saveDrawing(){
    var ref = database.ref('drawing');
    var data={
        name: "Divyam",
        drawing :drawing
    }
  }