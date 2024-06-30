n.d(t, {
    M: function () {
        return i;
    },
    d: function () {
        return a;
    }
});
let r = {};
function i(e, t) {
    r[e] = t;
}
function a() {
    return Object.keys(r).map(e => ''.concat(e, ':').concat(r[e]));
}
