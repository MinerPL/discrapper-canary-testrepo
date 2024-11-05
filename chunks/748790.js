var r = n(387493),
    i = n(698030),
    a = n(459901),
    s = n(44091);
e.exports = function (e) {
    return function (t) {
        var n = i((t = s(t))) ? a(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            l = n ? r(n, 1).join('') : t.slice(1);
        return o[e]() + l;
    };
};
