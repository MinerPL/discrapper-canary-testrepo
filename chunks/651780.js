n.d(t, {
    Z: function () {
        return O;
    }
});
var s = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    l = n(570140),
    o = n(355467),
    c = n(821849),
    d = n(774078),
    u = n(15640),
    _ = n(774380),
    I = n(404270),
    E = n(386937),
    T = n(316350),
    m = n(899667),
    N = n(626135),
    S = n(267642),
    h = n(63063),
    g = n(999382),
    C = n(981631),
    x = n(689938),
    p = n(638825);
function R(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: a } = e,
        { days: i, hours: r } = (0, d.Z)(t);
    return n <= 0
        ? null
        : (0, s.jsx)(s.Fragment, {
              children:
                  0 === i && 0 === r
                      ? x.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN_SOON.format({
                            tierName: a,
                            numPremiumSubscriptions: n
                        })
                      : x.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN.format({
                            days: i,
                            hours: r,
                            tierName: a,
                            numPremiumSubscriptions: n
                        })
          });
}
function f(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        a = (0, S.gZ)(t, n),
        i = (0, S.nW)((0, S.rF)(t.length, n));
    if (null == a || null == i) return null;
    let l = (0, S._k)(t, n);
    return (0, s.jsxs)(r.HelpMessage, {
        messageType: r.HelpMessageTypes.WARNING,
        children: [
            (0, s.jsx)('div', {
                className: p.guildBoostingGracePeriodTitle,
                children: x.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_TITLE.format()
            }),
            (0, s.jsx)(R, {
                endsAt: a,
                appliedGuildBoostsToMaintain: l,
                tierName: i
            })
        ]
    });
}
let L = (e) => {
    let { isAnimatedTo: t, onSetRef: n, subscriptionCount: a, tier: i, tiers: r, tierIndex: l, guildId: o } = e;
    return (0, s.jsx)(
        T.Z,
        {
            subscriptionCount: a,
            tier: i,
            onSetRef: n,
            isAnimatedTo: t,
            hasBottomMargin: l !== r.length - 1,
            guildId: o
        },
        i.tier
    );
};
function O() {
    a.useEffect(() => {
        l.Z.wait(() => {
            (0, o.tZ)(), (0, c.Y2)();
        });
    }, []);
    let e = (0, i.e7)([g.Z], () => g.Z.getGuild()),
        t = (0, i.e7)([m.Z], () => (null != e ? m.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.Fragment, {
                children: [
                    (0, s.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H1,
                        children: x.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TITLE
                    }),
                    null != t && null != e
                        ? (0, s.jsx)(f, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, s.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        className: p.titleBlurb,
                        children: x.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_BLURB.format({ helpdeskArticle: h.Z.getArticleURL(C.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            (0, s.jsx)(E.Z, {
                tiers: (0, S.cP)(null != e && e.hasFeature(C.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= C.B9o),
                renderTier: L
            }),
            (0, s.jsx)('div', { className: p.divider }),
            n ? (0, s.jsx)(I.Z, {}) : null,
            n
                ? (0, s.jsx)(_.Z, {
                      onOpenPremiumClick: () =>
                          void N.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: C.ZY5.GUILD_SETTINGS,
                                  section: C.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: C.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
