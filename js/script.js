window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
           modal = require('./modules/modal'),
           timer = require('./modules/timer'),
           forms = require('./modules/forms'),
           calc = require('./modules/calc'),
           slider = require('./modules/slider'),
           cards = require('./modules/cards');

        tabs();
        modal();
        timer();
        forms();
        calc();
        slider();
        cards();

});