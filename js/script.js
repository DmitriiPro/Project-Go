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
            header: 'acc-icon',
            activeHeader: 'acc-icon acc-icon_active'
        }
    });

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
        $('.overlay').show();
        navHeader.show().css({
            'z-index': 600
        });
        burgerMenuBtn.hide();
        menuBtnClose.show();
    });


    const closeBurgermenu = () => { /* функция при клике по оверлею закрывается бургер меню*/ 
        navHeader.hide().css({ // закрывается меню бургер
            'z-index': 600
        });
        $('.overlay').hide(); // закрывается оверлей
        menuBtnClose.hide(); // кнопка закрыть скрывается
        burgerMenuBtn.show(); // кнопка открытия бургер открывается
    };

    $('.overlay').click(closeBurgermenu); // при клике по оверлею закрывает бургер меню
    $('.header__link').click(closeBurgermenu); // при клике по ссылке закрывается бургер меню

    menuBtnClose.on('click', function() {  // открывает окно и закрывает
        navHeader.hide();
        burgerMenuBtn.show();
        menuBtnClose.hide();
        $('.overlay').hide();
    });
    
};

const formReserv = () => {
    const reservationForm = $('.reservation__form'); // нашел саму форму
    const reservationDateTitle = $('.reservation__date-title'); // нашел сам заголовок выбери дату и время

    // маска инпута в форме
    const reservMask = $('.reservation__mask-tel'); // нашел инпут номера телефона

    const telMaskReserv = new Inputmask('+7 (999)-999-99-99');
    telMaskReserv.mask(reservMask);
    //

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

// само модальное окно
const formModal = () => {

    const modalTitle = $('.modal__title'); // нашел заголвок
    const modalForm = document.querySelector('.modal__form'); // нашел саму форму 
    const modalTelephon = $('.modal__tel');// нашел инпут телефон
    const modalName = $('.modal__name');//нашел инпут имя
    

    modalName.focus( () => { // при фокусе на поле меняем текст - Введите ваше имя
        modalTitle
        .text(`Введите ваше имя`)
    })

    modalTelephon.focus( () => { // при фокусе на поле меняем текст - Введите ваш номер
        modalTitle
        .text(`Введите ваш номер`)
    })

    modalName.blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        modalTitle.text('Заполните форму');
    })

    modalTelephon.blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        modalTitle.text('Заполните форму');
    })

    // маска для инпута
    const inputMaskTel = document.querySelector('.modal__mask-input'); // нашел сам инпут телефон другой класс
    const telMask = new Inputmask('+7 (999)-999-99-99'); // на инпут сделал маску для номера 
    telMask.mask(inputMaskTel);
    // конец маски инпута

    // форма валидации для модального окна

    const validation = new JustValidate('.modal__form');
    validation
    .addField('#m-name', [
        {
            rule: 'required',
            errorMessage: 'Ваше имя?',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Не менее 3 символов',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Слишком длинное имя',
        },
    ])
    .addField('#m-phone', [
        {
            rule: 'required',
            errorMessage: 'Введите ваш номер?',
        },
        {
            validator: (value) => {
                const phone =  inputMaskTel.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10;
            },
        
        errorMessage: 'Неправильный номер!',
        },
    ])
    .onSuccess((event) => {
        const name = modalName.val();
        const number = inputMaskTel.inputmask.unmaskedvalue();

        const request = {
            name,
            number
        }

        console.log('Валидация успешна. Отправка данных...', event.target);

        $.ajax({

            url: 'https://postman-echo.com/post',
            method: 'POST',
            data: request,
            async: true,
            success: function(response) {
                modalTitle.text('Ваша заявка принята ' + response.id);
                // $('.modal__fieldset').slideUp(300);
                
                console.log('Запрос выполнен успешно!')
                modalForm.reset();
            },
            error() {
                modalTitle.text('Что-то пошло не так попробуйте позже!');
                console.log(`Произошла ошибка!`);
                
            }
        });

    });


};


// клик на кнопку заказать звонок
const modalka = () => {
    const headerBtn = $('.header__btn'); // нашел кнопку заказать звонок
    const modal = $('.modal'); // нашел саму модалку что скрыта
    const modalClose = $('.modal__close'); // нашел кноку закрытия в модалке белый крестик

    headerBtn.on('click', function() {  // открывает окно
        modal.show(500);
    });

    modalClose.on('click', function() {  // закрывает окно
        modal.hide(500);
    });

    
    modal.click(function(e) {
        if ($(e.target).closest('.modal__form').length == 0) { // кликаем мимо окна за формой и окно закрывается
            $(this).fadeOut();					
        }
    });

};


export {script}
export {safari}
export {questions}
export{header}
export{formReserv}
export{formModal}
export{modalka}

