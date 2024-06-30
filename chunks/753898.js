n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(607070), r = n(43267), o = n(933557), c = n(266076), u = n(204197), d = n(967128);
function h(e) {
    var t;
    let {
            channel: n,
            children: h,
            user: p
        } = e, m = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), _ = null !== (t = (0, o.ZP)(n)) && void 0 !== t ? t : '', {
            avatarDecorationSrc: f,
            eventHandlers: E,
            isAnimating: C
        } = (0, u.Z)({
            user: p,
            size: l.AvatarSizes.SIZE_80,
            animateOnHover: !0
        });
    return (0, i.jsxs)(d.ZP, {
        channelId: n.id,
        ...E,
        children: [
            (() => {
                let e = !m && C;
                return n.isMultiUserDM() ? (0, i.jsx)(c.Z, {
                    channel: n,
                    size: l.AvatarSizes.SIZE_80,
                    experimentLocation: 'empty_messages',
                    animated: e,
                    'aria-label': _
                }) : (0, i.jsx)(l.Avatar, {
                    'aria-label': _,
                    size: l.AvatarSizes.SIZE_80,
                    src: (0, r.x)(n, 80, e),
                    avatarDecoration: f
                });
            })(),
            (0, i.jsx)(d.Ot, { children: _ }),
            (0, i.jsx)(d.jz, { children: h })
        ]
    });
}
