n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(692547),
    r = n(652844),
    s = n(628581),
    o = n(743078),
    c = n(871499);
function d(e) {
    let { selfMute: t, serverMute: n, suppress: d, centerButton: u = !1, awaitingRemote: h, onMouseEnter: p, onMouseLeave: m, ...f } = e,
        { mode: g } = (0, o.Z)({ location: 'MicButton' }),
        C = t || n || d,
        x = u ? c.d : c.Z,
        v = (0, s.Z)(t, n, d, h),
        { Component: _, play: I, events: E } = (0, r.O)(C ? 'unmute' : 'mute');
    return (
        l.useEffect(() => () => I(), [I, C]),
        (0, i.jsx)(x, {
            isActive: 'mic-push-to-enable' === g ? !C : C,
            iconComponent: _,
            iconColor: C && 'mic-push-to-disable-red' === g ? a.Z.unsafe_rawColors.RED_400.css : void 0,
            label: v,
            onMouseEnter: (e) => {
                null == p || p(e), E.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == m || m(e), E.onMouseLeave();
            },
            ...f
        })
    );
}
