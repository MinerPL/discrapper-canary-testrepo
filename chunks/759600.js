var r = n(625898),
    i = n(771701);
e.exports = function (e, t) {
    var n = -1,
        a = i(e) ? Array(e.length) : [];
    return (
        r(e, function (e, r, i) {
            a[++n] = t(e, r, i);
        }),
        a
    );
};
