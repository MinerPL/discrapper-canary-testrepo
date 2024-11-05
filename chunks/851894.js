n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(497321),
    u = n(100527),
    m = n(367907),
    h = n(906732),
    g = n(296810),
    p = n(921813),
    x = n(621853),
    S = n(246946),
    T = n(594174),
    C = n(63063),
    _ = n(74538),
    E = n(18438),
    f = n(778825),
    I = n(856607),
    N = n(594496),
    A = n(856768),
    b = n(981631),
    v = n(388032);
function j(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await n.e('84509').then(n.bind(n, 933696));
        return (n) =>
            (0, i.jsx)(t, {
                source: {
                    ...e,
                    page: b.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
                },
                ...n
            });
    });
}
function O(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(u.Z.GUILD_PROFILE),
        r = (0, a.e7)([T.default], () => {
            let e = T.default.getCurrentUser();
            return l()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        O = (0, a.e7)([x.Z], () => !x.Z.isFetchingProfile(r.id, null == t ? void 0 : t.id)),
        R = (0, a.e7)([S.Z], () => S.Z.hidePersonalInformation),
        { source: P, ...D } = (0, a.cj)([f.Z], () => ({
            ...f.Z.getAllPending(),
            source: f.Z.getSource()
        }));
    return (s.useEffect(() => () => c.Z.wait(E.W3), []),
    s.useEffect(() => {
        null != P &&
            m.ZP.trackWithMetadata(b.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: b.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: P
            });
    }, [P]),
    R)
        ? (0, i.jsx)(d.Z, {})
        : O
          ? (0, i.jsxs)(h.Gt, {
                value: n,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: v.intl.format(v.t['/PTB2N'], { helpCenterLink: C.Z.getArticleURL(b.BhN.GUILD_PROFILES) })
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(A.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, E.HP)(e);
                                      }
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      previewTitle: v.intl.formatToPlainString(v.t.Tc0slJ, { guildName: null == t ? void 0 : t.name }),
                                      profilePreview: (0, i.jsx)(p.Z, {
                                          user: r,
                                          guild: t,
                                          canUsePremiumCustomization: _.ZP.canUsePremiumProfileCustomization(r),
                                          onUpsellClick: j,
                                          ...D
                                      }),
                                      children: (0, i.jsx)(N.Z, {})
                                  })
                              ]
                          })
                        : (0, i.jsx)(I.Z, {})
                ]
            })
          : (0, i.jsx)(o.Spinner, {});
}
