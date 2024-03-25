"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var u = n("414456"),
  a = n.n(u),
  i = n("77078"),
  l = n("750482"),
  s = n("945330"),
  o = n("880672");

function d(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(i.Clickable, {
    className: a(o.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(s.default, {
      width: 16,
      height: 16,
      className: o.closeButtonIcon
    })
  })
}

function c(e) {
  let {
    guildProductListing: t,
    onClose: n,
    className: u
  } = e;
  return (0, r.jsxs)(i.ModalHeader, {
    className: a(o.header, u),
    separator: !1,
    children: [(0, r.jsx)(l.default, {
      className: o.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(d, {
      className: o.closeButton,
      onClose: n
    })]
  })
}