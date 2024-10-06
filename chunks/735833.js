var r = n(42848);
e.exports = function (e, t, n) {
    for (var i = -1, a = e.length; ++i < a; ) {
        var s = e[i],
            o = t(s);
        if (null != o && (void 0 === l ? o == o && !r(o) : n(o, l)))
            var l = o,
                u = s;
    }
    return u;
};
