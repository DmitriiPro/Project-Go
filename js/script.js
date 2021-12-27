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

// const questions = () => {

    // const open = (button, dropDown) => {
    //     closeAllDrops(button, dropDown);
    //     button.ariaExpanded = true;
    
    //     dropDown.style.height = dropDown.scrollHeight + 'px';
    //     button.classList.add('active');
    //     dropDown.classList.add('active');
    // };
    
    // const close = (button, dropDown) => {
    //     button.ariaExpanded = false;
    //     button.classList.remove('active');
    //     dropDown.classList.remove('active');
    //     dropDown.style.height = '';
    // };
    
    // const closeAllDrops = (button, dropDown) => {
    //     characteristicsItemElems.forEach((elem) => {
    //         if (elem.children[0] !== button && elem.children[1] !== dropDown) {
    
    //             close(elem.children[0], elem.children[1]);
    //         }
    //     })
    // }

    // const questionsList = document.querySelector('.questions__list');
    // console.log(questionsList);
    // const questionsItem = document.querySelector('.questions__item');
    // console.log(questionsItem);

    // questionsList.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if (target.classList.contains('questions__title')) {
    //         const parent = target.closest(questionsItem);
    //         const description = parent.querySelector('.questions__text');
    //         description.classList.contains('active') ?
    //             close(target, description) :
    //             open(target, description);
    //     }
    // });

    $('.questions__list').accordion({
        active: true,
        collapsible: true,
        heightStyle: 'content',
        // icons: {
        //     header: 'questions__title',
        //     activeHeader: ' questions__title questions__item'
        // }
    });

    ymaps.ready(init);
    function init(){
        const myMap = new ymaps.Map("map", {
            center: [51.308920, 37.872899],
            zoom: 13
        });

        const mark = new ymaps.Placemark([51.308920, 37.872899])

        myMap.geoObjects.add(mark)
    }

// };

export {script}
export {safari}
// export {questions}



