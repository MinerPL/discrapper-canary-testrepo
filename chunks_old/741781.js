"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("685665"),
  d = s("493390"),
  u = s("181114"),
  c = s("599110"),
  S = s("719923"),
  E = s("906932"),
  T = s("570697"),
  f = s("632892"),
  _ = s("49111"),
  m = s("646718"),
  g = s("782340"),
  h = s("535031");

function N(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: N,
    forcedDivider: I = !1,
    withTutorial: p = !1,
    showBorder: C = !1,
    isTryItOutFlow: A = !1,
    initialSelectedEffectId: O
  } = e, x = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), R = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: M
  } = (0, o.default)(), {
    pendingProfileEffectId: D,
    errors: v
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), L = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: M,
    initialSelectedEffectId: O,
    guild: s
  }), [M, O, s]);
  n.useEffect(() => {
    R && c.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: m.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: M
    })
  }, [R, M]);
  let P = null != s,
    j = A || void 0 !== D ? null != D : null != x,
    b = p ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: I,
    borderType: f.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: N,
    showBorder: C,
    errors: v,
    className: l,
    children: (0, a.jsxs)("div", {
      className: h.buttonsContainer,
      children: [(0, a.jsx)(b, {
        size: r.Button.Sizes.SMALL,
        onClick: L,
        className: i({
          [h.buttonHighlighted]: p
        }),
        children: g.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), j && (0, a.jsx)(r.Button, {
        className: h.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, x, s)
        },
        children: P ? g.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : g.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}