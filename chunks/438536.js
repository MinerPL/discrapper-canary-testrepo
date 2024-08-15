n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	r = n(569471),
	l = n(346479),
	o = n(689938);
function c(e, t) {
	return (0, a.e7)([r.Z], () => r.Z.hasJoined(e.id))
		? (0, i.jsx)(s.MenuItem, {
				id: 'leave-thread',
				label: e.isForumPost() ? o.Z.Messages.LEAVE_FORUM_POST : o.Z.Messages.LEAVE_THREAD,
				action: () => l.Z.leaveThread(e, t)
			})
		: (0, i.jsx)(s.MenuItem, {
				id: 'join-thread',
				label: e.isForumPost() ? o.Z.Messages.JOIN_FORUM_POST : o.Z.Messages.JOIN_THREAD,
				action: () => l.Z.joinThread(e, t)
			});
}
