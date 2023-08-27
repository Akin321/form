function upperCase() {
  const x = document.getElementById("firstname").value;
let y=x.toUpperCase()
 if(x!=y)
{
alert("write in caps");
}
}

function format()
{
  const x = document.getElementById("email").value;
if(x.includes("@")==false)
{
 alert("include@");
}
}

function phnno()
{
const x=document.getElementById("phno").value;
let y=x.length;
if(y!=10)
{ 
alert("enter 10 digits");
}

}

function show()
{

document.write("name:"+document.getElementById("firstname").value+" "+
document.getElementById("lastname").value+"<br>"+
"phno:"+document.getElementById("phno").value+"<br>"+
"email:"+document.getElementById("email").value+"<br>"+
"DOB:"+document.getElementById("date").value+"<br>"+
"address:"+document.getElementById("address").value);

}