"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  r = l("979554"),
  n = l("442837"),
  i = l("481060"),
  o = l("100527"),
  u = l("906732"),
  c = l("335131"),
  d = l("884697"),
  f = l("449217"),
  h = l("566111"),
  m = l("197115"),
  g = l("150039"),
  C = l("594174"),
  E = l("626135"),
  p = l("74538"),
  v = l("934261"),
  P = l("52268"),
  S = l("981631"),
  I = l("474936"),
  x = l("689938"),
  A = l("627525");

function _(e) {
  let {
    user: t,
    product: l,
    purchase: r,
    onApply: n,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: g,
    selectedProfileEffectItem: C,
    analyticsLocations: E
  } = e, v = a.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: E,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != C ? C.skuId : void 0
    })
  }, [u, E, C]);
  return (0, s.jsx)(i.ModalFooter, {
    className: A.modalFooter,
    children: (0, s.jsxs)("div", {
      className: A.buttonsRight,
      children: [(0, s.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: u,
        children: x.default.Messages.CANCEL
      }), null != r && (!(0, d.isPremiumCollectiblesPurchase)(r) || h) || null === g ? (0, s.jsx)(i.Button, {
        onClick: n,
        disabled: f,
        children: x.default.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : h || !(0, d.isPremiumCollectiblesProduct)(l) ? (0, s.jsx)(i.Button, {
        className: A.__invalid_modalFooterShopButton,
        onClick: v,
        children: x.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, s.jsx)(m.default, {
        subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
        buttonText: p.default.isPremium(t) ? x.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : x.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      })]
    })
  })
}

function T(e) {
  let {
    user: t,
    guild: l,
    categories: r,
    purchases: n,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, {
    pendingProfileEffectId: m
  } = (0, g.useGlobalOrGuildIdentityPendingProfileEffect)(l), [C, E] = a.useMemo(() => {
    let e = (0, d.groupProfileEffects)(r, n);
    return [e.purchased, e.shopPreviews]
  }, [r, n]), [S, I] = a.useState(() => null != u ? u : void 0 !== m ? m : null == c ? null : null != c ? c : null), [T, N] = a.useMemo(() => {
    var e;
    let t = C.find(e => (null == e ? void 0 : e.id) === S),
      l = null != t || null === S;
    return [null !== (e = null != t ? t : E.find(e => (null == e ? void 0 : e.id) === S)) && void 0 !== e ? e : null, l]
  }, [S, C, E]), {
    product: R,
    purchase: b
  } = (0, f.default)(null == T ? void 0 : T.skuId), F = a.useRef(null), M = p.default.canUseCollectibles(t), j = S === (void 0 === m ? null != c ? c : null : m), O = a.useCallback(e => {
    I(e)
  }, [I]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(i.ModalHeader, {
      separator: !1,
      className: A.modalHeader,
      children: [(0, s.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: x.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, s.jsx)(i.ModalCloseButton, {
        className: A.modalCloseButton,
        onClick: o
      })]
    }), (0, s.jsxs)(i.ModalContent, {
      className: A.modalContent,
      children: [(0, s.jsx)(P.default, {
        user: t,
        guild: l,
        pendingProfileEffect: S,
        selectedProfileEffectRef: F,
        onSelect: O,
        onClose: o
      }), (0, s.jsx)(v.default, {
        user: t,
        canApplySelectedChange: N,
        pendingProfileEffectRecord: T,
        product: R,
        purchase: b,
        guild: l
      })]
    }), (0, s.jsx)(_, {
      user: t,
      onApply: () => {
        (0, g.setNewPendingProfileEffectId)(S, c, l), o()
      },
      onClose: o,
      product: R,
      purchase: b,
      canUseCollectibles: M,
      selectedProfileEffectId: S,
      selectedProfileEffectItem: T,
      disableApplyButton: j,
      analyticsLocations: h
    })]
  })
}

function N(e) {
  let {
    transitionState: t,
    analyticsLocations: l,
    initialSelectedEffectId: d,
    guild: f,
    onClose: m
  } = e, {
    isFetching: p,
    categories: v,
    purchases: P
  } = (0, h.default)(), I = (0, n.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, u.default)(l, o.default.EDIT_PROFILE_EFFECT_MODAL), _ = (0, g.useGlobalOrGuildIdentityProfileEffect)(I, f);
  return a.useEffect(() => {
    E.default.track(S.AnalyticEvents.OPEN_MODAL, {
      type: S.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: x
    })
  }, [x]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...v.values()],
      itemTypes: [r.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [v]), (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: x,
    children: (0, s.jsx)(i.ModalRoot, {
      transitionState: t,
      size: i.ModalSize.DYNAMIC,
      className: A.modal,
      children: p ? (0, s.jsx)(i.Spinner, {
        className: A.spinner,
        type: i.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(T, {
        user: I,
        guild: f,
        categories: v,
        purchases: P,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: _,
        onClose: m,
        analyticsLocations: x
      })
    })
  })
}