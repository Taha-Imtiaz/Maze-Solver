function Cell(i,j){
	this.i=i;
	this.j=j;
	// console.log(this.i)
	// console.log(this.j)
	this.visited=false;
	this.wall=[true,true,true,true];
	// this.getVisit=function(){
	// 	return this.visited;

	// };
	

	this.show=function()
	
	{
	if(this.visited){
		var x,y;
		x=this.i*w;
		y=this.j*w;
		if(this.wall[0])
		{
		ctx.beginPath()
		ctx.moveTo(x,y);
		ctx.lineTo(x+w,y);
		ctx.closePath()
		ctx.stroke();
		}
		if(this.wall[1])
		{
		ctx.beginPath()
		ctx.moveTo(x+w,y);
		ctx.lineTo(x+w,y+w);
		ctx.closePath()
		ctx.stroke();
		}
		if(this.wall[2])
		{
		ctx.beginPath()
		ctx.moveTo(x+w,y+w);
		ctx.lineTo(x,y+w);
		ctx.closePath()
		ctx.stroke();
		}
		if(this.wall[3])
		{
		ctx.beginPath()
		ctx.moveTo(x,y+w);
		ctx.lineTo(x,y);
		ctx.closePath()
		ctx.stroke();
		}
		 
			
            ctx.fillStyle = "#000080";
			ctx.strokeStyle = "#FFFFFF"
            // ctx.fillStyle = "#0000FF";
			ctx.fillRect(x , y ,w,w)
			
		 
		
	}
	}
	this.getNeighbors=function()
	{
		var neighbors= [] ;
		var rndm;
		var top,bottom,left,right;
		
		top = grid[index(i,j-1)];
		right = grid[index(i+1,j)];
		bottom = grid[index(i,j+1)];
		left = grid[index(i-1,j)];
		
		
		if(top && (top.visited != true))
		{
			neighbors.push(top);
		}
		if(right && (right.visited != true))
		{
			neighbors.push(right);
		}
		if(bottom && (bottom.visited != true))
		{
			neighbors.push(bottom);
		}
		if(left && (left.visited != true))
		{
			neighbors.push(left);
		}
		
		
		if(neighbors.length>0)
		{
			rndm=Math.floor(Math.random() * neighbors.length  );
			// console.log("Random Number: "+rndm);
			return neighbors[rndm];
		}
		else 
		{
			return undefined ;
		}
		
	}
	this.highLightCell=function()
	{
		x=this.i*w;
		y=this.j*w;
		ctx.fillStyle='red'
		ctx.fillRect(x,y,w-5,w-5)
		
		ctx.stroke()
	
	}
	
}
function index(i,j){
	if(i<0 || j<0 || i>col-1 || j>row-1 )
	{
		return -1;
	}
	else
		return i+j*col;
}