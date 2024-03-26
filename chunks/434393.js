"use strict";
a.r(t), a.d(t, {
  default: function() {
    return z
  }
}), a("222007");
var l = a("37983"),
  r = a("884691"),
  s = a("414456"),
  n = a.n(s),
  o = a("265586"),
  i = a("65597"),
  u = a("77078"),
  c = a("54239"),
  d = a("252744"),
  f = a("812204"),
  m = a("685665"),
  C = a("606292"),
  p = a("688318"),
  g = a("946964"),
  h = a("635956"),
  E = a("38766"),
  b = a("601095"),
  S = a("493390"),
  T = a("697218"),
  v = a("944441"),
  L = a("462579"),
  x = a("216422"),
  I = a("956089"),
  _ = a("50885"),
  N = a("21526"),
  y = a("775416"),
  O = a("491232"),
  k = a("677257"),
  A = a("342676"),
  P = a("450492"),
  R = a("920580"),
  F = a("54809"),
  j = a("408381"),
  D = a("264579"),
  B = a("646718"),
  M = a("782340"),
  w = a("682123");
let H = _.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
  U = u.AvatarSizes.SIZE_120,
  W = (0, C.getDecorationSizeForAvatarSize)(U),
  G = e => {
    let {
      children: t,
      onClick: a,
      ...r
    } = e;
    return (0, l.jsx)(u.Button, {
      fullWidth: !0,
      look: u.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...r,
      children: t
    })
  },
  V = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(u.Button, {
      color: u.ButtonColors.CUSTOM,
      look: u.Button.Looks.FILLED,
      size: u.ButtonSizes.ICON,
      className: n(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": M.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(L.default, {
        width: 24,
        height: 24
      })
    })
  };
var z = function(e) {
  let {
    product: t,
    category: a,
    onMount: s,
    isPremiumUser: L = !1,
    isGiftEasterEggEnabled: _
  } = e, {
    analyticsLocations: z
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), K = r.useRef(null), Y = (0, d.default)(K), [X, Z] = r.useState(!1), q = Y || X, $ = (0, i.useStateFromStores)([T.default], () => T.default.getCurrentUser()), [J] = t.items, {
    avatarDecorationSrc: Q,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, p.default)({
    user: $,
    avatarDecorationOverride: (null == J ? void 0 : J.type) === o.CollectiblesItemType.AVATAR_DECORATION ? J : void 0,
    size: W,
    animateOnHover: !q
  }), {
    buttonColors: ea,
    backgroundColors: el
  } = (0, k.default)(t.styles), er = (0, O.getFormattedPriceForCollectiblesProduct)(t, L), es = (0, O.isPremiumCollectiblesProduct)(t), en = (0, O.isFreeCollectiblesProduct)(t), [eo, ei, eu] = (0, i.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), ec = r.useRef(null);
  r.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => Z(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ed = (0, E.default)({
      analyticsLocations: z
    }),
    ef = () => {
      if ((0, c.popLayer)(), ed(), (null == J ? void 0 : J.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
        (0, C.openAvatarDecorationModal)({
          initialSelectedDecoration: J,
          analyticsLocations: z
        });
        return
      }(null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
        initialSelectedEffectId: J.id,
        analyticsLocations: z
      })
    },
    em = e => l => {
      ec.current = l.currentTarget, (0, F.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: z,
        analyticsSource: e,
        returnRef: ec
      })
    },
    eC = em(f.default.COLLECTIBLES_SHOP_CARD),
    ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eg = () => (0, l.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, l.jsx)(h.default, {
        fullWidth: !0,
        className: w.premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: B.PremiumSubscriptionSKUs.TIER_2
      })
    });
  r.useEffect(() => {
    null == s || s(K)
  }, [s]);
  let eh = () => null != eo ? (0, l.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : es ? (0, l.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(R.default, {
      product: t,
      className: w.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eE = () => es ? null : en ? (0, l.jsx)(V, {
      style: null != ea ? {
        background: ea.secondary.toHslString(),
        color: ea.text.toHslString()
      } : void 0,
      className: w.defaultPreviewButtonColor,
      onClick: ep
    }) : (0, l.jsx)(P.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: _,
      tooltipDelay: 250
    }),
    eb = () => {
      if (es && !L && !en) return eg();
      let e = null != ea ? {
          background: (0, j.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = es ? {
          submitting: ei,
          submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, N.claimPremiumCollectiblesProduct)(t.skuId), (0, D.default)({
              product: t,
              analyticsLocations: z
            })
          }
        } : {
          onClick: () => (0, g.default)({
            skuId: t.skuId,
            analyticsLocations: z,
            returnRef: K
          })
        };
      return (0, l.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == eo ? (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          className: w.purchaseButton,
          ...a,
          children: es ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: er
          })
        }) : (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          onClick: ef,
          children: M.default.Messages.COLLECTIBLES_USE_NOW
        }), eE()]
      })
    },
    eS = null != el ? {
      background: "".concat((0, j.getBackgroundGradient)(el), " border-box border-box"),
      borderColor: el.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
    } : void 0;
  return (0, l.jsx)(u.FocusRing, {
    children: (0, l.jsxs)(u.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: eC,
      style: eS,
      id: "shop-item-".concat(t.skuId),
      children: [es && (0, l.jsx)(u.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: u.Tooltip.Colors.PRIMARY,
        text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(I.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, l.jsx)(x.default, {
            className: w.premiumWheel
          })
        })
      }), (null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, l.jsx)(b.default, {
          isHovering: q,
          profileEffectId: J.id,
          isPurchased: null != eo
        })
      }), (null == J ? void 0 : J.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(H, {
        ...ee,
        avatarDecoration: Q,
        src: et,
        className: n(w.avatar, {
          [w.avatarPurchased]: null != eo
        }),
        size: U,
        "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
      }), null != eo ? (0, l.jsx)("div", {
        className: (null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, l.jsx)(v.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(w.cardText, {
          [w.cardTextProfileEffect]: (null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)(u.Text, {
          color: "always-white",
          variant: "text-lg/bold",
          className: w.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, l.jsxs)("div", {
            className: w.innerBlur,
            children: [(0, l.jsx)(u.Text, {
              color: "always-white",
              className: w.description,
              variant: "text-md/normal",
              children: t.summary
            }), eh()]
          }), (0, l.jsx)("div", {
            className: w.innerHover,
            children: eb()
          })]
        })]
      }), (0, l.jsx)(A.default, {
        category: a,
        className: w.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}