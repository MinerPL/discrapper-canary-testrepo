t.d(n, {
	Z: function () {
		return c;
	}
});
var a = t(735250),
	l = t(470079),
	i = t(481060),
	r = t(493683),
	u = t(699516),
	o = t(594174),
	s = t(933557),
	d = t(689938);
function c(e, n) {
	let c = l.useCallback(() => {
		let l = (0, s.F6)(e, o.default, u.Z),
			c = d.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: l }),
			_ = d.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: l });
		e.isManaged() && ((c = d.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name: l })), (_ = d.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: l })));
		let M = function (t) {
			let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			r.Z.closePrivateChannel(e.id, n, a);
		};
		(0, i.openModalLazy)(async () => {
			let { default: e } = await t.e('14604').then(t.bind(t, 960670));
			return (n) =>
				(0, a.jsx)(e, {
					header: c,
					body: _,
					onSubmit: M,
					...n
				});
		});
	}, [e, n]);
	return (0, a.jsx)(i.MenuItem, {
		id: 'leave-channel',
		label: d.Z.Messages.LEAVE_GROUP_DM,
		action: c,
		color: 'danger'
	});
}
