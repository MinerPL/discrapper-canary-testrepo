"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var l = s("37983");
s("884691");
var i = s("65597"),
  r = s("77078"),
  a = s("206230"),
  n = s("183137"),
  d = s("492724"),
  o = s("845579"),
  u = s("266926"),
  c = s("153160"),
  C = s("866190"),
  _ = s("763838"),
  f = s("500307"),
  h = s("49111"),
  S = s("782340"),
  L = s("255008");

function x() {
  let e = o.GifAutoPlay.useSetting(),
    t = (0, C.useIsWindowFocused)(),
    s = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion),
    r = t && e && !s ? (0, n.getAssetCDNUrl)("server_products/storefront/question-mark.gif") : (0, n.getAssetCDNUrl)("server_products/storefront/question-mark.png");
  return (0, l.jsxs)("div", {
    className: L.previewListingCard,
    children: [(0, l.jsx)(d.default, {
      role: void 0,
      ctaComponent: null,
      imageUrl: (0, n.getAssetCDNUrl)("server_products/storefront/preview-thumbnail.png"),
      name: S.default.Messages.GUILD_STORE_PREVIEW_CARD_TITLE,
      description: S.default.Messages.GUILD_STORE_PREVIEW_CARD_DESCRIPTION,
      formattedPrice: (0, c.formatPrice)(0, h.CurrencyCodes.USD, {
        localeMatcher: "best fit",
        style: "currency",
        maximumSignificantDigits: 1
      }),
      shouldShowFullDescriptionButton: !1,
      productType: S.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE,
      onTapCard: () => null,
      hideRoleTag: !0,
      lineClamp: 3,
      thumbnailHeight: 197,
      cardWidth: 332,
      descriptionTextVariant: "text-xs/normal"
    }), (0, l.jsx)("img", {
      className: L.questionMark,
      alt: "",
      src: r
    })]
  })
}

function I() {
  return (0, l.jsxs)("div", {
    className: L.learnMoreTipContainer,
    children: [(0, l.jsx)(u.default, {
      className: L.infoCircle
    }), (0, l.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: S.default.Messages.GUILD_STORE_PREVIEW_LEARN_MORE.format({
        learnMoreLink: f.SERVER_SHOP_URL
      })
    })]
  })
}

function p(e) {
  let {
    guildId: t
  } = e;
  return (0, l.jsxs)("div", {
    className: L.previewContentContainer,
    children: [(0, l.jsxs)("div", {
      className: L.previewContent,
      children: [(0, l.jsx)(x, {}), (0, l.jsx)(_.default, {
        guildId: t,
        showCTA: !0
      })]
    }), (0, l.jsx)(I, {})]
  })
}