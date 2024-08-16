function r(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
}
function i(e, t, n, r) {
    return r.tension * (e - t) - r.friction * n;
}
n.d(t, {
    B: function () {
        return i;
    },
    M: function () {
        return r;
    }
});
