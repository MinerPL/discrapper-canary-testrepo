e.exports = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var a = Object.keys(e),
        s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
        var u = a[l];
        if (!o(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (i = n ? n.call(r, c, d, u) : void 0) || (void 0 === i && c !== d)) return !1;
    }
    return !0;
};
