"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var l = n("512722"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("410575"),
  u = n("594174"),
  d = n("907285"),
  c = n("737013"),
  f = n("981631"),
  h = n("689938");

function m(e) {
  let {
    onClose: t,
    onSelect: n
  } = e, l = (0, i.useStateFromStores)([u.default], () => {
    let e = u.default.getCurrentUser();
    return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
  }), m = (0, d.default)(), p = (0, c.default)(l.id);
  return (0, a.jsx)(o.default, {
    object: f.AnalyticsObjects.CONTEXT_MENU,
    children: (0, a.jsxs)(r.Menu, {
      onClose: t,
      navId: "video-device-context",
      "aria-label": h.default.Messages.FORM_LABEL_VIDEO_DEVICE,
      onSelect: n,
      children: [(0, a.jsx)(r.MenuGroup, {
        label: h.default.Messages.FORM_LABEL_VIDEO_DEVICE,
        children: m
      }), (0, a.jsx)(r.MenuGroup, {
        children: p
      })]
    })
  })
}