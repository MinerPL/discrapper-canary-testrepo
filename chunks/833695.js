"use strict";
t.d(s, {
  Z: function() {
    return g
  }
});
var n = t(735250);
t(470079);
var i = t(399606),
  l = t(481060),
  a = t(395586),
  r = t(755930),
  o = t(909667),
  c = t(968820),
  d = t(200472),
  u = t(489028),
  E = t(277369),
  _ = t(215124),
  I = t(999382),
  T = t(267101),
  N = t(287576),
  m = t(894610),
  S = t(689938);

function h(e) {
  let {
    listingId: s
  } = e, t = (0, T.r)(s);
  return null == t ? null : (0, n.jsx)(r.bL, {
    children: t.name
  })
}

function g(e) {
  var s, t, r;
  let {
    guildId: T
  } = e, g = (0, N.Z)(T), x = (0, a.f3)(), C = (0, i.e7)([I.Z], () => I.Z.getGuild());
  return g.loading || null == C ? (0, n.jsx)(l.Spinner, {}) : null == g.application ? (0, n.jsx)(u.Z, {
    guild: C
  }) : (0, n.jsxs)(d.Z, {
    children: [(0, n.jsx)(c.Z, {
      revenue: g.metrics.revenue,
      revenueTrend: g.metrics.revenuePctChange,
      summaryMetricLabel: S.Z.Messages.GUILD_PRODUCT_PURCHASES_TITLE,
      summaryMetricValue: null !== (t = g.metrics.paymentsCount) && void 0 !== t ? t : "-",
      summaryMetricTrend: null !== (r = g.metrics.paymentsCountChange) && void 0 !== r ? r : 0,
      summaryMetricTrendIsPercent: !1,
      children: (0, n.jsx)(m.Z, {
        guildId: T,
        earningsData: g
      })
    }), (0, n.jsx)(l.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      children: (0, n.jsx)(o.Z, {
        ListingIdLabel: h,
        payoutsByPeriod: g.payoutsByPeriod,
        team: null === (s = g.application) || void 0 === s ? void 0 : s.team
      })
    }), (0, n.jsx)(l.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: x,
      children: (0, n.jsx)(E.Z, {
        guildId: T,
        application: g.application
      })
    }), (0, n.jsx)(l.FormSection, {
      title: S.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      children: (0, n.jsx)(_.Z, {
        guildId: T,
        allPeriods: g.payoutsByPeriod
      })
    })]
  })
}