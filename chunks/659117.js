"use strict";
r.r(t), r.d(t, {
  default: function() {
    return T
  }
}), r("794252");
var n = r("37983");
r("884691");
var a = r("414456"),
  i = r.n(a),
  s = r("506838"),
  u = r("446674"),
  o = r("77078"),
  l = r("491232"),
  c = r("984002"),
  d = r("716120"),
  f = r("915639"),
  E = r("824563"),
  _ = r("719923"),
  A = r("795158"),
  p = r("782340"),
  I = r("632000");
let m = [{
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
  C = e => {
    let {
      purchase: t
    } = e, r = (0, u.useStateFromStores)([f.default], () => f.default.locale), a = (0, l.isPremiumCollectiblesPurchase)(t);
    return (0, n.jsxs)("div", {
      className: I.purchaseInfo,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, n.jsxs)(o.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [p.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
          })
        }), a && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("br", {}), p.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
var T = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    className: a
  } = e, f = (0, u.useStateFromStores)([E.default], () => E.default.getStatus(t.id)), {
    category: T,
    product: S,
    purchase: g
  } = (0, c.default)(null == r ? void 0 : r.skuId), N = _.default.canUseCollectibles(t), R = (0, l.isPremiumCollectiblesPurchase)(g), h = (0, l.isPremiumCollectiblesProduct)(S), O = !N && R;
  return null != S && (null == g || O) ? (0, n.jsxs)("div", {
    className: i(I.modalPreview, I.shopPreviewContainer, a),
    children: [(0, n.jsx)(d.default, {
      asset: null == T ? void 0 : T.banner,
      className: I.shopPreviewBanner,
      children: (0, n.jsx)(A.default, {
        user: t,
        avatarDecorationOverride: r
      })
    }), (0, n.jsxs)("div", {
      className: I.shopPreviewTextContainer,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: S.name
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: O ? p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.match)([h, N]).with([!0, !0], () => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => p.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, n.jsxs)("div", {
    className: i(I.modalPreview, a),
    children: [(0, n.jsxs)("div", {
      className: I.previewSections,
      children: [(0, n.jsx)("div", {
        className: I.decorationPreview,
        children: (0, n.jsx)(A.default, {
          user: t,
          avatarDecorationOverride: r
        })
      }), (0, n.jsx)("div", {
        className: I.smallDecorationPreviewsContainer,
        children: m.map(e => {
          let {
            avatarSize: a,
            showStatus: i
          } = e;
          return (0, n.jsx)("div", {
            className: I.smallDecorationPreview,
            children: (0, n.jsx)(A.default, {
              user: t,
              avatarSize: a,
              avatarDecorationOverride: r,
              status: i ? f : void 0,
              "aria-hidden": !0
            })
          }, "".concat(a).concat(i))
        })
      })]
    }), null != g && (0, n.jsx)(C, {
      purchase: g
    })]
  })
}