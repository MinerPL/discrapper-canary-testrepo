"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(622535),
  u = n(481060),
  _ = n(906732),
  d = n(963249),
  c = n(594174),
  E = n(314884),
  I = n(346656),
  T = n(559629),
  h = n(709586),
  S = n(74538),
  f = n(678558),
  N = n(981631),
  A = n(474936),
  m = n(689938),
  O = n(598618);
t.Z = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: s
  } = e, R = (0, a.e7)([c.default], () => c.default.getCurrentUser()), C = (0, a.e7)([E.Z], () => E.Z.boostSlots), {
    analyticsLocations: p
  } = (0, _.ZP)(), g = r.useMemo(() => Object.keys(C).filter(e => {
    let t = C[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }), [C, n.id]);
  return (0, i.jsxs)("div", {
    className: O.guildStatus,
    children: [(0, i.jsx)(I.Z, {
      className: O.guildIcon,
      guild: n,
      size: I.Z.Sizes.LARGER
    }), (0, i.jsx)(u.Heading, {
      className: O.guildName,
      color: "always-white",
      variant: "text-lg/bold",
      children: n.name
    }), (0, i.jsxs)("div", {
      className: O.guildBoostCountWrapper,
      children: [(0, i.jsxs)("div", {
        className: O.guildBoostCount,
        children: [(0, i.jsx)(h.Z, {
          className: o()(O.guildBoostBadge, {
            [O.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0
          })
        }), (0, i.jsx)(u.Text, {
          className: O.guildStatusCopy,
          variant: "text-md/bold",
          children: m.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: n.premiumSubscriberCount
          })
        })]
      }), g.length > 0 ? (0, i.jsx)(u.Text, {
        className: O.guildBoostCountCurrentUser,
        variant: "text-sm/normal",
        children: m.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
          numSubscriptions: g.length
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: O.guildBoostCtas,
      children: [(0, i.jsx)(l.$, {
        onChange: s,
        threshold: .9,
        children: (0, i.jsx)("div", {
          className: o()(O.guildBoostCta, O.guildBoostCtaBoostWrapper),
          children: (0, i.jsx)(f.Z, {
            className: O.guildBoostCtaBoost,
            innerClassName: o()(O.__invalid_guildBoostCtaContent, O.guildBoostCtaBoostContent),
            buttonShineClassName: O.guildBoostCtaBoostShine,
            guild: n,
            analyticsLocation: {
              page: N.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: N.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: N.qAy.BUTTON_CTA,
              objectType: N.Qqv.BUY
            },
            closeLayer: t,
            color: u.Button.Colors.WHITE,
            size: u.Button.Sizes.LARGE,
            fullWidth: !0
          })
        })
      }), S.ZP.hasFreeBoosts(R) || S.ZP.isPremium(R, A.p9.TIER_2) ? (0, i.jsxs)(u.Button, {
        className: o()(O.guildBoostCta, O.guildBoostCtaSecondary),
        innerClassName: o()(O.__invalid_guildBoostCtaContent, O.guildBoostCtaGiftContent),
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.WHITE,
        onClick: function() {
          (0, d.Z)({
            initialPlanId: null,
            subscriptionTier: A.Si.TIER_2,
            isGift: !0,
            analyticsLocations: p,
            analyticsObject: {
              page: N.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: N.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: N.qAy.BUTTON_ICON,
              objectType: N.Qqv.GIFT
            },
            onClose: e => e && t()
          })
        },
        size: u.Button.Sizes.LARGE,
        children: [(0, i.jsx)(T.Z, {
          className: O.guildBoostCtaGiftIcon
        }), m.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO]
      }) : (0, i.jsx)(u.Button, {
        className: o()(O.guildBoostCta, O.guildBoostCtaSecondary),
        innerClassName: o()(O.__invalid_guildBoostCtaContent, O.__invalid_guildBoostCtaSubscribeContent),
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.WHITE,
        onClick: function() {
          (0, d.Z)({
            initialPlanId: null,
            subscriptionTier: A.Si.TIER_2,
            analyticsLocations: p,
            analyticsObject: {
              page: N.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: N.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: N.qAy.BUTTON_ICON,
              objectType: N.Qqv.BUY
            },
            onClose: e => e && t()
          })
        },
        size: u.Button.Sizes.LARGE,
        children: m.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
      })]
    })]
  })
}