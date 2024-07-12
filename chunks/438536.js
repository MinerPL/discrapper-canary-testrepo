t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  s = t(481060),
  u = t(569471),
  r = t(346479),
  l = t(689938);

function d(e, n) {
  return (0, a.e7)([u.Z], () => u.Z.hasJoined(e.id)) ? (0, i.jsx)(s.MenuItem, {
id: 'leave-thread',
label: e.isForumPost() ? l.Z.Messages.LEAVE_FORUM_POST : l.Z.Messages.LEAVE_THREAD,
action: () => r.Z.leaveThread(e, n)
  }) : (0, i.jsx)(s.MenuItem, {
id: 'join-thread',
label: e.isForumPost() ? l.Z.Messages.JOIN_FORUM_POST : l.Z.Messages.JOIN_THREAD,
action: () => r.Z.joinThread(e, n)
  });
}