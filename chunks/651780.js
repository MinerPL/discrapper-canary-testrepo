"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("570140"),
  o = s("355467"),
  d = s("821849"),
  u = s("774078"),
  c = s("15640"),
  E = s("774380"),
  _ = s("404270"),
  I = s("386937"),
  T = s("316350"),
  S = s("899667"),
  f = s("474333"),
  m = s("626135"),
  N = s("267642"),
  g = s("63063"),
  h = s("999382"),
  C = s("981631"),
  R = s("689938"),
  x = s("829078");

function L(e) {
  let {
    endsAt: t,
    appliedGuildBoostsToMaintain: s,
    tierName: l
  } = e, {
    days: n,
    hours: i
  } = (0, u.default)(t);
  return s <= 0 ? null : (0, a.jsx)(a.Fragment, {
    children: 0 === n && 0 === i ? R.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN_SOON.format({
      tierName: l,
      numPremiumSubscriptions: s
    }) : R.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_COOLDOWN.format({
      days: n,
      hours: i,
      tierName: l,
      numPremiumSubscriptions: s
    })
  })
}

function O(e) {
  let {
    appliedGuildBoosts: t,
    guildId: s
  } = e, l = (0, N.getGracePeriodEndingDate)(t, s), n = (0, N.getTierName)((0, N.getGuildTierFromAppliedBoostCount)(t.length, s));
  if (null == l || null == n) return null;
  let i = (0, N.appliedGuildBoostsRequiredForPerks)(t, s);
  return (0, a.jsxs)(f.default, {
    messageType: f.HelpMessageTypes.WARNING,
    children: [(0, a.jsx)("div", {
      className: x.guildBoostingGracePeriodTitle,
      children: R.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_TITLE.format()
    }), (0, a.jsx)(L, {
      endsAt: l,
      appliedGuildBoostsToMaintain: i,
      tierName: n
    })]
  })
}
let A = e => {
  let {
    isAnimatedTo: t,
    onSetRef: s,
    subscriptionCount: l,
    tier: n,
    tiers: i,
    tierIndex: r,
    guildId: o
  } = e;
  return (0, a.jsx)(T.default, {
    subscriptionCount: l,
    tier: n,
    onSetRef: s,
    isAnimatedTo: t,
    hasBottomMargin: r !== i.length - 1,
    guildId: o
  }, n.tier)
};

function p() {
  l.useEffect(() => {
    r.default.wait(() => {
      (0, o.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)()
    })
  }, []);
  let e = (0, n.useStateFromStores)([h.default], () => h.default.getGuild()),
    t = (0, n.useStateFromStores)([S.default], () => null != e ? S.default.getAppliedGuildBoostsForGuild(e.id) : null),
    s = (0, c.useSubscriptionPlansLoaded)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H1,
        children: R.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TITLE
      }), null != t && null != e ? (0, a.jsx)(O, {
        appliedGuildBoosts: t,
        guildId: e.id
      }) : null, (0, a.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        className: x.titleBlurb,
        children: R.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_BLURB.format({
          helpdeskArticle: g.default.getArticleURL(C.HelpdeskArticles.GUILD_SUBSCRIPTIONS)
        })
      })]
    }), (0, a.jsx)(I.default, {
      tiers: (0, N.getTiers)(null != e && e.hasFeature(C.GuildFeatures.COMMUNITY) && e.maxStageVideoChannelUsers >= C.MAX_STAGE_VIDEO_USER_LIMIT_TIER01),
      renderTier: A
    }), (0, a.jsx)("div", {
      className: x.divider
    }), s ? (0, a.jsx)(_.default, {}) : null, s ? (0, a.jsx)(E.default, {
      onOpenPremiumClick: () => void m.default.track(C.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location: {
          page: C.AnalyticsPages.GUILD_SETTINGS,
          section: C.AnalyticsSections.NITRO_CROSS_PROMO_FROM_BOOSTING,
          object: C.AnalyticsObjects.BUTTON_CTA
        }
      })
    }) : null]
  })
}