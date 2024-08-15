t.d(n, {
	Z: function () {
		return E;
	}
});
var i = t(735250);
t(470079);
var a = t(442837),
	l = t(481060),
	r = t(332148),
	s = t(257559),
	o = t(496675),
	u = t(151007),
	d = t(981631),
	c = t(689938);
function E(e, n) {
	let t = (0, a.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
	return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
		? !1 === e.pinned
			? (0, i.jsx)(l.MenuItem, {
					id: 'pin',
					action: function (t) {
						t.shiftKey ? r.Z.pinMessage(n, e.id) : s.Z.confirmPin(n, e);
					},
					label: c.Z.Messages.PIN_MESSAGE,
					icon: l.PinIcon
				})
			: (0, i.jsx)(l.MenuItem, {
					id: 'unpin',
					action: function (t) {
						t.shiftKey ? r.Z.unpinMessage(n, e.id) : s.Z.confirmUnpin(n, e);
					},
					label: c.Z.Messages.UNPIN_MESSAGE,
					icon: l.PinIcon
				})
		: null;
}
