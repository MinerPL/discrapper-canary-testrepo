var r = n(812639),
    i = n(757209),
    a = n(105890),
    s = Math.ceil,
    o = Math.max;
e.exports = function (e, t, n) {
    t = (n ? i(e, t, n) : void 0 === t) ? 1 : o(a(t), 0);
    var l = null == e ? 0 : e.length;
    if (!l || t < 1) return [];
    for (var u = 0, c = 0, d = Array(s(l / t)); u < l; ) d[c++] = r(e, u, (u += t));
    return d;
};
