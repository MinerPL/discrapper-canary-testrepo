"use strict";
n.d(t, {
  C: function() {
    return C
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(100527),
  u = n(906732),
  _ = n(104494),
  d = n(639119),
  c = n(165583),
  E = n(465670),
  I = n(626135),
  T = n(74538),
  h = n(191177),
  S = n(27733),
  f = n(981631),
  N = n(474936),
  A = n(689938),
  m = n(60135),
  O = n(867250);
let R = () => (0, h.f)(!1),
  C = e => {
    var t, n, s;
    let {
      onLearnMore: h
    } = e, {
      analyticsLocations: C
    } = (0, u.ZP)(l.Z.PREMIUM_UPSELL);
    r.useEffect(() => {
      I.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
        location_section: f.jXE.STICKER_PICKER_UPSELL,
        type: N.cd.STICKER_PICKER_UPSELL,
        location_stack: C
      })
    }, [C]);
    let p = (0, d.N)(),
      g = (0, _.Ng)(),
      L = (null == p ? void 0 : null === (t = p.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === N.Si.TIER_0,
      v = null != p || null != g;
    return (0, i.jsxs)("div", {
      className: o()(m.upsellWrapper, {
        [m.unifyTrialUpsell]: v
      }),
      children: [v ? (0, i.jsx)(c.ZP, {
        trialOffer: p,
        discountOffer: g,
        onClose: R,
        type: N.cd.STICKER_PICKER_UPSELL,
        subscriptionTier: null !== (s = null == p ? void 0 : null === (n = p.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : N.Si.TIER_2,
        children: L ? A.Z.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
          planName: (0, T.aq)(N.Xh.PREMIUM_MONTH_TIER_0),
          onClick: h
        }) : A.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
          onClick: h
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          className: m.upsellImage,
          src: O,
          alt: A.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
        }), (0, i.jsx)(a.Text, {
          className: m.upsellTitle,
          color: "header-primary",
          variant: "text-lg/semibold",
          children: A.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
        }), (0, i.jsx)(a.Text, {
          className: m.upsellDescription,
          variant: "text-md/normal",
          children: A.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
            onClick: h
          })
        })]
      }), !v && (0, i.jsx)(S.Z, {
        analyticsSection: f.jXE.EXPRESSION_PICKER,
        buttonText: v ? L ? A.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : A.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
      }), (0, i.jsx)(a.Clickable, {
        className: m.upsellClose,
        onClick: R,
        children: (0, i.jsx)(E.Z, {})
      })]
    })
  }