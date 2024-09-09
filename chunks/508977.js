var r = n(854441),
    i = n(917430);
t.Z = function (e) {
    for (var t = (0, i.Z)(e), n = t.length; n--; ) {
        var a = t[n],
            s = e[a];
        t[n] = [a, s, (0, r.Z)(s)];
    }
    return t;
};
