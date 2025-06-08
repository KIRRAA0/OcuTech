window.addEventListener("load", event => {

    function productHeading() {
        ////////////////
        // Variables
        ////////////////

        const product = {

            value: 125,
            images: [{
                    img1: 'http://127.0.0.1:5500/images/denali-home-main2-removebg-preview%20(1).png'
                },
                {
                    img2: 'https://i.pinimg.com/736x/da/db/fc/dadbfc473c954073f0107a0564dafa29.jpg'
                },
                {
                    img3: 'http://127.0.0.1:5500/images/denali-home-main2-removebg-preview%20(1).png'
                },
                {
                    img4: 'https://i.pinimg.com/736x/01/e5/ba/01e5bac8c88bc5744d6986f2559e6c6f.jpg'
                },
                {
                    img5: 'https://i.pinimg.com/736x/e5/a6/95/e5a6950f15ed95c0c2c39a7dc23a7851.jpg'
                },
                {
                    img6: 'https://i.pinimg.com/736x/6c/5b/6c/6c5b6cf3f4d5b56148507f8e788a798d.jpg'
                }
            ]
        }

        const btnAdd = document.querySelector('.btn.add'),
            btnContainer = document.querySelector('.btnContainer'),
            wrapper = document.querySelector('.wrapper'),
            itemNumber = document.querySelector('.itemNumber'),
            shoppingQuantity = document.querySelector('.shoppingQuantity'),
            inputQuantity = document.querySelector('.inputQuantity'),
            plus = document.querySelector('.plus'),
            minus = document.querySelector('.minus'),
            arrowDrop = document.querySelector('.arrowDrop'),
            dropdown = document.querySelector('.dropdown'),
            nav = document.querySelector('nav'),
            error = document.querySelector('.error'),
            shoppingIcon = document.querySelector('.shoppingIcon'),
            shoppingMenu = document.querySelector('.shoppingMenu'),
            emptyCart = document.querySelector('.emptyCart');

        let = priceFinal = document.querySelector('.priceFinal'),
            priceOriginal = document.querySelector('.priceOriginal'),
            discount = null,
            sizeNumber = document.querySelector('.sizeNumber'),
            dropItem = document.querySelectorAll('.dropItem'),
            maxQuantity = 5,
            newMaxQuantity = maxQuantity;

        ////////////////
        // Events
        ////////////////

        btnAdd.addEventListener('click', addItem);
        plus.addEventListener("click", plusQuantity);
        minus.addEventListener("click", minusQuantity);
        arrowDrop.addEventListener("click", openDrop);
        shoppingIcon.addEventListener("click", openShoppingCart);

        emptyCart.addEventListener("click", cleanCart);

        dropItem.forEach(function (el) {
            el.addEventListener("click", getSize);
        })

        window.addEventListener("resize", resize);


        ////////////////
        // Functions
        //////////////// 

        // Fixed Nav 

        window.onscroll = function () {
            if (window.pageYOffset >= 60) {
                nav.classList.add("fixed");
            } else {
                nav.classList.remove("fixed");
            }
        };

        // Change button position on mobile

        function resize() {
            //Button
            if (window.innerHeight > wrapper.offsetHeight) {
                btnContainer.classList.remove('fixedBtn');
            } else {
                btnContainer.classList.add('fixedBtn');
            }
            parallax();
        }

        // Parallax

        function parallax() {
            if (window.innerWidth > 800) {
                var scene = document.querySelectorAll('.scene');
                scene.forEach(pic => {
                    var parallax = new Parallax(pic);
                })
            }
        }

        // Calculate the Discount

        function getDisccount() {
            priceOriginal.innerText = product.value + "$";
            discount = product.value - (product.value * (30 / 100));
            priceFinal.innerText = discount + "$";
        }

        // Calculate the the Prices with discounts

        function getPrice() {

            priceFinal.innerText = discount * inputQuantity.value + "$";
            priceOriginal.innerText = product.value * inputQuantity.value + "$";

            setTimeout(() => {
                priceFinal.classList.remove('anime');
            }, 400);
        }

        // Update the prices with the quantity counter

        function plusQuantity() {
            if (inputQuantity.value < maxQuantity) {
                inputQuantity.value == inputQuantity.value++;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        function minusQuantity() {
            if (inputQuantity.value > 1) {
                inputQuantity.value == inputQuantity.value--;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        // Add items to shopping cart

        function addItem() {

            let cenas = parseInt(itemNumber.innerText) + parseInt(inputQuantity.value);

            if (cenas <= newMaxQuantity) {
                itemNumber.style.display = "flex";
                itemNumber.innerText = cenas;
                shoppingQuantity.innerText = "x" + cenas;
                itemNumber.classList.add("addItem");
                error.style.display = "none";
            } else {
                error.style.display = "flex";
            }

            setTimeout(() => {
                itemNumber.classList.remove("addItem");
            }, 700);
        }

        // Open Drop

        function openDrop() {
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        }

        //get Drop Size Number Value 

        function getSize(e) {
            sizeNumber.innerText = e.currentTarget.innerText;
            openDrop();
        }

        // Open Shopphing cart

        function openShoppingCart() {
            if (itemNumber.innerText != "0") {
                if (shoppingMenu.classList.contains('openShopping')) {
                    shoppingMenu.classList.remove('openShopping');
                } else {
                    shoppingMenu.classList.add('openShopping');
                }
            }
        }

        //Clean Shopping Cart

        function cleanCart() {
            shoppingMenu.classList.remove('openShopping');
            itemNumber.style.display = "none";
            itemNumber.classList.remove('addItem');
            itemNumber.innerText = "0";
        }

        // Populate the images for Swiper

        product.images.forEach(function (el) {
            // ناخد أول قيمة داخل الكائن el (اللي هي رابط الصورة)
            const imgSrc = Object.values(el)[0];
        
            let template = `
                <div class="swiper-slide">
                    <div class="scene"> 
                        <img src="${imgSrc}" data-depth="0.5">
                        <img src="${imgSrc}" data-depth="1" class="shadow">
                    </div>
                </div>`;
        
            let template2 = `
                <div class="swiper-slide">
                    <img src="${imgSrc}">
                </div>`;
        
            document.querySelector('.galleryMain .swiper-wrapper').insertAdjacentHTML('beforeend', template);
            document.querySelector('.galleryThumbs .swiper-wrapper').insertAdjacentHTML('beforeend', template2);
        });
        


        // Make the slider function

        var galleryThumbs = new Swiper('.galleryThumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            loop: false,
            allowTouchMove: false,
            allowSlidePrev: false,
            allowSlideNext: false,

        });

        var galleryMain = new Swiper('.galleryMain', {
            spaceBetween: 300,
            speed: 500,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            effect: "coverflow",
            coverflowEffect: {
                rotate: 50,
                slideShadows: false,
                depth: 200,
                stretch: 50,

            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,

            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        // Call functions 
        getDisccount();
        parallax();
        resize();
    }

    productHeading();
});