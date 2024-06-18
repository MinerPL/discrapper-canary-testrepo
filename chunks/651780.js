"use strict";
t.d(s, {
  Z: function() {
    return M
  }
});
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(570140),
  o = t(355467),
  c = t(821849),
  d = t(774078),
  u = t(15640),
  E = t(774380),
  _ = t(404270),
  I = t(386937),
  T = t(316350),
  N = t(899667),
  m = t(474333),
  S = t(626135),
  h = t(267642),
  g = t(63063),
  x = t(999382),
  C = t(981631),
  R = t(689938),
  L = t(878496);

function O(e) {
  let {
    endsAt: s,
    appliedGuildBoostsToMaintain: t,
    tierName: i
  } = e, {
    days: l,
    hours: a
  } = (0, d.Z)(s);
  return t <= 0 ? null : (0, n.jsx)(n.Fragment, {
    children: 0 === l && 0 === a ? R.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN_SOON.format({
      tierName: i,
      numPremiumSubscriptions: t
    }) : R.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN.format({
      days: l,
      hours: a,
      tierName: i,
      numPremiumSubscriptions: t
    })
  })
}

function A(e) {
  let {
    appliedGuildBoosts: s,
    guildId: t
  } = e, i = (0, h.gZ)(s, t), l = (0, h.nW)((0, h.rF)(s.length, t));
  if (null == i || null == l) return null;
  let a = (0, h._k)(s, t);
  return (0, n.jsxs)(m.Z, {
    messageType: m.Q.WARNING,
    children: [(0, n.jsx)("div", {
      className: L.guildBoostingGracePeriodTitle,
      children: R.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_TITLE.format()
    }), (0, n.jsx)(O, {
      endsAt: i,
      appliedGuildBoostsToMaintain: a,
      tierName: l
    })]
  })
}
let p = e => {
  let {
    isAnimatedTo: s,
    onSetRef: t,
    subscriptionCount: i,
    tier: l,
    tiers: a,
    tierIndex: r,
    guildId: o
  } = e;
  return (0, n.jsx)(T.Z, {
    subscriptionCount: i,
    tier: l,
    onSetRef: t,
    isAnimatedTo: s,
    hasBottomMargin: r !== a.length - 1,
    guildId: o
  }, l.tier)
};

function M() {
  i.useEffect(() => {
    r.Z.wait(() => {
      (0, o.tZ)(), (0, c.Y2)()
    })
  }, []);
  let e = (0, l.e7)([x.Z], () => x.Z.getGuild()),
    s = (0, l.e7)([N.Z], () => null != e ? N.Z.getAppliedGuildBoostsForGuild(e.id) : null),
    t = (0, u.V)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(i.Fragment, {
      children: [(0, n.jsx)(a.FormTitle, {
        tag: a.FormTitleTags.H1,
        children: R.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TITLE
      }), null != s && null != e ? (0, n.jsx)(A, {
        appliedGuildBoosts: s,
        guildId: e.id
      }) : null, (0, n.jsx)(a.FormText, {
        type: a.FormText.Types.DESCRIPTION,
        className: L.titleBlurb,
        children: R.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_BLURB.format({
          helpdeskArticle: g.Z.getArticleURL(C.BhN.GUILD_SUBSCRIPTIONS)
        })
      })]
    }), (0, n.jsx)(I.Z, {
      tiers: (0, h.cP)(null != e && e.hasFeature(C.oNc.COMMUNITY) && e.maxStageVideoChannelUsers >= C.B9o),
      renderTier: p
    }), (0, n.jsx)("div", {
      className: L.divider
    }), t ? (0, n.jsx)(_.Z, {}) : null, t ? (0, n.jsx)(E.Z, {
      onOpenPremiumClick: () => void S.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
        location: {
          page: C.ZY5.GUILD_SETTINGS,
          section: C.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
          object: C.qAy.BUTTON_CTA
        }
      })
    }) : null]
  })
}