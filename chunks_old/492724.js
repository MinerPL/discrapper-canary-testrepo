"use strict";
A.r(t), A.d(t, {
  default: function() {
    return p
  }
});
var a = A("37983");
A("884691");
var l = A("414456"),
  n = A.n(l),
  r = A("77078"),
  s = A("17692"),
  i = A("944371"),
  o = A("191814"),
  d = A("476765"),
  u = A("538137"),
  c = A("600785"),
  f = A("246421"),
  g = A("782340"),
  C = A("127703");

function h(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: A,
    className: l,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: n(C.productThumbnailContainer, l),
    children: [s, !t && (0, a.jsxs)("div", {
      className: C.purchaseToUnlockBadge,
      children: [(0, a.jsx)(c.default, {
        className: C.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: C.unlockText,
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
    children: [(0, a.jsx)(r.Text, {
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
  }) : (0, a.jsx)(r.Clickable, {
    className: n(C.showMoreButton, C.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: l
  })
}

function p(e) {
  let {
    imageUrl: t,
    name: A,
    description: l,
    formattedPrice: i,
    role: u,
    ctaComponent: c,
    shouldShowFullDescriptionButton: p = !0,
    onShowFullDescription: T,
    productType: v,
    onTapCard: U,
    actionMenu: I,
    showOpaqueBackground: E = !1,
    hideRoleTag: x = !1,
    lineClamp: N = 1,
    cardWidth: D = 332,
    cardHeight: L,
    thumbnailHeight: q = 187,
    descriptionTextVariant: O = "text-sm/normal",
    isDraft: R = !1
  } = e, P = (0, d.uid)(), j = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h, {
      showDraftBadge: R,
      hidePurchaseToUnlockBadge: !0,
      children: (0, a.jsx)("img", {
        alt: "",
        src: t,
        className: C.productThumbnail,
        style: {
          height: q
        }
      })
    }), (0, a.jsxs)("div", {
      className: C.productDetails,
      children: [(0, a.jsxs)("div", {
        className: C.productDetailContent,
        children: [(0, a.jsx)(r.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: C.productName,
          id: P,
          children: A
        }), (0, a.jsx)(r.FocusBlock, {
          children: (0, a.jsx)(s.default, {
            variant: O,
            color: "text-muted",
            lineClamp: N,
            text: l
          })
        }), p && (0, a.jsx)(m, {
          onShowFullDescription: T,
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
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: C.productPrice,
        children: null != i ? i : g.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, a.jsx)(r.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: C.productType,
        children: v
      }), (0, a.jsx)("div", {
        className: C.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: c
      })]
    })]
  });
  return null == U ? (0, a.jsx)("article", {
    className: n(C.productCard, E ? C.opaqueBackground : C.solidBackground),
    "aria-labelledby": P,
    children: j
  }) : (0, a.jsx)("div", {
    style: {
      width: D,
      height: L
    },
    children: (0, a.jsx)(r.ClickableContainer, {
      tag: "article",
      "aria-label": g.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: A
      }),
      className: n(C.productCard, E ? C.opaqueBackground : C.solidBackground, C.cardClickableContainer),
      onClick: U,
      children: j
    })
  })
}