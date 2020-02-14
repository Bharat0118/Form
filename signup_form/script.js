document.getElementById("next").disabled = true;
var flag=true;
function clearData()
{
   document.getElementById("myForm").reset();
   
}
function countachr(val,error)
{
    var len = val.value.length;
    document.getElementById("sh").innerHTML=len;
}
function loadinggif(){
    setTimeout(function(){document.getElementById("loading").style.display="none";},1000)
    newDoc();
}
function newDoc() {
    window.location.assign("file:///C:/Users/ritambhara.jaiswal/Documents/riti_css_file/signup_form/next.html")
  }
function disable()
{
    
    if(flag==true)
    {
    document.getElementById("next").disabled = false;
    flag=false;
    }
    else{
        document.getElementById("next").disabled = true;
        flag=true;
    }
}
function detail(data)
{
    var name = data.value;
    var t = data.type;
    var is = data.id;
    document.getElementById("show").innerHTML="value:"+name+"  Type:"+t+"  Id:"+is+"   ";
    
}
var array1=[];

function showdata()
{
   
    var x = document.getElementById("myForm").elements;
    var arr ={};
    
    var dr=document.getElementById("tdate").value;
    var nd= new Date();
    var d= new Date(dr);
    var ndy = nd.getFullYear();
    var dy = d.getFullYear();
  
    var calcage = age(ndy,dy);
    let obj = {};
    for(let i =0;i<x.length;i++)
    {
        if(x[i].type=="button")
        {
           
            continue;
        }
        if(x[i].type=="checkbox")
        {
           
            continue;
        }
      emptyField(x[i].value);
     
       let name= x[i].id;
        let val =x[i].value;
       /* arr[name] = val;
       arr["age"]=calcage;*/
       obj = {...obj, [name]: val,"age":calcage};   
    }
    //array1.push(arr);
    array1 = [...array1, obj];
    //local storage
    // var mydata = JSON.stringify(arr);
    var godata = JSON.stringify(array1);
    //  document.getElementById("show1").innerHTML =mydata;
    // document.getElementById("show1").innerHTML =godata;
    if (typeof(Storage) !== "undefined")
    {
    // Store
     localStorage.setItem("showdata",godata);
    }
    clearData();
}
function age(x1,x2)
{
    return x1-x2;
}
function emptyField(data)
{
   
    if(data=="")
    {

        document.getElementById("show").innerHTML="Empty field"; 
    }
    else{
        return false;
    }
    
}

function compare(x1,x2)
{if(x1==x2)
        {
            document.getElementById("show").innerHTML = "equal";
           return true; 
        }
        else{
            document.getElementById("show").innerHTML = "password not match";
            return false;
        }
        
     }
