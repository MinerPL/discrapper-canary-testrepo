e.exports = function (e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
};
