n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(864094), a = n(871499), o = n(689938);
function s(e) {
    let {
            isSelfStream: t,
            centerButton: n = !1,
            onMouseEnter: s,
            onMouseLeave: l,
            ...u
        } = e, c = n ? a.d : a.Z, {
            Component: d,
            events: _
        } = (0, i.P)('disable');
    return (0, r.jsx)(c, {
        label: t ? o.Z.Messages.STOP_STREAMING : o.Z.Messages.STOP_WATCHING,
        iconComponent: d,
        isActive: !0,
        onMouseEnter: e => {
            null == s || s(e), _.onMouseEnter();
        },
        onMouseLeave: e => {
            null == l || l(e), _.onMouseLeave();
        },
        ...u
    });
}
