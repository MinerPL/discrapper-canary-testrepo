"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("979554"),
  o = a("399606"),
  u = a("481060"),
  c = a("37234"),
  d = a("727637"),
  f = a("100527"),
  m = a("906732"),
  C = a("1585"),
  p = a("125988"),
  h = a("333867"),
  E = a("197115"),
  g = a("300284"),
  x = a("876917"),
  S = a("642619"),
  b = a("594174"),
  T = a("725808"),
  L = a("794358"),
  v = a("466111"),
  I = a("26290"),
  N = a("998502"),
  _ = a("335131"),
  y = a("1870"),
  O = a("884697"),
  k = a("624377"),
  A = a("813083"),
  R = a("680942"),
  j = a("558060"),
  P = a("237031"),
  B = a("372654"),
  D = a("832149"),
  F = a("474936"),
  M = a("689938"),
  w = a("61371");
let H = N.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
  U = u.AvatarSizes.SIZE_120,
  W = (0, C.getDecorationSizeForAvatarSize)(U),
  G = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(u.Button, {
      fullWidth: !0,
      look: u.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
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
      className: n()(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": M.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(L.default, {
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
    isPremiumUser: L = !1,
    isGiftEasterEggEnabled: N
  } = e, {
    analyticsLocations: z
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), K = s.useRef(null), Y = (0, d.default)(K), [X, Z] = s.useState(!1), Q = Y || X, q = (0, o.useStateFromStores)([b.default], () => b.default.getCurrentUser()), [$] = t.items, {
    avatarDecorationSrc: J,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, p.default)({
    user: q,
    avatarDecorationOverride: (null == $ ? void 0 : $.type) === i.CollectiblesItemType.AVATAR_DECORATION ? $ : void 0,
    size: W,
    animateOnHover: !Q
  }), {
    buttonColors: ea,
    backgroundColors: el
  } = (0, k.default)(t.styles), es = (0, O.getFormattedPriceForCollectiblesProduct)(t, L, !1), er = (0, O.isPremiumCollectiblesProduct)(t), en = (0, O.isFreeCollectiblesProduct)(t), [ei, eo, eu] = (0, o.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), ec = s.useRef(null);
  s.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => Z(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ed = (0, g.default)({
      analyticsLocations: z
    }),
    ef = () => {
      if ((0, c.popLayer)(), ed(), (null == $ ? void 0 : $.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
        (0, C.openAvatarDecorationModal)({
          initialSelectedDecoration: $,
          analyticsLocations: z
        });
        return
      }(null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
        initialSelectedEffectId: $.id,
        analyticsLocations: z
      })
    },
    em = e => l => {
      ec.current = l.currentTarget, (0, P.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: z,
        analyticsSource: e,
        returnRef: ec
      })
    },
    eC = em(f.default.COLLECTIBLES_SHOP_CARD),
    ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eh = () => (0, l.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, l.jsx)(E.default, {
        fullWidth: !0,
        className: w.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: F.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(K)
  }, [r]);
  let eE = () => null != ei ? (0, l.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : er ? (0, l.jsx)(u.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(j.default, {
      product: t,
      className: w.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eg = () => er ? null : en ? (0, l.jsx)(V, {
      style: null != ea ? {
        background: ea.secondary.toHslString(),
        color: ea.text.toHslString()
      } : void 0,
      className: w.defaultPreviewButtonColor,
      onClick: ep
    }) : (0, l.jsx)(R.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: N,
      tooltipDelay: 250
    }),
    ex = () => {
      if (er && !L && !en) return eh();
      let e = null != ea ? {
          background: (0, B.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = er ? {
          submitting: eo,
          submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, _.claimPremiumCollectiblesProduct)(t.skuId), (0, D.default)({
              product: t,
              analyticsLocations: z
            })
          }
        } : {
          onClick: () => (0, h.default)({
            skuId: t.skuId,
            analyticsLocations: z,
            returnRef: K
          })
        };
      return (0, l.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == ei ? (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          className: w.purchaseButton,
          ...a,
          children: er ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }) : (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          onClick: ef,
          children: M.default.Messages.COLLECTIBLES_USE_NOW
        }), eg()]
      })
    },
    eS = null != el ? {
      background: "".concat((0, B.getBackgroundGradient)(el), " border-box border-box"),
      borderColor: el.border.toHslString(),
      boxShadow: Q ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
    } : void 0;
  return (0, l.jsx)(u.FocusRing, {
    children: (0, l.jsxs)(u.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: eC,
      style: eS,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, l.jsx)(u.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: u.Tooltip.Colors.PRIMARY,
        text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(I.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, l.jsx)(v.default, {
            className: w.premiumWheel
          })
        })
      }), (null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, l.jsx)(x.default, {
          isHovering: Q,
          profileEffectId: $.id,
          isPurchased: null != ei
        })
      }), (null == $ ? void 0 : $.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(H, {
        ...ee,
        avatarDecoration: J,
        src: et,
        className: n()(w.avatar, {
          [w.avatarPurchased]: null != ei
        }),
        size: U,
        "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
      }), null != ei ? (0, l.jsx)("div", {
        className: (null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, l.jsx)(T.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(w.cardText, {
          [w.cardTextProfileEffect]: (null == $ ? void 0 : $.type) === i.CollectiblesItemType.PROFILE_EFFECT
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
            }), eE()]
          }), (0, l.jsx)("div", {
            className: w.innerHover,
            children: ex()
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