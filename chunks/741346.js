var r = n(886985), i = n(256098), a = n(207536), o = n(695609), s = n(939556), l = n(322909), u = n(118666);
e.exports = function (e, t, n) {
    var c = -1;
    return t = r(t.length ? t : [u], s(i)), o(a(e, function (e, n, i) {
        return {
            criteria: r(t, function (t) {
                return t(e);
            }),
            index: ++c,
            value: e
        };
    }), function (e, t) {
        return l(e, t, n);
    });
};
