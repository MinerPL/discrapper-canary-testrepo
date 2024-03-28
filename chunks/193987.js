"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var u = a("481060"),
  r = a("346479"),
  i = a("665906"),
  s = a("689938");

function d(e) {
  let t = (0, i.useIsThreadModerator)(e),
    a = e.isLockedThread();
  if (t) return a ? (0, n.jsx)(u.MenuItem, {
    id: "unlock-thread",
    label: e.isForumPost() ? s.default.Messages.UNLOCK_FORUM_POST : s.default.Messages.UNLOCK_THREAD,
    action: () => r.default.unlockThread(e)
  }) : (0, n.jsx)(u.MenuItem, {
    id: "lock-thread",
    label: e.isForumPost() ? s.default.Messages.LOCK_FORUM_POST : s.default.Messages.LOCK_THREAD,
    action: () => r.default.lockThread(e)
  })
}