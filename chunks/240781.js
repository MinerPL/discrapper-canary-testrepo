"use strict";
a.r(t), a("627341");
var s = a("735250");
a("470079");
var r = a("803997"),
  l = a.n(r),
  i = a("278074"),
  n = a("442837"),
  o = a("481060"),
  u = a("884697"),
  c = a("449217"),
  d = a("141011"),
  f = a("706454"),
  h = a("158776"),
  m = a("74538"),
  g = a("204418"),
  p = a("689938"),
  C = a("847531");
let v = [{
    avatarSize: o.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: o.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: o.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: o.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  S = e => {
    let {
      purchase: t
    } = e, a = (0, n.useStateFromStores)([f.default], () => f.default.locale), r = (0, u.isPremiumCollectiblesPurchase)(t);
    return (0, s.jsxs)("div", {
      className: C.purchaseInfo,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, s.jsxs)(o.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [p.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(a, {
            month: "long",
            year: "numeric"
          })
        }), r && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("br", {}), p.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
t.default = e => {
  let {
    user: t,
    avatarDecorationOverride: a,
    className: r
  } = e, f = (0, n.useStateFromStores)([h.default], () => h.default.getStatus(t.id)), {
    category: E,
    product: A,
    purchase: x
  } = (0, c.default)(null == a ? void 0 : a.skuId), I = m.default.canUseCollectibles(t), _ = (0, u.isPremiumCollectiblesPurchase)(x), P = (0, u.isPremiumCollectiblesProduct)(A), b = !I && _;
  return null != A && (null == x || b) ? (0, s.jsxs)("div", {
    className: l()(C.modalPreview, C.shopPreviewContainer, r),
    children: [(0, s.jsx)(d.default, {
      asset: null == E ? void 0 : E.banner,
      className: C.shopPreviewBanner,
      children: (0, s.jsx)(g.default, {
        user: t,
        avatarDecorationOverride: a
      })
    }), (0, s.jsxs)("div", {
      className: C.shopPreviewTextContainer,
      children: [(0, s.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: A.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: b ? p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([P, I]).with([!0, !0], () => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, s.jsxs)("div", {
    className: l()(C.modalPreview, r),
    children: [(0, s.jsxs)("div", {
      className: C.previewSections,
      children: [(0, s.jsx)("div", {
        className: C.decorationPreview,
        children: (0, s.jsx)(g.default, {
          user: t,
          avatarDecorationOverride: a
        })
      }), (0, s.jsx)("div", {
        className: C.smallDecorationPreviewsContainer,
        children: v.map(e => {
          let {
            avatarSize: r,
            showStatus: l
          } = e;
          return (0, s.jsx)("div", {
            className: C.smallDecorationPreview,
            children: (0, s.jsx)(g.default, {
              user: t,
              avatarSize: r,
              avatarDecorationOverride: a,
              status: l ? f : void 0,
              "aria-hidden": !0
            })
          }, "".concat(r).concat(l))
        })
      })]
    }), null != x && (0, s.jsx)(S, {
      purchase: x
    })]
  })
}