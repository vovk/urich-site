(function () {
    let elems = document.querySelectorAll('.accordeon');

    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', accordeonActive);
    }

    function accordeonActive() {
        let $items = this.parentNode.children;
        let items_child;
        for (let i = 0; i < $items.length; i++) {
            items_child = $items[i].querySelector('.accordeon__content');
            items_child.classList.remove('content-active');

            $items[i].querySelector('.accordeon__title').classList.remove('title-active');
            $items[i].querySelector('.title__image').classList.remove('title__image-active');

        }
        items_child = this.querySelector('.accordeon__content');
        items_child.classList.add('content-active');

        this.querySelector('.accordeon__title').classList.add('title-active');
        this.querySelector('.title__image').classList.add('title__image-active');
    }

})();