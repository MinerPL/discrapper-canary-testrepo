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
  x = a("100527"),
  S = a("906732"),
  b = a("1585"),
  T = a("125988"),
  L = a("377171"),
  v = a("74179"),
  I = a("107091"),
  N = a("197115"),
  _ = a("300284"),
  y = a("876917"),
  O = a("642619"),
  k = a("210887"),
  A = a("594174"),
  R = a("725808"),
  j = a("465670"),
  P = a("794358"),
  B = a("466111"),
  D = a("26290"),
  F = a("998502"),
  M = a("335131"),
  w = a("1870"),
  H = a("884697"),
  U = a("664018"),
  W = a("624377"),
  G = a("813083"),
  V = a("680942"),
  z = a("558060"),
  K = a("237031"),
  Y = a("832149"),
  X = a("474936"),
  Z = a("689938"),
  Q = a("10805"),
  q = a("42615");
let $ = F.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  J = p.AvatarSizes.SIZE_152,
  ee = p.AvatarSizes.SIZE_120,
  et = (0, b.getDecorationSizeForAvatarSize)(J),
  ea = e => {
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
  el = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      color: p.ButtonColors.BRAND,
      look: p.Button.Looks.FILLED,
      size: p.ButtonSizes.ICON,
      className: n()(Q.previewButton, t),
      innerClassName: Q.previewButtonInner,
      "aria-label": Z.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(P.default, {
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
    isGiftEasterEggEnabled: P
  } = e, {
    analyticsLocations: F
  } = (0, S.default)(x.default.COLLECTIBLES_SHOP_CARD), es = s.useRef(null), er = (0, g.default)(es), {
    defaultPaymentSource: en
  } = (0, v.default)({
    isGift: !1,
    activeSubscription: null
  }), [ei, eo] = s.useState(!1), eu = er || ei, ec = (0, f.useStateFromStores)([A.default], () => A.default.getCurrentUser()), [ed] = t.items, {
    avatarDecorationSrc: ef,
    eventHandlers: em,
    avatarPlaceholderSrc: eC
  } = (0, T.default)({
    user: ec,
    avatarDecorationOverride: (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.AVATAR_DECORATION ? ed : void 0,
    size: et,
    animateOnHover: !eu
  }), {
    backgroundColors: ep,
    buttonColors: eh
  } = (0, W.default)(t.styles), eE = (0, H.getFormattedPriceForCollectiblesProduct)(t, o, !1), eg = (0, H.isPremiumCollectiblesProduct)(t), ex = (0, H.isFreeCollectiblesProduct)(t), [eS, eb, eT] = (0, f.useStateFromStoresArray)([w.default], () => [w.default.getPurchase(t.skuId), w.default.isClaiming === t.skuId, null != w.default.isClaiming && w.default.isClaiming !== t.skuId]), eL = (0, f.useStateFromStores)([k.default], () => (0, C.isThemeDark)(k.default.theme)), ev = (0, H.isProductNew)(t.skuId), {
    hoverVariant: eI
  } = (0, U.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard"), [eN, e_] = s.useState(!1), ey = s.useRef(null), eO = s.useRef(new i.Environment), [ek, eA] = s.useState(!1), [eR, ej] = s.useState(null), eP = null != eS || ek;
  s.useEffect(() => {
    let {
      current: e
    } = es;
    if (null == e) return;
    let t = () => eo(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eB = (0, _.default)({
      analyticsLocations: F
    }),
    eD = s.useRef(null),
    eF = () => {
      if ((0, E.popLayer)(), eB(), (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
        (0, b.openAvatarDecorationModal)({
          initialSelectedDecoration: ed,
          analyticsLocations: F
        });
        return
      }(null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, O.openProfileEffectModal)({
        initialSelectedEffectId: ed.id,
        analyticsLocations: F
      })
    },
    eM = e => {
      if (!eN) return l => {
        eD.current = l.currentTarget, (0, K.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: a,
          analyticsLocations: F,
          analyticsSource: e,
          returnRef: eD
        })
      }
    },
    ew = eM(x.default.COLLECTIBLES_SHOP_CARD),
    eH = eM(x.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eU = () => (0, l.jsx)("div", {
      className: Q.hoverUpsellContainer,
      children: (0, l.jsx)(N.default, {
        fullWidth: !0,
        className: Q.__invalid_premiumSubscribeButton,
        disabled: eT,
        onClick: e => e.stopPropagation(),
        buttonText: Z.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: X.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(es)
  }, [r]);
  let eW = () => eP ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Q.priceTag,
      children: Z.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eg ? (0, l.jsx)(p.Text, {
      variant: "text-md/semibold",
      className: Q.priceTag,
      children: Z.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(z.default, {
      alwaysWhiteText: !1,
      product: t,
      className: Q.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eG = () => eg ? null : ex ? (0, l.jsx)(el, {
      onClick: eH
    }) : (0, l.jsx)(V.default, {
      product: t,
      returnRef: es,
      isGiftEasterEggEnabled: P,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eV = () => {
      if (eg && !o && !ex) return eU();
      let e = eg ? {
        submitting: eb,
        submittingStartedLabel: Z.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: Z.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, M.claimPremiumCollectiblesProduct)(t.skuId), (0, Y.default)({
            product: t,
            analyticsLocations: F
          })
        }
      } : {
        onClick: () => {
          ej(null), e_(!0), h.default.dispatch({
            type: "LIGHTNING_CHECKOUT_OPEN"
          })
        }
      };
      return (0, l.jsxs)("div", {
        className: Q.buttonsContainer,
        children: [eP ? (0, l.jsx)(ea, {
          disabled: eT,
          onClick: eF,
          children: Z.default.Messages.COLLECTIBLES_USE_NOW
        }) : (0, l.jsx)(ea, {
          disabled: eT,
          className: Q.purchaseButton,
          ...e,
          children: eg ? Z.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : Z.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eE
          })
        }), eG()]
      })
    },
    ez = () => eN && null !== eR ? (0, l.jsx)("div", {
      className: Q.avatarContainer,
      children: (0, l.jsx)("img", {
        src: q,
        alt: "error",
        className: Q.errorImg
      })
    }) : (0, l.jsxs)(l.Fragment, {
      children: [eg && (0, l.jsx)(p.Tooltip, {
        tooltipContentClassName: Q.premiumWheelTooltipContent,
        color: p.Tooltip.Colors.PRIMARY,
        text: Z.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(D.TextBadge, {
          ...e,
          className: Q.premiumWheelBadge,
          text: (0, l.jsx)(B.default, {
            className: Q.premiumWheel
          })
        })
      }), (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: Q.profileEffectShopPreview,
        children: (0, l.jsx)(y.default, {
          isHovering: eu,
          profileEffectId: ed.id,
          isPurchased: eP,
          removeSetHeight: !0
        })
      }), (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: Q.avatarContainer,
        children: (0, l.jsx)($, {
          ...em,
          avatarDecoration: ef,
          src: eC,
          className: n()(Q.avatar, {
            [Q.avatarPurchased]: eP && !eN
          }),
          size: eN ? ee : J,
          "aria-label": Z.default.Messages.USER_SETTINGS_AVATAR
        })
      })]
    }),
    eK = () => {
      e_(!1), h.default.dispatch({
        type: "LIGHTNING_CHECKOUT_CLOSE"
      })
    },
    eY = eL ? "0 0 15px 1px ".concat(m.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)",
    eX = null != eh && eN ? {
      boxShadow: "0px 4px 50px 0px " + eh.primary.toHexString()
    } : {};
  return (0, l.jsxs)(l.Fragment, {
    children: [eN && (0, l.jsx)("div", {
      className: Q.backdrop,
      onClick: () => e_(!1)
    }), (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsxs)("div", {
        className: n()(Q.overflowContainer, {
          [Q.lightningCheckout]: eN
        }),
        style: eX,
        children: [(0, l.jsx)(i.ConfettiCanvas, {
          ref: ey,
          className: Q.confettiCanvas,
          environment: eO.current
        }), (0, l.jsxs)(p.Clickable, {
          innerRef: es,
          className: n()(Q.shopCard, (0, c.match)(eI).with(U.ShopCardHoverAnimationVariant.CONTROL, () => Q.shopCardDefaultAnimation).with(U.ShopCardHoverAnimationVariant.TRANSFORMATION, () => Q.shopCardTransformationAnimation).otherwise(() => void 0)),
          onBlur: () => eo(!1),
          onClick: ew,
          style: null != ep ? {
            backgroundColor: eL ? "var(--background-floating)" : "var(--background-secondary)",
            borderColor: "var(--chat-border)",
            boxShadow: eu ? eY : "none"
          } : void 0,
          id: "shop-item-".concat(t.skuId),
          children: [eN && (0, l.jsx)(p.Button, {
            className: Q.closeButton,
            "aria-label": Z.default.Messages.CLOSE,
            look: p.Button.Looks.BLANK,
            size: p.Button.Sizes.NONE,
            onClick: eK,
            children: (0, l.jsx)(j.default, {
              width: 16,
              height: 16,
              color: eL ? L.default.WHITE : L.default.BLACK
            })
          }), eP && !eN && (0, l.jsx)("div", {
            className: Q.checkmarkWrapper,
            children: (0, l.jsx)(R.default, {
              width: 38,
              height: 38,
              className: Q.checkmark
            })
          }), ez(), (u()(null != en, "default payment source must be set"), (0, l.jsxs)("div", {
            className: n()(Q.cardText, {
              [Q.cardTextBlur]: (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT
            }),
            children: [(0, l.jsx)("div", {
              className: n()(Q.cardBackground, eL ? Q.darkCardBackground : Q.lightCardBackground, (null == ed ? void 0 : ed.type) === d.CollectiblesItemType.PROFILE_EFFECT ? Q.cardLowOpacity : null)
            }), eN ? (0, l.jsx)(I.default, {
              product: t,
              paymentSource: en,
              itemPreview: ez(),
              onPurchaseComplete: () => {
                eA(!0)
              },
              onUse: eK,
              onError: e => {
                ej(e)
              },
              onReviewPurchase: eK,
              confettiCanvas: ey.current
            }) : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(p.Text, {
                variant: "text-lg/bold",
                className: Q.productName,
                children: t.name
              }), (0, l.jsxs)("div", {
                className: Q.detailsWrapper,
                children: [(0, l.jsx)("div", {
                  className: Q.innerBlur,
                  children: eW()
                }), (0, l.jsx)("div", {
                  className: Q.innerHover,
                  children: eV()
                })]
              })]
            })]
          })), (0, l.jsx)(G.default, {
            category: a,
            className: Q.limitedTimeBadge,
            display: "card"
          }), ev && !eN && (0, l.jsx)(D.TextBadge, {
            text: Z.default.Messages.NEW,
            disableColor: !0,
            className: Q.newBadge
          })]
        })]
      })
    })]
  })
}