"use strict";
n.d(t, {
  Z: function() {
    return C
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(100527),
  _ = n(906732),
  d = n(104494),
  c = n(639119),
  E = n(165583),
  I = n(626135),
  T = n(453070),
  h = n(926491),
  S = n(419922),
  f = n(27733),
  N = n(611480),
  A = n(981631),
  m = n(474936),
  O = n(689938),
  R = n(121185);

function C(e) {
  var t, n, s;
  let {
    className: C,
    onClose: p
  } = e;
  (0, T.fP)();
  let {
    analyticsLocations: g
  } = (0, _.ZP)(u.Z.EMPTY_STATE), L = (0, a.Wu)([h.Z], () => N.Wt.map(e => h.Z.getStickerById(e)));
  r.useEffect(() => {
    I.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
      type: m.cd.EMPTY_STICKER_PICKER_UPSELL,
      source: {
        section: A.jXE.EMPTY_STICKER_PICKER_UPSELL
      },
      location_stack: g
    })
  }, [g]);
  let v = (0, c.N)(),
    D = (0, d.Ng)(),
    M = null != v || null != D,
    P = (null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.Si.TIER_0;
  return (0, i.jsxs)("div", {
    className: o()(R.emptyState, C, {
      [R.unifyTrialUpsell]: M
    }),
    children: [M ? (0, i.jsx)(E.ZP, {
      discountOffer: D,
      trialOffer: v,
      onClose: p,
      type: m.cd.EMPTY_STICKER_PICKER_UPSELL,
      subscriptionTier: null !== (s = null == v ? void 0 : null === (n = v.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : m.Si.TIER_2,
      children: O.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.Heading, {
        className: R.header,
        variant: "heading-xl/semibold",
        children: O.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
      }), (0, i.jsx)(l.Text, {
        className: R.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: O.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
      }), (0, i.jsx)("div", {
        className: R.stickersRow,
        children: L.filter(e => null != e).map(e => (0, i.jsx)(S.ZP, {
          sticker: e,
          className: R.sticker,
          size: 80
        }, null == e ? void 0 : e.id))
      })]
    }), !M && (0, i.jsx)(f.Z, {
      analyticsSection: A.jXE.EXPRESSION_PICKER,
      buttonText: M ? P ? O.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : O.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
    })]
  })
}