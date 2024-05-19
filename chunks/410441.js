"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("423875"),
  s = n("481060"),
  i = n("908841"),
  r = n("689938"),
  o = n("952853");
let u = {
  [l.ContentInventoryListenedMediaProvider.PROVIDER_UNSPECIFIED]: null,
  [l.ContentInventoryListenedMediaProvider.SPOTIFY]: {
    getLabel: () => r.default.Messages.SPOTIFY,
    Icon: i.default
  }
};

function d(e) {
  var t;
  let {
    onClick: n,
    provider: l,
    "aria-label": i
  } = e, r = (0, s.useToken)(s.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), {
    Icon: d,
    getLabel: c
  } = null !== (t = u[l]) && void 0 !== t ? t : {};
  if (null == d) return null;
  let f = null != i ? i : null == c ? void 0 : c(),
    h = (0, a.jsx)(d, {
      color: r.hex(),
      width: 16,
      height: 16
    });
  return null == n ? (0, a.jsx)("div", {
    className: o.container,
    "aria-label": f,
    children: h
  }) : (0, a.jsx)(s.Tooltip, {
    text: f,
    children: e => (0, a.jsx)(s.Clickable, {
      className: o.container,
      ...e,
      onClick: n,
      children: h
    })
  })
}