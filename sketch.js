var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);

  //for loop to print numbers above and equal to 45 in array marks
  for(var i = 0; i< marks.length;i++)
  {
    if(marks[i]>= 45)
    {
      console.log(marks[i]);
    }
  }
}

function draw() 
{
  background(30);
}

 

