t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(346479),
  d = t(665906),
  s = t(689938);

function o(e) {
  var n;
  let t = (0, d.C7)(e),
o = (0, d.tc)(e),
u = e.isArchivedThread();
  if (u ? o : t)
return (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.archived) ? (0, i.jsx)(a.MenuItem, {
  id: 'unarchive-thread',
  label: e.isForumPost() ? s.Z.Messages.UNARCHIVE_FORUM_POST : s.Z.Messages.UNARCHIVE_THREAD,
  action: () => r.Z.unarchiveThread(e, !1)
}) : (0, i.jsx)(a.MenuItem, {
  id: 'archive-thread',
  label: e.isForumPost() ? s.Z.Messages.ARCHIVE_FORUM_POST : s.Z.Messages.ARCHIVE_THREAD,
  action: () => r.Z.archiveThread(e, !1)
});
}