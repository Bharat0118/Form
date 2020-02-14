function click(){
var x = document.getElementById(fname).values;
var y = document.getElementById(Lname).values;
var z = document.getElementById(password).values;
var cp = document.getElementById(cpassword).values;
var checkbox = document.getElementById(check).values;
if((x && y && z && cp)!= ""){
  document.getElementById('btn1').disabled = false;
}
else{
 document.getElementById('btn1').disabled = true;
}
}

function data1()
{
  var value1=document.getElementById("frm1").elements;
  var obj = {};
  for(var y=0;y<value1.length;y++)
  {
  
  let name=value1[y].id;
  let val=value1[y].value;
  obj[name]=val;
  }
  let jason=JSON.stringify(obj);
  if (typeof(Storage) !== "undefined") {
   document.getElementById("frm1").innerHTML= localStorage.setItem('show',jason);

  }
}
function data2()
{
  var value1=document.getElementById("frm2").elements;
  var obj = {};
  for(var y=0;y<value1.length;y++)
  {
  
  let name=value1[y].id;
  let val=value1[y].value;
  obj[name]=val;
 }
  let jason=JSON.stringify(obj);
  if (typeof(Storage) !== "undefined") {
   document.getElementById("frm2").innerHTML= localStorage.setItem("show1",jason);

  }
}
 /** Parsing */
// var str =localStorage.getItem("show"); 
// var obj1 =JSON.parse(localStorage.getItem("show")); 

// var headHTML="";
// var tdHTML="";
// for(let i in obj1){
//   console.log(i+"=="+obj1[i]);
//   headingHTML +="<th>"+i+"</th>";
//   tdHTML +="<td>"+obj[i]+"</td>";

// }
// document.getElementById("heading").innerHTML=headingHTML;
// document.getElementById("tdhead").innerHTML=tdHTML;











/*var x = 0;
var arr = {};
arr[x]=document.getElementById("f").value;
x++;
arr[x]=document.getElementById("l").value;
x++;
arr[x]=document.getElementById("password").value;
x++;
arr[x]=document.getElementById("cpass").value;
x++;
arr[x]=document.getElementById("address").value;
x++;
arr[x]=document.getElementById("number").value;
x++;

  var data2= "<br/>";
    for (var y=0; y<arr.length; y++)
  {
  data2 += " " + arr[y] + "<br/>";
  } 
document.getElementById("result").innerHTML = data2;
return false;*/


function validateForm(data2,error2)
{
  var x = data2.value;
  if(x == "" ){
  document.getElementById(error2).innerHTML="Can't be Empty";
  }

  return false;
}
 function check(){
    var z = document.forms["myForm"]["pass"].value;
    if(z == "")
    {
      alert("can't be empty");
    return false;
    }
  }
  function cpassword1(){
    var z = document.forms["myForm"]["pass"].value;
    var cp = document.forms["myForm"]["cpass"].value;
    if(z != cp)
    {
      alert("Password not Matched");
    }
  }
    function checked()
    {
    var check = document.forms["myForm"]["myCheck"].checked;
    if(!check)
    {
      alert("Tick the Check");
    }
    }
    /*function age(DOB)
    {
       var t = new Date();
       var bd = new Date(DOB);
       var m = t.getMonth() - bd.getMonth();
       if (m < 0 || (m === 0 && t.getDate() < bd.getDate())) {
        age = age - 1;
       var age1 = t.getFullYear() - bd.getFullYear();
       alert(age1);
    } 
  */



    function next(){
      document.getElementById("frm1").style.display='none';
      document.getElementById("frm2").style.display='block';
      
    }
    
  /*  function showdata(){

        var s = document.getElementById("frm1").elements;
        var arr=[];
        for(i=0;i<s.length;i++)
        {
          var name = s[i].value;
          arr.push(name);
        }
          localStorage.setItem("lname",arr);
    }*/
  //   function showdata1(){

  //     var s = document.getElementById("frm2").elements;
  //     var arr=[];
  //     for(i=0;i<s.length;i++)
  //     {
  //       var name = s[i].value;
  //       arr.push(name);
  //     }
  //       localStorage.setItem("fname",arr);
  // }


  function max(val,error)
  {

    var len = val.value.length;
    document.getElementById("err").innerHTML=len +"/150";
  }

function loader(){
  document.getElementById("load").style.display="block";
  setTimeout("calling()",4000);
  }
  function calling(){
document.getElementById("load").style.display="none";
return false;
}

