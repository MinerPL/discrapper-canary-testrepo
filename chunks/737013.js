"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  i = n("481060"),
  u = n("898531"),
  s = n("314897"),
  d = n("131951"),
  r = n("689938"),
  o = n("122640");

function c(e) {
  let t = (0, i.useModalContext)(),
    c = (0, l.useStateFromStores)([d.default], () => d.default.isVideoEnabled()),
    f = (0, l.useStateFromStores)([s.default], () => s.default.getId() === e),
    E = (0, u.default)();
  return (!c || E) && f ? (0, a.jsx)(i.MenuItem, {
    id: "change-video-background",
    label: (0, a.jsx)("div", {
      className: o.item,
      children: c ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5528"), n.e("41350")]).then(n.bind(n, "601572"));
        return t => (0, a.jsx)(e, {
          ...t,
          videoEnabled: c
        })
      }, {
        modalKey: "camera-preview",
        contextKey: t
      })
    }
  }) : null
}