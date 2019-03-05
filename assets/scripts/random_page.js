function random_page(){

const u =  Array.from(new Array(3)).map((v, i) => '/posts/' + i.toString() + '.html') 
location.href=(u[Math.floor(Math.random()*u.length)]);
}