"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(2052),
  _ = n(367907),
  d = n(906732),
  c = n(28546),
  E = n(26323),
  I = n(434404),
  T = n(889161),
  h = n(430824),
  S = n(973675),
  f = n(68736),
  N = n(267642),
  A = n(981631),
  m = n(30513),
  O = n(689938),
  R = n(743346);
t.Z = e => {
  let {
    className: t,
    guildId: n,
    channel: s,
    shouldTrackUpsellViewed: C,
    setTrackedUpsellViewed: p
  } = e, {
    location: g
  } = (0, u.O)(), {
    analyticsLocations: L
  } = (0, d.ZP)(), v = (0, a.e7)([h.Z], () => h.Z.getGuild(n)), {
    canManageAllExpressions: D
  } = (0, T.XJ)(v), M = null != v && 0 === (0, N.A3)(v.premiumTier) && !v.hasFeature(A.oNc.MORE_STICKERS);
  return (r.useEffect(() => {
    D && M && C && ((0, _.yw)(A.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
      location: g,
      guild_id: null == v ? void 0 : v.id,
      channel_id: null == s ? void 0 : s.id,
      type: "Expression Picker Inline Sticker Upsell",
      location_stack: L
    }), p(!0))
  }, [M, v, s, g, C, p, L, D]), null != v && D) ? M ? (0, i.jsxs)("div", {
    className: o()(R.upsell, t),
    children: [(0, i.jsx)(S.Z, {
      className: R.icon,
      width: 24,
      height: 24
    }), (0, i.jsx)(l.Text, {
      color: "interactive-normal",
      className: R.body,
      variant: "text-sm/normal",
      children: O.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
        count: (0, N.A3)(A.Eu4.TIER_1)
      })
    }), (0, i.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      onClick: () => {
        (0, E.Z)({
          analyticsLocations: L,
          analyticsSourceLocation: g,
          guild: v,
          perks: (0, m.hC)()
        })
      },
      children: O.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
    })]
  }) : (0, i.jsxs)("div", {
    className: o()(R.upsell, t),
    children: [(0, i.jsx)(f.Z, {
      className: R.icon,
      width: 20,
      height: 20
    }), (0, i.jsx)(l.Text, {
      color: "interactive-normal",
      className: R.body,
      variant: "text-sm/normal",
      children: O.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
    }), (0, i.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      onClick: () => {
        (0, c._Q)(), I.Z.open(n, A.pNK.STICKERS, g)
      },
      children: O.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
    })]
  }) : null
}