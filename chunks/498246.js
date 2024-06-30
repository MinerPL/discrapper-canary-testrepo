var t = Object.prototype.toString, n = Math.max, r = function (e, t) {
        for (var n = [], r = 0; r < e.length; r += 1)
            n[r] = e[r];
        for (var i = 0; i < t.length; i += 1)
            n[i + e.length] = t[i];
        return n;
    }, i = function (e, t) {
        for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1)
            n[i] = e[r];
        return n;
    }, a = function (e, t) {
        for (var n = '', r = 0; r < e.length; r += 1)
            n += e[r], r + 1 < e.length && (n += t);
        return n;
    };
e.exports = function (e) {
    var o, s = this;
    if ('function' != typeof s || '[object Function]' !== t.apply(s))
        throw TypeError('Function.prototype.bind called on incompatible ' + s);
    for (var l = i(arguments, 1), u = n(0, s.length - l.length), c = [], d = 0; d < u; d++)
        c[d] = '$' + d;
    if (o = Function('binder', 'return function (' + a(c, ',') + '){ return binder.apply(this,arguments); }')(function () {
            if (this instanceof o) {
                var t = s.apply(this, r(l, arguments));
                return Object(t) === t ? t : this;
            }
            return s.apply(e, r(l, arguments));
        }), s.prototype) {
        var _ = function () {
        };
        _.prototype = s.prototype, o.prototype = new _(), _.prototype = null;
    }
    return o;
};
