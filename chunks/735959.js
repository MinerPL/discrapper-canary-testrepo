n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(969090),
    i = n(913527),
    o = n.n(i),
    s = n(330711),
    c = n(442837),
    d = n(481060),
    u = n(424395),
    h = n(665149),
    m = n(706454),
    x = n(428530),
    p = n(257785),
    f = n(388032);
function g() {
    let e = (0, c.e7)([m.default], () => m.default.locale),
        [t, n] = a.useState(),
        i = (0, l.runtimeHashMessageKey)(null != t ? t : ''),
        g = a.useMemo(() => f.t[i], [i]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(h.ZP, {
                children: [
                    (0, r.jsx)(h.ZP.Icon, {
                        icon: d.LanguageIcon,
                        tooltip: 'Locale'
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: 'Locale' })
                ]
            }),
            (0, r.jsxs)(p.E, {
                children: [
                    (0, r.jsx)(p.Z9, {
                        name: 'Active System',
                        children: u.vJ ? '@discord/intl' : '@discordapp/i18n'
                    }),
                    (0, r.jsx)(p.Z9, {
                        name: 'App',
                        children: e
                    }),
                    (0, r.jsx)(p.Z9, {
                        name: '@discord/intl',
                        children: f.intl.currentLocale
                    }),
                    (0, r.jsx)(p.Z9, {
                        name: 'common i18n',
                        children: s.Z.getLocale()
                    }),
                    (0, r.jsx)(p.Z9, {
                        name: 'Moment',
                        children: o().locale()
                    })
                ]
            }),
            (0, r.jsxs)(h.ZP, {
                children: [
                    (0, r.jsx)(h.ZP.Icon, {
                        icon: d.LanguageIcon,
                        tooltip: 'Messages'
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: 'New System Messages' })
                ]
            }),
            (0, r.jsx)(d.TextInput, {
                onChange: function (e) {
                    n(e);
                },
                name: 'Message name',
                style: { margin: 16 },
                placeholder: 'Find a message'
            }),
            (0, r.jsxs)(p.E, {
                children: [
                    (0, r.jsx)(p.Z9, {
                        name: 'Hashed key',
                        children: i
                    }),
                    (0, r.jsx)(p.Z9, {
                        name: 'Exists?',
                        children: null != g ? 'yes' : 'no'
                    })
                ]
            }),
            (0, r.jsx)(x.Z, { data: null == g ? void 0 : g(e) })
        ]
    });
}
