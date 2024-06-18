"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(780384),
  l = n(481060),
  u = n(410030),
  _ = n(100527),
  d = n(906732),
  c = n(28546),
  E = n(98278),
  I = n(104494),
  T = n(639119),
  h = n(165583),
  S = n(197115),
  f = n(626135),
  N = n(176354),
  A = n(74538),
  m = n(543241),
  O = n(149203),
  R = n(981631),
  C = n(185923),
  p = n(474936),
  g = n(689938),
  L = n(369454);
t.Z = e => {
  var t, s;
  let {
    onLearnMore: v,
    onClose: D,
    channel: M,
    emojiDescriptor: P,
    pickerIntention: y,
    analyticsLocation: U
  } = e, b = (0, u.ZP)(), [G, w] = r.useState(!1), k = () => {
    (0, m.A3)(M), (0, E.z)(), v()
  }, B = (0, a.ap)(b) ? n(537381) : n(341048), x = (0, T.N)(), V = (0, I.Ng)(), Z = null != x || null != V, H = (0, c.Iu)(e => e.searchQuery), {
    analyticsLocations: F
  } = (0, d.ZP)(_.Z.EMOJI_PICKER);
  return r.useEffect(() => {
    let e;
    e = y === C.Hz.REACTION ? p.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : P.subCategory === O.t0.TOP_GUILD_EMOJI ? p.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : P.subCategory === O.t0.NEWLY_ADDED_EMOJI ? p.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : p.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let t = P.emoji;
    f.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
      type: e,
      is_animated: t.animated,
      is_external: !N.ZP.isInternalEmojiForGuildId(t, null == M ? void 0 : M.getGuildId()),
      has_search_query: null != H && "" !== H,
      location: {
        ...U,
        object: R.qAy.EMOJI
      },
      location_stack: F,
      sku_id: (0, A.Wz)(A.ZP.getSkuIdForPremiumType(p.p9.TIER_2))
    })
  }, [P, M, U, F, y, H]), (0, i.jsxs)("div", {
    className: o()(L.premiumPromo, {
      [L.unifyTrialUpsell]: Z
    }),
    children: [(0, i.jsx)(l.Clickable, {
      className: L.premiumPromoClose,
      onClick: D,
      children: g.Z.Messages.CLOSE
    }), (0, i.jsxs)(i.Fragment, {
      children: [Z ? (0, i.jsx)(h.ZP, {
        type: p.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
        subscriptionTier: null !== (s = null == x ? void 0 : null === (t = x.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== s ? s : p.Si.TIER_2,
        onClose: D,
        trialOffer: x,
        discountOffer: V,
        children: g.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
          onClick: k
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          className: L.premiumPromoImage,
          src: B
        }), (0, i.jsx)("div", {
          className: L.premiumPromoTitle,
          children: g.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
        }), (0, i.jsx)("div", {
          className: L.premiumPromoDescription,
          children: g.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: k
          })
        })]
      }), !Z && (0, i.jsx)(S.Z, {
        subscriptionTier: p.Si.TIER_2,
        submitting: G,
        premiumModalAnalyticsLocation: {
          section: R.jXE.EMOJI_PICKER_POPOUT,
          object: R.qAy.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          w(!0)
        },
        onSubscribeModalClose: e => {
          w(!1), e && D()
        },
        buttonText: Z ? g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : g.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
      })]
    })]
  })
}