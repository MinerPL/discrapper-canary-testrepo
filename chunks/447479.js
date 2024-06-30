e.exports = function (e, t, n, s) {
    var a = -1, i = null == e ? 0 : e.length;
    for (s && i && (n = e[++a]); ++a < i;)
        n = t(n, e[a], a, e);
    return n;
};
