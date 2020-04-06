function random_page(){
    const NUM_OF_POSTS = 10;
    const randomTargets = [...Array(NUM_OF_POSTS).keys()]
                        .map(i => `/posts/${i}.html`)
                        .filter(path => path !== location.pathname);
    const nextUrl = randomTargets[Math.floor(Math.random() * randomTargets.length)];

    location.pathname = nextUrl;
}