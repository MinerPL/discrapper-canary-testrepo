n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(920906), l = n(481060), s = n(871499), r = n(689938), o = n(288768);
let c = (0, a.animated)(e => {
    let {percentComplete: t} = e, n = 20;
    return (0, i.jsx)('svg', {
        className: o.countdown,
        width: 40,
        height: 40,
        viewBox: '0 0 '.concat(40, ' ').concat(40),
        children: (0, i.jsx)('circle', {
            style: { strokeDashoffset: Math.round(100 * t) },
            className: o.progress,
            cx: n,
            cy: n,
            r: n - 6,
            fill: 'none',
            stroke: '#4F545C',
            pathLength: '100'
        })
    });
});
function u(e) {
    let {
            totalCooldownSeconds: t,
            remainingCooldownSeconds: n,
            onClick: u,
            onKeyDown: d,
            onMouseEnter: h,
            onMouseLeave: p,
            isActive: m = !1,
            isCenterButton: _ = !1,
            ...f
        } = e, E = n > 0, C = (0, a.useSpring)({
            percentComplete: 0 !== n ? (t - n) / t : 0,
            config: {
                ...a.config.molasses,
                duration: 1000
            }
        }), g = E ? r.Z.Messages.VOICE_CHANNEL_EFFECTS_COOLDOWN.format({ seconds: n }) : void 0, I = _ ? s.d : s.Z;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            E ? (0, i.jsx)(c, { percentComplete: C.percentComplete }) : null,
            (0, i.jsx)(I, {
                ...f,
                disabled: E,
                label: g,
                iconComponent: l.ReactionIcon,
                onClick: u,
                onKeyDown: d,
                onMouseEnter: h,
                onMouseLeave: p,
                isActive: m,
                grow: !1
            })
        ]
    });
}
