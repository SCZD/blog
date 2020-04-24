let url = window.location.href.split('/').pop().replace(/_/g," ").replace(/.html/g,"").replace(/#/g,"");
let title = url.charAt(0).toUpperCase() + url.slice(1);
document.title = title;