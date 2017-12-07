
function move(x){
  document.getElementById(x).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

window.addEventListener('resize',()=>{
  var w = window.innerWidth
  if(w < 1170){
    document.getElementById("title").style.display="none";
  }
  else if (w >= 1170){
    document.getElementById("title").style.display="inline";
  }
})