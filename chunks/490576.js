"use strict";
a.r(e), a.d(e, {
  default: function() {
    return p
  }
});
var n = a("735250");
a("470079");
var s = a("512722"),
  l = a.n(s),
  i = a("468194"),
  r = a("442837"),
  u = a("477690"),
  o = a("481060"),
  c = a("809086"),
  d = a("430824"),
  f = a("682864"),
  m = a("943461"),
  h = a("240864"),
  x = a("598952"),
  g = a("596211"),
  v = a("689938"),
  j = a("450696");
let _ = (0, i.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function N(t) {
  let {
    guildProductListing: e,
    guildId: a,
    onClose: s
  } = t, l = (0, r.useStateFromStores)([d.default], () => {
    var t;
    return null === (t = d.default.getGuild(a)) || void 0 === t ? void 0 : t.name
  });
  return (0, n.jsxs)(o.ModalHeader, {
    className: j.header,
    children: [(0, n.jsx)(c.default, {
      className: j.headerImage,
      listing: e,
      imageSize: _,
      alt: ""
    }), (0, n.jsx)(f.default, {
      size: 16,
      horizontal: !0
    }), (0, n.jsxs)("div", {
      className: j.headerTextColumn,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: e.name
      }), (0, n.jsx)(f.default, {
        size: 8
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.__invalid_description,
        children: l
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.__invalid_description,
        children: v.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: e.attachments_count
        })
      })]
    }), (0, n.jsx)(o.ModalCloseButton, {
      className: j.closeButton,
      onClick: s
    })]
  })
}

function I(t) {
  let {
    attachment: e,
    guildId: a,
    productId: s
  } = t;
  return (0, n.jsxs)("li", {
    className: j.attachmentRow,
    children: [(0, n.jsx)(x.default, {
      attachment: e
    }), (0, n.jsx)(g.default, {
      className: j.attachmentDownloadButton,
      guildId: a,
      productId: s,
      attachmentId: e.id,
      children: (0, n.jsx)(m.default, {})
    })]
  })
}

function p(t) {
  var e;
  let {
    guildId: a,
    productId: s,
    onClose: i,
    transitionState: u
  } = t, c = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(s));
  l()(null != c, "guildProductListing cannot be null");
  let d = null !== (e = c.attachments) && void 0 !== e ? e : [];
  return (0, n.jsxs)(o.ModalRoot, {
    className: j.modal,
    size: o.ModalSize.MEDIUM,
    transitionState: u,
    "aria-label": v.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
    children: [(0, n.jsx)(N, {
      guildId: a,
      guildProductListing: c,
      onClose: i
    }), (0, n.jsx)(o.ModalContent, {
      children: (0, n.jsx)("ul", {
        className: j.__invalid_attachmentsList,
        children: d.map(t => (0, n.jsx)(I, {
          guildId: a,
          productId: c.id,
          attachment: t
        }, t.id))
      })
    })]
  })
}