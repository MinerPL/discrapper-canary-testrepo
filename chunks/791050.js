"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  s = r("265586"),
  u = r("446674"),
  i = r("77078"),
  l = r("812204"),
  o = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  m = r("235898"),
  S = r("170313"),
  p = r("635956"),
  E = r("91653"),
  h = r("697218"),
  _ = r("599110"),
  C = r("719923"),
  I = r("234251"),
  g = r("659117"),
  T = r("765221"),
  v = r("49111"),
  A = r("646718"),
  P = r("782340"),
  N = r("446812");

function L(e) {
  let {
    user: t,
    categories: r,
    purchases: s,
    analyticsLocations: u,
    onClose: o,
    initialSelectedDecoration: m,
    isTryItOutFlow: h,
    guild: _
  } = e, {
    pendingAvatarDecoration: v,
    setPendingAvatarDecoration: L,
    savedAvatarDecoration: R
  } = (0, E.default)({
    analyticsLocations: u,
    isTryItOut: h,
    guildId: null == _ ? void 0 : _.id
  }), [y, b] = n.useState(() => {
    var e;
    if (null != m) return m;
    if (void 0 !== v) return v;
    if (null == R || 0 === r.size) return null;
    let t = (0, d.getAvatarDecorations)(s, r);
    return null !== (e = t.find(e => (0, I.isEqualAvatarDecoration)(e, R))) && void 0 !== e ? e : null
  }), {
    product: x,
    purchase: M
  } = (0, f.default)(null == y ? void 0 : y.skuId), U = C.default.canUseCollectibles(t), O = n.useRef(null), F = (0, S.default)(u), k = (0, I.isEqualAvatarDecoration)(y, void 0 === v ? R : v), H = () => {
    L(y), o()
  }, D = n.useCallback(() => {
    o(), (0, c.openCollectiblesShop)({
      analyticsLocations: u,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != y ? y.skuId : void 0
    })
  }, [u, o, y]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      separator: !1,
      className: N.modalHeader,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(i.ModalCloseButton, {
        className: N.modalCloseButton,
        onClick: o
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: N.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(T.default, {
        user: t,
        guild: _,
        pendingAvatarDecoration: y,
        selectedAvatarDecorationRef: O,
        onSelect: e => {
          b(e), null != e && F(e)
        },
        onOpenShop: D
      }), (0, a.jsx)(g.default, {
        className: N.modalPreview,
        user: t,
        avatarDecorationOverride: y
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      className: N.modalFooter,
      children: [(() => {
        let e = null != M && (!(0, d.isPremiumCollectiblesPurchase)(M) || U);
        if (e || null === y) return (0, a.jsx)(i.Button, {
          onClick: H,
          disabled: k,
          children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = U || !(0, d.isPremiumCollectiblesProduct)(x);
        return r ? (0, a.jsx)(i.Button, {
          className: N.modalFooterShopButton,
          onClick: D,
          children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(p.default, {
          subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: o,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}

function R(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: S,
    guild: p
  } = e, E = (0, u.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
    analyticsLocations: C
  } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: I,
    purchases: g,
    isFetchingCategories: T,
    isFetchingPurchases: A
  } = (0, m.default)(), P = T || A && 0 === g.size;
  return n.useEffect(() => {
    _.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), n.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [s.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [I]), null == E ? null : (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: C,
    children: (0, a.jsx)(i.ModalRoot, {
      transitionState: t,
      className: N.modal,
      size: P ? i.ModalSize.DYNAMIC : i.ModalSize.MEDIUM,
      children: P ? (0, a.jsx)(i.Spinner, {
        className: N.spinner,
        type: i.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(L, {
        user: E,
        guild: p,
        categories: I,
        purchases: g,
        analyticsLocations: C,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: S
      })
    })
  })
}