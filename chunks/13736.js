"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var u = a("481060"),
  r = a("787014"),
  i = a("665906"),
  s = a("689938");

function d(e) {
  let t = (0, i.useCanManageThread)(e),
    a = (0, i.useIsActiveChannelOrUnarchivableThread)(e),
    d = (0, i.useIsNonModInLockedThread)(e);
  return !t || !a || d || __OVERLAY__ ? null : (0, n.jsx)(u.MenuItem, {
    id: "edit-thread",
    label: e.isForumPost() ? s.default.Messages.EDIT_FORUM_POST : s.default.Messages.EDIT_THREAD,
    action: () => {
      (0, u.closeAllModals)(), r.default.open(e.id)
    }
  })
}