n.d(t, {
    C: function () {
        return E;
    },
    Z: function () {
        return _;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(75735), l = n(40851), u = n(67844), c = n(871499), d = n(830797);
function _(e) {
    let t = (0, u.X)(e), {
            enabled: n,
            cameraUnavailable: a,
            onChange: o,
            onCameraUnavailable: c,
            hasPermission: d,
            children: _,
            channelLimitReached: E = !1,
            join: f
        } = e, h = (0, l.bp)(), p = a ? () => c() : () => o(!e.enabled, h), {
            Component: m,
            play: I,
            events: T
        } = (0, s.o)(f || n ? 'disable' : 'enable');
    return i.useEffect(() => () => I(), [
        n,
        I
    ]), (0, r.jsx)(r.Fragment, {
        children: _({
            onClick: p,
            active: n,
            disabled: !n && (!d || E),
            iconComponent: m,
            label: t,
            unavailable: a,
            onMouseEnter: f ? void 0 : T.onMouseEnter,
            onMouseLeave: f ? void 0 : T.onMouseLeave
        })
    });
}
function E(e) {
    let {
            enabled: t,
            join: n,
            channel: i,
            onChange: a,
            onCameraUnavailable: s,
            cameraUnavailable: l,
            hasPermission: u,
            className: E,
            channelLimitReached: f,
            channelLimit: h,
            centerButton: p = !1,
            onPopoutClick: m,
            ...I
        } = e, T = p ? c.d : c.Z;
    return (0, r.jsx)(_, {
        enabled: t,
        join: n,
        channel: i,
        onChange: a,
        onCameraUnavailable: s,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: f,
        channelLimit: h,
        children: e => {
            let {
                unavailable: n,
                onMouseEnter: i,
                onMouseLeave: a,
                ...s
            } = e;
            return (0, r.jsx)(T, {
                ...s,
                ...I,
                onMouseEnter: e => {
                    var t;
                    null === (t = I.onMouseEnter) || void 0 === t || t.call(I, e), null == i || i();
                },
                onMouseLeave: e => {
                    var t;
                    null === (t = I.onMouseLeave) || void 0 === t || t.call(I, e), null == a || a();
                },
                isActive: t,
                className: o()(E, { [d.fauxDisabled]: n }),
                onPopoutClick: m
            });
        }
    });
}
