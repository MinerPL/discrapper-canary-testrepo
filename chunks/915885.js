n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(704215),
	a = n(481060),
	s = n(566840),
	o = n(434479),
	c = n(527379),
	u = n(689938);
function d(e) {
	let { guild: t, selected: n } = e,
		d = l.useCallback(() => {
			(0, c._X)(t.id);
		}, [t.id]),
		h = (0, s.XL)(t.id, r.z.MEMBERS_LAUNCH_UPSELL);
	return (0, i.jsx)('div', {
		ref: h,
		children: (0, i.jsx)(o.m, {
			id: 'members-'.concat(t.id),
			renderIcon: (e) =>
				(0, i.jsx)(a.GroupIcon, {
					size: 'md',
					color: 'currentColor',
					className: e
				}),
			text: u.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
			selected: n,
			onClick: d
		})
	});
}
