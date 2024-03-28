"use strict";
A.r(t), A.d(t, {
  default: function() {
    return T
  }
});
var a = A("735250");
A("470079");
var l = A("803997"),
  s = A.n(l),
  n = A("481060"),
  r = A("240657"),
  i = A("765400"),
  o = A("682864"),
  d = A("153124"),
  u = A("877453"),
  c = A("242411"),
  f = A("916001"),
  g = A("689938"),
  C = A("134304");

function h(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: A,
    className: l,
    children: r
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(C.productThumbnailContainer, l),
    children: [r, !t && (0, a.jsxs)("div", {
      className: C.purchaseToUnlockBadge,
      children: [(0, a.jsx)(c.default, {
        className: C.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: C.__invalid_unlockText,
        children: g.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), A && (0, a.jsx)("div", {
      className: C.draftBadge,
      children: (0, a.jsx)(i.MonetizationListingDraftBadge, {})
    })]
  })
}

function m(e) {
  let {
    onShowFullDescription: t,
    variant: A
  } = e, l = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Text, {
      variant: A,
      color: null != t ? "text-link" : "interactive-hover",
      children: g.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, a.jsx)(u.default, {
      className: C.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == t ? (0, a.jsx)("div", {
    className: C.showMoreButton,
    children: l
  }) : (0, a.jsx)(n.Clickable, {
    className: s()(C.showMoreButton, C.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: l
  })
}

function T(e) {
  let {
    imageUrl: t,
    name: A,
    description: l,
    formattedPrice: i,
    role: u,
    ctaComponent: c,
    shouldShowFullDescriptionButton: T = !0,
    onShowFullDescription: p,
    productType: U,
    onTapCard: v,
    actionMenu: I,
    showOpaqueBackground: E = !1,
    hideRoleTag: x = !1,
    lineClamp: N = 1,
    cardWidth: D = 332,
    cardHeight: q,
    thumbnailHeight: L = 187,
    descriptionTextVariant: O = "text-sm/normal",
    isDraft: R = !1
  } = e, P = (0, d.uid)(), V = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h, {
      showDraftBadge: R,
      hidePurchaseToUnlockBadge: !0,
      children: (0, a.jsx)("img", {
        alt: "",
        src: t,
        className: C.productThumbnail,
        style: {
          height: L
        }
      })
    }), (0, a.jsxs)("div", {
      className: C.productDetails,
      children: [(0, a.jsxs)("div", {
        className: C.productDetailContent,
        children: [(0, a.jsx)(n.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: C.productName,
          id: P,
          children: A
        }), (0, a.jsx)(n.FocusBlock, {
          children: (0, a.jsx)(r.default, {
            variant: O,
            color: "text-muted",
            lineClamp: N,
            text: l
          })
        }), T && (0, a.jsx)(m, {
          onShowFullDescription: p,
          variant: O
        }), x || null == u || "" === u.name ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.default, {
            size: 16
          }), (0, a.jsx)(f.default, {
            role: u
          })]
        })]
      }), I]
    }), (0, a.jsxs)("div", {
      className: C.purchaseDetails,
      children: [(0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: C.__invalid_productPrice,
        children: null != i ? i : g.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, a.jsx)(n.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: C.__invalid_productType,
        children: U
      }), (0, a.jsx)("div", {
        className: C.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: c
      })]
    })]
  });
  return null == v ? (0, a.jsx)("article", {
    className: s()(C.productCard, E ? C.opaqueBackground : C.solidBackground),
    "aria-labelledby": P,
    children: V
  }) : (0, a.jsx)("div", {
    style: {
      width: D,
      height: q
    },
    children: (0, a.jsx)(n.ClickableContainer, {
      tag: "article",
      "aria-label": g.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: A
      }),
      className: s()(C.productCard, E ? C.opaqueBackground : C.solidBackground, C.cardClickableContainer),
      onClick: v,
      children: V
    })
  })
}