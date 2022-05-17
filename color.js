//nightdayHandler 연관 파일//
//소스파일//

var Links = {
    setColor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
    }
}
}
var Body = {
 setcolor:function (color){
   document.querySelector('body').style.color = color;
 },
 setBackgroundColor:function(color){
 document.querySelector('body').style.backgroundColor = color;
}
}
function nightdayHandler(self){
var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setcolor('white');
    self.value = 'day'

    Links.setColor('powderblue');
  } else {
    target.style.backgroundColor='white';
    target.style.color='black';
    self.value = 'night'

    Links.setColor('green');
  }
}
