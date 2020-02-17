var arr1=[];
var storage=localStorage.getItem("show");
if(storage)
{
    arr1=JSON.parse(storage);
}
function validate(){
    var value1=document.getElementById("traineeInfo").elements;
    var obj={};

   for( var y=0;y<value1.length;y++)
   {    
            if(value1[y].type=="button")
            {
                continue;
            }
            let uid=unique();
            let name=value1[y].id;
            let val=value1[y].value;
            obj={"Unique Id":uid,...obj,[name]:val};
            

    
        }
        arr1=[...arr1,obj];
        var result=JSON.stringify(arr1);
        if (typeof(Storage) !== "undefined")
         {
         localStorage.setItem("show",result);
        }
    clear();
    console.log(result);  
    window.open("listing.html") 
     
}
function clear(){
    var ele= document.getElementById("traineeInfo").elements;
    for( var y=0;y<ele.length;y++)
    {
        if(ele[y].type=="button")
        {
            continue;
        }
        ele[y].value="";
    }
}
function unique()
{
    return  Math.random().toString(6).substr(2,5);
}
