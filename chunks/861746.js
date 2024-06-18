"use strict";
t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(887024),
  o = t(512722),
  c = t.n(o),
  u = t(772848),
  d = t(979554),
  C = t(399606),
  E = t(692547),
  f = t(663002),
  m = t(481060),
  p = t(570140),
  g = t(37234),
  h = t(727637),
  x = t(607070),
  _ = t(100527),
  I = t(906732),
  T = t(1585),
  N = t(125988),
  S = t(377171),
  L = t(74179),
  b = t(107091),
  v = t(197115),
  O = t(300284),
  Z = t(876917),
  A = t(642619),
  R = t(210887),
  j = t(725808),
  P = t(465670),
  M = t(794358),
  k = t(466111),
  B = t(626135),
  y = t(74538),
  F = t(998502),
  D = t(335131),
  U = t(1870),
  H = t(884697),
  w = t(266386),
  G = t(724994),
  W = t(624377),
  V = t(390698),
  Y = t(813083),
  z = t(680942),
  K = t(558060),
  X = t(237031),
  q = t(832149),
  Q = t(981631),
  $ = t(474936),
  J = t(689938),
  ee = t(638075),
  es = t(42615);
let et = F.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  en = m.AvatarSizes.SIZE_152,
  ea = m.AvatarSizes.SIZE_120,
  ei = (0, T.y9)(en),
  el = e => {
    let {
      children: s,
      onClick: t,
      ...a
    } = e;
    return (0, n.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), t()
      },
      ...a,
      children: s
    })
  },
  er = e => {
    let {
      className: s,
      ...t
    } = e;
    return (0, n.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: l()(ee.previewButton, s),
      innerClassName: ee.previewButtonInner,
      "aria-label": J.Z.Messages.PREVIEW,
      ...t,
      children: (0, n.jsx)(M.Z, {
        width: 24,
        height: 24
      })
    })
  };
s.Z = function(e) {
  let {
    product: s,
    user: t,
    category: i,
    onMount: o,
    isGiftEasterEggEnabled: M
  } = e, F = a.useRef(null), {
    analyticsLocations: eo
  } = (0, I.ZP)(_.Z.COLLECTIBLES_SHOP_CARD), ec = a.useRef(null), eu = a.useRef(null), ed = (0, h.Z)(ec), {
    defaultPaymentSource: eC
  } = (0, L.Z)({
    isGift: !1,
    activeSubscription: null
  }), [eE, ef] = a.useState(!1), em = ed || eE, [ep] = s.items, {
    avatarDecorationSrc: eg,
    eventHandlers: eh,
    avatarPlaceholderSrc: ex
  } = (0, N.Z)({
    user: t,
    avatarDecorationOverride: (null == ep ? void 0 : ep.type) === d.Z.AVATAR_DECORATION ? ep : void 0,
    size: ei,
    animateOnHover: !em
  }), {
    backgroundColors: e_,
    buttonColors: eI
  } = (0, W.Z)(s.styles), eT = a.useMemo(() => y.ZP.canUseCollectibles(t), [t]), eN = (0, H.XM)(s, eT, !1), eS = a.useMemo(() => (0, H.BH)(s, eT), [s, eT]), eL = (0, H.G1)(s), eb = (0, H.rN)(s), {
    isPurchased: ev
  } = (0, G.L)(s), [eO, eZ] = (0, C.Wu)([U.Z], () => [U.Z.isClaiming === s.skuId, null != U.Z.isClaiming && U.Z.isClaiming !== s.skuId]), eA = (0, C.e7)([R.Z], () => (0, f.w)(R.Z.theme)), eR = (0, H.Yq)(s.skuId), ej = (0, w.c)("CollectiblesShopTallCard"), [eP, eM] = a.useState(!1), ek = a.useRef(null), eB = a.useRef(new r.qA), [ey, eF] = a.useState(!1), [eD, eU] = a.useState(null), eH = ev || ey, ew = (0, O.Z)({
    analyticsLocations: eo
  }), eG = a.useRef(null), eW = a.useMemo(() => ({
    sku_id: s.skuId,
    location: Q.Sbl.COLLECTIBLES_LIGHTNING_CHECKOUT
  }), [s]), eV = () => {
    if ((0, g.xf)(), ew(), (null == ep ? void 0 : ep.type) === d.Z.AVATAR_DECORATION) {
      (0, T.ps)({
        initialSelectedDecoration: ep,
        analyticsLocations: eo
      });
      return
    }(null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT && (0, A.H)({
      initialSelectedEffectId: ep.id,
      analyticsLocations: eo
    })
  }, eY = e => {
    if (!eP) return t => {
      eG.current = t.currentTarget, (0, X.T)({
        product: s,
        category: i,
        analyticsLocations: eo,
        analyticsSource: e,
        returnRef: eG
      })
    }
  }, ez = eY(_.Z.COLLECTIBLES_SHOP_CARD), eK = eY(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eX = () => (0, n.jsx)("div", {
    className: ee.hoverUpsellContainer,
    children: (0, n.jsx)(v.Z, {
      fullWidth: !0,
      className: ee.__invalid_premiumSubscribeButton,
      disabled: eZ,
      onClick: e => e.stopPropagation(),
      buttonText: J.Z.Messages.UNLOCK_WITH_NITRO,
      subscriptionTier: $.Si.TIER_2
    })
  });
  a.useEffect(() => {
    null == o || o(ec)
  }, [o]), a.useEffect(() => {
    if (!x.Z.useReducedMotion && null !== eD) {
      let {
        current: e
      } = eu;
      c()(null != e, "Shakeable is shaken when not mounted"), e.shake(300, 2)
    }
  }, [eD]);
  let eq = () => eH ? (0, n.jsx)(V.U, {
      className: ee.priceTag,
      isPartiallyPurchased: !1
    }) : eL ? (0, n.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: ee.priceTag,
      children: J.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(K.Z, {
      product: s,
      discount: eS,
      isPremiumUser: eT,
      className: ee.priceTag
    }),
    eQ = () => eL ? null : eb ? (0, n.jsx)(er, {
      onClick: eK
    }) : (0, n.jsx)(z.Z, {
      product: s,
      returnRef: ec,
      isGiftEasterEggEnabled: M,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e$ = () => {
      if (eL && !eT && !eb) return eX();
      let e = eL ? {
        submitting: eO,
        submittingStartedLabel: J.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: J.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, D.fK)(s.skuId), (0, q.Z)({
            product: s,
            analyticsLocations: eo
          })
        }
      } : {
        onClick: e1
      };
      return (0, n.jsxs)("div", {
        className: ee.buttonsContainer,
        children: [eH ? (0, n.jsx)(el, {
          disabled: eZ,
          onClick: eV,
          children: J.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(el, {
          disabled: eZ,
          className: ee.purchaseButton,
          ...e,
          children: eL ? J.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : J.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: eN
          })
        }), eQ()]
      })
    },
    eJ = () => eP && null !== eD ? (0, n.jsx)("div", {
      className: ee.avatarContainer,
      children: (0, n.jsx)("img", {
        src: es,
        alt: "error",
        className: ee.errorImg
      })
    }) : (0, n.jsxs)(n.Fragment, {
      children: [eL && (0, n.jsx)(m.Tooltip, {
        tooltipContentClassName: ee.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: J.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(m.TextBadge, {
          ...e,
          className: ee.premiumWheelBadge,
          text: (0, n.jsx)(k.Z, {
            className: ee.premiumWheel
          })
        })
      }), (null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT && (0, n.jsx)("div", {
        className: ee.profileEffectShopPreview,
        children: (0, n.jsx)(Z.Z, {
          isHovering: em,
          profileEffectId: ep.id,
          isPurchased: eH,
          removeSetHeight: !0
        })
      }), (null == ep ? void 0 : ep.type) === d.Z.AVATAR_DECORATION && (0, n.jsx)("div", {
        className: ee.avatarContainer,
        children: (0, n.jsx)(et, {
          ...eh,
          avatarDecoration: eg,
          src: ej && em ? null == t ? void 0 : t.getAvatarURL(void 0, 152, !0) : ex,
          imageClassName: ej && em ? ee.fadeInAvatarImg : void 0,
          className: l()(ee.avatar, {
            [ee.avatarPurchased]: eH && !eP
          }),
          size: eP ? ea : en,
          "aria-label": J.Z.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    e0 = () => (c()(null != eC, "default payment source must be set"), (0, n.jsxs)("div", {
      className: l()(ee.cardText, {
        [ee.cardTextBlur]: (null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT
      }),
      children: [(0, n.jsx)("div", {
        className: l()(ee.cardBackground, eA ? ee.darkCardBackground : ee.lightCardBackground, (null == ep ? void 0 : ep.type) === d.Z.PROFILE_EFFECT ? ee.cardLowOpacity : null)
      }), eP ? (0, n.jsx)(b.Z, {
        product: s,
        paymentSource: eC,
        itemPreview: eJ(),
        onPurchaseComplete: () => {
          eF(!0), B.default.track(Q.rMx.PAYMENT_FLOW_SUCCEEDED, {
            ...eW,
            load_id: F.current
          })
        },
        onUse: e7,
        onError: e => {
          eU(e), B.default.track(Q.rMx.PAYMENT_FLOW_FAILED, {
            ...eW,
            load_id: F.current
          })
        },
        onReviewPurchase: e7,
        confettiCanvas: ek.current,
        loadId: F.current,
        baseAnalyticsData: eW
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: ee.productName,
          children: s.name
        }), (0, n.jsxs)("div", {
          className: ee.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: ee.innerBlur,
            children: eq()
          }), (0, n.jsx)("div", {
            className: ee.innerHover,
            children: e$()
          })]
        })]
      })]
    })),
    e1 = () => {
      F.current = (0, u.Z)(), eU(null), eM(!0), ef(!0), p.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_OPEN"
      }), B.default.track(Q.rMx.PAYMENT_FLOW_STARTED, {
        ...eW,
        load_id: F.current
      })
    },
    e7 = a.useCallback(() => {
      eM(!1), ef(!1), p.Z.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      }), B.default.track(Q.rMx.PAYMENT_FLOW_CANCELED, {
        ...eW,
        load_id: F.current
      })
    }, [eM, eW]),
    e4 = eA ? "0 0 15px 1px ".concat(E.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    e2 = null != e_ ? {
      backgroundColor: eA ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: em ? e4 : "none"
    } : void 0,
    e8 = null != eI && eP ? {
      boxShadow: "0px 4px 50px 0px " + eI.primary.toHexString()
    } : {},
    e3 = eP && eD ? {
      boxShadow: "0px 4px 50px 0px " + (eA ? S.Z.WHITE : S.Z.BLACK)
    } : e8;
  return a.useEffect(() => {
    if (eP) {
      c()(null !== ec.current, "cardRef can not be null");
      let e = ec.current,
        s = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (s.length < 1) return;
      let t = s[0],
        n = s[s.length - 1],
        a = e => {
          "Tab" === e.key && (e.shiftKey && document.activeElement === t ? (e.preventDefault(), null == n || n.focus()) : !e.shiftKey && document.activeElement === n && (e.preventDefault(), null == t || t.focus()))
        },
        i = e => {
          "Escape" === e.key && e7()
        };
      return e.addEventListener("keydown", a), e.addEventListener("keydown", i), () => {
        e.removeEventListener("keydown", a), e.removeEventListener("keydown", i)
      }
    }
  }, [eP, e7]), (0, n.jsxs)(n.Fragment, {
    children: [eP && (0, n.jsx)("div", {
      className: ee.backdrop,
      onClick: e7,
      "aria-hidden": !0
    }), (0, n.jsx)(m.FocusRing, {
      children: (0, n.jsx)(m.Shakeable, {
        className: l()({
          [ee.shaker]: eP
        }),
        ref: eu,
        children: (0, n.jsxs)("div", {
          className: l()(ee.overflowContainer, {
            [ee.lightningCheckout]: eP
          }),
          style: e3,
          role: "dialog",
          "aria-modal": "true",
          children: [(0, n.jsx)(r.O_, {
            ref: ek,
            className: ee.confettiCanvas,
            environment: eB.current
          }), (0, n.jsxs)(m.Clickable, {
            innerRef: ec,
            className: l()(ee.shopCard, ee.shopCardAnimation),
            onBlur: () => ef(!1),
            onClick: ez,
            style: e2,
            id: "shop-item-".concat(s.skuId),
            "aria-hidden": !0,
            children: [eP && (0, n.jsx)(m.Button, {
              className: ee.closeButton,
              "aria-label": J.Z.Messages.CLOSE,
              look: m.Button.Looks.BLANK,
              size: m.Button.Sizes.NONE,
              onClick: e7,
              children: (0, n.jsx)(P.Z, {
                width: 16,
                height: 16,
                color: eA ? S.Z.WHITE : S.Z.BLACK
              })
            }), eH && !eP && (0, n.jsx)("div", {
              className: ee.checkmarkWrapper,
              children: (0, n.jsx)(j.Z, {
                width: 38,
                height: 38,
                className: ee.checkmark
              })
            }), eJ(), e0(), !eP && (0, n.jsx)(Y.Z, {
              category: i,
              className: ee.limitedTimeBadge,
              display: "card"
            }), eR && !eP && (0, n.jsx)(m.TextBadge, {
              text: J.Z.Messages.NEW,
              disableColor: !0,
              className: ee.newBadge
            })]
          })]
        })
      })
    })]
  })
}