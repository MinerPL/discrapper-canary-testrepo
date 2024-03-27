"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("206230"),
  u = s("36685"),
  c = s("626301"),
  S = s("359499"),
  E = s("697218"),
  T = s("521012"),
  f = s("427459"),
  _ = s("719923"),
  m = s("560437"),
  g = s("397723"),
  h = s("717266"),
  N = s("49111"),
  I = s("511143"),
  p = s("782340"),
  C = s("998228");

function A(e) {
  let {
    guildBoostSlot: t,
    isCancellable: s,
    onCancel: l,
    onUncancel: i,
    premiumSubscription: r,
    useReducedMotion: d
  } = e, u = n.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), c = (0, f.isGuildBoostSlotCanceled)(t);
  return (0, a.jsxs)("li", {
    className: C.unappliedGuildBoostSlot,
    children: [(0, a.jsxs)("div", {
      className: C.unappliedGuildBoostSlotContentPrimary,
      children: [(0, a.jsx)(h.default, {
        className: C.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: c,
        useReducedMotion: d
      }), c && null != r ? (0, a.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: r.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != u ? (0, a.jsx)(g.default, {
        cooldown: u.getTime()
      }) : (0, a.jsx)(o.Text, {
        className: C.unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, a.jsxs)("div", {
      className: C.unappliedGuildBoostSlotContentSecondary,
      children: [s && !c && (0, a.jsx)(o.Button, {
        className: C.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => l(t),
        size: o.Button.Sizes.NONE,
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), c && (0, a.jsx)(o.Button, {
        className: C.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => i(t),
        size: o.Button.Sizes.NONE,
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })]
    })]
  }, t.id)
}

function O(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.el("933182").then(s.bind(s, "933182"));
    return s => (0, a.jsx)(t, {
      ...s,
      guildBoostSlot: e
    })
  })
}

function x(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.el("738400").then(s.bind(s, "738400"));
    return s => (0, a.jsx)(t, {
      ...s,
      guildBoostSlotId: e.id
    })
  })
}
var R = function(e) {
  let t, l;
  let {
    guildBoostSlots: g
  } = e, h = (0, r.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), R = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), M = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), D = (0, S.useFreeBoostTenureRewardEntitlement)(), {
    appliedGuildBoostSlots: v,
    unappliedGuildBoostSlots: L,
    numActiveGuildBoostSlots: P
  } = n.useMemo(() => {
    let e = [],
      t = [],
      s = 0;
    return g.forEach(a => {
      !(0, f.isGuildBoostSlotCanceled)(a) && s++, null != a.premiumGuildSubscription ? e.push(a) : t.push(a)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: t,
      numActiveGuildBoostSlots: s
    }
  }, [g]), j = null != h ? (0, u.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(h, D) : 0, b = Math.max(0, j - v.length), U = P > j, y = j === g.length, B = y ? b : 1, F = n.useMemo(() => {
    let e = [];
    for (let t = 0; t < B; t++) e.push((0, a.jsx)(m.default, {
      className: C.headerBoostGem,
      useReducedMotion: R
    }, t));
    return e
  }, [B, R]), G = null != D, k = n.useMemo(() => L.find(e => e.isAvailable()), [L]);
  if (0 === L.length) return null;
  let H = L.length;
  return t = y ? 1 === H && G ? p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H
  }) : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: H
  }), _.default.isPremium(M) ? l = y && 1 === H && G ? D.skuId === I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H,
    learnMoreHook: (e, t) => (0, a.jsx)(o.Clickable, {
      className: C.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, c.navigateToPremiumMarketingPage)()
      },
      children: e
    }, t)
  }) : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: H
  }), (0, a.jsxs)("div", {
    className: C.wrapper,
    children: [G && (0, a.jsxs)("div", {
      className: C.specialHeader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: C.pill,
        children: p.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, a.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: p.default.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, a.jsxs)("div", {
      className: i(C.content, {
        [C.headerWithBoost]: G,
        [C.headerWithoutSpecialHeader]: !G
      }),
      children: [(0, a.jsxs)("div", {
        className: C.header,
        children: [(0, a.jsxs)("div", {
          className: C.headerContentPrimary,
          children: [(0, a.jsx)("div", {
            className: C.headerBoostGems,
            children: F
          }), (0, a.jsxs)("div", {
            className: C.headerCopy,
            children: [(0, a.jsx)(o.Heading, {
              className: C.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              className: C.headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: l
            })]
          })]
        }), (0, a.jsx)("div", {
          className: C.headerContentSecondary,
          children: (0, a.jsx)(o.Tooltip, {
            shouldShow: null == k,
            text: p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, a.jsx)(o.Button, {
              ...e,
              disabled: null == k,
              onClick: null != k ? () => {
                var e;
                return e = k, void(0, o.openModalLazy)(async () => {
                  let {
                    default: t
                  } = await s.el("247760").then(s.bind(s, "247760"));
                  return s => (0, a.jsx)(t, {
                    ...s,
                    guildBoostSlots: [e],
                    locationSection: N.AnalyticsSections.SETTINGS_PREMIUM
                  })
                })
              } : void 0,
              children: p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), !y && (0, a.jsx)("ul", {
        className: C.unappliedBoostSlots,
        children: L.map(e => (0, a.jsx)(A, {
          guildBoostSlot: e,
          isCancellable: U,
          onCancel: O,
          onUncancel: x,
          premiumSubscription: h,
          useReducedMotion: R
        }, e.id))
      })]
    })]
  })
}