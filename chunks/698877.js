n.d(t, {
    O: function () {
        return o;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(864094),
    l = n(871499),
    r = n(689938);
function o(e) {
    let t,
        { hasPermission: n, streamActive: o, isSelfStream: c, centerButton: u, onMouseEnter: d, onMouseLeave: h, premiumGlow: m, buttonRef: p, ..._ } = e,
        E = u ? l.d : l.Z;
    t = o ? (c ? r.Z.Messages.STOP_STREAMING : r.Z.Messages.STOP_WATCHING) : n ? r.Z.Messages.SHARE_YOUR_SCREEN : r.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
    let { Component: f, events: C, play: g } = (0, s.P)(o ? 'disable' : 'enable');
    return (
        a.useEffect(() => () => g(), [o, g]),
        (0, i.jsx)(E, {
            buttonRef: p,
            label: t,
            disabled: !n,
            iconComponent: f,
            isActive: o,
            onMouseEnter: (e) => {
                null == d || d(e), C.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == h || h(e), C.onMouseLeave();
            },
            premiumGlow: m,
            ..._
        })
    );
}
