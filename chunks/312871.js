t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(470079),
    a = t(434650);
function l(e) {
    let { onVisible: n, threshold: t } = e,
        l = i.useRef(!1);
    return (0, a.O)((e) => {
        if (!!e && !0 !== l.current) n(), (l.current = !0);
    }, t);
}
