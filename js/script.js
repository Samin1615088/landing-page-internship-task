/*---------- 
fake data
------------*/
const fakeData = [
    {
        productName: "Kyara Upholstered Standard Bed",
        companyName: "Zipcode design",
        description: "Anchor your living room in sophisticated style and impeccable comfort with a single addition. Perfectly balancing wood accents with fabric upholstery 1.",
        rating: "5.0",
        price: "567",
        // imageUrl: "https://dummyimage.com/300x300/000/fff&text=image+1"
        imageUrl: "./images/sofa_1"
    },
    {
        productName: "Kyara Upholstered Double Bed",
        companyName: "Selipcode design",
        description: "Anchor your living room in sophisticated style and impeccable comfort with a single addition. Perfectly balancing wood accents with fabric upholstery 2.",
        rating: "4.3",
        price: "410",
        // imageUrl: "https://dummyimage.com/300x300/000/fff&text=image+2"
        imageUrl: "./images/sofa_2"
    },
    {
        productName: "Kyara Upholstered King Size Bed",
        companyName: "Stolinecode design",
        description: "Anchor your living room in sophisticated style and impeccable comfort with a single addition. Perfectly balancing wood accents with fabric upholstery 3.",
        rating: "2.3",
        price: "130",
        // imageUrl: "https://dummyimage.com/300x300/000/fff&text=image+3"
        imageUrl: "./images/sofa_3"
    },
    {
        productName: "Kyara Upholstered Soft Bed",
        companyName: "Upcode design",
        description: "Anchor your living room in sophisticated style and impeccable comfort with a single addition. Perfectly balancing wood accents with fabric upholstery 4.",
        rating: "4.0",
        price: "900",
        // imageUrl: "https://dummyimage.com/300x300/000/fff&text=image+4"
        imageUrl: "./images/sofa_4"
    },
]
console.log(fakeData)

let thumbnails = document.getElementsByClassName("thumbnail");
let count = 0;

let activeImages = document.getElementsByClassName('active')

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('featured').src = this.src;
        displayProductData(i);
    })
}


/* --------------- 
slider button
------------------ */
let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

/* --------------left slide button----------------*/
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
    displayProductData(count)
})

/* --------------right slide button----------------*/
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

function displayProductData(i) {
    document.getElementById('product__name').innerText = fakeData[i].productName;
    document.getElementById('product__company').innerText = `by ${fakeData[i].companyName}`;
    document.getElementById('product__content').innerText = fakeData[i].description;
    document.getElementById('review__text').innerText = `(${fakeData[i].rating})`;
    document.getElementById('tag__price').innerText = `$ ${fakeData[i].price}`;
}