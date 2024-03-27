"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var l = s("65597"),
  n = s("77078"),
  i = s("218567"),
  r = s("207353"),
  o = s("898411"),
  d = s("887229"),
  u = s("313584"),
  c = s("657960"),
  E = s("657650"),
  _ = s("441901"),
  I = s("900938"),
  T = s("442379"),
  S = s("559821"),
  f = s("762051"),
  m = s("782340");

function N(e) {
  let {
    listingId: t
  } = e, s = (0, T.useGuildProductListingById)(t);
  return null == s ? null : (0, a.jsx)(r.Cell, {
    children: s.name
  })
}

function g(e) {
  var t, s, r;
  let {
    guildId: T
  } = e, g = (0, S.default)(T), h = (0, i.useCreatorMonetizationSettingsDisabled)(), C = (0, l.useStateFromStores)([I.default], () => I.default.getGuild());
  return g.loading || null == C ? (0, a.jsx)(n.Spinner, {}) : null == g.application ? (0, a.jsx)(c.default, {
    guild: C
  }) : (0, a.jsxs)(u.default, {
    children: [(0, a.jsx)(d.default, {
      revenue: g.metrics.revenue,
      revenueTrend: g.metrics.revenuePctChange,
      summaryMetricLabel: m.default.Messages.GUILD_PRODUCT_PURCHASES_TITLE,
      summaryMetricValue: null !== (s = g.metrics.paymentsCount) && void 0 !== s ? s : "-",
      summaryMetricTrend: null !== (r = g.metrics.paymentsCountChange) && void 0 !== r ? r : 0,
      summaryMetricTrendIsPercent: !1,
      children: (0, a.jsx)(f.default, {
        guildId: T,
        earningsData: g
      })
    }), (0, a.jsx)(n.FormSection, {
      title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      children: (0, a.jsx)(o.default, {
        ListingIdLabel: N,
        payoutsByPeriod: g.payoutsByPeriod,
        team: null === (t = g.application) || void 0 === t ? void 0 : t.team
      })
    }), (0, a.jsx)(n.FormSection, {
      title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: h,
      children: (0, a.jsx)(E.default, {
        guildId: T,
        application: g.application
      })
    }), (0, a.jsx)(n.FormSection, {
      title: m.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      children: (0, a.jsx)(_.default, {
        guildId: T,
        allPeriods: g.payoutsByPeriod
      })
    })]
  })
}