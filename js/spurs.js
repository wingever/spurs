function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        oldonload();
        func();
      }
    }
  }
function confirmJump(){
     if(confirm("confirm jump ?"))
     {
        return true;
     }
     return false;
}
//在每个链接跳转前弹出警告框，是否跳转
function checkClickA() {
    var checkA=document.getElementsByClassName("checkA");
    var len=checkA.length;
    for(var i=0; i<len; i++)
    {
      checkA[i].onclick=function() {
          if(!confirmJump()) {
            return false;
          }
        }
    } 
}
addLoadEvent(checkClickA);