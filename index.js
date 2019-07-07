'use strict';

var warning = require('warning');

var __DEV__ = process.env.NODE_ENV !== 'production';

var warningOnce = function() {};

if (__DEV__) {
    var warned = {};
    warningOnce = function(condition, format, args) {
        if (format !== undefined && warned[format]) {
            return;
        }

        var len = arguments.length;

        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
        }

        warning.apply(null, [condition, format].concat(args));
        warned[message] = !condition;
    };
}

module.exports = warningOnce;
