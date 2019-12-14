var i,j,w,row,col;
var grid= [];
var current;
var next;
var timer;
var stack= [] ;
w=50;


var cvs=document.getElementById("mazeCanvas");
var ctx=cvs.getContext('2d');

function createGrid(){
	
	row=Math.round(cvs.height/w);
	col=Math.round(cvs.width/w);
	for(j=0;j<row;j++)
		{
		for(i=0;i<col;i++)
		{
			grid.push(new Cell(i,j));
		}
		}
	current=grid[129];
	var timer=setInterval(drawGrid,50)
	
}

function drawGrid(){
	
	
	// console.log(current.getNeighbors())
		
		current.visited=true;
		showMaze()
		current.highLightCell()
		// current.highLightCell()
		next=current.getNeighbors();
		// console.log(current)
	
	// stack.push(current);
	if(next != undefined)
	 
	 {
		 next.visited = true;
		 stack.push(current)
		 removeWall(current,next);
		 current = next;
	 }
	 else  if( stack.length>0 )
	 {
		 current= stack.pop();
	 }		
		 
	//  else{
    //     clearInterval(timer);
       
    // }
	 
	 }

	 function showMaze(){

		ctx.fillStyle="white";
		// ctx.clearRect(0,0,cvs.width,cvs.height)
		// ctx.fillRect(0,0,cvs.width,cvs.height);
		
		for(var i=0; i<grid.length; i++){
			grid[i].show();
		}
	}
function removeWall(a,b)
{
	var x = a.i-b.i;
	if(x === -1)
	{
	a.wall[1]=false;
	b.wall[3]=false;
	}
	else if (x === 1)
	{
		a.wall[3]=false;
		b.wall[1]=false;
	}
	var y=a.j-b.j;
	if(y === -1)
	{
		a.wall[2]=false;
		b.wall[0]=false;
	}
	else if(y === 1)
	{
		a.wall[0]=false;
		b.wall[2]=false;
	}
}
function init()
{

createGrid();
// drawGrid();
}

init()
