"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(410575),
  u = n(594174),
  _ = n(907285),
  d = n(737013),
  c = n(981631),
  E = n(689938);

function I(e) {
  let {
    onClose: t,
    onSelect: n
  } = e, r = (0, o.e7)([u.default], () => {
    let e = u.default.getCurrentUser();
    return s()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
  }), I = (0, _.Z)(), T = (0, d.Z)(r.id);
  return (0, i.jsx)(l.Z, {
    object: c.qAy.CONTEXT_MENU,
    children: (0, i.jsxs)(a.Menu, {
      onClose: t,
      navId: "video-device-context",
      "aria-label": E.Z.Messages.FORM_LABEL_VIDEO_DEVICE,
      onSelect: n,
      children: [(0, i.jsx)(a.MenuGroup, {
        label: E.Z.Messages.FORM_LABEL_VIDEO_DEVICE,
        children: I
      }), (0, i.jsx)(a.MenuGroup, {
        children: T
      })]
    })
  })
}