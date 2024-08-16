n.d(t, {
    Z: function () {
        return h;
    }
});
var s = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(704215),
    l = n(481060),
    o = n(725803),
    c = n(605236),
    d = n(999382),
    u = n(614342),
    _ = n(303737),
    I = n(618748),
    E = n(500395),
    T = n(975464),
    m = n(981631),
    N = n(674563),
    S = n(974420);
function h() {
    let e;
    let t = (0, i.e7)([d.Z], () => d.Z.getGuild()),
        { application: n, loading: h } = (0, o.Z)(null == t ? void 0 : t.id, N.wW.GUILD_ROLE_SUBSCRIPTIONS),
        g = a.useRef(null),
        C = (0, u.Z)(null != t ? t : void 0);
    a.useEffect(() => {
        null != t && (0, _.sO)(t) && (0, c.EW)(r.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let x = (null == t ? void 0 : t.hasFeature(m.oNc.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(m.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || h
                ? (0, s.jsx)(l.Spinner, {})
                : null != C
                  ? (0, s.jsx)(E.Z, {
                        guild: t,
                        config: C
                    })
                  : x
                    ? (0, s.jsx)(T.Z, { guild: t })
                    : (0, s.jsx)(I.Z, {
                          guild: t,
                          application: n
                      })),
        (0, s.jsx)('div', {
            className: S.settingsColumn,
            children: (0, s.jsx)('div', {
                className: S.settingsContainer,
                children: (0, s.jsx)(l.ScrollerAuto, {
                    className: S.settingsScroller,
                    children: (0, s.jsx)('main', {
                        ref: g,
                        className: S.settingsContent,
                        children: (0, s.jsx)(l.FocusRingScope, {
                            containerRef: g,
                            children: e
                        })
                    })
                })
            })
        })
    );
}
