var r = n(703825)(),
    i = n(192853)('Object.prototype.toString'),
    a = function (e) {
        return (!r || !e || 'object' != typeof e || !(Symbol.toStringTag in e)) && '[object Arguments]' === i(e);
    },
    s = function (e) {
        return !!a(e) || (null !== e && 'object' == typeof e && 'number' == typeof e.length && e.length >= 0 && '[object Array]' !== i(e) && '[object Function]' === i(e.callee));
    },
    o = (function () {
        return a(arguments);
    })();
(a.isLegacyArguments = s), (e.exports = o ? a : s);
