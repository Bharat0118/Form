var info=localStorage.getItem('show');
var result=JSON.parse(info);
let head="";
let data="";
var count=0;
for(let i in result)
{       
        
        data+="<tr>";
        for(let j in result[i])
        {
            if(count==0)
            {
                head +="<th>" + j + "</th>";
            }
           
            data +="<td>" + result[i][j] +"</td>";
            
        }
        count++;
        data += "<td>" + "<a href=\"#\">Update</a>" +"</td>";
        data += "<td>" + "<a href=\"#\">Delete</a>" +"</td>";
        data+="</tr>";
}

document.getElementById("head").innerHTML=head;
document.getElementById("data").innerHTML=data;


function bttn(){
    window.open("trainee.html")
    return true
}

