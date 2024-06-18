"use strict";
n(627341);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(278074),
  a = n(442837),
  l = n(481060),
  u = n(884697),
  _ = n(449217),
  d = n(706454),
  c = n(158776),
  E = n(74538),
  I = n(204418),
  T = n(689938),
  h = n(959547);
let S = [{
    avatarSize: l.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: l.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: l.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: l.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  f = e => {
    let {
      purchase: t
    } = e, n = (0, a.e7)([d.default], () => d.default.locale), r = (0, u.qS)(t);
    return (0, i.jsxs)("div", {
      className: h.purchaseInfo,
      children: [(0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, i.jsxs)(l.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [T.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(n, {
            month: "long",
            year: "numeric"
          })
        }), r && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("br", {}), T.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
t.Z = e => {
  let {
    user: t,
    guildId: n,
    avatarDecorationOverride: r,
    className: d
  } = e, N = (0, a.e7)([c.Z], () => c.Z.getStatus(t.id)), {
    product: A,
    purchase: m
  } = (0, _.Z)(null == r ? void 0 : r.skuId), O = E.ZP.canUseCollectibles(t), R = (0, u.qS)(m), C = (0, u.G1)(A), p = !O && R;
  return null != A && (null == m || p) ? (0, i.jsxs)("div", {
    className: s()(h.modalPreview, h.shopPreviewContainer, d),
    children: [(0, i.jsx)("div", {
      className: h.shopPreviewBanner,
      children: (0, i.jsx)(I.Z, {
        user: t,
        guildId: n,
        avatarDecorationOverride: r
      })
    }), (0, i.jsxs)("div", {
      className: h.shopPreviewTextContainer,
      children: [(0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: A.name
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: p ? T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, o.EQ)([C, O]).with([!0, !0], () => T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, i.jsxs)("div", {
    className: s()(h.modalPreview, d),
    children: [(0, i.jsxs)("div", {
      className: h.previewSections,
      children: [(0, i.jsx)("div", {
        className: h.decorationPreview,
        children: (0, i.jsx)(I.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: r
        })
      }), (0, i.jsx)("div", {
        className: h.smallDecorationPreviewsContainer,
        children: S.map(e => {
          let {
            avatarSize: s,
            showStatus: o
          } = e;
          return (0, i.jsx)("div", {
            className: h.smallDecorationPreview,
            children: (0, i.jsx)(I.Z, {
              user: t,
              guildId: n,
              avatarSize: s,
              avatarDecorationOverride: r,
              status: o ? N : void 0,
              "aria-hidden": !0
            })
          }, "".concat(s).concat(o))
        })
      })]
    }), null != m && (0, i.jsx)(f, {
      purchase: m
    })]
  })
}