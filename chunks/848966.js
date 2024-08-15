n.d(t, {
	Z: function () {
		return _;
	}
});
var r = n(725119),
	i = n(652853),
	a = n(347328),
	s = n(540440),
	o = n(553375),
	l = n(365583),
	u = n(582546),
	c = n(228168),
	d = n(689938);
function _(e) {
	let { onAction: t } = e,
		{ profileType: n } = (0, i.z)(),
		_ = (0, r.Z)({
			userId: e.user.id,
			section: c.oh.ACTIVITY,
			label: d.Z.Messages.USER_ACTIVITY_VIEW_ALL_ACTIVITY,
			onAction: () => (null == t ? void 0 : t({ action: 'PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM' }))
		});
	return [n !== c.y0.FULL_SIZE ? _ : null, (0, u.Z)(e), (0, o.Z)(e), (0, l.Z)(e), (0, a.Z)(e), (0, s.B)(e)].filter(
		(e) => null != e
	);
}
