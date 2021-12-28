const cart = () => {

    const inputCartNumber = document.querySelector('.cart__input-number');
    const cartNumMask = new Inputmask('9999 9999 9999 9999');
    cartNumMask.mask(inputCartNumber);


    const inputCartDate = document.querySelector('.cart__inp-num-one');
    const cartCartDate = new Inputmask('99 / 99');
    cartCartDate.mask(inputCartDate);

    const inputCartCvv = document.querySelector('.cart__inp-num-two');
    const cartCvv = new Inputmask('999');
    cartCvv.mask(inputCartCvv);

    const cartForm = document.querySelector('.cart__form');
    const cartBtnCheck = document.querySelector('.cart__btn-check');

    new JustValidate('.cart__form', {
        // colorWrong: 'blue';

        rules : {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30,
            },

            number: {
                required: true,
                maxLength: 16,
                function() {
                    const num = inputCartNumber.inputmask.unmaskedvalue();
                    return num.length === 16;
                }
            },

            date: {
                required: true,
                maxLength: 4,
                function() {
                    const date = inputCartDate.inputmask.unmaskedvalue();
                    return date.length === 4;
                }
            },

            cvv: {
                required: true,
                maxLength: 3,
                function() {
                    const cv = inputCartCvv.inputmask.unmaskedvalue();
                    return cv.length === 3;
                }
            },
        },
        messages: {
            name: 'Введите ваше имя',
            number: {
                required: 'Введите номер карты',
                function: 'Номер введен не полностью'
            }, 
            date: {
                required: 'Введите месяц и дата',
                function: 'Неверно'
            },
            cvv: {
                required: 'Введите cvv',
                function: 'Неверно'
            }
        },
        submitHandler: function (form, data, ajax) {

            cartForm.disabled = true;

            ajax({
                url: 'https://just-validate-api.herokuapp.com/submit',
                method: 'POST',
                data,
                async: true,
                callback(response) {
                    console.log(response)
                    form.reset();
                    
                },
                error(response) {
                    cartForm.disabled = false;
                    console.log(`Произошла ошибка: ${response}`);

                }
            })
        } 
    });

};

export {cart}