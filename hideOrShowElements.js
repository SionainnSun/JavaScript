function show(className) {
  var els = document.getElementsByClassName(className);
  for(var i=0; i< els.length; i++) {
    els[i].style.display = 'block';
  }
}

function hide(className) {
  var els = document.getElementsByClassName(className);
  for(var i=0; i< els.length; i++) {
    els[i].style.display = 'none';
  }
}
