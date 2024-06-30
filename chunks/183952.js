var r = n(844511), i = n(364555);
t.Z = function (e, t, n, a) {
    var o = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l;) {
        var u = t[s], c = a ? a(n[u], e[u], u, n, e) : void 0;
        void 0 === c && (c = e[u]), o ? (0, i.Z)(n, u, c) : (0, r.Z)(n, u, c);
    }
    return n;
};
