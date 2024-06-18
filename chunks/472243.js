"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(100527),
  u = n(906732),
  _ = n(849522),
  d = n(639119),
  c = n(594174),
  E = n(466111),
  I = n(74538),
  T = n(694320),
  h = n(981631),
  S = n(474936),
  f = n(689938),
  N = n(251827);

function A(e) {
  var t, n, r, A;
  let {
    type: m,
    textValue: O,
    maxCharacterCount: R,
    showRemainingCharsAfterCount: C,
    className: p
  } = e, g = (0, o.e7)([c.default], () => I.ZP.canUseIncreasedMessageLength(c.default.getCurrentUser())), L = (0, _.Z)(), v = null != R ? R : L, D = null !== (A = null != C ? C : R) && void 0 !== A ? A : L / 10, M = O.length, P = null != m.upsellLongMessages && (null != M ? M : 0) > h.J6R && g, y = null != m.upsellLongMessages && !g, U = (null === (n = (0, d.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.Si.TIER_2, b = v - M, G = b > D, w = b < 0 && U, k = 0 === b ? f.Z.Messages.CHARACTER_COUNT_AT_LIMIT : b > 0 ? f.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
    count: b
  }) : f.Z.Messages.CHARACTER_COUNT_OVER_LIMIT, {
    analyticsLocations: B
  } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
  return P && b >= 0 || !G || y && !G ? (0, i.jsx)(u.Gt, {
    value: B,
    children: (0, i.jsxs)("div", {
      className: s()(p, N.characterCount, {
        [N.error]: b < 0
      }),
      children: [(0, i.jsxs)("div", {
        className: N.flairContainer,
        children: [P && b >= 0 ? (0, i.jsx)(a.Tooltip, {
          text: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
            maxLength: v
          }),
          position: "top",
          children: e => (0, i.jsx)(E.Z, {
            className: N.premiumFlair,
            ...e
          })
        }) : null, G || w ? null : (0, i.jsx)(a.Tooltip, {
          text: k,
          position: "top",
          children: e => (0, i.jsx)("span", {
            "aria-hidden": !0,
            ...e,
            children: b
          })
        })]
      }), (0, i.jsx)(a.HiddenVisually, {
        children: f.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
          count: b
        })
      }), y && !G ? (0, i.jsx)(T.Z, {
        className: N.upsell,
        iconOnly: (null === (r = m.upsellLongMessages) || void 0 === r ? void 0 : r.iconOnly) || !1,
        remaining: b
      }) : null]
    })
  }) : null
}