n.d(t, {
    S: function () {
        return m;
    },
    m: function () {
        return E;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(607070), o = n(426563), c = n(998502), d = n(689938), u = n(121802);
let _ = c.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], [t, n] = a.useState(!1), i = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), l = a.useMemo(() => {
            let n = t || !i && !e;
            return (0, o.j)(n);
        }, [
            t,
            i,
            e
        ]), c = a.useCallback(() => n(!0), []);
    return {
        avatarSrc: l,
        eventHandlers: {
            onMouseEnter: c,
            onMouseLeave: a.useCallback(() => n(!1), [])
        }
    };
}
function m(e) {
    let {src: t} = e;
    return (0, i.jsx)('div', {
        className: u.avatarContainer,
        children: (0, i.jsx)(_, {
            src: t,
            size: l.AvatarSizes.SIZE_40,
            'aria-label': d.Z.Messages.GUILD_AUTOMOD_USERNAME
        })
    });
}
