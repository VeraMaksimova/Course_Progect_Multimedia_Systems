
let images = ["url(img/srtucture/cabel.jpg)",
    "url(img/srtucture/mar.png)",
    "url(img/srtucture/combi2.png)",
    "url(img/srtucture/marhall.png)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-1.jpg)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-2.jpg)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-3.jpg)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-4.jpg)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-5.jpg)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-6.jpg)",
    "url(img/srtucture/squier-fsr-classic-vibe-60s-custom-esquire-lrl-black-7.jpg)"];


function nextSlide_left() {
    let element = document.getElementById('slider__images');
    if (flag == 0) {
        flag = images.length - 1;
        element.style.backgroundImage = (images[flag]);
    } else {
        flag = flag - 1;
        element.style.backgroundImage = (images[flag]);
    }
}

let flag = 0;

function nextSlide_right() {
    let element = document.getElementById('slider__images');
    if (flag == images.length - 1) {
        flag = 0;
        element.style.backgroundImage = (images[flag]);
    } else {
        flag = flag + 1;
        element.style.backgroundImage = (images[flag]);
    }
} 