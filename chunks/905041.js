l.d(e, {
    Z: function () {
        return p;
    }
});
var t = l(735250);
l(470079);
var u = l(481060),
    i = l(829883),
    r = l(976853),
    a = l(378233),
    o = l(902676),
    d = l(626135),
    c = l(49012),
    s = l(358085),
    v = l(998502),
    _ = l(36998),
    f = l(981631),
    h = l(689938);
function p(n, e, l, p) {
    let E = (0, r.Z)(null == l ? void 0 : l.getChannelId());
    if (!s.isPlatformEmbedded || null == n || '' === n || E || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || (null != n && null != (0, a.B0)(n)) || (null != n && (0, i.zt)(n))) return null;
    let I = (0, o.F)(n),
        M = (l) => {
            d.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: I,
                ...(0, _.v)()
            }),
                (0, c.q)(
                    {
                        href: n,
                        trusted: (0, c.r)(n, e),
                        shouldConfirm: !0
                    },
                    l
                );
        };
    return [
        (0, t.jsx)(
            u.MenuItem,
            {
                id: 'copy-native-link',
                label: h.Z.Messages.COPY_LINK,
                action: () => {
                    d.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: I,
                        ...(0, _.v)()
                    }),
                        v.ZP.copy(n);
                }
            },
            'copy-native-link'
        ),
        (0, t.jsx)(
            u.MenuItem,
            {
                id: 'open-native-link',
                label: h.Z.Messages.OPEN_LINK,
                action: (n) => M(n)
            },
            'open-native-link'
        )
    ];
}
