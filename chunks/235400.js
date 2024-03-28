"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("47120");
var s = a("735250"),
  r = a("470079"),
  l = a("979554"),
  i = a("442837"),
  n = a("481060"),
  o = a("100527"),
  u = a("906732"),
  c = a("335131"),
  d = a("884697"),
  f = a("449217"),
  h = a("223143"),
  m = a("311395"),
  g = a("197115"),
  p = a("166625"),
  C = a("594174"),
  v = a("626135"),
  S = a("74538"),
  E = a("864106"),
  A = a("240781"),
  x = a("818611"),
  I = a("981631"),
  _ = a("474936"),
  P = a("689938"),
  b = a("995454");

function T(e) {
  let {
    user: t,
    categories: a,
    purchases: l,
    analyticsLocations: i,
    onClose: u,
    initialSelectedDecoration: h,
    isTryItOutFlow: C,
    guild: v
  } = e, {
    pendingAvatarDecoration: I,
    setPendingAvatarDecoration: T,
    savedAvatarDecoration: N
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: C,
    guildId: null == v ? void 0 : v.id
  }), [R, w] = r.useState(() => {
    var e;
    return null != h ? h : void 0 !== I ? I : null == N || 0 === a.size ? null : null !== (e = (0, d.getAvatarDecorations)(l, a).find(e => (0, E.isEqualAvatarDecoration)(e, N))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: D
  } = (0, f.default)(null == R ? void 0 : R.skuId), O = S.default.canUseCollectibles(t), j = r.useRef(null), L = (0, m.default)(i), y = (0, E.isEqualAvatarDecoration)(R, void 0 === I ? N : I), k = () => {
    T(R), u()
  }, F = r.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != R ? R.skuId : void 0
    })
  }, [i, u, R]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(n.ModalHeader, {
      separator: !1,
      className: b.modalHeader,
      children: [(0, s.jsx)(n.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, s.jsx)(n.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: u
      })]
    }), (0, s.jsxs)(n.ModalContent, {
      className: b.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(x.default, {
        user: t,
        guild: v,
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: j,
        onSelect: e => {
          w(e), null != e && L(e)
        },
        onOpenShop: F
      }), (0, s.jsx)(A.default, {
        className: b.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: b.modalFooter,
      children: [null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || O) || null === R ? (0, s.jsx)(n.Button, {
        onClick: k,
        disabled: y,
        children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : O || !(0, d.isPremiumCollectiblesProduct)(M) ? (0, s.jsx)(n.Button, {
        className: b.modalFooterShopButton,
        onClick: F,
        children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(g.default, {
        subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
        buttonText: S.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      }), (0, s.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: u,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}

function N(e) {
  let {
    transitionState: t,
    analyticsLocations: a,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: m,
    guild: g
  } = e, p = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: S
  } = (0, u.default)(a, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: E,
    purchases: A,
    isFetchingCategories: x,
    isFetchingPurchases: _
  } = (0, h.default)(), P = x || _ && 0 === A.size;
  return r.useEffect(() => {
    v.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: S
    })
  }, [S]), r.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...E.values()],
      itemTypes: [l.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [E]), null == p ? null : (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: S,
    children: (0, s.jsx)(n.ModalRoot, {
      transitionState: t,
      className: b.modal,
      size: P ? n.ModalSize.DYNAMIC : n.ModalSize.MEDIUM,
      children: P ? (0, s.jsx)(n.Spinner, {
        className: b.spinner,
        type: n.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(T, {
        user: p,
        guild: g,
        categories: E,
        purchases: A,
        analyticsLocations: S,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}