(function() {
    let element = document.querySelector('.burger');
    const OPEN_STATE_MENU = 'open';
    const ROTATE_ICON = 'rotate';
    const DISPLAY_MOBILE_MENU = 'opened';

    function show() {
        element.classList.add(ROTATE_ICON);
        element.parentNode.classList.add(OPEN_STATE_MENU);
        element.nextElementSibling.classList.add(DISPLAY_MOBILE_MENU);
    }
    function hide() {
        element.classList.remove(ROTATE_ICON);
        element.parentNode.classList.remove(OPEN_STATE_MENU);
        element.nextElementSibling.classList.remove(DISPLAY_MOBILE_MENU);
    }

    element.addEventListener('click', function() {
        if (this.classList.contains('rotate')) {
            hide();
        } else {
            show();
        }
    });


})();