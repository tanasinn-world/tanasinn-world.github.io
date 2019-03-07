/*
function random_page(){

const c_href = location.href
const c = Number(c_href.split('/')[c_href.split('/').length -1].replace(/\.html/, ''));

const u =  Array.from(new Array(8)).map((v, i) => '/posts/' + i.toString() + '.html');
const removed = u.splice(c, 1);

const next_u = (u[Math.floor(Math.random()*u.length)]);

location.href = next_u

}
*/
function random_page(){
    const NUM_OF_POSTS = 10;
    const randomTargets = [...Array(NUM_OF_POSTS).keys()]
                        .map(i => `/posts/${i}.html`)
                        .filter(path => path !== location.pathname);
    const nextUrl = randomTargets[Math.floor(Math.random() * randomTargets.length)];

    location.pathname = nextUrl;
}