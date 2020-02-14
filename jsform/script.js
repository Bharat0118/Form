/*function datasubmit()
{
    var a = document.getElementById("tname").value;
    var b = document.getElementById("tpass").value;
    var c = document.getElementById("temail").value;
    var d = document.getElementById("tnum").value;
    if((a&&b&&c&&d)=="")
    {
        document.getElementById("ok").disabled = true;
        document.getElementById("show").innerHTML="Empty field"; 
    }
    else
    {
        var res="name:"+a+"<br/>"+"Email:"+c+"<br/>"+"number:"+d;
        document.getElementById("show").innerHTML=res;
        document.getElementById("ok").disabled =false;
    }
}*/
function datasubmit()
{
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
    }
}
    

