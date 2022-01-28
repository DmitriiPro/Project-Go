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

};

const header = () => {
    const burgerMenuBtn = $('.header__button-menu'); // нашли саму кнопку меню
    const navHeader = $('.header__nav'); // нашли саму навигацию внутри меню 
    const menuBtnClose = $('.header__menu-btn-close'); // нашел саму кнопку закрытия 
    const headerBtn = $('.header__btn'); // кнопка заказать звонок

    burgerMenuBtn.on('click', function() {  // открывает окно и закрывает
        navHeader.show(300);
        burgerMenuBtn.hide();
        menuBtnClose.show();
        
    });

    menuBtnClose.on('click', function() {  // открывает окно и закрывает
        navHeader.hide(300);
        burgerMenuBtn.show();
        menuBtnClose.hide();
    });

};

const formReserv = () => {
    const reservationForm = $('.reservation__form'); // нашел саму форму
    const reservationDateTitle = $('.reservation__date-title'); // нашел сам заголовок выбери дату и время



    $('.reservation__date-input-form').focus( () => { // при фокусе на поле меняем текст - выбор даты
        reservationDateTitle
        .text(`Выберите дату`)
    })

    $('.reservation__time-input-form').focus( () => { // при фокусе на поле меняем текст - выбор времени
        reservationDateTitle
        .text(`Выберите время`)
    })

    $('.reservation__number-input-form').focus( () => { // при фокусе на поле меняем текст - сколько человек
        reservationDateTitle
        .text(`Количество человек`)
    })

    $('.reservation__name-form').focus( () => { // при фокусе на поле меняем текст - ваше имя
        reservationDateTitle
        .text(`Введите имя`)
    })

    $('.reservation__familia-input').focus( () => { // при фокусе на поле меняем текст - введите фамилию
        reservationDateTitle
        .text(`Введите фамилию`)
    })

    $('.reservation__phone-form').focus( () => { // при фокусе на поле меняем текст - введите ваш номер
        reservationDateTitle
        .text(`Введите ваш номер`)
    })

    $('.reservation__email-form').focus( () => { // при фокусе на поле меняем текст - Введите ваш email
        reservationDateTitle
        .text(`Введите ваш email`)
    })

    $('.data').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        reservationDateTitle.text('Заполните форму');
    })

    $('.men').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        reservationDateTitle.text('Заполните форму');
    })

    $('.name').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        reservationDateTitle.text('Заполните форму');
    })

    $('.tel').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        reservationDateTitle.text('Заполните форму');
    })

    reservationForm.submit(function(event) {
        event.preventDefault();

        $.ajax({

            url: 'https://postman-echo.com/post',
            type: 'POST',
            data: $(this).serialize(),
            success(data) {
                reservationDateTitle.text('Ваша заявка принята ' + data.id)
            },
            error() {
                reservationDateTitle.text('Что-то пошло не так попробуйте позже!')
            }
        })

    });


};

const formModal = () => {

    const modalTitle = $('.modal__title'); // нашел заголвок
    const modalForm = $('.modal__form'); // нашел саму форму 

    $('.modal__name').focus( () => { // при фокусе на поле меняем текст - Введите ваше имя
        modalTitle
        .text(`Введите ваше имя`)
    })

    $('.modal__tel').focus( () => { // при фокусе на поле меняем текст - Введите ваш номер
        modalTitle
        .text(`Введите ваш номер`)
    })

    $('.modal__name').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        modalTitle.text('Заполните форму');
    })

    $('.modal__tel').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        modalTitle.text('Заполните форму');
    })


    modalForm.submit(function(event) {
        event.preventDefault();

        $.ajax({

            url: 'https://jsonplaceholder.typicode.com/todos',
            type: 'POST',
            data: $(this).serialize(),
            success(data) {
                modalTitle.text('Ваша заявка принята ' + data.id)
            },
            error() {
                modalTitle.text('Что-то пошло не так попробуйте позже!')
            }
        })

    });

};


export {script}
export {safari}
export {questions}
export{header}
export{formReserv}
export{formModal}



