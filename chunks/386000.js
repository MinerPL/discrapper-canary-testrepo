n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250), a = n(470079), l = n(652844), s = n(628581), r = n(871499);
function o(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: o,
            centerButton: c = !1,
            awaitingRemote: u,
            onMouseEnter: d,
            onMouseLeave: h,
            ...p
        } = e, m = t || n || o, _ = c ? r.d : r.Z, f = (0, s.Z)(t, n, o, u), {
            Component: E,
            play: C,
            events: g
        } = (0, l.O)(m ? 'unmute' : 'mute');
    return a.useEffect(() => () => C(), [
        C,
        m
    ]), (0, i.jsx)(_, {
        isActive: !m,
        iconComponent: E,
        label: f,
        onMouseEnter: e => {
            null == d || d(e), g.onMouseEnter();
        },
        onMouseLeave: e => {
            null == h || h(e), g.onMouseLeave();
        },
        ...p
    });
}
