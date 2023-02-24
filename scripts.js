const subMenu = document.querySelector('.sub-menu');
const category = document.querySelector('#category');
const menuItems = document.querySelector('.menu-item');
const photos = document.querySelectorAll('.photo');
const babyAlbum = document.querySelector('#babyAlbum');
const productAlbum = document.querySelector('#productAlbum');
const weddingAlbum = document.querySelector('#weddingAlbum');
const body = document.querySelector('body');
const music = document.querySelector('.music');

const babyImgUrls = ['/media/baby-1.jpg', '/media/baby-2.jpg', '/media/baby-3.jpg', '/media/baby-4.jpg', '/media/baby-5.jpg', '/media/baby-6.jpg', '/media/baby-1.jpg', '/media/baby-7.jpg',];
const productImgUrls = ['/media/product-1.jpg', '/media/product-2.jpg', '/media/product-3.jpg', '/media/product-4.jpg', '/media/product-5.jpg', '/media/product-6.jpg', '/media/product-7.jpg', '/media/girl-1.jpg', '/media/girl-2.jpg', '/media/girl-3.jpg', '/media/girl-4.jpg'];
const weddingImgUrls = ['/media/wedding-1.jpg', '/media/wedding-2.jpg', '/media/wedding-3.jpg', '/media/wedding-4.jpg'];
const bgImgUrls = ['/media/bg-2.jpg', '/media/bg-3.jpg', '/media/bg-5.jpg', '/media/bg-6.jpg', '/media/bg-7.jpg', '/media/bg-8.jpg'];
let songElem = new Audio('/media/song.mp3');


function showSubMenu() {
    if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
    } else {
        subMenu.classList.add('show'); 
    }
}

function loader() {
    let articleId = document.querySelector('article').id;

    // album
    albumGenerator(articleId);

    // song
    if (music.classList.contains('muted')) {
        music.classList.remove('muted');
    }
    songElem.play();

    // background
    bgGenerator(articleId);
}

function carousel(event) {
    [...document.querySelector('.album').children].forEach(element => {
        element.classList.remove('active');
    });
    event.target.parentElement.classList.add('active');
}

function albumGenerator(articleId) {

    if (articleId == 'baby') {
        babyImgUrls.forEach( url => {
            let liElem = document.createElement('li');
            let imgElem = document.createElement('img');
            imgElem.setAttribute('src', url);
            liElem.setAttribute('class','photo');
            liElem.appendChild(imgElem);
            babyAlbum.appendChild(liElem);
            liElem.addEventListener('click', carousel);
        });
        babyAlbum.children[2].classList.add('active');
    } else if (articleId == 'wedding') {
        weddingImgUrls.forEach( url => {
            let liElem = document.createElement('li');
            let imgElem = document.createElement('img');
            imgElem.setAttribute('src', url);
            liElem.setAttribute('class','photo');
            liElem.appendChild(imgElem);
            weddingAlbum.appendChild(liElem);
            liElem.addEventListener('click', carousel);
        });
        weddingAlbum.children[2].classList.add('active');
    } else if (articleId == 'product'){
        productImgUrls.forEach( url => {
            let liElem = document.createElement('li');
            let imgElem = document.createElement('img');
            imgElem.setAttribute('src', url);
            liElem.setAttribute('class','photo');
            liElem.appendChild(imgElem);
            productAlbum.appendChild(liElem);
            liElem.addEventListener('click', carousel);
        });
        productAlbum.children[2].classList.add('active');
    }
    
}

function bgGenerator(articleId) {
    if (articleId == 'landing') {

        setInterval(() => {
            let randomNumber = Math.floor(Math.random() * 6);
            document.body.style.backgroundImage = 'url('+bgImgUrls[randomNumber]+')';
            console.log(bgImgUrls[randomNumber]);
        }, 15000);
        
    } else {
        
    }
}

function toggleMusic() {
    if (music.classList.contains('muted')) {
        music.classList.remove('muted');
        songElem.currentTime = 0;
        songElem.play();
        music.innerHTML = '<i class="fa fa-bell" aria-hidden="true"></i>';
    } else {
        music.classList.add('muted');
        songElem.pause();
        music.innerHTML = '<i class="fa fa-bell-slash" aria-hidden="true"></i>';
    }
}

category.addEventListener('click', showSubMenu);
window.addEventListener('load', loader);
music.addEventListener('click', toggleMusic);

