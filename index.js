'use strict';

const warning = require('warning');

const warned = {};
const warningOnce = (condition, message) => {
    if (warned[message]) {
        return;
    }

    warning(condition, message);
    warned[message] = !condition;
};

module.exports = warningOnce;
