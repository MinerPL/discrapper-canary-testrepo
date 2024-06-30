var r = n(11537), i = n(685347);
e.exports = function (e, t, n, a) {
    var o = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l;) {
        var u = t[s], c = a ? a(n[u], e[u], u, n, e) : void 0;
        void 0 === c && (c = e[u]), o ? i(n, u, c) : r(n, u, c);
    }
    return n;
};
