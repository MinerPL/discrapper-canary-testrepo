var r = n(158698);
e.exports = function (e, t) {
    if (e !== t) {
        var n = void 0 !== e, i = null === e, a = e == e, o = r(e), s = void 0 !== t, l = null === t, u = t == t, c = r(t);
        if (!l && !c && !o && e > t || o && s && u && !l && !c || i && s && u || !n && u || !a)
            return 1;
        if (!i && !o && !c && e < t || c && n && a && !i && !o || l && n && a || !s && a || !u)
            return -1;
    }
    return 0;
};
