"use strict";
a.r(t), a.d(t, {
  default: function() {
    return q
  }
}), a("222007"), a("794252");
var s = a("37983"),
  l = a("884691"),
  r = a("414456"),
  n = a.n(r),
  o = a("506838"),
  i = a("265586"),
  u = a("65597"),
  c = a("669491"),
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
  O = a("956089"),
  y = a("50885"),
  A = a("21526"),
  P = a("846893"),
  R = a("775416"),
  j = a("491232"),
  B = a("990139"),
  F = a("677257"),
  D = a("342676"),
  M = a("450492"),
  w = a("920580"),
  H = a("54809"),
  U = a("264579"),
  W = a("646718"),
  G = a("782340"),
  V = a("600545");
let z = y.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  K = f.AvatarSizes.SIZE_152,
  Y = (0, h.getDecorationSizeForAvatarSize)(K),
  X = e => {
    let {
      children: t,
      onClick: a,
      ...l
    } = e;
    return (0, s.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...l,
      children: t
    })
  },
  Z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, s.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: n(V.previewButton, t),
      innerClassName: V.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
      ...a,
      children: (0, s.jsx)(_.default, {
        width: 24,
        height: 24
      })
    })
  };
var q = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: _ = !1,
    isGiftEasterEggEnabled: y
  } = e, {
    analyticsLocations: q
  } = (0, C.default)(g.default.COLLECTIBLES_SHOP_CARD), $ = l.useRef(null), J = (0, p.default)($), [Q, ee] = l.useState(!1), et = J || Q, ea = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [es] = t.items, {
    avatarDecorationSrc: el,
    eventHandlers: er,
    avatarPlaceholderSrc: en
  } = (0, E.default)({
    user: ea,
    avatarDecorationOverride: (null == es ? void 0 : es.type) === i.CollectiblesItemType.AVATAR_DECORATION ? es : void 0,
    size: Y,
    animateOnHover: !et
  }), {
    backgroundColors: eo
  } = (0, F.default)(t.styles), ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, _), eu = (0, j.isPremiumCollectiblesProduct)(t), ec = (0, j.isFreeCollectiblesProduct)(t), [ed, ef, em] = (0, u.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), ep = (0, u.useStateFromStores)([L.default], () => (0, d.isThemeDark)(L.default.theme)), eg = (0, u.useStateFromStores)([P.default], () => P.default.getIsProductNew(es.skuId)), {
    hoverVariant: eC
  } = (0, B.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  l.useEffect(() => {
    let {
      current: e
    } = $;
    if (null == e) return;
    let t = () => ee(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eh = (0, x.default)({
      analyticsLocations: q
    }),
    eE = l.useRef(null),
    eb = () => {
      if ((0, m.popLayer)(), eh(), (null == es ? void 0 : es.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: es,
          analyticsLocations: q
        });
        return
      }(null == es ? void 0 : es.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, v.openProfileEffectModal)({
        initialSelectedEffectId: es.id,
        analyticsLocations: q
      })
    },
    eS = e => s => {
      eE.current = s.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: q,
        analyticsSource: e,
        returnRef: eE
      })
    },
    ex = eS(g.default.COLLECTIBLES_SHOP_CARD),
    eT = eS(g.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ev = () => (0, s.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, s.jsx)(S.default, {
        fullWidth: !0,
        className: V.premiumSubscribeButton,
        disabled: em,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    });
  l.useEffect(() => {
    null == r || r($)
  }, [r]);
  let eL = () => null != ed ? (0, s.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eu ? (0, s.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, s.jsx)(w.default, {
      alwaysWhiteText: !1,
      product: t,
      className: V.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eI = () => eu ? null : ec ? (0, s.jsx)(Z, {
      onClick: eT
    }) : (0, s.jsx)(M.default, {
      product: t,
      returnRef: $,
      isGiftEasterEggEnabled: y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eN = () => {
      if (eu && !_ && !ec) return ev();
      let e = eu ? {
        submitting: ef,
        submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, U.default)({
            product: t,
            analyticsLocations: q
          })
        }
      } : {
        onClick: () => (0, b.default)({
          skuId: t.skuId,
          analyticsLocations: q,
          returnRef: $
        })
      };
      return (0, s.jsxs)("div", {
        className: V.buttonsContainer,
        children: [null == ed ? (0, s.jsx)(X, {
          disabled: em,
          className: V.purchaseButton,
          ...e,
          children: eu ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ei
          })
        }) : (0, s.jsx)(X, {
          disabled: em,
          onClick: eb,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eI()]
      })
    },
    e_ = ep ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, s.jsx)(f.FocusRing, {
    children: (0, s.jsxs)(f.Clickable, {
      innerRef: $,
      className: n(V.shopCard, (0, o.match)(eC).with(B.ShopCardHoverAnimationVariant.CONTROL, () => V.shopCardDefaultAnimation).with(B.ShopCardHoverAnimationVariant.TRANSFORMATION, () => V.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => ee(!1),
      onClick: ex,
      style: null != eo ? {
        backgroundColor: ep ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: et ? e_ : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eu && (0, s.jsx)(f.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, s.jsx)(O.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, s.jsx)(k.default, {
            className: V.premiumWheel
          })
        })
      }), (null == es ? void 0 : es.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)("div", {
        className: V.profileEffectShopPreview,
        children: (0, s.jsx)(T.default, {
          isHovering: et,
          profileEffectId: es.id,
          isPurchased: null != ed,
          removeSetHeight: !0
        })
      }), (null == es ? void 0 : es.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)("div", {
        className: V.avatarContainer,
        children: (0, s.jsx)(z, {
          ...er,
          avatarDecoration: el,
          src: en,
          className: n(V.avatar, {
            [V.avatarPurchased]: null != ed
          }),
          size: K,
          "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != ed ? (0, s.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, s.jsx)(N.default, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, s.jsxs)("div", {
        className: n(V.cardText, {
          [V.cardTextBlur]: (null == es ? void 0 : es.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, s.jsx)("div", {
          className: n(V.cardBackground, ep ? V.darkCardBackground : V.lightCardBackground, (null == es ? void 0 : es.type) === i.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, s.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, s.jsx)(f.Text, {
          className: n(V.description, V.innerMask),
          variant: "text-md/normal",
          lineClamp: 3,
          children: t.summary
        }), (0, s.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, s.jsx)("div", {
            className: V.innerBlur,
            children: eL()
          }), (0, s.jsx)("div", {
            className: V.innerHover,
            children: eN()
          })]
        })]
      }), (0, s.jsx)(D.default, {
        category: a,
        className: V.limitedTimeBadge,
        display: "card"
      }), eg && (0, s.jsx)(O.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}