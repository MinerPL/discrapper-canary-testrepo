"use strict";
a.r(t), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("803997"),
  n = a.n(r),
  o = a("979554"),
  i = a("399606"),
  u = a("481060"),
  c = a("37234"),
  d = a("727637"),
  f = a("100527"),
  m = a("906732"),
  C = a("1585"),
  p = a("125988"),
  g = a("333867"),
  h = a("197115"),
  E = a("300284"),
  b = a("876917"),
  S = a("642619"),
  x = a("594174"),
  T = a("725808"),
  v = a("794358"),
  L = a("466111"),
  I = a("26290"),
  _ = a("998502"),
  N = a("335131"),
  y = a("1870"),
  O = a("884697"),
  k = a("624377"),
  A = a("813083"),
  P = a("680942"),
  R = a("558060"),
  j = a("237031"),
  F = a("372654"),
  D = a("832149"),
  B = a("474936"),
  M = a("689938"),
  w = a("321664");
let H = _.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar,
  U = u.AvatarSizes.SIZE_120,
  W = (0, C.getDecorationSizeForAvatarSize)(U),
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
      className: n()(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": M.default.Messages.PREVIEW,
      ...a,
      children: (0, s.jsx)(v.default, {
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
    isPremiumUser: v = !1,
    isGiftEasterEggEnabled: _
  } = e, {
    analyticsLocations: z
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), Y = l.useRef(null), K = (0, d.default)(Y), [X, Z] = l.useState(!1), q = K || X, $ = (0, i.useStateFromStores)([x.default], () => x.default.getCurrentUser()), [J] = t.items, {
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
    backgroundColors: es
  } = (0, k.default)(t.styles), el = (0, O.getFormattedPriceForCollectiblesProduct)(t, v, !1), er = (0, O.isPremiumCollectiblesProduct)(t), en = (0, O.isFreeCollectiblesProduct)(t), [eo, ei, eu] = (0, i.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), ec = l.useRef(null);
  l.useEffect(() => {
    let {
      current: e
    } = Y;
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
    em = e => s => {
      ec.current = s.currentTarget, (0, j.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: z,
        analyticsSource: e,
        returnRef: ec
      })
    },
    eC = em(f.default.COLLECTIBLES_SHOP_CARD),
    ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eg = () => (0, s.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, s.jsx)(h.default, {
        fullWidth: !0,
        className: w.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: B.PremiumSubscriptionSKUs.TIER_2
      })
    });
  l.useEffect(() => {
    null == r || r(Y)
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
      onClick: ep
    }) : (0, s.jsx)(P.default, {
      product: t,
      returnRef: Y,
      isGiftEasterEggEnabled: _,
      tooltipDelay: 250
    }),
    eb = () => {
      if (er && !v && !en) return eg();
      let e = null != ea ? {
          background: (0, F.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = er ? {
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
            returnRef: Y
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
      background: "".concat((0, F.getBackgroundGradient)(es), " border-box border-box"),
      borderColor: es.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(es.primary.toHslString()) : "none"
    } : void 0;
  return (0, s.jsx)(u.FocusRing, {
    children: (0, s.jsxs)(u.Clickable, {
      innerRef: Y,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: eC,
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
        className: n()(w.avatar, {
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
        className: n()(w.cardText, {
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