function validateuser()
{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pwd").value;

    if(user==""){
        alert("can,t be empty");
        return false;

    }   
    if(pass==""){
        alert("can,t be empty"); 
        return false;

    }   
    if(user=="admin" && pass=="admin")
    {
        window.open("listing.html")
    }
    else
    {
        alert( "validation failed" );

    }
    var usrn=document.getElementById('username').value;
    var pswd=document.getElementById('pwd').value;
        if( ((usrn && pswd)!="") && ((document.getElementById("check").checked)==true))
            { 
                document.getElementById("btn").disabled = false;
                  
            }        
        else{
                document.getElementById("btn").disabled = true;
            }  


}

