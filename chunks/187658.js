"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  o = s("239091"),
  d = s("716161"),
  u = s("647177"),
  i = s("689938");

function r(e) {
  let {
    onSelect: t,
    backgroundOption: s,
    optionIsInUse: r
  } = e;
  return (0, n.jsx)(a.Menu, {
    navId: "video-background-context",
    onClose: o.closeContextMenu,
    onSelect: t,
    "aria-label": i.default.Messages.VIDEO_BACKGROUND_CONTEXT_MENU_LABEL,
    children: (0, n.jsx)(a.MenuItem, {
      id: "remove",
      action: () => {
        (0, u.isCustomBackgroundOption)(s) && ((0, d.deleteVideoFilterAsset)(s), (0, u.trackBackgroundOptionDeleted)(s))
      },
      label: (0, u.isCustomBackgroundOption)(s) ? r ? i.default.Messages.VIDEO_BACKGROUND_CANNOT_REMOVE_SELECTED : i.default.Messages.VIDEO_BACKGROUND_REMOVE : i.default.Messages.VIDEO_BACKGROUND_CANNOT_REMOVE_DEFAULT,
      disabled: !(0, u.isCustomBackgroundOption)(s) || r,
      color: "danger"
    })
  })
}