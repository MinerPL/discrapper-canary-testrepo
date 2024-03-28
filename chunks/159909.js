"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("399606"),
  s = n("125268"),
  i = n("673125"),
  r = n("871499"),
  o = n("794358"),
  u = n("304388"),
  d = n("689938");

function c() {
  let e = (0, l.useStateFromStores)([i.default], () => !i.default.visibleOverlayCanvas);
  return (0, a.jsx)(u.default, {
    renderPopout: () => null,
    children: t => {
      let {
        ...n
      } = t;
      return (0, a.jsx)(r.default, {
        ...n,
        label: d.default.Messages.SHARED_CANVAS_HIDE_OVERLAY_DRAWINGS,
        isActive: e,
        iconComponent: o.default,
        onClick: s.toggleOverlayCanvas
      })
    }
  })
}