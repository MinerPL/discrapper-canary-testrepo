"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return I
  },
  default: function() {
    return m
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("77078"),
  u = n("272030"),
  o = n("801765"),
  a = n("191814"),
  d = n("195812"),
  c = n("83900"),
  f = n("663745"),
  S = n("153160"),
  E = n("928576"),
  h = n("516770"),
  _ = n("843455"),
  g = n("782340"),
  p = n("303903");

function C(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: r,
    showTestDownload: l,
    showDeleteProduct: u,
    showReportProduct: o,
    onEditProduct: a,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: E,
    onTestDownload: h,
    onReportProduct: _,
    closePopout: C,
    onSelect: I
  } = e;
  return (0, i.jsx)("div", {
    className: p.menuContainer,
    children: (0, i.jsxs)(s.Menu, {
      navId: "guild-product-context",
      onClose: C,
      "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: I,
      children: [(0, i.jsxs)(s.MenuGroup, {
        children: [t && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-edit",
          label: g.default.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), r && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-copy-link",
          label: g.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: c.default,
          action: E
        }), l && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-test-download",
          label: g.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: d.default,
          action: h
        })]
      }), (0, i.jsxs)(s.MenuGroup, {
        children: [n && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-unpublish",
          label: g.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), u && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-delete",
          label: g.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, i.jsx)(s.MenuGroup, {
        children: o && (0, i.jsx)(s.MenuItem, {
          id: "guild-product-report",
          label: g.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: _
        })
      })]
    })
  })
}

function I(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: r,
    showUnpublishProduct: l,
    showTestDownload: u,
    showCopyLink: o,
    showDeleteProduct: a,
    showReportProduct: d,
    onEditProduct: c,
    onUnpublishProduct: S,
    onDeleteProduct: E,
    onCopyProductLink: h,
    onTestDownload: _,
    onReportProduct: I
  } = e;
  return (0, i.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, i.jsx)(s.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: s.Popout.Animation.FADE,
      renderPopout: e => (0, i.jsx)(C, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: r,
        showUnpublishProduct: l,
        showCopyLink: o,
        showTestDownload: u,
        showReportProduct: d,
        showDeleteProduct: a,
        onEditProduct: c,
        onUnpublishProduct: S,
        onDeleteProduct: E,
        onCopyLink: h,
        onTestDownload: _,
        onReportProduct: I
      }),
      children: (e, n) => {
        let {
          isShown: r
        } = n;
        return (0, i.jsx)(s.Clickable, {
          ...e,
          "aria-label": g.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": r,
          className: p.productActionMenuButton,
          children: (0, i.jsx)(f.default, {
            className: p.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function m(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: r,
    onUnpublishProduct: d,
    onDeleteProduct: c,
    onCopyProductLink: f,
    onTestDownload: m,
    disabled: T = !1
  } = e, v = (0, o.useListingThumbnailUrl)(t, 600), R = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, _.CurrencyCodes.USD) : void 0, N = (0, E.useProductType)(t);
  return (0, i.jsxs)(s.ClickableContainer, {
    tag: "article",
    className: l(p.productCardClickable, p.productCard, {
      [p.disabled]: T
    }),
    onClick: T ? void 0 : r,
    onContextMenu: function(e) {
      (0, u.openContextMenuLazy)(e, () => Promise.resolve(e => (0, i.jsx)(C, {
        ...e,
        closePopout: u.closeContextMenu,
        guildId: n,
        productId: t.id,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyLink: f,
        onTestDownload: m,
        onReportProduct: () => {}
      })))
    },
    "aria-label": g.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, i.jsx)("img", {
      alt: "",
      src: v,
      className: p.productThumbnail
    }), (0, i.jsxs)("div", {
      className: p.productInfo,
      children: [(0, i.jsxs)("div", {
        className: p.productInfoContent,
        children: [(0, i.jsx)(s.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: p.productName,
          children: t.name
        }), (0, i.jsx)(a.default, {
          size: 8
        }), (0, i.jsxs)("div", {
          className: p.productDetails,
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: R
          }), null != N ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: p.dotSeparator
            }), (0, i.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: N
            })]
          }) : null]
        }), (0, i.jsx)(a.default, {
          size: 16
        }), t.published ? (0, i.jsx)(h.PublishedBadge, {}) : (0, i.jsx)(h.DraftBadge, {})]
      }), !T && (0, i.jsx)(I, {
        product: t,
        guildId: n,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyProductLink: f,
        onTestDownload: m,
        onReportProduct: () => {}
      })]
    })]
  })
}