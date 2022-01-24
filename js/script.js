const script = () => {
    
    let prevActiveElement;


    function addInnert(elem) {
        prevActiveElement = document.activeElement;
        for (let i = 0; i < document.body.children.length; i++) {
            if (document.body.children[i] !== elem) {
                document.body.children[i].inert = true;
            }
        };
        elem.inert = false;
        if (elem.closest('[inert]')) elem.closest('[inert]').inert = false;

        for (let i = 0; i < window.elemsInert.length; i++) {
            if (elem === window.elemsInert[i].elem && window.elemsInert[i].esc) {
                function esc(e) {
                    if (e.key == 'Escape') {
                        window.elemsInert[i].esc()
                    }
                    document.removeEventListener('keydown', esc);
                }
                document.addEventListener('keydown', esc);
            }

        }
    }

    function activationInnert(elemsInert) {
        window.elemsInert = elemsInert;

        function removeInnert(elem) {
            if (elem) {
                for (let i = 0; i < document.body.children.length; i++) {
                    if (document.body.children[i] !== elem) {
                        document.body.children[i].inert = false;
                    }
                };
                elem.innert = true;
                prevActiveElement.focus();
            }

            for (let i = 0; i < elemsInert.length; i++) {
                if (window.screen.width <= elemsInert[i].breakpoints || !elemsInert[i].breakpoints) {
                    elemsInert[i].elem.inert = true
                    console.log(elemsInert[i]);
                }
            }
        }
        removeInnert();

        return removeInnert
    }


};


const safari = () => {
    document.addEventListener('click', event => {
        if (event.target.matches('button')) {
            event.target.focus()
        }
        })
};

const questions = () => {

    
    $('.questions__list').accordion({
        active: true,
        collapsible: true,
        heightStyle: 'content',
        icons: {
            header: '.ui-accordion-header-icon',
            activeHeader: ' .ui-accordion-header-icon'
        }
    });

    let imgOddPlus = '../img/plus-violet.svg';
    let imgOddMinus = '../img/active-minus-violet.svg';

    $('.odd').on('click', function() {
        [imgOddMinus, imgOddPlus] = [imgOddPlus, imgOddMinus];
        $(this)
        .css({
            backgroundImage: `url(${imgOddPlus})`,
            
        })

    })
    
    let imgEvenPlus = '../img/plus-white.svg';
    let imgEvenMinus = '../img/active-minus-white.svg';

    $('.even').on('click', function() {
        [imgEvenMinus, imgEvenPlus] = [imgEvenPlus, imgEvenMinus];
        $(this)
        .css({
            backgroundImage: `url(${imgEvenPlus})`,
            
        })

    })


    ymaps.ready(init); // яндекс карта
    function init(){
        const myMap = new ymaps.Map("map", {
            center: [55.723151, 37.565021],
            zoom: 17
        });

        const mark = new ymaps.Placemark([55.723151, 37.565021])

        myMap.geoObjects.add(mark);
    
    myMap.behaviors.disable('scrollZoom'); // запрещает зум карты колесиком мыши
    myMap.behaviors.disable('drag'); // запрещает скролл свайпом
        
    myMap.controls.remove('rulerControl'); // удаляет контрол правила
    myMap.controls.remove('zoomControl'); // удаляет контроль зумирования
    myMap.controls.remove('fullscreenControl'); // удаляет переход в полноэкранный режим
    myMap.controls.remove('typeSelector'); // удаляет тип
    myMap.controls.remove('trafficControl'); // удаляет контроль трафика
    myMap.controls.remove('searchControl'); // удаляет поиск
    myMap.controls.remove('geolocationControl'); // удаляет геолокацию местоположение
    }




    let $page = $('html, body'); // для плавного скролла по якорям
    $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
    });


    var cleave = new Cleave('.reservation__date-input', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    });



};

export {script}
export {safari}
export {questions}



