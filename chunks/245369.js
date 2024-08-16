var r = n(670097);
t.Z = function (e, t) {
    return function (n, i) {
        if (null == n) return n;
        if (!(0, r.Z)(n)) return e(n, i);
        for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && !1 !== i(o[s], s, o); );
        return n;
    };
};
