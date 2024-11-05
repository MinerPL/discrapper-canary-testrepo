e.d(t, {
    Z: function () {
        return v;
    }
});
var r = e(200651);
e(192379);
var l = e(481060),
    i = e(378409),
    a = e(976853),
    u = e(902676),
    o = e(626135),
    d = e(49012),
    s = e(358085),
    c = e(998502),
    h = e(36998),
    f = e(981631),
    p = e(388032);
function v(n, t, e, v) {
    let m = (0, a.Z)(null == e ? void 0 : e.getChannelId());
    if (!s.isPlatformEmbedded || null == n || '' === n || m || (null == v ? void 0 : v.shouldHideMediaOptions) === !0 || !(0, i.Jj)(n)) return null;
    let g = (0, u.F)(n),
        Z = (e) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: g,
                ...(0, h.v)()
            }),
                (0, d.q)(
                    {
                        href: n,
                        trusted: (0, d.r)(n, t),
                        shouldConfirm: !0
                    },
                    e
                );
        };
    return [
        (0, r.jsx)(
            l.MenuItem,
            {
                id: 'copy-native-link',
                label: p.intl.string(p.t.WqhZsr),
                action: () => {
                    o.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: g,
                        ...(0, h.v)()
                    }),
                        c.ZP.copy(n);
                }
            },
            'copy-native-link'
        ),
        (0, r.jsx)(
            l.MenuItem,
            {
                id: 'open-native-link',
                label: p.intl.string(p.t.wuRE8P),
                action: (n) => Z(n)
            },
            'open-native-link'
        )
    ];
}
