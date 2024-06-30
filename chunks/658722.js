t.exports = function (t, r) {
    var n = r.length, e = t.length;
    if (e > n)
        return !1;
    if (e === n)
        return t === r;
    t:
        for (var i = 0, o = 0; i < e; i++) {
            for (var u = t.charCodeAt(i); o < n;)
                if (r.charCodeAt(o++) === u)
                    continue t;
            return !1;
        }
    return !0;
};
