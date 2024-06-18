"use strict";
n.d(t, {
  Z: function() {
    return L
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(355467),
  _ = n(100527),
  d = n(906732),
  c = n(678558),
  E = n(626135),
  I = n(74538),
  T = n(357355),
  h = n(104494),
  S = n(639119),
  f = n(165583),
  N = n(197115),
  A = n(302945),
  m = n(631771),
  O = n(474936),
  R = n(981631),
  C = n(689938),
  p = n(991566),
  g = n(769860);

function L(e) {
  var t, n, s;
  let {
    title: L,
    type: v,
    guildBoostProps: D,
    analyticsSource: M,
    analyticsLocation: P,
    body: y,
    context: U,
    glowUp: b,
    modalClassName: G,
    artContainerClassName: w,
    headerClassName: k,
    bodyClassName: B,
    transitionState: x,
    onClose: V,
    onSubscribeClick: Z,
    onSecondaryClick: H,
    secondaryCTA: F,
    subscribeButtonText: Y,
    showNewBadge: j = !1,
    enableArtBoxShadow: W = !0,
    subscriptionTier: K = O.Si.TIER_2,
    isLoading: z = !1,
    hideBackButton: q,
    backButtonText: X,
    showEnhancedUpsell: Q,
    children: J,
    ...$
  } = e, ee = null != D, et = (0, S.N)(), en = (0, h.Ng)(), ei = ((null == et ? void 0 : null === (t = et.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === K || (0, h.Wp)(en, K)) && !ee, {
    analyticsLocations: er
  } = (0, d.ZP)(_.Z.PREMIUM_UPSELL_MODAL);
  r.useEffect(() => {
    !z && (ee ? E.default.track(R.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(v, " - Tier ").concat(D.boostedGuildTier),
      guild_id: D.guild.id,
      channel_id: D.channelId,
      location: P,
      location_stack: er
    }) : E.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
      type: v,
      source: M,
      location: P,
      location_stack: er,
      sku_id: (0, I.Wz)(K)
    }))
  }, [ee, K, z]);
  let es = (0, a.e7)([T.Z], () => T.Z.affinities),
    eo = es.length > 1 && (0, m.YN)(v),
    ea = (0, a.e7)([T.Z], () => T.Z.hasFetched);
  r.useEffect(() => {
    !ea && u.MH()
  }, [ea]);
  let el = W ? o()(p.artContainer, p.artContainerBoxShadow, w) : o()(p.artContainer, w),
    eu = null;
  return eu = "artURL" in $ ? (0, i.jsx)("img", {
    className: p.art,
    alt: "",
    src: $.artURL
  }) : $.artElement, (0, i.jsxs)(l.ModalRoot, {
    className: o()(p.root, G),
    "aria-label": L,
    transitionState: x,
    children: [(0, i.jsxs)("div", {
      className: el,
      children: [eu, j ? (0, i.jsx)("img", {
        className: p.sparkleBadge,
        alt: "",
        src: g
      }) : null]
    }), Q ? (0, i.jsx)(l.ModalCloseButton, {
      onClick: V,
      className: p.closeButton
    }) : null, (0, i.jsx)(l.ModalContent, {
      scrollbarType: "none",
      className: Q ? p.enhancedContent : p.content,
      children: z ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsx)(i.Fragment, {
        children: ei ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(f.ZP, {
            onClose: V,
            type: v,
            subscriptionTier: null !== (s = null == et ? void 0 : null === (n = et.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : O.Si.TIER_2,
            headingText: L,
            context: U,
            analyticsLocationObject: P,
            discountOffer: en,
            trialOffer: et,
            children: b
          })
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.Heading, {
            className: o()(p.header, {
              [p.enhancedHeader]: Q
            }, k),
            variant: "heading-xl/bold",
            children: L
          }), eo ? (0, i.jsx)(A.Z, {
            affinities: es
          }) : void 0, J, (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            className: o()(B, p.subHeader),
            children: y
          })]
        })
      })
    }), (0, i.jsxs)(l.ModalFooter, {
      className: o()(p.footer, {
        [p.enhancedFooter]: Q
      }),
      children: [(0, i.jsxs)("div", {
        className: o()(p.primaryActions, {
          [p.enhancedPrimaryActions]: Q
        }),
        children: [null != F ? (0, i.jsx)(l.Button, {
          className: o()(p.secondaryAction, {
            [p.enhancedSecondaryAction]: Q
          }),
          onClick: H,
          size: l.Button.Sizes.SMALL,
          color: Q ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
          look: l.Button.Looks.LINK,
          children: F
        }) : null, (() => {
          let e;
          if (ee) return (0, i.jsx)(c.Z, {
            analyticsLocation: P,
            guild: D.guild,
            onClose: V
          });
          let t = Q ? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
          if (ei) {
            if (null != et) {
              var n, r;
              t = (0, I.Rt)({
                intervalType: null == et ? void 0 : null === (n = et.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == et ? void 0 : null === (r = et.subscription_trial) || void 0 === r ? void 0 : r.interval_count
              }), e = null == et ? void 0 : et.trial_id
            } else null != en && (t = C.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
              percent: en.discount.amount
            }))
          }
          return (0, i.jsx)(N.Z, {
            showGradient: Q,
            premiumModalAnalyticsLocation: P,
            subscriptionTier: K,
            trialId: e,
            size: l.Button.Sizes.SMALL,
            color: Q ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
            onClick: () => {
              null == Z || Z(), V()
            },
            buttonText: null != Y ? Y : t
          })
        })()]
      }), !q && !Q && (0, i.jsx)(l.Button, {
        onClick: V,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        children: null != X ? X : C.Z.Messages.BACK
      })]
    })]
  })
}