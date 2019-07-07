'use strict';

var warning = require('warning');

var __DEV__ = process.env.NODE_ENV !== 'production';

var warningOnce = function() {};

if (__DEV__) {
    var warned = {};
    warningOnce = function(condition, message, vars) {
        if (message !== undefined && warned[message]) {
            return;
        }

        var len = arguments.length;

        vars = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
            vars[key - 2] = arguments[key];
        }

        warning.apply(null, [condition, message].concat(vars));
        warned[message] = !condition;
    };
}

module.exports = warningOnce;
