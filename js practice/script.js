
function star()
{
let i,j;
var a= document.getElementById("t1").value;
var temp='';
  for(i=0;i<a;i++)
  {
    for(j=0;j<i;j++)
    {
			temp=temp+'*'
    }
    temp=temp+'<br/>'
  }
  document.getElementById("concat").innerHTML=temp;
}

function pat()
{
    let i,j,k=1;
    var a= document.getElementById("t1").value;
    var temp='';
    for(i=0;i<a;i++)
    {
        for(j=0;j<i;j++)
        {
            temp=temp+k;
            k++;
        }
        temp=temp+'<br/>'
    }
    document.getElementById("concat").innerHTML=temp;
}
