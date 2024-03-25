"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  u = n("77078"),
  o = n("51565"),
  a = n("95039"),
  d = n("863921"),
  c = n("26989"),
  f = n("697218"),
  S = n("580357"),
  E = n("40469"),
  h = n("427459"),
  _ = n("49111"),
  g = n("782340"),
  p = n("543385");

function C(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  } = e, l = (0, s.useStateFromStores)([f.default, c.default], () => {
    let e = f.default.getCurrentUser();
    return c.default.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: o,
    premiumSubscriberCount: S
  } = t;
  if (0 === S && o === _.BoostedGuildTiers.NONE) return null;
  let E = e => {
      e.stopPropagation(), e.preventDefault(), l && !r && (0, a.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: _.AnalyticsSections.GUILD_HEADER,
          object: _.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    C = o === _.BoostedGuildTiers.NONE ? g.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : h.getTierName(o),
    I = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: p.tierTooltipTitle,
        children: C
      }), (0, i.jsx)("div", {
        children: g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: S
        })
      })]
    });
  return (0, i.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, i.jsx)(u.Tooltip, {
      text: I,
      position: "bottom",
      "aria-label": null != C ? C : "",
      children: e => (0, i.jsx)(u.Clickable, {
        ...e,
        className: p.premiumGuildIcon,
        onClick: E,
        children: (0, i.jsx)(d.default, {
          premiumTier: o,
          iconBackgroundClassName: n ? p.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: n && o !== _.BoostedGuildTiers.TIER_3 ? p.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: r
  } = e, s = (0, o.default)(t);
  return s ? (0, i.jsx)("div", {
    className: p.guildIconV2Container,
    children: (0, i.jsx)(E.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l(p.guildBadge, {
        [p.disableColor]: n
      }),
      disableBoostClick: r
    })
  }) : (0, i.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, i.jsx)(S.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l(p.guildBadge, {
        [p.disableColor]: n
      })
    })
  })
}

function m(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  } = e, l = (0, o.default)(t);
  if (l) return (0, i.jsx)(I, {
    guild: t,
    disableColor: !1,
    disableBoostClick: r
  });
  let s = t.hasFeature(_.GuildFeatures.VERIFIED) || t.hasFeature(_.GuildFeatures.PARTNERED);
  return s ? (0, i.jsx)(I, {
    guild: t,
    disableColor: !n
  }) : (0, i.jsx)(C, {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  })
}