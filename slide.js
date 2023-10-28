let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();  
}, 2000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
}


let count2 = 1;
document.getElementById("radio-1").checked = true;

setInterval(function() {
  nextRoteiro();  
}, 4000);

function nextRoteiro(){
  count2++;
  if(count2>4){
    count2 = 1;
  }

  document.getElementById("radio-"+count2).checked = true;
}
