n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(685072),
    a = n(287734),
    s = n(871499),
    o = n(689938);
function l(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u, ...c } = e,
        d = t ? s.d : s.Z,
        { Component: _, events: E } = (0, i.K)();
    return (0, r.jsx)(d, {
        ...c,
        onClick: () => {
            a.default.disconnect(), null == n || n();
        },
        iconComponent: _,
        onMouseEnter: (e) => {
            null == l || l(e), E.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == u || u(e), E.onMouseLeave();
        },
        label: o.Z.Messages.DISCONNECT_SELF
    });
}
