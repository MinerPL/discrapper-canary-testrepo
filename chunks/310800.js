"use strict";
t.d(s, {
  Z: function() {
    return h
  }
});
var n = t(735250);
t(470079);
var i = t(852229),
  l = t(481060),
  a = t(724598),
  r = t(674180),
  o = t(729285),
  c = t(495437),
  d = t(267101),
  u = t(863663),
  E = t(676651),
  _ = t(613810),
  I = t(391181),
  T = t(689938),
  N = t(460316);
let m = "guild-product-listings-header";

function S(e) {
  let {
    guildId: s,
    handleCreateOrEditProduct: o
  } = e, E = (0, d.ue)(s, {
    publishedOnly: !1
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: S
  } = (0, r.gX)(s), h = e => {
    (0, c.Je)(s, e, {
      published: !1
    })
  }, g = (e, i) => {
    (0, l.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([t.e("99387"), t.e("95925")]).then(t.bind(t, 673078));
      return t => (0, n.jsx)(l, {
        guildId: s,
        productId: e,
        productName: i,
        ...t
      })
    })
  }, x = (e, s) => {
    (0, i.J)((0, u.ar)(e, s))
  }, C = E.length > 0;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.FormTitle, {
      className: N.productListingsHeader,
      id: m,
      children: C ? T.Z.Messages.GUILD_PRODUCTS_YOUR_PRODUCTS_HEADER : T.Z.Messages.GUILD_PRODUCTS_NO_PRODUCTS_HEADER
    }), C ? (0, n.jsx)("ul", {
      className: N.productListings,
      "aria-labelledby": m,
      children: E.map(e => (0, n.jsx)("li", {
        children: (0, n.jsx)(I.Z, {
          guildId: s,
          product: e,
          onEditProduct: () => o(e.id),
          onUnpublishProduct: () => h(e.id),
          onDeleteProduct: () => g(e.id, e.name),
          onCopyProductLink: () => x(s, e.id),
          onTestDownload: () => _.Z.open({
            guildId: s,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: S
        })
      }, e.id))
    }) : (0, n.jsx)(a.Z, {
      guildId: s,
      showCTA: !1,
      responsive: !1
    })]
  })
}

function h(e) {
  let {
    guildId: s
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: t
  } = (0, r.gX)(s), i = e => {
    E.h(s, e)
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.Button, {
      className: N.addButton,
      innerClassName: N.addButtonInner,
      onClick: () => i(null),
      disabled: t,
      children: [(0, n.jsx)(o.Z, {
        width: 20,
        height: 20,
        "aria-hidden": !0
      }), (0, n.jsx)(l.Spacer, {
        size: 6,
        horizontal: !0
      }), T.Z.Messages.GUILD_PRODUCTS_CREATE_PRODUCT_BUTTON]
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(S, {
      guildId: s,
      handleCreateOrEditProduct: i
    })]
  })
}