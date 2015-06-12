function sayHello() {
   var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var img = new Image();                 // create logo
/*var div = document.getElementById('foo');

img.onload = function () {
   div.appendChild(img);
};*/

img.src = './images/google_logo.png';
img.alt = 'google logo';
document.body.appendChild(img); 


var mi = document.createElement("input");
mi.id = 'mi';
mi.type= "text";

document.body.appendChild(mi); 

var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("Google Search");       // Create a text node
btn.appendChild(t);   
btn.onclick= goToGoogle;                            // Append the text to <button>
document.body.appendChild(btn); 

var btn1 = document.createElement("BUTTON");        // Create a <button> element
var t1 = document.createTextNode("I am Feeling Lucky");       // Create a text node
btn1.appendChild(t1);
document.body.appendChild(btn1); 

var element = document.getElementById("div1")
.setAttribute("align", "center");
var child = document.getElementById("p1").setAttribute("align", "center");
//element.insertBefore(para,child)
//.setAttribute("align", "center");
//element.insertBefore(img,child);
//element.insertBefore(mi,child);
}

function goToGoogle() {
   var mi1 = document.getElementById("mi").value;
   var replaced = mi1.split(' ').join('+');
   var prefix = "https://www.google.co.in/#q=";
   var searchText = prefix+replaced;
   location.href=searchText;
   //alert(searchText);
}
