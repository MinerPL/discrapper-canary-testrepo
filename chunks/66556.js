n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(442837), s = n(481060), r = n(731290), o = n(594174), c = n(502568), u = n(91159), d = n(593130), h = n(689938), p = n(603066);
function m(e) {
    let {channel: t} = e, [n, m] = a.useState(!1), _ = (0, l.e7)([
            r.Z,
            o.default
        ], () => {
            let e = o.default.getCurrentUser();
            return null == e || t.isNSFW() && (!e.nsfwAllowed || !r.Z.didAgree(t.getGuildId()));
        }, [t]), f = a.useCallback(() => {
            m(!1);
        }, []), E = a.useCallback(() => {
            !n && (0, u.U4)('Popout'), m(!n);
        }, [n]);
    return (0, i.jsx)(s.Popout, {
        animation: s.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: f,
        renderPopout: function () {
            return (0, i.jsx)(s.Dialog, {
                children: (0, i.jsx)(d.Z, {
                    className: p.browser,
                    channel: t,
                    onClose: f
                })
            });
        },
        children: (e, t) => {
            let {isShown: n} = t;
            return (0, i.jsx)(c.JO, {
                ...e,
                className: p.icon,
                onClick: E,
                icon: s.ThreadIcon,
                'aria-label': h.Z.Messages.THREADS,
                tooltip: n ? null : h.Z.Messages.THREADS,
                disabled: _,
                selected: n
            });
        }
    });
}
