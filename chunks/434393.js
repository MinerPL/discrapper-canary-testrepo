"use strict";
a.r(t), a.d(t, {
  default: function() {
    return K
  }
}), a("222007");
var r = a("37983"),
  s = a("884691"),
  l = a("414456"),
  n = a.n(l),
  i = a("265586"),
  o = a("65597"),
  c = a("77078"),
  u = a("54239"),
  d = a("252744"),
  f = a("812204"),
  m = a("685665"),
  p = a("606292"),
  g = a("688318"),
  C = a("946964"),
  h = a("635956"),
  E = a("38766"),
  b = a("601095"),
  S = a("493390"),
  x = a("697218"),
  T = a("944441"),
  v = a("462579"),
  L = a("216422"),
  I = a("956089"),
  N = a("50885"),
  _ = a("21526"),
  k = a("775416"),
  O = a("491232"),
  y = a("98148"),
  A = a("677257"),
  P = a("342676"),
  R = a("450492"),
  j = a("920580"),
  B = a("54809"),
  F = a("408381"),
  D = a("264579"),
  M = a("646718"),
  w = a("782340"),
  H = a("682123");
let U = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
  W = c.AvatarSizes.SIZE_120,
  G = (0, p.getDecorationSizeForAvatarSize)(W),
  V = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, r.jsx)(c.Button, {
      fullWidth: !0,
      look: c.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, r.jsx)(c.Button, {
      color: c.ButtonColors.CUSTOM,
      look: c.Button.Looks.FILLED,
      size: c.ButtonSizes.ICON,
      className: n(H.previewButton, t),
      innerClassName: H.previewButtonInner,
      "aria-label": w.default.Messages.PREVIEW,
      ...a,
      children: (0, r.jsx)(v.default, {
        width: 24,
        height: 24
      })
    })
  };
var K = function(e) {
  let {
    product: t,
    category: a,
    onMount: l,
    isPremiumUser: v = !1,
    isGiftEasterEggEnabled: N
  } = e, {
    analyticsLocations: K
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), Y = s.useRef(null), X = (0, d.default)(Y), [Z, q] = s.useState(!1), $ = X || Z, J = (0, o.useStateFromStores)([x.default], () => x.default.getCurrentUser()), [Q] = t.items, {
    avatarDecorationSrc: ee,
    eventHandlers: et,
    avatarPlaceholderSrc: ea
  } = (0, g.default)({
    user: J,
    avatarDecorationOverride: (null == Q ? void 0 : Q.type) === i.CollectiblesItemType.AVATAR_DECORATION ? Q : void 0,
    size: G,
    animateOnHover: !$
  }), {
    productCardDescriptionHidden: er
  } = (0, y.default)({
    location: "CollectiblesShopCard"
  }), {
    buttonColors: es,
    backgroundColors: el
  } = (0, A.default)(t.styles), en = (0, O.getFormattedPriceForCollectiblesProduct)(t, v), ei = (0, O.isPremiumCollectiblesProduct)(t), eo = (0, O.isFreeCollectiblesProduct)(t), [ec, eu, ed] = (0, o.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), ef = s.useRef(null);
  s.useEffect(() => {
    let {
      current: e
    } = Y;
    if (null == e) return;
    let t = () => q(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let em = (0, E.default)({
      analyticsLocations: K
    }),
    ep = () => {
      if ((0, u.popLayer)(), em(), (null == Q ? void 0 : Q.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, p.openAvatarDecorationModal)({
          initialSelectedDecoration: Q,
          analyticsLocations: K
        });
        return
      }(null == Q ? void 0 : Q.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
        initialSelectedEffectId: Q.id,
        analyticsLocations: K
      })
    },
    eg = e => r => {
      ef.current = r.currentTarget, (0, B.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: K,
        analyticsSource: e,
        returnRef: ef
      })
    },
    eC = eg(f.default.COLLECTIBLES_SHOP_CARD),
    eh = eg(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eE = () => (0, r.jsx)("div", {
      className: H.hoverUpsellContainer,
      children: (0, r.jsx)(h.default, {
        fullWidth: !0,
        className: H.premiumSubscribeButton,
        disabled: ed,
        onClick: e => e.stopPropagation(),
        buttonText: w.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == l || l(Y)
  }, [l]);
  let eb = () => null != ec ? (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: H.priceTag,
      children: w.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : ei ? (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: H.priceTag,
      children: w.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, r.jsx)(j.default, {
      product: t,
      className: H.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eS = () => ei ? null : eo ? (0, r.jsx)(z, {
      style: null != es ? {
        background: es.secondary.toHslString(),
        color: es.text.toHslString()
      } : void 0,
      className: H.defaultPreviewButtonColor,
      onClick: eh
    }) : (0, r.jsx)(R.default, {
      product: t,
      returnRef: Y,
      isGiftEasterEggEnabled: N,
      tooltipDelay: 250
    }),
    ex = () => {
      if (ei && !v && !eo) return eE();
      let e = null != es ? {
          background: (0, F.getBackgroundGradient)(es, 90),
          color: es.text.toHslString()
        } : void 0,
        a = ei ? {
          submitting: eu,
          submittingStartedLabel: w.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: w.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, _.claimPremiumCollectiblesProduct)(t.skuId), (0, D.default)({
              product: t,
              analyticsLocations: K
            })
          }
        } : {
          onClick: () => (0, C.default)({
            skuId: t.skuId,
            analyticsLocations: K,
            returnRef: Y
          })
        };
      return (0, r.jsxs)("div", {
        className: H.buttonsContainer,
        children: [null == ec ? (0, r.jsx)(V, {
          style: e,
          disabled: ed,
          className: H.purchaseButton,
          ...a,
          children: ei ? w.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : w.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: en
          })
        }) : (0, r.jsx)(V, {
          style: e,
          disabled: ed,
          onClick: ep,
          children: w.default.Messages.COLLECTIBLES_USE_NOW
        }), eS()]
      })
    },
    eT = null != el ? {
      background: "".concat((0, F.getBackgroundGradient)(el), " border-box border-box"),
      borderColor: el.border.toHslString(),
      boxShadow: $ ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
    } : void 0;
  return (0, r.jsx)(c.FocusRing, {
    children: (0, r.jsxs)(c.Clickable, {
      innerRef: Y,
      className: H.shopCard,
      onBlur: () => q(!1),
      onClick: eC,
      style: eT,
      id: "shop-item-".concat(t.skuId),
      children: [ei && (0, r.jsx)(c.Tooltip, {
        tooltipContentClassName: H.premiumWheelTooltipContent,
        color: c.Tooltip.Colors.PRIMARY,
        text: w.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, r.jsx)(I.TextBadge, {
          ...e,
          className: H.premiumWheelBadge,
          text: (0, r.jsx)(L.default, {
            className: H.premiumWheel
          })
        })
      }), (null == Q ? void 0 : Q.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
        className: H.profileEffectShopPreview,
        children: (0, r.jsx)(b.default, {
          isHovering: $,
          profileEffectId: Q.id,
          isPurchased: null != ec
        })
      }), (null == Q ? void 0 : Q.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(U, {
        ...et,
        avatarDecoration: ee,
        src: ea,
        className: n(H.avatar, {
          [H.avatarPurchased]: null != ec
        }),
        size: W,
        "aria-label": w.default.Messages.USER_SETTINGS_AVATAR
      }), null != ec ? (0, r.jsx)("div", {
        className: (null == Q ? void 0 : Q.type) === i.CollectiblesItemType.PROFILE_EFFECT ? H.profileEffectCheckmarkWrapper : H.checkmarkWrapper,
        children: (0, r.jsx)(T.default, {
          width: 38,
          height: 38,
          className: H.checkmark
        })
      }) : null, (0, r.jsxs)("div", {
        className: n(H.cardText, {
          [H.cardTextProfileEffect]: (null == Q ? void 0 : Q.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, r.jsx)(c.Text, {
          color: "always-white",
          variant: "text-lg/bold",
          className: H.productName,
          children: t.name
        }), (0, r.jsxs)("div", {
          className: H.detailsWrapper,
          children: [(0, r.jsxs)("div", {
            className: H.innerBlur,
            children: [!er && (0, r.jsx)(c.Text, {
              color: "always-white",
              className: H.description,
              variant: "text-md/normal",
              children: t.summary
            }), eb()]
          }), (0, r.jsx)("div", {
            className: H.innerHover,
            children: ex()
          })]
        })]
      }), (0, r.jsx)(P.default, {
        category: a,
        className: H.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}