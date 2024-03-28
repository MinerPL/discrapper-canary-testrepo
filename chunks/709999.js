"use strict";
a.r(t), a("47120"), a("627341");
var s = a("735250"),
  l = a("470079"),
  r = a("803997"),
  n = a.n(r),
  o = a("278074"),
  i = a("979554"),
  u = a("399606"),
  c = a("692547"),
  d = a("663002"),
  f = a("481060"),
  m = a("37234"),
  C = a("727637"),
  p = a("100527"),
  g = a("906732"),
  h = a("1585"),
  E = a("125988"),
  b = a("333867"),
  S = a("197115"),
  x = a("300284"),
  T = a("876917"),
  v = a("642619"),
  L = a("210887"),
  I = a("594174"),
  _ = a("725808"),
  N = a("794358"),
  y = a("466111"),
  O = a("26290"),
  k = a("998502"),
  A = a("335131"),
  P = a("946134"),
  R = a("1870"),
  j = a("884697"),
  F = a("664018"),
  D = a("624377"),
  B = a("813083"),
  M = a("680942"),
  w = a("558060"),
  H = a("237031"),
  U = a("832149"),
  W = a("474936"),
  G = a("689938"),
  V = a("873222");
let z = k.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  Y = f.AvatarSizes.SIZE_152,
  K = (0, h.getDecorationSizeForAvatarSize)(Y),
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
      className: n()(V.previewButton, t),
      innerClassName: V.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
      ...a,
      children: (0, s.jsx)(N.default, {
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
    isPremiumUser: N = !1,
    isGiftEasterEggEnabled: k
  } = e, {
    analyticsLocations: q
  } = (0, g.default)(p.default.COLLECTIBLES_SHOP_CARD), $ = l.useRef(null), J = (0, C.default)($), [Q, ee] = l.useState(!1), et = J || Q, ea = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [es] = t.items, {
    avatarDecorationSrc: el,
    eventHandlers: er,
    avatarPlaceholderSrc: en
  } = (0, E.default)({
    user: ea,
    avatarDecorationOverride: (null == es ? void 0 : es.type) === i.CollectiblesItemType.AVATAR_DECORATION ? es : void 0,
    size: K,
    animateOnHover: !et
  }), {
    backgroundColors: eo
  } = (0, D.default)(t.styles), ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, N, !1), eu = (0, j.isPremiumCollectiblesProduct)(t), ec = (0, j.isFreeCollectiblesProduct)(t), [ed, ef, em] = (0, u.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), eC = (0, u.useStateFromStores)([L.default], () => (0, d.isThemeDark)(L.default.theme)), ep = (0, u.useStateFromStores)([P.default], () => P.default.getIsProductNew(es.skuId)), {
    hoverVariant: eg
  } = (0, F.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
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
    ex = eS(p.default.COLLECTIBLES_SHOP_CARD),
    eT = eS(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ev = () => (0, s.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, s.jsx)(S.default, {
        fullWidth: !0,
        className: V.__invalid_premiumSubscribeButton,
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
      isGiftEasterEggEnabled: k,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    e_ = () => {
      if (eu && !N && !ec) return ev();
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
    eN = eC ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, s.jsx)(f.FocusRing, {
    children: (0, s.jsxs)(f.Clickable, {
      innerRef: $,
      className: n()(V.shopCard, (0, o.match)(eg).with(F.ShopCardHoverAnimationVariant.CONTROL, () => V.shopCardDefaultAnimation).with(F.ShopCardHoverAnimationVariant.TRANSFORMATION, () => V.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => ee(!1),
      onClick: ex,
      style: null != eo ? {
        backgroundColor: eC ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: et ? eN : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eu && (0, s.jsx)(f.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, s.jsx)(O.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, s.jsx)(y.default, {
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
          className: n()(V.avatar, {
            [V.avatarPurchased]: null != ed
          }),
          size: Y,
          "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != ed ? (0, s.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, s.jsx)(_.default, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, s.jsxs)("div", {
        className: n()(V.cardText, {
          [V.cardTextBlur]: (null == es ? void 0 : es.type) === i.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, s.jsx)("div", {
          className: n()(V.cardBackground, eC ? V.darkCardBackground : V.lightCardBackground, (null == es ? void 0 : es.type) === i.CollectiblesItemType.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, s.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: t.name
        }), (0, s.jsx)(f.Text, {
          className: n()(V.description, V.innerMask),
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
            children: e_()
          })]
        })]
      }), (0, s.jsx)(B.default, {
        category: a,
        className: V.limitedTimeBadge,
        display: "card"
      }), ep && (0, s.jsx)(O.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}