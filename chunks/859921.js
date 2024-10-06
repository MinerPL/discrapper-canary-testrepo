n.d(t, {
    OI: function () {
        return E;
    },
    QQ: function () {
        return d;
    },
    jY: function () {
        return _;
    },
    jg: function () {
        return u;
    }
});
var i = n(470079),
    a = n(652874),
    s = n(143927),
    r = n(731965);
let l = Object.freeze({
        selectedTab: null,
        isSearchVisible: !1
    }),
    o = (0, a.Z)(() => l);
function c(e) {
    var t;
    return o(i.useRef(((t = e), (e) => e[t])).current, s.Z);
}
let d = () => c('isSearchVisible'),
    u = () => c('selectedTab'),
    _ = (e) => {
        (0, r.j)(() => o.setState(e));
    };
function E() {
    _(l);
}
