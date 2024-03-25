"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var l = s("281071"),
  n = s("77078"),
  i = s("763838"),
  r = s("465869"),
  o = s("191814"),
  d = s("151185"),
  u = s("359366"),
  c = s("442379"),
  E = s("757515"),
  _ = s("727411"),
  I = s("35018"),
  T = s("739726"),
  S = s("782340"),
  f = s("464583");
let m = "guild-product-listings-header";

function N(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: o
  } = e, d = (0, c.useGuildProductsForGuild)(t, {
    publishedOnly: !1
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: _
  } = (0, r.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), N = e => {
    (0, u.updateGuildProductListing)(t, e, {
      published: !1
    })
  }, g = (e, l) => {
    (0, n.openModalLazy)(async () => {
      let {
        default: n
      } = await s.el("757949").then(s.bind(s, "757949"));
      return s => (0, a.jsx)(n, {
        guildId: t,
        productId: e,
        productName: l,
        ...s
      })
    })
  }, h = (e, t) => {
    (0, l.copy)((0, E.getGuildProductListingUrl)(e, t))
  }, C = d.length > 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.FormTitle, {
      className: f.productListingsHeader,
      id: m,
      children: C ? S.default.Messages.GUILD_PRODUCTS_YOUR_PRODUCTS_HEADER : S.default.Messages.GUILD_PRODUCTS_NO_PRODUCTS_HEADER
    }), C ? (0, a.jsx)("ul", {
      className: f.productListings,
      "aria-labelledby": m,
      children: d.map(e => (0, a.jsx)("li", {
        children: (0, a.jsx)(T.default, {
          guildId: t,
          product: e,
          onEditProduct: () => o(e.id),
          onUnpublishProduct: () => N(e.id),
          onDeleteProduct: () => g(e.id, e.name),
          onCopyProductLink: () => h(t, e.id),
          onTestDownload: () => I.default.open({
            guildId: t,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: _
        })
      }, e.id))
    }) : (0, a.jsx)(i.default, {
      guildId: t,
      showCTA: !1,
      responsive: !1
    })]
  })
}

function g(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: s
  } = (0, r.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), l = e => {
    _.openModal(t, e)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.Button, {
      className: f.addButton,
      innerClassName: f.addButtonInner,
      onClick: () => l(null),
      disabled: s,
      children: [(0, a.jsx)(d.default, {
        width: 20,
        height: 20,
        "aria-hidden": !0
      }), (0, a.jsx)(o.default, {
        size: 6,
        horizontal: !0
      }), S.default.Messages.GUILD_PRODUCTS_CREATE_PRODUCT_BUTTON]
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsx)(N, {
      guildId: t,
      handleCreateOrEditProduct: l
    })]
  })
}