n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(685072),
    a = n(287734),
    s = n(67212),
    o = n(158631),
    l = n(871499),
    u = n(689938);
function c(e) {
    let { centerButton: t = !1, channel: n, onClick: c, onMouseEnter: d, onMouseLeave: _, ...E } = e,
        f = t ? l.d : l.Z,
        h = n.isBroadcastChannel(),
        p = (0, o.zW)(n.id),
        { Component: m, events: I } = (0, i.K)();
    return (0, r.jsx)(f, {
        ...E,
        onClick: () => {
            p && (0, s.b_)(), a.default.disconnect(), null == c || c();
        },
        iconComponent: m,
        onMouseEnter: (e) => {
            null == d || d(e), I.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == _ || _(e), I.onMouseLeave();
        },
        label: p ? u.Z.Messages.STOP_BROADCASTING : h ? u.Z.Messages.LEAVE_BROADCAST : u.Z.Messages.DISCONNECT_SELF
    });
}
