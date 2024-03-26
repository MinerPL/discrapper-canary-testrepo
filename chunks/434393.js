"use strict";
a.r(t), a.d(t, {
  default: function() {
    return z
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
  r = a("414456"),
  n = a.n(r),
  o = a("265586"),
  i = a("65597"),
  u = a("77078"),
  c = a("54239"),
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
  y = a("677257"),
  A = a("342676"),
  P = a("450492"),
  R = a("920580"),
  j = a("54809"),
  B = a("408381"),
  F = a("264579"),
  D = a("646718"),
  M = a("782340"),
  w = a("682123");
let H = N.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
  U = u.AvatarSizes.SIZE_120,
  W = (0, p.getDecorationSizeForAvatarSize)(U),
  G = e => {
    let {
      children: t,
      onClick: a,
      ...l
    } = e;
    return (0, s.jsx)(u.Button, {
      fullWidth: !0,
      look: u.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...l,
      children: t
    })
  },
  V = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, s.jsx)(u.Button, {
      color: u.ButtonColors.CUSTOM,
      look: u.Button.Looks.FILLED,
      size: u.ButtonSizes.ICON,
      className: n(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": M.default.Messages.PREVIEW,
      ...a,
      children: (0, s.jsx)(v.default, {
        width: 24,
        height: 24
      })
    })
  };
var z = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: v = !1,
    isGiftEasterEggEnabled: N
  } = e, {
    analyticsLocations: z
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), K = l.useRef(null), Y = (0, d.default)(K), [X, Z] = l.useState(!1), q = Y || X, $ = (0, i.useStateFromStores)([x.default], () => x.default.getCurrentUser()), [J] = t.items, {
    avatarDecorationSrc: Q,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, g.default)({
    user: $,
    avatarDecorationOverride: (null == J ? void 0 : J.type) === o.CollectiblesItemType.AVATAR_DECORATION ? J : void 0,
    size: W,
    animateOnHover: !q
  }), {
    buttonColors: ea,
    backgroundColors: es
  } = (0, y.default)(t.styles), el = (0, O.getFormattedPriceForCollectiblesProduct)(t, v), er = (0, O.isPremiumCollectiblesProduct)(t), en = (0, O.isFreeCollectiblesProduct)(t), [eo, ei, eu] = (0, i.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), ec = l.useRef(null);
  l.useEffect(() => {
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
        (0, p.openAvatarDecorationModal)({
          initialSelectedDecoration: J,
          analyticsLocations: z
        });
        return
      }(null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
        initialSelectedEffectId: J.id,
        analyticsLocations: z
      })
    },
    em = e => s => {
      ec.current = s.currentTarget, (0, j.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: z,
        analyticsSource: e,
        returnRef: ec
      })
    },
    ep = em(f.default.COLLECTIBLES_SHOP_CARD),
    eg = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eC = () => (0, s.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, s.jsx)(h.default, {
        fullWidth: !0,
        className: w.premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2
      })
    });
  l.useEffect(() => {
    null == r || r(K)
  }, [r]);
  let eh = () => null != eo ? (0, s.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : er ? (0, s.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, s.jsx)(R.default, {
      product: t,
      className: w.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eE = () => er ? null : en ? (0, s.jsx)(V, {
      style: null != ea ? {
        background: ea.secondary.toHslString(),
        color: ea.text.toHslString()
      } : void 0,
      className: w.defaultPreviewButtonColor,
      onClick: eg
    }) : (0, s.jsx)(P.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: N,
      tooltipDelay: 250
    }),
    eb = () => {
      if (er && !v && !en) return eC();
      let e = null != ea ? {
          background: (0, B.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = er ? {
          submitting: ei,
          submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, _.claimPremiumCollectiblesProduct)(t.skuId), (0, F.default)({
              product: t,
              analyticsLocations: z
            })
          }
        } : {
          onClick: () => (0, C.default)({
            skuId: t.skuId,
            analyticsLocations: z,
            returnRef: K
          })
        };
      return (0, s.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == eo ? (0, s.jsx)(G, {
          style: e,
          disabled: eu,
          className: w.purchaseButton,
          ...a,
          children: er ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: el
          })
        }) : (0, s.jsx)(G, {
          style: e,
          disabled: eu,
          onClick: ef,
          children: M.default.Messages.COLLECTIBLES_USE_NOW
        }), eE()]
      })
    },
    eS = null != es ? {
      background: "".concat((0, B.getBackgroundGradient)(es), " border-box border-box"),
      borderColor: es.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(es.primary.toHslString()) : "none"
    } : void 0;
  return (0, s.jsx)(u.FocusRing, {
    children: (0, s.jsxs)(u.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: ep,
      style: eS,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, s.jsx)(u.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: u.Tooltip.Colors.PRIMARY,
        text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, s.jsx)(I.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, s.jsx)(L.default, {
            className: w.premiumWheel
          })
        })
      }), (null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, s.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, s.jsx)(b.default, {
          isHovering: q,
          profileEffectId: J.id,
          isPurchased: null != eo
        })
      }), (null == J ? void 0 : J.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(H, {
        ...ee,
        avatarDecoration: Q,
        src: et,
        className: n(w.avatar, {
          [w.avatarPurchased]: null != eo
        }),
        size: U,
        "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
      }), null != eo ? (0, s.jsx)("div", {
        className: (null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, s.jsx)(T.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, s.jsxs)("div", {
        className: n(w.cardText, {
          [w.cardTextProfileEffect]: (null == J ? void 0 : J.type) === o.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, s.jsx)(u.Text, {
          color: "always-white",
          variant: "text-lg/bold",
          className: w.productName,
          children: t.name
        }), (0, s.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, s.jsxs)("div", {
            className: w.innerBlur,
            children: [(0, s.jsx)(u.Text, {
              color: "always-white",
              className: w.description,
              variant: "text-md/normal",
              children: t.summary
            }), eh()]
          }), (0, s.jsx)("div", {
            className: w.innerHover,
            children: eb()
          })]
        })]
      }), (0, s.jsx)(A.default, {
        category: a,
        className: w.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}