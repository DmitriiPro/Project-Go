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

export {script}
export {safari}