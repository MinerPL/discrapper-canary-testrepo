"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("512722"),
  o = a.n(i),
  u = a("278074"),
  c = a("979554"),
  d = a("399606"),
  f = a("692547"),
  C = a("663002"),
  m = a("481060"),
  p = a("37234"),
  E = a("727637"),
  h = a("100527"),
  g = a("906732"),
  x = a("1585"),
  v = a("333867"),
  b = a("197115"),
  T = a("300284"),
  L = a("876917"),
  S = a("642619"),
  I = a("210887"),
  N = a("594174"),
  _ = a("725808"),
  y = a("794358"),
  O = a("466111"),
  A = a("26290"),
  j = a("335131"),
  k = a("1870"),
  R = a("884697"),
  P = a("664018"),
  B = a("624377"),
  M = a("813083"),
  D = a("680942"),
  F = a("558060"),
  w = a("237031"),
  H = a("616066"),
  U = a("216541"),
  W = a("832149"),
  V = a("474936"),
  G = a("689938"),
  z = a("775087");
let K = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(m.Button, {
      fullWidth: !0,
      look: m.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  Y = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(m.Button, {
      color: m.ButtonColors.BRAND,
      look: m.Button.Looks.FILLED,
      size: m.ButtonSizes.ICON,
      className: n()(z.previewButton, t),
      innerClassName: z.previewButtonInner,
      "aria-label": G.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(y.default, {
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
    isPremiumUser: i = !1,
    isGiftEasterEggEnabled: y
  } = e, {
    analyticsLocations: Z
  } = (0, g.default)(h.default.COLLECTIBLES_SHOP_CARD), X = s.useRef(null), q = (0, E.default)(X), [Q, $] = s.useState(!1), J = q || Q, ee = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [et] = t.items, {
    backgroundColors: ea
  } = (0, B.default)(t.styles), el = (0, R.getFormattedPriceForCollectiblesProduct)(t, i, !1), es = (0, R.isPremiumCollectiblesProduct)(t), er = (0, R.isFreeCollectiblesProduct)(t), [en, ei, eo] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), eu = null != en, ec = (0, d.useStateFromStores)([I.default], () => (0, C.isThemeDark)(I.default.theme)), ed = (0, R.isProductNew)(t.skuId), {
    hoverVariant: ef
  } = (0, P.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = X;
    if (null == e) return;
    let t = () => $(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []), s.useEffect(() => {
    null == r || r(X)
  }, [r]);
  let eC = (0, T.default)({
      analyticsLocations: Z
    }),
    em = s.useRef(null),
    ep = () => {
      if ((0, p.popLayer)(), eC(), t.type === c.CollectiblesItemType.AVATAR_DECORATION && null != et) {
        o()(et.type === t.type, "product type is equivlant to first item's check for avatar deco"), (0, x.openAvatarDecorationModal)({
          initialSelectedDecoration: et,
          analyticsLocations: Z
        });
        return
      }
      t.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
        initialSelectedEffectId: et.id,
        analyticsLocations: Z
      })
    },
    eE = e => l => {
      em.current = l.currentTarget, (0, w.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: Z,
        analyticsSource: e,
        returnRef: em
      })
    },
    eh = eE(h.default.COLLECTIBLES_SHOP_CARD),
    eg = eE(h.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ex = () => (0, l.jsx)("div", {
      className: z.hoverUpsellContainer,
      children: (0, l.jsx)(b.default, {
        fullWidth: !0,
        className: z.__invalid_premiumSubscribeButton,
        disabled: eo,
        onClick: e => e.stopPropagation(),
        buttonText: G.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2
      })
    }),
    ev = () => eu ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : es ? (0, l.jsx)(m.Text, {
      variant: "text-md/semibold",
      className: z.priceTag,
      children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(F.default, {
      alwaysWhiteText: !1,
      product: t,
      className: z.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eb = () => es ? null : er ? (0, l.jsx)(Y, {
      onClick: eg
    }) : (0, l.jsx)(D.default, {
      product: t,
      returnRef: X,
      isGiftEasterEggEnabled: y,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eT = () => {
      if (es && !i && !er) return ex();
      let e = es ? {
        submitting: ei,
        submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, j.claimPremiumCollectiblesProduct)(t.skuId), (0, W.default)({
            product: t,
            analyticsLocations: Z
          })
        }
      } : {
        onClick: () => (0, v.default)({
          skuId: t.skuId,
          analyticsLocations: Z,
          returnRef: X
        })
      };
      return (0, l.jsxs)("div", {
        className: z.buttonsContainer,
        children: [null == en ? (0, l.jsx)(K, {
          disabled: eo,
          className: z.purchaseButton,
          ...e,
          children: es ? G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : G.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: el
          })
        }) : (0, l.jsx)(K, {
          disabled: eo,
          onClick: ep,
          children: G.default.Messages.COLLECTIBLES_USE_NOW
        }), eb()]
      })
    },
    eL = ec ? "0 0 15px 1px ".concat(f.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(m.FocusRing, {
    children: (0, l.jsxs)(m.Clickable, {
      innerRef: X,
      className: n()(z.shopCard, (0, u.match)(ef).with(P.ShopCardHoverAnimationVariant.CONTROL, () => z.shopCardDefaultAnimation).with(P.ShopCardHoverAnimationVariant.TRANSFORMATION, () => z.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => $(!1),
      onClick: eh,
      style: null != ea ? {
        backgroundColor: ec ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: J ? eL : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [es && (0, l.jsx)(m.Tooltip, {
        tooltipContentClassName: z.premiumWheelTooltipContent,
        color: m.Tooltip.Colors.PRIMARY,
        text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(A.TextBadge, {
          ...e,
          className: z.premiumWheelBadge,
          text: (0, l.jsx)(O.default, {
            className: z.premiumWheel
          })
        })
      }), (0, u.match)(t.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
        className: z.profileEffectShopPreview,
        children: (0, l.jsx)(L.default, {
          isHovering: J,
          profileEffectId: et.id,
          isPurchased: eu,
          removeSetHeight: !0
        })
      })).with(c.CollectiblesItemType.AVATAR_DECORATION, () => (o()(et.type === c.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, l.jsx)("div", {
        className: z.avatarContainer,
        children: (0, l.jsx)(H.AvatarDecorationPreview, {
          item: et,
          user: ee,
          isPurchased: eu,
          isHighlighted: J
        })
      }))).with(c.CollectiblesItemType.BUNDLE, () => (0, l.jsx)(U.BundlePreview, {
        product: t,
        user: ee,
        isPurchased: eu,
        isHighlighted: J
      })).otherwise(() => null), eu ? (0, l.jsx)("div", {
        className: z.checkmarkWrapper,
        children: (0, l.jsx)(_.default, {
          width: 38,
          height: 38,
          className: z.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(z.cardText, {
          [z.cardTextBlur]: (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(z.cardBackground, ec ? z.darkCardBackground : z.lightCardBackground, (null == et ? void 0 : et.type) === c.CollectiblesItemType.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }), (0, l.jsx)(m.Text, {
          variant: "text-lg/bold",
          className: z.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: z.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: z.innerBlur,
            children: ev()
          }), (0, l.jsx)("div", {
            className: z.innerHover,
            children: eT()
          })]
        })]
      }), (0, l.jsx)(M.default, {
        category: a,
        className: z.limitedTimeBadge,
        display: "card"
      }), ed && (0, l.jsx)(A.TextBadge, {
        text: G.default.Messages.NEW,
        disableColor: !0,
        className: z.newBadge
      })]
    })
  })
}