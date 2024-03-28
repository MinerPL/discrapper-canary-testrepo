"use strict";
i.r(t), i.d(t, {
  default: function() {
    return R
  }
});
var l = i("735250");
i("470079");
var a = i("803997"),
  s = i.n(a),
  n = i("442837"),
  o = i("481060"),
  r = i("666188"),
  u = i("623624"),
  d = i("290034"),
  c = i("271383"),
  f = i("594174"),
  E = i("940627"),
  _ = i("705600"),
  T = i("267642"),
  N = i("981631"),
  m = i("689938"),
  p = i("106325");

function I(e) {
  let {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: a
  } = e, s = (0, n.useStateFromStores)([f.default, c.default], () => {
    let e = f.default.getCurrentUser();
    return c.default.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: r,
    premiumSubscriberCount: E
  } = t;
  if (0 === E && r === N.BoostedGuildTiers.NONE) return null;
  let _ = e => {
      e.stopPropagation(), e.preventDefault(), s && !a && (0, u.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: N.AnalyticsSections.GUILD_HEADER,
          object: N.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    I = r === N.BoostedGuildTiers.NONE ? m.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : T.getTierName(r),
    g = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: p.tierTooltipTitle,
        children: I
      }), (0, l.jsx)("div", {
        children: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: E
        })
      })]
    });
  return (0, l.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, l.jsx)(o.Tooltip, {
      text: g,
      position: "bottom",
      "aria-label": null != I ? I : "",
      children: e => (0, l.jsx)(o.Clickable, {
        ...e,
        className: p.__invalid_premiumGuildIcon,
        onClick: _,
        children: (0, l.jsx)(d.default, {
          premiumTier: r,
          iconBackgroundClassName: i ? p.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: i && r !== N.BoostedGuildTiers.TIER_3 ? p.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function g(e) {
  let {
    guild: t,
    disableColor: i,
    disableBoostClick: a
  } = e;
  return (0, r.default)(t) ? (0, l.jsx)("div", {
    className: p.guildIconV2Container,
    children: (0, l.jsx)(_.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: s()(p.guildBadge, {
        [p.disableColor]: i
      }),
      disableBoostClick: a
    })
  }) : (0, l.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, l.jsx)(E.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: s()(p.guildBadge, {
        [p.disableColor]: i
      })
    })
  })
}

function R(e) {
  let {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: a
  } = e;
  return (0, r.default)(t) ? (0, l.jsx)(g, {
    guild: t,
    disableColor: !1,
    disableBoostClick: a
  }) : t.hasFeature(N.GuildFeatures.VERIFIED) || t.hasFeature(N.GuildFeatures.PARTNERED) ? (0, l.jsx)(g, {
    guild: t,
    disableColor: !i
  }) : (0, l.jsx)(I, {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: a
  })
}