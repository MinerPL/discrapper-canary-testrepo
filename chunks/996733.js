n.d(t, {
    QH: function () {
        return o;
    },
    Z7: function () {
        return a;
    },
    yN: function () {
        return r;
    }
});
var i = n(652874),
    s = n(731965);
let l = (0, i.Z)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function r(e) {
    (0, s.j)(() => l.setState({ query: e }));
}
function o(e) {
    (0, s.j)(() => l.setState({ isActive: e }));
}
function a() {
    return l().query;
}
