"use strict";
a.r(t), a.d(t, {
  default: function() {
    return $
  }
}), a("222007"), a("794252");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("506838"),
  o = a("265586"),
  c = a("65597"),
  u = a("669491"),
  d = a("755854"),
  f = a("77078"),
  m = a("54239"),
  p = a("252744"),
  g = a("812204"),
  C = a("685665"),
  h = a("606292"),
  E = a("688318"),
  b = a("946964"),
  S = a("635956"),
  x = a("38766"),
  T = a("601095"),
  v = a("493390"),
  L = a("161778"),
  I = a("697218"),
  N = a("944441"),
  _ = a("462579"),
  k = a("216422"),
  y = a("956089"),
  O = a("50885"),
  A = a("21526"),
  P = a("846893"),
  R = a("775416"),
  j = a("491232"),
  F = a("98148"),
  B = a("990139"),
  D = a("677257"),
  M = a("342676"),
  w = a("450492"),
  H = a("920580"),
  U = a("54809"),
  W = a("264579"),
  G = a("646718"),
  V = a("782340"),
  z = a("600545");
let K = O.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  Y = f.AvatarSizes.SIZE_152,
  X = (0, h.getDecorationSizeForAvatarSize)(Y),
  Z = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  q = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: n(z.previewButton, t),
      innerClassName: z.previewButtonInner,
      "aria-label": V.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(_.default, {
        width: 24,
        height: 24
      })
    })
  };
var $ = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: _ = !1,
    isGiftEasterEggEnabled: O
  } = e, {
    analyticsLocations: $
  } = (0, C.default)(g.default.COLLECTIBLES_SHOP_CARD), J = s.useRef(null), Q = (0, p.default)(J), [ee, et] = s.useState(!1), ea = Q || ee, el = (0, c.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [es] = t.items, {
    avatarDecorationSrc: er,
    eventHandlers: en,
    avatarPlaceholderSrc: ei
  } = (0, E.default)({
    user: el,
    avatarDecorationOverride: (null == es ? void 0 : es.type) === o.CollectiblesItemType.AVATAR_DECORATION ? es : void 0,
    size: X,
    animateOnHover: !ea
  }), {
    productCardDescriptionHidden: eo
  } = (0, F.default)({
    location: "CollectiblesShopTallCard"
  }), {
    backgroundColors: ec
  } = (0, D.default)(t.styles), eu = (0, j.getFormattedPriceForCollectiblesProduct)(t, _), ed = (0, j.isPremiumCollectiblesProduct)(t), ef = (0, j.isFreeCollectiblesProduct)(t), [em, ep, eg] = (0, c.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), eC = (0, c.useStateFromStores)([L.default], () => (0, d.isThemeDark)(L.default.theme)), eh = (0, c.useStateFromStores)([P.default], () => P.default.getIsProductNew(es.skuId)), {
    hoverVariant: eE
  } = (0, B.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = J;
    if (null == e) return;
    let t = () => et(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eb = (0, x.default)({
      analyticsLocations: $
    }),
    eS = s.useRef(null),
    ex = () => {
      if ((0, m.popLayer)(), eb(), (null == es ? void 0 : es.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: es,
          analyticsLocations: $
        });
        return
      }(null == es ? void 0 : es.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, v.openProfileEffectModal)({
        initialSelectedEffectId: es.id,
        analyticsLocations: $
      })
    },
    eT = e => l => {
      eS.current = l.currentTarget, (0, U.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: $,
        analyticsSource: e,
        returnRef: eS
      })
    },
    ev = eT(g.default.COLLECTIBLES_SHOP_CARD),
    eL = eT(g.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eI = () => (0, l.jsx)("div", {
      className: z.hoverUpsellContainer,
      children: (0, l.jsx)(S.default, {
        fullWidth: !0,
        className: z.premiumSubscribeButton,
        disabled: eg,
        onClick: e => e.stopPropagation(),
        buttonText: V.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(J)
  }, [r]);
  let eN = () => null != em ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: V.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : ed ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: V.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(H.default, {
      alwaysWhiteText: !1,
      product: t,
      className: z.priceTag,
      disableTooltipPointerEvents: !0
    }),
    e_ = () => ed ? null : ef ? (0, l.jsx)(q, {
      onClick: eL
    }) : (0, l.jsx)(w.default, {
      product: t,
      returnRef: J,
      isGiftEasterEggEnabled: O,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    ek = () => {
      if (ed && !_ && !ef) return eI();
      let e = ed ? {
        submitting: ep,
        submittingStartedLabel: V.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: V.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, W.default)({
            product: t,
            analyticsLocations: $
          })
        }
      } : {
        onClick: () => (0, b.default)({
          skuId: t.skuId,
          analyticsLocations: $,
          returnRef: J
        })
      };
      return (0, l.jsxs)("div", {
        className: z.buttonsContainer,
        children: [null == em ? (0, l.jsx)(Z, {
          disabled: eg,
          className: z.purchaseButton,
          ...e,
          children: ed ? V.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: eu
          })
        }) : (0, l.jsx)(Z, {
          disabled: eg,
          onClick: ex,
          children: V.default.Messages.COLLECTIBLES_USE_NOW
        }), e_()]
      })
    },
    ey = eC ? "0 0 15px 1px ".concat(u.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(f.FocusRing, {
    children: (0, l.jsxs)(f.Clickable, {
      innerRef: J,
      className: n(z.shopCard, (0, i.match)(eE).with(B.ShopCardHoverAnimationVariant.CONTROL, () => z.shopCardDefaultAnimation).with(B.ShopCardHoverAnimationVariant.TRANSFORMATION, () => z.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => et(!1),
      onClick: ev,
      style: null != ec ? {
        backgroundColor: eC ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ea ? ey : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [ed && (0, l.jsx)(f.Tooltip, {
        tooltipContentClassName: z.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: V.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(y.TextBadge, {
          ...e,
          className: z.premiumWheelBadge,
          text: (0, l.jsx)(k.default, {
            className: z.premiumWheel
          })
        })
      }), (null == es ? void 0 : es.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: z.profileEffectShopPreview,
        children: (0, l.jsx)(T.default, {
          isHovering: ea,
          profileEffectId: es.id,
          isPurchased: null != em,
          removeSetHeight: !0
        })
      }), (null == es ? void 0 : es.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: z.avatarContainer,
        children: (0, l.jsx)(K, {
          ...en,
          avatarDecoration: er,
          src: ei,
          className: n(z.avatar, {
            [z.avatarPurchased]: null != em
          }),
          size: Y,
          "aria-label": V.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != em ? (0, l.jsx)("div", {
        className: z.checkmarkWrapper,
        children: (0, l.jsx)(N.default, {
          width: 38,
          height: 38,
          className: z.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(z.cardText, {
          [z.cardTextBlur]: (null == es ? void 0 : es.type) === o.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n(z.cardBackground, eC ? z.darkCardBackground : z.lightCardBackground, (null == es ? void 0 : es.type) === o.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }), (0, l.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: z.productName,
          children: t.name
        }), !eo && (0, l.jsx)(f.Text, {
          className: n(z.description, z.innerMask),
          variant: "text-md/normal",
          lineClamp: 3,
          children: t.summary
        }), (0, l.jsxs)("div", {
          className: z.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: z.innerBlur,
            children: eN()
          }), (0, l.jsx)("div", {
            className: z.innerHover,
            children: ek()
          })]
        })]
      }), (0, l.jsx)(M.default, {
        category: a,
        className: z.limitedTimeBadge,
        display: "card"
      }), eh && (0, l.jsx)(y.TextBadge, {
        text: V.default.Messages.NEW,
        disableColor: !0,
        className: z.newBadge
      })]
    })
  })
}