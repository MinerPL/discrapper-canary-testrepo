"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(898531),
  a = n(314897),
  l = n(131951),
  u = n(689938),
  _ = n(608667);

function d(e) {
  let t = (0, s.useModalContext)(),
    d = (0, r.e7)([l.Z], () => l.Z.isVideoEnabled()),
    c = (0, r.e7)([a.default], () => a.default.getId() === e),
    E = (0, o.Z)();
  return (!d || E) && c ? (0, i.jsx)(s.MenuItem, {
    id: "change-video-background",
    label: (0, i.jsx)("div", {
      className: _.item,
      children: d ? u.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : u.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
    }),
    action: function() {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5528"), n.e("24267")]).then(n.bind(n, 601572));
        return t => (0, i.jsx)(e, {
          ...t,
          videoEnabled: d
        })
      }, {
        modalKey: "camera-preview",
        contextKey: t
      })
    }
  }) : null
}