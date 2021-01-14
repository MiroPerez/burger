document.addEventListener("DOMContentLoaded", function() {

    +function Accordion() {
        let active = "member--active";
        let items = document.querySelectorAll(".member");

        items.forEach(function(item) {
            let container = item.querySelector(".member__container");
            let content = item.querySelector(".member__content");
            let height = content.getBoundingClientRect().height;
            
            item.addEventListener("click", function() {
                if (item.classList.contains(active)) {
                    CloseAccordion();
                } else {
                    OpenAccordion();
                }
            });

            function OpenAccordion() {
                items.forEach(function(item) {
                    let container = item.querySelector(".member__container");
                    item.classList.remove(active);
                    container.style.height = 0;
                });
    
                item.classList.add(active);
                container.style.height = height + "px";
            }
    
            function CloseAccordion() {
                item.classList.remove(active);
                container.style.height = 0;
            }
        });
    }();

    +function Modal() {
        let open = 'modal--open';
        let links = document.querySelectorAll('[data-modal]');
        let modals = document.querySelectorAll('.modal');
        
        links.forEach(function(link, index) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                let target = link.getAttribute("href")
                let modal = document.querySelector(target);
                Open(modal);
            });
        });

        modals.forEach(function(modal, index) {
            let close = modal.querySelector(".modal__close");
            close.addEventListener("click", function(event) {
                event.preventDefault();
                Close(modal);
            });
        });

        function Open(el) {
            el.classList.add(open);
        }

        function Close(el) {
            el.classList.remove(open);
        }
    }();
    
 
    let list = document.querySelector('.menu__item__list')
    let items = list.querySelectorAll(".menu__item");
    let names = list.querySelectorAll(".trigger__name")

    list.addEventListener('click', (event) => {
        for (let item of items) {
        item.classList.remove('item--active')
    }

        let item = event.target.closest('.menu__item')
        item.classList.add('item--active')

        if(item.classList.contains("item--active")) {
            
        }

    });     
    
    let slides = document.querySelector(".burgers__slides")
    let right = document.querySelector(".right")
    let left = document.querySelector(".left")

    let minRight = 0;
    let maxRight = 1720;
    let step = 860;
    let currentRight = 0;
    
    slides.style.right = currentRight;
    
    right.addEventListener("click", function() {
      if (currentRight < maxRight) {
      currentRight += step;
      slides.style.right = currentRight + "px";
      }
    
    });
    
    left.addEventListener("click", function() {
      if (currentRight > minRight) {
        currentRight -= step;
        slides.style.right = currentRight + "px";
      }
    });

    
    let nav = document.querySelector('.nav')
    let navItems = nav.querySelectorAll(".nav__item");

    nav.addEventListener('click', (event) => {
        for (let navItem of navItems) {
        navItem.classList.remove('nav__item--active')
    }

        let navItem = event.target.closest('.nav__item')
        navItem.classList.add('nav__item--active')

    });   
    
    let positions = []
    let sections = document.querySelectorAll(".section")
    function showPosition(sections){
        sections.forEach(section => {
            let top = section.getBoundingClientRect().top
            positions.push(top)
        })
        
    }
    
    showPosition(sections)

    let main = document.querySelector("main")
    main.addEventListener('scroll', (event) => {
            
        let top = main.scrollTop
        let current = null
        let stop = false
        positions.forEach((position, index) => {
            
            if(top <= position && !stop){
                current = index
                stop = true
            }
        })
        setNav(navItems, current)
    })

    function setNav(items, index){
        let current = index
        items.forEach((item, index) => {
            item.classList.remove("nav__item--active")
            if(current === index){
                item.classList.add("nav__item--active")
            }
        })
    }


    
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.896170, 30.424528],
                zoom: 11
            } ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш ресторан',
                balloonContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map-marker.png',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            })
    
        myMap.geoObjects
            .add(myPlacemark)
           ;
    });
   
    
    
    
    
    
    
    
    
    
               

        
       

    

});