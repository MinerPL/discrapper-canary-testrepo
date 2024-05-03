"use strict";
s.r(t), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("607070"),
  u = s("158153"),
  c = s("98278"),
  S = s("314684"),
  E = s("594174"),
  T = s("78839"),
  f = s("267642"),
  m = s("74538"),
  _ = s("283029"),
  g = s("357956"),
  h = s("275909"),
  I = s("981631"),
  N = s("735825"),
  p = s("689938"),
  C = s("469261");

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
        className: C.__invalid_unappliedGuildBoostSlotDescription,
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
    } = await Promise.all([s.e("99387"), s.e("55224")]).then(s.bind(s, "401786"));
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
    } = await Promise.all([s.e("99387"), s.e("73049")]).then(s.bind(s, "450468"));
    return s => (0, a.jsx)(t, {
      ...s,
      guildBoostSlotId: e.id
    })
  })
}
t.default = function(e) {
  let t, l;
  let {
    guildBoostSlots: g
  } = e, h = (0, r.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), R = (null == h ? void 0 : h.isPausedOrPausePending) === !0, M = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), v = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), D = (0, S.useFreeBoostTenureRewardEntitlement)(), {
    appliedGuildBoostSlots: L,
    unappliedGuildBoostSlots: P,
    numActiveGuildBoostSlots: j
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
  }, [g]), b = null != h ? (0, u.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(h, D) : 0, U = Math.max(0, b - L.length), y = j > b, B = b === g.length, F = B ? U : 1, G = n.useMemo(() => {
    let e = [];
    for (let t = 0; t < F; t++) e.push((0, a.jsx)(_.default, {
      className: C.headerBoostGem,
      useReducedMotion: M
    }, t));
    return e
  }, [F, M]), k = null != D, w = n.useMemo(() => P.find(e => e.isAvailable()), [P]);
  if (0 === P.length) return null;
  let H = P.length;
  return t = B ? 1 === H && k ? p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H
  }) : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: H
  }), m.default.isPremium(v) ? l = B && 1 === H && k ? D.skuId === N.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
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
    children: [k && (0, a.jsxs)("div", {
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
      className: i()(C.content, {
        [C.headerWithBoost]: k,
        [C.headerWithoutSpecialHeader]: !k
      }),
      children: [(0, a.jsxs)("div", {
        className: C.header,
        children: [(0, a.jsxs)("div", {
          className: C.headerContentPrimary,
          children: [(0, a.jsx)("div", {
            className: C.headerBoostGems,
            children: G
          }), (0, a.jsxs)("div", {
            className: C.__invalid_headerCopy,
            children: [(0, a.jsx)(o.Heading, {
              className: C.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              className: C.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: l
            })]
          })]
        }), (0, a.jsx)("div", {
          className: C.headerContentSecondary,
          children: (0, a.jsx)(o.Tooltip, {
            shouldShow: null == w || R,
            text: R ? p.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, a.jsx)(o.Button, {
              ...e,
              disabled: null == w || R,
              onClick: null != w ? () => {
                var e;
                return e = w, void(0, o.openModalLazy)(async () => {
                  let {
                    default: t
                  } = await Promise.all([s.e("49237"), s.e("99387"), s.e("62511"), s.e("8016"), s.e("22646"), s.e("68451")]).then(s.bind(s, "760558"));
                  return s => (0, a.jsx)(t, {
                    ...s,
                    guildBoostSlots: [e],
                    locationSection: I.AnalyticsSections.SETTINGS_PREMIUM
                  })
                })
              } : void 0,
              children: p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), !B && (0, a.jsx)("ul", {
        className: C.unappliedBoostSlots,
        children: P.map(e => (0, a.jsx)(A, {
          guildBoostSlot: e,
          isCancellable: y,
          onCancel: O,
          onUncancel: x,
          premiumSubscription: h,
          useReducedMotion: M
        }, e.id))
      })]
    })]
  })
}