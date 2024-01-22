"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007");
var n = r("37983"),
  a = r("884691"),
  i = r("265586"),
  s = r("446674"),
  u = r("77078"),
  o = r("812204"),
  l = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  E = r("235898"),
  _ = r("170313"),
  A = r("635956"),
  p = r("91653"),
  I = r("697218"),
  m = r("599110"),
  C = r("719923"),
  T = r("234251"),
  S = r("659117"),
  g = r("765221"),
  N = r("49111"),
  R = r("646718"),
  h = r("782340"),
  O = r("705057");

function v(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: i,
    onClose: s,
    initialSelectedDecoration: l,
    isTryItOutFlow: E
  } = e, {
    pendingAvatarDecoration: I,
    setPendingAvatarDecoration: m
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: E
  }), [N, v] = a.useState(() => {
    var e;
    if (null != l) return l;
    if (void 0 !== I) return I;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, T.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: x
  } = (0, f.default)(null == N ? void 0 : N.skuId), D = C.default.canUseCollectibles(t), b = a.useRef(null), P = (0, _.default)(i), H = (0, T.isEqualAvatarDecoration)(N, void 0 === I ? null == t ? void 0 : t.avatarDecoration : I), L = () => {
    m(N), s()
  }, U = a.useCallback(() => {
    s(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != N ? N.skuId : void 0
    })
  }, [i, s, N]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.ModalHeader, {
      separator: !1,
      className: O.modalHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: h.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(u.ModalCloseButton, {
        className: O.modalCloseButton,
        onClick: s
      })]
    }), (0, n.jsxs)(u.ModalContent, {
      className: O.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(g.default, {
        user: t,
        pendingAvatarDecoration: N,
        selectedAvatarDecorationRef: b,
        onSelect: e => {
          v(e), null != e && P(e)
        },
        onOpenShop: U
      }), (0, n.jsx)(S.default, {
        className: O.modalPreview,
        user: t,
        avatarDecorationOverride: N
      })]
    }), (0, n.jsxs)(u.ModalFooter, {
      className: O.modalFooter,
      children: [(() => {
        let e = null != x && (!(0, d.isPremiumCollectiblesPurchase)(x) || D);
        if (e || null === N) return (0, n.jsx)(u.Button, {
          onClick: L,
          disabled: H,
          children: h.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = D || !(0, d.isPremiumCollectiblesProduct)(M);
        return r ? (0, n.jsx)(u.Button, {
          className: O.modalFooterShopButton,
          onClick: U,
          children: h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(A.default, {
          subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? h.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : h.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, n.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: s,
        children: h.default.Messages.CANCEL
      })]
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: _
  } = e, A = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
    AnalyticsLocationProvider: p,
    analyticsLocations: C
  } = (0, l.default)(r, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: T,
    purchases: S,
    isFetchingCategories: g,
    isFetchingPurchases: R
  } = (0, E.default)(), h = g || R && 0 === S.size;
  return a.useEffect(() => {
    m.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...T.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [T]), null == A ? null : (0, n.jsx)(p, {
    children: (0, n.jsx)(u.ModalRoot, {
      transitionState: t,
      className: O.modal,
      size: h ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: h ? (0, n.jsx)(u.Spinner, {
        className: O.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(v, {
        user: A,
        categories: T,
        analyticsLocations: C,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: _
      })
    })
  })
}