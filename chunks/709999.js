"use strict";
t(47120), t(627341);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(512722),
  o = t.n(r),
  c = t(278074),
  u = t(979554),
  d = t(399606),
  C = t(692547),
  E = t(663002),
  f = t(481060),
  m = t(37234),
  p = t(727637),
  g = t(100527),
  h = t(906732),
  x = t(1585),
  _ = t(333867),
  I = t(197115),
  T = t(300284),
  N = t(876917),
  S = t(642619),
  L = t(210887),
  b = t(725808),
  v = t(794358),
  O = t(466111),
  Z = t(74538),
  A = t(335131),
  R = t(1870),
  j = t(884697),
  P = t(724994),
  M = t(624377),
  k = t(390698),
  B = t(813083),
  y = t(680942),
  F = t(558060),
  D = t(237031),
  U = t(616066),
  H = t(216541),
  w = t(832149),
  G = t(474936),
  W = t(689938),
  V = t(775087);
let Y = e => {
    let {
      children: s,
      onClick: t,
      ...a
    } = e;
    return (0, n.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), t()
      },
      ...a,
      children: s
    })
  },
  z = e => {
    let {
      className: s,
      ...t
    } = e;
    return (0, n.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: l()(V.previewButton, s),
      innerClassName: V.previewButtonInner,
      "aria-label": W.Z.Messages.PREVIEW,
      ...t,
      children: (0, n.jsx)(v.Z, {
        width: 24,
        height: 24
      })
    })
  };
s.Z = function(e) {
  let {
    product: s,
    user: t,
    category: i,
    onMount: r,
    isGiftEasterEggEnabled: v
  } = e, {
    analyticsLocations: K
  } = (0, h.ZP)(g.Z.COLLECTIBLES_SHOP_CARD), X = a.useRef(null), q = (0, p.Z)(X), [Q, $] = a.useState(!1), J = q || Q, [ee] = s.items, {
    backgroundColors: es
  } = (0, M.Z)(s.styles), et = Z.ZP.canUseCollectibles(t), en = (0, j.XM)(s, et, !1), ea = a.useMemo(() => (0, j.BH)(s, et), [s, et]), ei = (0, j.G1)(s), el = (0, j.rN)(s), {
    isPurchased: er,
    isPartiallyPurchased: eo
  } = (0, P.L)(s), [ec, eu] = (0, d.Wu)([R.Z], () => [R.Z.isClaiming === s.skuId, null != R.Z.isClaiming && R.Z.isClaiming !== s.skuId]), ed = (0, d.e7)([L.Z], () => (0, E.w)(L.Z.theme)), eC = (0, j.Yq)(s.skuId);
  a.useEffect(() => {
    let {
      current: e
    } = X;
    if (null == e) return;
    let s = () => $(!0);
    return e.addEventListener("focusin", s), e.blur(), () => {
      e.removeEventListener("focusin", s)
    }
  }, []), a.useEffect(() => {
    null == r || r(X)
  }, [r]);
  let eE = (0, T.Z)({
      analyticsLocations: K
    }),
    ef = a.useRef(null),
    em = () => {
      if ((0, m.xf)(), eE(), s.type === u.Z.AVATAR_DECORATION && null != ee) {
        o()(ee.type === s.type, "product type is equivlant to first item's check for avatar deco"), (0, x.ps)({
          initialSelectedDecoration: ee,
          analyticsLocations: K
        });
        return
      }
      s.type === u.Z.PROFILE_EFFECT && (0, S.H)({
        initialSelectedEffectId: ee.id,
        analyticsLocations: K
      })
    },
    ep = e => t => {
      ef.current = t.currentTarget, (0, D.T)({
        product: s,
        category: i,
        analyticsLocations: K,
        analyticsSource: e,
        returnRef: ef
      })
    },
    eg = ep(g.Z.COLLECTIBLES_SHOP_CARD),
    eh = ep(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ex = () => (0, n.jsx)("div", {
      className: V.hoverUpsellContainer,
      children: (0, n.jsx)(I.Z, {
        fullWidth: !0,
        className: V.__invalid_premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: W.Z.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: G.Si.TIER_2
      })
    }),
    e_ = () => er || eo ? (0, n.jsx)(k.U, {
      className: V.priceTag,
      isPartiallyPurchased: eo
    }) : ei ? (0, n.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: V.priceTag,
      children: W.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, n.jsx)(F.Z, {
      product: s,
      discount: ea,
      isPremiumUser: et,
      className: V.priceTag
    }),
    eI = () => ei ? null : el ? (0, n.jsx)(z, {
      onClick: eh
    }) : (0, n.jsx)(y.Z, {
      product: s,
      returnRef: X,
      isGiftEasterEggEnabled: v,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eT = () => {
      if (ei && !et && !el) return ex();
      let e = ei ? {
        submitting: ec,
        submittingStartedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, A.fK)(s.skuId), (0, w.Z)({
            product: s,
            analyticsLocations: K
          })
        }
      } : {
        onClick: () => (0, _.Z)({
          skuId: s.skuId,
          analyticsLocations: K,
          returnRef: X
        })
      };
      return (0, n.jsxs)("div", {
        className: V.buttonsContainer,
        children: [eo ? null : er ? (0, n.jsx)(Y, {
          disabled: eu,
          onClick: em,
          children: W.Z.Messages.COLLECTIBLES_USE_NOW
        }) : (0, n.jsx)(Y, {
          disabled: eu,
          className: V.purchaseButton,
          ...e,
          children: ei ? W.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : W.Z.Messages.COLLECTIBLES_PURCHASE.format({
            price: en
          })
        }), eI()]
      })
    },
    eN = ed ? "0 0 15px 1px ".concat(C.Z.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, j.x6)(s) && null != ea && ea.discountPercentage < 0 ? null : (0, n.jsx)(f.FocusRing, {
    children: (0, n.jsxs)(f.Clickable, {
      innerRef: X,
      className: l()(V.shopCard, V.shopCardAnimation, {
        [V.partiallyOwned]: eo
      }),
      onBlur: () => $(!1),
      onClick: eg,
      style: null != es ? {
        backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: J ? eN : "none"
      } : void 0,
      id: "shop-item-".concat(s.skuId),
      children: [ei && (0, n.jsx)(f.Tooltip, {
        tooltipContentClassName: V.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: W.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, n.jsx)(f.TextBadge, {
          ...e,
          className: V.premiumWheelBadge,
          text: (0, n.jsx)(O.Z, {
            className: V.premiumWheel
          })
        })
      }), (0, n.jsx)("div", {
        className: V.preview,
        children: (0, c.EQ)(s.type).with(u.Z.PROFILE_EFFECT, () => (0, n.jsx)("div", {
          className: V.profileEffectShopPreview,
          children: (0, n.jsx)(N.Z, {
            isHovering: J,
            profileEffectId: ee.id,
            isPurchased: er,
            removeSetHeight: !0
          })
        })).with(u.Z.AVATAR_DECORATION, () => (o()(ee.type === u.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, n.jsx)("div", {
          className: V.avatarContainer,
          children: (0, n.jsx)(U.R, {
            item: ee,
            user: t,
            isPurchased: er,
            isHighlighted: J
          })
        }))).with(u.Z.BUNDLE, () => (0, n.jsx)(H.d, {
          product: s,
          user: t,
          isPurchased: er,
          isHighlighted: J
        })).otherwise(() => null)
      }), er ? (0, n.jsx)("div", {
        className: V.checkmarkWrapper,
        children: (0, n.jsx)(b.Z, {
          width: 38,
          height: 38,
          className: V.checkmark
        })
      }) : null, (0, n.jsxs)("div", {
        className: l()(V.cardText, {
          [V.cardTextBlur]: (null == ee ? void 0 : ee.type) === u.Z.PROFILE_EFFECT
        }),
        children: [(0, n.jsx)("div", {
          className: l()(V.cardBackground, ed ? V.darkCardBackground : V.lightCardBackground, (null == ee ? void 0 : ee.type) === u.Z.PROFILE_EFFECT ? V.cardLowOpacity : null)
        }), (0, n.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: V.productName,
          children: s.name
        }), (0, n.jsxs)("div", {
          className: V.detailsWrapper,
          children: [(0, n.jsx)("div", {
            className: eo ? void 0 : V.innerBlur,
            children: e_()
          }), (0, n.jsx)("div", {
            className: V.innerHover,
            children: eT()
          })]
        })]
      }), (0, n.jsx)(B.Z, {
        category: i,
        className: V.limitedTimeBadge,
        display: "card"
      }), eC && !eo && !er && (0, n.jsx)(f.TextBadge, {
        text: W.Z.Messages.NEW,
        disableColor: !0,
        className: V.newBadge
      })]
    })
  })
}