"use strict";
i.r(t), i.d(t, {
  default: function() {
    return x
  }
});
var s = i("37983");
i("884691");
var n = i("414456"),
  l = i.n(n),
  r = i("446674"),
  o = i("77078"),
  a = i("51565"),
  u = i("95039"),
  c = i("863921"),
  d = i("26989"),
  f = i("697218"),
  h = i("580357"),
  v = i("40469"),
  p = i("427459"),
  g = i("49111"),
  m = i("782340"),
  C = i("543385");

function I(e) {
  let {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: n
  } = e, l = (0, r.useStateFromStores)([f.default, d.default], () => {
    let e = f.default.getCurrentUser();
    return d.default.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: a,
    premiumSubscriberCount: h
  } = t;
  if (0 === h && a === g.BoostedGuildTiers.NONE) return null;
  let v = e => {
      e.stopPropagation(), e.preventDefault(), l && !n && (0, u.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: g.AnalyticsSections.GUILD_HEADER,
          object: g.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    I = a === g.BoostedGuildTiers.NONE ? m.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : p.getTierName(a),
    N = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: C.tierTooltipTitle,
        children: I
      }), (0, s.jsx)("div", {
        children: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: h
        })
      })]
    });
  return (0, s.jsx)("div", {
    className: C.guildIconContainer,
    children: (0, s.jsx)(o.Tooltip, {
      text: N,
      position: "bottom",
      "aria-label": null != I ? I : "",
      children: e => (0, s.jsx)(o.Clickable, {
        ...e,
        className: C.premiumGuildIcon,
        onClick: v,
        children: (0, s.jsx)(c.default, {
          premiumTier: a,
          iconBackgroundClassName: i ? C.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: i && a !== g.BoostedGuildTiers.TIER_3 ? C.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function N(e) {
  let {
    guild: t,
    disableColor: i,
    disableBoostClick: n
  } = e, r = (0, a.default)(t);
  return r ? (0, s.jsx)("div", {
    className: C.guildIconV2Container,
    children: (0, s.jsx)(v.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l(C.guildBadge, {
        [C.disableColor]: i
      }),
      disableBoostClick: n
    })
  }) : (0, s.jsx)("div", {
    className: C.guildIconContainer,
    children: (0, s.jsx)(h.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l(C.guildBadge, {
        [C.disableColor]: i
      })
    })
  })
}

function x(e) {
  let {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: n
  } = e, l = (0, a.default)(t);
  if (l) return (0, s.jsx)(N, {
    guild: t,
    disableColor: !1,
    disableBoostClick: n
  });
  let r = t.hasFeature(g.GuildFeatures.VERIFIED) || t.hasFeature(g.GuildFeatures.PARTNERED);
  return r ? (0, s.jsx)(N, {
    guild: t,
    disableColor: !i
  }) : (0, s.jsx)(I, {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: n
  })
}