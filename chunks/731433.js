"use strict";
s.r(t), s.d(t, {
  DECO_SKU_ID: function() {
    return _
  },
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var i = s("990547"),
  l = s("442837"),
  n = s("481060"),
  r = s("37234"),
  o = s("100527"),
  d = s("906732"),
  u = s("213609"),
  c = s("204418"),
  f = s("1585"),
  p = s("223143"),
  h = s("300284"),
  m = s("158776"),
  I = s("594174"),
  E = s("153124"),
  S = s("741245"),
  g = s("474936"),
  C = s("689938"),
  T = s("478984");
let _ = "1225876188074082374";

function v(e) {
  let {
    user: t,
    deco: s
  } = e, i = (0, l.useStateFromStores)([m.default], () => m.default.getStatus(t.id));
  return (0, a.jsxs)("div", {
    className: T.avatarBackground,
    children: [(0, a.jsx)(c.default, {
      user: t,
      guildId: void 0,
      avatarDecorationOverride: s,
      status: i,
      className: T.avatar
    }), (0, a.jsx)("div", {
      className: T.rect
    }), (0, a.jsx)("div", {
      className: T.rect
    }), (0, a.jsx)("div", {
      className: T.bottomOverlay
    })]
  })
}

function A(e) {
  var t;
  let {
    transitionState: s,
    onClose: c
  } = e, m = (0, E.useUID)(), {
    theme: A
  } = (0, n.useThemeContext)(), M = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
    purchases: R
  } = (0, p.useFetchPurchases)(), x = null === (t = R.get(_)) || void 0 === t ? void 0 : t.items, N = void 0 !== x ? x[0] : void 0, {
    analyticsLocations: O
  } = (0, d.default)(o.default.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL), y = (0, h.default)({
    analyticsLocations: O
  });
  return (0, u.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
    properties: {
      location_stack: O
    }
  }), (0, a.jsxs)(n.ModalRoot, {
    transitionState: s,
    "aria-labelledby": m,
    className: T.container,
    children: [void 0 !== M && (0, a.jsx)(v, {
      user: M,
      deco: N
    }), (0, a.jsxs)(n.ModalContent, {
      className: T.content,
      children: [(0, a.jsx)(S.default, {
        theme: A,
        premiumType: g.PremiumTypes.TIER_2,
        type: S.default.Types.PREMIUM_ACTIVATED
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: T.bodyText,
        children: C.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format()
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        look: n.Button.Looks.FILLED,
        color: n.Button.Colors.BRAND,
        onClick: () => {
          c(), (0, r.popLayer)(), y(), (0, f.openAvatarDecorationModal)({
            initialSelectedDecoration: N,
            analyticsLocations: O
          })
        },
        children: C.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      })
    })]
  })
}