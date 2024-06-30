e.exports = function (e, t, n, E) {
    for (var _ = -1, i = null == e ? 0 : e.length; ++_ < i;) {
        var r = e[_];
        t(E, r, n(r), e);
    }
    return E;
};
