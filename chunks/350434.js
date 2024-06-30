var r, i = Object.prototype.toString, a = Function.prototype.toString, o = /^\s*(?:function)?\*/, s = n(703825)(), l = Object.getPrototypeOf, u = function () {
        if (!s)
            return !1;
        try {
            return Function('return function*() {}')();
        } catch (e) {
        }
    };
e.exports = function (e) {
    if ('function' != typeof e)
        return !1;
    if (o.test(a.call(e)))
        return !0;
    if (!s)
        return '[object GeneratorFunction]' === i.call(e);
    if (!l)
        return !1;
    if (void 0 === r) {
        var t = u();
        r = !!t && l(t);
    }
    return l(e) === r;
};
