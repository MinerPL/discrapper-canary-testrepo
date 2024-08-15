t.d(n, {
	Z: function () {
		return f;
	}
});
var i = t(735250);
t(470079);
var s = t(442837),
	l = t(481060),
	a = t(904245),
	r = t(257559),
	o = t(665906),
	u = t(496675),
	d = t(594174),
	c = t(981631),
	E = t(689938);
function f(e, n) {
	let t = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
		f = (0, o.$R)(n),
		g = (0, s.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]),
		m = g || (null != t && e.canDeleteOwnMessage(t.id));
	return e.state === c.yb.SENDING || !m || c.V$x.UNDELETABLE.has(e.type) || !f
		? null
		: (0, i.jsx)(l.MenuItem, {
				id: 'delete',
				label: E.Z.Messages.DELETE_MESSAGE,
				action: function (t) {
					e.state === c.yb.SEND_FAILED ? a.Z.deleteMessage(n.id, e.id, !0) : t.shiftKey ? a.Z.deleteMessage(n.id, e.id) : r.Z.confirmDelete(n, e, !0);
				},
				color: 'danger',
				icon: l.TrashIcon
			});
}
