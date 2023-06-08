'use strict'

window.addEventListener( 'load', () => {

    function check() {

        let chk1 = document.querySelector('#chk1');
        let chk2 = document.querySelector('#chk2');
        let chk3 = document.querySelector('#chk3');
        let reset = document.querySelector('.reset');

        chk1.onclick = function() {
            if (chk1.checked) {
                chk1.disabled = 'true';
            }
        }
        chk2.onclick = function() {
            if (chk2.checked) {
                chk2.disabled = 'true';
            }
        }
        chk3.onclick = function() {
            if (chk3.checked) {
                chk3.disabled = 'true';
            }
        }

        reset.onclick = function() {
            chk1.disabled = false;
            chk1.checked = false;

            chk2.disabled = false;
            chk2.checked = false;
            
            chk3.disabled = false;
            chk3.checked = false;
        }

    }
    check();
});