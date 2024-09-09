var s = n(484155),
    r = n(599773),
    a = n(730179),
    i = Math.min;
e.exports = function (e, t) {
    if ((e = a(e)) < 1 || e > 9007199254740991) return [];
    var n = 4294967295,
        o = i(e, 4294967295);
    (t = r(t)), (e -= 4294967295);
    for (var c = s(o, t); ++n < e; ) t(n);
    return c;
};
