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
  var t;
  let a = (0, i.useCanManageThread)(e),
    d = (0, i.useCanUnarchiveThread)(e),
    l = e.isArchivedThread();
  if (l ? d : a) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, n.jsx)(u.MenuItem, {
    id: "unarchive-thread",
    label: e.isForumPost() ? s.default.Messages.UNARCHIVE_FORUM_POST : s.default.Messages.UNARCHIVE_THREAD,
    action: () => r.default.unarchiveThread(e, !1)
  }) : (0, n.jsx)(u.MenuItem, {
    id: "archive-thread",
    label: e.isForumPost() ? s.default.Messages.ARCHIVE_FORUM_POST : s.default.Messages.ARCHIVE_THREAD,
    action: () => r.default.archiveThread(e, !1)
  })
}