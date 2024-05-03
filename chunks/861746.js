"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("236471"),
  o = a("512722"),
  u = a.n(o),
  c = a("278074"),
  d = a("979554"),
  f = a("399606"),
  m = a("692547"),
  C = a("663002"),
  p = a("481060"),
  h = a("570140"),
  E = a("37234"),
  g = a("727637"),
  x = a("607070"),
  S = a("100527"),
  b = a("906732"),
  T = a("1585"),
  L = a("125988"),
  v = a("377171"),
  I = a("74179"),
  N = a("107091"),
  _ = a("197115"),
  y = a("300284"),
  O = a("876917"),
  k = a("642619"),
  R = a("210887"),
  A = a("594174"),
  j = a("725808"),
  P = a("465670"),
  B = a("794358"),
  D = a("466111"),
  F = a("26290"),
  M = a("998502"),
  w = a("335131"),
  H = a("1870"),
  U = a("884697"),
  W = a("664018"),
  G = a("624377"),
  V = a("813083"),
  z = a("680942"),
  K = a("558060"),
  Y = a("237031"),
  X = a("832149"),
  Z = a("474936"),
  Q = a("689938"),
  q = a("10805"),
  $ = a("42615");
let J = M.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  ee = p.AvatarSizes.SIZE_152,
  et = p.AvatarSizes.SIZE_120,
  ea = (0, T.getDecorationSizeForAvatarSize)(ee),
  el = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(p.Button, {
      fullWidth: !0,
      look: p.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  es = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(q.previewButton, t),
      innerClassName: q.previewButtonInner,
      "aria-label": Q.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(B.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: o = !1,
    isGiftEasterEggEnabled: B
  } = e, {
    analyticsLocations: M
  } = (0, b.default)(S.default.COLLECTIBLES_SHOP_CARD), er = s.useRef(null), en = s.useRef(null), ei = (0, g.default)(er), {
    defaultPaymentSource: eo
  } = (0, I.default)({
    isGift: !1,
    activeSubscription: null
  }), [eu, ec] = s.useState(!1), ed = ei || eu, ef = (0, f.useStateFromStores)([A.default], () => A.default.getCurrentUser()), [em] = t.items, {
    avatarDecorationSrc: eC,
    eventHandlers: ep,
    avatarPlaceholderSrc: eh
  } = (0, L.default)({
    user: ef,
    avatarDecorationOverride: (null == em ? void 0 : em.type) === d.CollectiblesItemType.AVATAR_DECORATION ? em : void 0,
    size: ea,
    animateOnHover: !ed
  }), {
    backgroundColors: eE,
    buttonColors: eg
  } = (0, G.default)(t.styles), ex = (0, U.getFormattedPriceForCollectiblesProduct)(t, o, !1), eS = (0, U.isPremiumCollectiblesProduct)(t), eb = (0, U.isFreeCollectiblesProduct)(t), [eT, eL, ev] = (0, f.useStateFromStoresArray)([H.default], () => [H.default.getPurchase(t.skuId), H.default.isClaiming === t.skuId, null != H.default.isClaiming && H.default.isClaiming !== t.skuId]), eI = (0, f.useStateFromStores)([R.default], () => (0, C.isThemeDark)(R.default.theme)), eN = (0, U.isProductNew)(t.skuId), {
    hoverVariant: e_
  } = (0, W.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), [ey, eO] = s.useState(!1), ek = s.useRef(null), eR = s.useRef(new i.Environment), [eA, ej] = s.useState(!1), [eP, eB] = s.useState(null), eD = null != eT || eA;
  s.useEffect(() => {
    let {
      current: e
    } = er;
    if (null == e) return;
    let t = () => ec(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eF = (0, y.default)({
      analyticsLocations: M
    }),
    eM = s.useRef(null),
    ew = () => {
      if ((0, E.popLayer)(), eF(), (null == em ? void 0 : em.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, T.openAvatarDecorationModal)({
          initialSelectedDecoration: em,
          analyticsLocations: M
        });
        return
      }(null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, k.openProfileEffectModal)({
        initialSelectedEffectId: em.id,
        analyticsLocations: M
      })
    },
    eH = e => {
      if (!ey) return l => {
        eM.current = l.currentTarget, (0, Y.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: M,
          analyticsSource: e,
          returnRef: eM
        })
      }
    },
    eU = eH(S.default.COLLECTIBLES_SHOP_CARD),
    eW = eH(S.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eG = () => (0, l.jsx)("div", {
      className: q.hoverUpsellContainer,
      children: (0, l.jsx)(_.default, {
        fullWidth: !0,
        className: q.__invalid_premiumSubscribeButton,
        disabled: ev,
        onClick: e => e.stopPropagation(),
        buttonText: Q.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(er)
  }, [r]), s.useEffect(() => {
    if (!x.default.useReducedMotion && null !== eP) {
      let {
        current: e
      } = en;
      u()(null != e, "Shakeable is shaken when not mounted"), e.shake(200, 2)
    }
  }, [eP]);
  let eV = () => eD ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: Q.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eS ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: q.priceTag,
      children: Q.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(K.default, {
      alwaysWhiteText: !1,
      product: t,
      className: q.priceTag,
      disableTooltipPointerEvents: !0
    }),
    ez = () => eS ? null : eb ? (0, l.jsx)(es, {
      onClick: eW
    }) : (0, l.jsx)(z.default, {
      product: t,
      returnRef: er,
      isGiftEasterEggEnabled: B,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eK = () => {
      if (eS && !o && !eb) return eG();
      let e = eS ? {
        submitting: eL,
        submittingStartedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, w.claimPremiumCollectiblesProduct)(t.skuId), (0, X.default)({
            product: t,
            analyticsLocations: M
          })
        }
      } : {
        onClick: () => {
          eB(null), eO(!0), h.default.dispatch({
            type: "LIGHTNING_CHECKOUT_OPEN"
          })
        }
      };
      return (0, l.jsxs)("div", {
        className: q.buttonsContainer,
        children: [eD ? (0, l.jsx)(el, {
          disabled: ev,
          onClick: ew,
          children: Q.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(el, {
          disabled: ev,
          className: q.purchaseButton,
          ...e,
          children: eS ? Q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : Q.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ex
          })
        }), ez()]
      })
    },
    eY = () => ey && null !== eP ? (0, l.jsx)("div", {
      className: q.avatarContainer,
      children: (0, l.jsx)("img", {
        src: $,
        alt: "error",
        className: q.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eS && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: q.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(F.TextBadge, {
          ...e,
          className: q.premiumWheelBadge,
          text: (0, l.jsx)(D.default, {
            className: q.premiumWheel
          })
        })
      }), (null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: q.profileEffectShopPreview,
        children: (0, l.jsx)(O.default, {
          isHovering: ed,
          profileEffectId: em.id,
          isPurchased: eD,
          removeSetHeight: !0
        })
      }), (null == em ? void 0 : em.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: q.avatarContainer,
        children: (0, l.jsx)(J, {
          ...ep,
          avatarDecoration: eC,
          src: eh,
          className: n()(q.avatar, {
            [q.avatarPurchased]: eD && !ey
          }),
          size: ey ? et : ee,
          "aria-label": Q.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eX = () => (u()(null != eo, "default payment source must be set"), (0, l.jsxs)("div", {
      className: n()(q.cardText, {
        [q.cardTextBlur]: (null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT
      }),
      children: [(0, l.jsx)("div", {
        className: n()(q.cardBackground, eI ? q.darkCardBackground : q.lightCardBackground, (null == em ? void 0 : em.type) === d.CollectiblesItemType.PROFILE_EFFECT ? q.cardLowOpacity : null)
      }), ey ? (0, l.jsx)(N.default, {
        product: t,
        paymentSource: eo,
        itemPreview: eY(),
        onPurchaseComplete: () => {
          ej(!0)
        },
        onUse: eZ,
        onError: e => {
          eB(e)
        },
        onReviewPurchase: eZ,
        confettiCanvas: ek.current
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.Text, {
          variant: "text-lg/bold",
          className: q.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: q.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: q.innerBlur,
            children: eV()
          }), (0, l.jsx)("div", {
            className: q.innerHover,
            children: eK()
          })]
        })]
      })]
    })),
    eZ = () => {
      eO(!1), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      })
    },
    eQ = eI ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    eq = null != eE ? {
      backgroundColor: eI ? "var(--background-floating)" : "var(--background-secondary)",
      borderColor: "var(--chat-border)",
      boxShadow: ed ? eQ : "none"
    } : void 0,
    e$ = null != eg && ey ? {
      boxShadow: "0px 4px 50px 0px " + eg.primary.toHexString()
    } : {};
  return (0, l.jsxs)(l.Fragment, {
    children: [ey && (0, l.jsx)("div", {
      className: q.backdrop,
      onClick: () => eO(!1)
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)(p.Shakeable, {
        className: n()({
          [q.shaker]: ey
        }),
        ref: en,
        children: (0, l.jsxs)("div", {
          className: n()(q.overflowContainer, {
            [q.lightningCheckout]: ey
          }),
          style: e$,
          children: [(0, l.jsx)(i.ConfettiCanvas, {
            ref: ek,
            className: q.confettiCanvas,
            environment: eR.current
          }), (0, l.jsxs)(p.Clickable, {
            innerRef: er,
            className: n()(q.shopCard, (0, c.match)(e_).with(W.ShopCardHoverAnimationVariant.CONTROL, () => q.shopCardDefaultAnimation).with(W.ShopCardHoverAnimationVariant.TRANSFORMATION, () => q.shopCardTransformationAnimation).otherwise(() => void 0)),
            onBlur: () => ec(!1),
            onClick: eU,
            style: eq,
            id: "shop-item-".concat(t.skuId),
            children: [ey && (0, l.jsx)(p.Button, {
              className: q.closeButton,
              "aria-label": Q.default.Messages.CLOSE,
              look: p.Button.Looks.BLANK,
              size: p.Button.Sizes.NONE,
              onClick: eZ,
              children: (0, l.jsx)(P.default, {
                width: 16,
                height: 16,
                color: eI ? v.default.WHITE : v.default.BLACK
              })
            }), eD && !ey && (0, l.jsx)("div", {
              className: q.checkmarkWrapper,
              children: (0, l.jsx)(j.default, {
                width: 38,
                height: 38,
                className: q.checkmark
              })
            }), eY(), eX(), (0, l.jsx)(V.default, {
              category: a,
              className: q.limitedTimeBadge,
              display: "card"
            }), eN && !ey && (0, l.jsx)(F.TextBadge, {
              text: Q.default.Messages.NEW,
              disableColor: !0,
              className: q.newBadge
            })]
          })]
        })
      })
    })]
  })
}