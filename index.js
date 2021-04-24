var array=[];
//var m=array.sort();
function add(){
  var data=document.getElementById("in").value;
  array.push(data);
  document.getElementById("in").value=" ";
}
function display(){
   var m=array.sort();
  document.getElementById("dis").innerHTML=array;
  //var m=array.sort();
}
function max(){
  document.getElementById("maxi").innerHTML=Math.max(...array); 
  }
function min(){
document.getElementById("mini").innerHTML=Math.min(...array);
}
