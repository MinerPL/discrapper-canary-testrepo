var s = n(448730),
    a = n(386015),
    i = n(232396),
    r = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = a((t = r(t))) ? i(t) : void 0,
            l = n ? n[0] : t.charAt(0),
            o = n ? s(n, 1).join('') : t.slice(1);
        return l[e]() + o;
    };
};
