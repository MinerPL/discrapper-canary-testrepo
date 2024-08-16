n.d(t, {
    Z: function () {
        return A;
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
    m = n(777036),
    N = n(899667),
    S = n(626135),
    h = n(267642),
    g = n(63063),
    C = n(999382),
    x = n(981631),
    p = n(689938),
    R = n(638825);
function f(e) {
    let { endsAt: t, appliedGuildBoostsToMaintain: n, tierName: a } = e,
        { days: i, hours: r } = (0, d.Z)(t);
    return n <= 0
        ? null
        : (0, s.jsx)(s.Fragment, {
              children:
                  0 === i && 0 === r
                      ? p.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN_SOON.format({
                            tierName: a,
                            numPremiumSubscriptions: n
                        })
                      : p.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN.format({
                            days: i,
                            hours: r,
                            tierName: a,
                            numPremiumSubscriptions: n
                        })
          });
}
function L(e) {
    let { appliedGuildBoosts: t, guildId: n } = e,
        a = (0, h.gZ)(t, n),
        i = (0, h.nW)((0, h.rF)(t.length, n));
    if (null == a || null == i) return null;
    let r = (0, h._k)(t, n);
    return (0, s.jsxs)(m.Z, {
        messageType: m.Q.WARNING,
        children: [
            (0, s.jsx)('div', {
                className: R.guildBoostingGracePeriodTitle,
                children: p.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_TITLE.format()
            }),
            (0, s.jsx)(f, {
                endsAt: a,
                appliedGuildBoostsToMaintain: r,
                tierName: i
            })
        ]
    });
}
let O = (e) => {
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
function A() {
    a.useEffect(() => {
        l.Z.wait(() => {
            (0, o.tZ)(), (0, c.Y2)();
        });
    }, []);
    let e = (0, i.e7)([C.Z], () => C.Z.getGuild()),
        t = (0, i.e7)([N.Z], () => (null != e ? N.Z.getAppliedGuildBoostsForGuild(e.id) : null)),
        n = (0, u.V)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.Fragment, {
                children: [
                    (0, s.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H1,
                        children: p.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TITLE
                    }),
                    null != t && null != e
                        ? (0, s.jsx)(L, {
                              appliedGuildBoosts: t,
                              guildId: e.id
                          })
                        : null,
                    (0, s.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        className: R.titleBlurb,
                        children: p.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_BLURB.format({ helpdeskArticle: g.Z.getArticleURL(x.BhN.GUILD_SUBSCRIPTIONS) })
                    })
                ]
            }),
            (0, s.jsx)(E.Z, {
                tiers: (0, h.cP)(null != e && e.hasFeature(x.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= x.B9o),
                renderTier: O
            }),
            (0, s.jsx)('div', { className: R.divider }),
            n ? (0, s.jsx)(I.Z, {}) : null,
            n
                ? (0, s.jsx)(_.Z, {
                      onOpenPremiumClick: () =>
                          void S.default.track(x.rMx.PREMIUM_PROMOTION_OPENED, {
                              location: {
                                  page: x.ZY5.GUILD_SETTINGS,
                                  section: x.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
                                  object: x.qAy.BUTTON_CTA
                              }
                          })
                  })
                : null
        ]
    });
}
