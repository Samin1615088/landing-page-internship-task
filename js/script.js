let thumbnails = document.getElementsByClassName('thumbnail')
let count = 0;

let activeImages = document.getElementsByClassName('active')

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        console.log(activeImages)

        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }


        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function () {
    if (count == 0) {
        count = thumbnails.length - 1;
    } else {
        count--;
    }
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active')
    }
    thumbnails[count].classList.add('active')
    document.getElementById('featured').src = thumbnails[count].src;
})

buttonRight.addEventListener('click', function () {
    if (count == thumbnails.length - 1) {
        count = 0;
    } else {
        count++;
    }
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active')
    }
    thumbnails[count].classList.add('active')
    document.getElementById('featured').src = thumbnails[count].src;
})
