let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

tl = new TimelineMax();

toggle.addEventListener('click', function() {
    //Closing the menu
    if(body.classList.contains('menu__open')) {
        body.classList.remove('menu__open');
        tl.to(".menu__sep", 0, {
            height: 0,
            opacity: 0,
        });

        tl.to(".menu__sep__icon", 0, {
            opacity: 0,
        });
    }
    //Opening the menu
    else {
        body.classList.add('menu__open');
        tl.to(".menu__sep", .75, {
            height: '100%',
            opacity: 1,
        },
        "+=0.5");

        tl.to(".menu__sep__icon", .25, {
            opacity: 1,
        },
        "-=0.3");
    }

    //Displaying the left menu links
    tl.staggerFrom(
        ".menu__left > .menu__left__link",
        0.5,
        {
            y: 40,
            opacity: 0,
            ease: Expo.easeOut,
        },
        "0.1",
        "-=0.5"
    );

    //Displaying the right menu links
    tl.staggerFrom(
        ".menu__right > .menu__right__item",
        0.25,
        {
            y: 40,
            opacity: 0,
            ease: Expo.easeOut,
        },
        "0.1", 
        "-=0.5"
    );
})