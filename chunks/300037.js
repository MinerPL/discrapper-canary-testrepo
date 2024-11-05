var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(399606),
    a = n(481060),
    o = n(975298),
    c = n(565138),
    d = n(623624),
    u = n(678558),
    m = n(430824),
    h = n(709586),
    g = n(267642),
    p = n(981631),
    x = n(474936),
    S = n(388032),
    T = n(74175);
t.Z = function (e) {
    let { className: t, guildId: n, boostingVariant: s } = e,
        C = (0, l.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        { fractionalState: _ } = (0, o.Z)(),
        E = _ === x.a$.FP_ONLY;
    return null == C
        ? (0, i.jsx)('div', {
              className: r()(t, T.guildContainer),
              children: (0, i.jsx)('div', {
                  className: T.guildInfoContainer,
                  children: (0, i.jsx)(a.Text, {
                      variant: 'text-lg/bold',
                      children: S.intl.string(S.t['6Kwwur'])
                  })
              })
          })
        : (0, i.jsxs)('div', {
              className: r()(t, T.guildContainer),
              children: [
                  (0, i.jsx)(c.Z, {
                      className: T.__invalid_guildIcon,
                      guild: C,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, i.jsxs)('div', {
                      className: T.guildInfoContainer,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: 'text-lg/bold',
                              children: C.name
                          }),
                          (0, i.jsxs)('div', {
                              className: T.guildBoostStatsContainer,
                              children: [
                                  (0, i.jsx)(h.Z, {
                                      className: T.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: S.intl.format(S.t['pob/cH'], { subscriptions: C.premiumSubscriberCount })
                                  }),
                                  (0, i.jsx)('div', { className: T.separator }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, g.nW)(C.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  s
                      ? (0, i.jsx)(u.Z, {
                            guild: C,
                            analyticsLocation: {
                                page: p.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: p.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: p.qAy.BUTTON_CTA,
                                objectType: p.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: a.Button.Sizes.MEDIUM,
                            color: a.Button.Colors.PRIMARY,
                            buttonText: S.intl.string(S.t.aBHecH),
                            disabled: E
                        })
                      : (0, i.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: C.id,
                                    location: { section: p.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: a.Button.Sizes.MEDIUM,
                            disabled: E,
                            children: S.intl.string(S.t.KLOhbG)
                        })
              ]
          });
};
