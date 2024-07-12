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
  let n = (0, d.Xb)(e),
t = e.isLockedThread();
  if (n)
return t ? (0, i.jsx)(a.MenuItem, {
  id: 'unlock-thread',
  label: e.isForumPost() ? s.Z.Messages.UNLOCK_FORUM_POST : s.Z.Messages.UNLOCK_THREAD,
  action: () => r.Z.unlockThread(e)
}) : (0, i.jsx)(a.MenuItem, {
  id: 'lock-thread',
  label: e.isForumPost() ? s.Z.Messages.LOCK_FORUM_POST : s.Z.Messages.LOCK_THREAD,
  action: () => r.Z.lockThread(e)
});
}