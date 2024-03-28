"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("735250");
r("470079");
var s = r("803997"),
  a = r.n(s),
  l = r("481060"),
  u = r("809086"),
  i = r("465670"),
  c = r("649202");

function d(e) {
  let {
    className: t,
    onClose: r
  } = e;
  return (0, n.jsx)(l.Clickable, {
    className: a()(c.closeButtonContainer, t),
    onClick: r,
    children: (0, n.jsx)(i.default, {
      width: 16,
      height: 16,
      className: c.closeButtonIcon
    })
  })
}

function o(e) {
  let {
    guildProductListing: t,
    onClose: r,
    className: s
  } = e;
  return (0, n.jsxs)(l.ModalHeader, {
    className: a()(c.header, s),
    separator: !1,
    children: [(0, n.jsx)(u.default, {
      className: c.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, n.jsx)(d, {
      className: c.closeButton,
      onClose: r
    })]
  })
}