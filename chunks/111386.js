"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("524437"),
  i = n("481060"),
  r = n("243778"),
  o = n("689938"),
  u = n("965945"),
  d = n("442937");
let c = () => (0, a.jsxs)("div", {
  className: u.coachtipInner,
  children: [(0, a.jsx)("img", {
    src: d,
    alt: o.default.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
    className: u.coachtipAsset
  }), (0, a.jsxs)("div", {
    className: u.coachtipTextContainer,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      children: o.default.Messages.CONTENT_INVENTORY_COACHTIP_HEADER
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: o.default.Messages.CONTENT_INVENTORY_COACHTIP_TEXT
    })]
  })]
});
t.default = e => {
  let {
    children: t
  } = e, [n] = (0, r.useSelectedDismissibleContent)([s.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [o, d] = l.useState(!1);
  return (l.useEffect(() => {
    setTimeout(() => {
      d(!0)
    }, 300)
  }), n !== s.DismissibleContent.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP) ? (0, a.jsx)(a.Fragment, {
    children: t
  }) : (0, a.jsx)(i.Tooltip, {
    text: (0, a.jsx)(c, {}),
    tooltipClassName: u.coachtip,
    tooltipContentClassName: u.coachtipContent,
    position: "left",
    allowOverflow: !0,
    forceOpen: o,
    shouldShow: o,
    hideOnClick: !1,
    "aria-label": "test",
    children: e => (0, a.jsx)("div", {
      ...e,
      children: t
    })
  })
}