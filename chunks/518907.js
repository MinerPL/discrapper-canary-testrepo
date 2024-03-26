"use strict";
a.r(t), a.d(t, {
  default: function() {
    return q
  }
}), a("222007"), a("794252");
var l = a("37983"),
  r = a("884691"),
  s = a("414456"),
  n = a.n(s),
  o = a("506838"),
  i = a("265586"),
  u = a("65597"),
  c = a("669491"),
  d = a("755854"),
  f = a("77078"),
  m = a("54239"),
  C = a("252744"),
  p = a("812204"),
  g = a("685665"),
  h = a("606292"),
  E = a("688318"),
  b = a("946964"),
  S = a("635956"),
  T = a("38766"),
  v = a("601095"),
  L = a("493390"),
  x = a("161778"),
  I = a("697218"),
  _ = a("944441"),
  N = a("462579"),
  y = a("216422"),
  O = a("956089"),
  k = a("50885"),
  A = a("21526"),
  P = a("846893"),
  R = a("775416"),
  F = a("491232"),
  j = a("990139"),
  D = a("677257"),
  B = a("342676"),
  M = a("450492"),
  w = a("920580"),
  H = a("54809"),
  U = a("264579"),
  W = a("646718"),
  G = a("782340"),
  V = a("600545");
let z = k.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  K = f.AvatarSizes.SIZE_152,
  Y = (0, h.getDecorationSizeForAvatarSize)(K),
  X = e => {
    let {
      children: t,
      onClick: a,
      ...r
    } = e;
    return (0, l.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...r,
      children: t
    })
  },
  Z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: n(V.previewButton, t),
      innerClassName: V.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(N.default, {
        width: 24,
        height: 24
      })
    })
  };
var q = function(e) {
  let {
    product: t,
    category: a,
    onMount: s,
    isPremiumUser: N = !1,
    isGiftEasterEggEnabled: k
  } = e, {
    analyticsLocations: q
  } = (0, g.default)(p.default.COLLECTIBLES_SHOP_CARD), $ = r.useRef(null), J = (0, C.default)($), [Q, ee] = r.useState(!1), et = J || Q, ea = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [el] = t.items, {
    avatarDecorationSrc: er,
    eventHandlers: es,
    avatarPlaceholderSrc: en
  } = (0, E.default)({
    user: ea,
    avatarDecorationOverride: (null == el ? void 0 : el.type) === i.CollectiblesItemType.AVATAR_DECORATION ? el : void 0,
    size: Y,
    animateOnHover: !et
  }), {
    backgroundColors: eo
  } = (0, D.default)(t.styles), ei = (0, F.getFormattedPriceForCollectiblesProduct)(t, N), eu = (0, F.isPremiumCollectiblesProduct)(t), ec = (0, F.isFreeCollectiblesProduct)(t), [ed, ef, em] = (0, u.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), eC = (0, u.useStateFromStores)([x.default], () => (0, d.isThemeDark)(x.default.theme)), ep = (0, u.useStateFromStores)([P.default], () => P.default.getIsProductNew(el.skuId)), {
    hoverVariant: eg
  } = (0, j.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  r.useEffect(() => {
    let {
      current: e
    } = $;
    if (null == e) return;
    let t = () => ee(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eh = (0, T.default)({
      analyticsLocations: q
    }),
    eE = r.useRef(null),
    eb = () => {
      if ((0, m.popLayer)(), eh(), (null == el ? void 0 : el.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: el,
          analyticsLocations: q
        });
        return
      }(null == el ? void 0 : el.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: el.id,
        analyticsLocations: q
      })
    },
    eS = e => l => {
      eE.current = l.currentTarget, (0, H.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: q,
        analyticsSource: e,
        returnRef: eE
      })
    },
    eT = eS(p.default.COLLECTIBLES_SHOP_CARD),
    ev = eS(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eL = () => (0, l.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, l.jsx)(S.default, {
        fullWidth: !0,
        className: V.premiumSubscribeButton,
        disabled: em,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
      })
    });
  r.useEffect(() => {
    null == s || s($)
  }, [s]);
  let ex = () => null != ed ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eu ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(w.default, {
      alwaysWhiteText: !1,
      product: t,
      className: V.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eI = () => eu ? null : ec ? (0, l.jsx)(Z, {
      onClick: ev
    }) : (0, l.jsx)(M.default, {
      product: t,
      returnRef: $,
      isGiftEasterEggEnabled: k,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e_ = () => {
      if (eu && !N && !ec) return eL();
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
      return (0, l.jsxs)("div", {
        className: V.buttonsContainer,
        children: [null == ed ? (0, l.jsx)(X, {
          disabled: em,
          className: V.purchaseButton,
          ...e,
          children: eu ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ei
          })
        }) : (0, l.jsx)(X, {
          disabled: em,
          onClick: eb,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eI()]
      })
    },
    eN = eC ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(f.FocusRing, {
    children: (0, l.jsxs)(f.Clickable, {
      innerRef: $,
      className: n(V.shopCard, (0, o.match)(eg).with(j.ShopCardHoverAnimationVariant.CONTROL, () => V.shopCardDefaultAnimation).with(j.ShopCardHoverAnimationVariant.TRANSFORMATION, () => V.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => ee(!1),
      onClick: eT,
      style: null != eo ? {
        backgroundColor: eC ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: et ? eN : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eu && (0, l.jsx)(f.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(O.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, l.jsx)(y.default, {
            className: V.premiumWheel
          })
        })
      }), (null == el ? void 0 : el.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: V.profileEffectShopPreview,
        children: (0, l.jsx)(v.default, {
          isHovering: et,
          profileEffectId: el.id,
          isPurchased: null != ed,
          removeSetHeight: !0
        })
      }), (null == el ? void 0 : el.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: V.avatarContainer,
        children: (0, l.jsx)(z, {
          ...es,
          avatarDecoration: er,
          src: en,
          className: n(V.avatar, {
            [V.avatarPurchased]: null != ed
          }),
          size: K,
          "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != ed ? (0, l.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, l.jsx)(_.default, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(V.cardText, {
          [V.cardTextBlur]: (null == el ? void 0 : el.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n(V.cardBackground, eC ? V.darkCardBackground : V.lightCardBackground, (null == el ? void 0 : el.type) === i.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, l.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, l.jsx)(f.Text, {
          className: n(V.description, V.innerMask),
          variant: "text-md/normal",
          lineClamp: 3,
          children: t.summary
        }), (0, l.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: V.innerBlur,
            children: ex()
          }), (0, l.jsx)("div", {
            className: V.innerHover,
            children: e_()
          })]
        })]
      }), (0, l.jsx)(B.default, {
        category: a,
        className: V.limitedTimeBadge,
        display: "card"
      }), ep && (0, l.jsx)(O.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}