n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(924628),
    l = n(977059),
    a = n(630759),
    o = n(398826),
    c = n(10298),
    d = n(623196),
    u = n(993315),
    m = n(883382),
    h = n(940021),
    g = n(402583),
    p = n(230341),
    x = n(893996),
    S = n(266132),
    T = n(726985),
    C = n(388032);
function _() {
    let { enabled: e } = (0, l.S)({ location: 'UserSettingsDataAndPrivacy' });
    return e
        ? (0, i.jsxs)(x.Z, {
              title: C.intl.string(C.t.WWaFn5),
              description: C.intl.formatToPlainString(C.t['/6sFWV'], { helpArticle: (0, a.uV)() }),
              webSetting: T.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
              children: [(0, i.jsx)(p.Z, {}), (0, i.jsx)(S.Z, {})]
          })
        : null;
}
function E() {
    return (0, i.jsx)(x.Z, {
        title: C.intl.string(C.t.BG7Qsb),
        webSetting: T.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
        children: (0, i.jsx)(d.Z, {})
    });
}
function f() {
    return (0, i.jsxs)(x.Z, {
        title: C.intl.string(C.t.SRZyHh),
        webSetting: T.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
        children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(h.Z, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(u.Z, {})]
    });
}
function I() {
    return (
        s.useEffect(() => {
            (0, r.I)(), (0, o.A)();
        }, []),
        (0, i.jsxs)(c.N, {
            header: C.intl.string(C.t.OAuOHB),
            children: [(0, i.jsx)(f, {}), (0, i.jsx)(E, {}), (0, i.jsx)(_, {})]
        })
    );
}
