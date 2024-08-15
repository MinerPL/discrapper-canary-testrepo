n.d(t, {
	Z: function () {
		return p;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(816782),
	r = n(318661),
	o = n(57048),
	c = n(87728),
	u = n(433355),
	d = n(665149),
	h = n(981631),
	m = n(689938);
function p(e) {
	let { channel: t, showCallOrActivityPanel: n } = e,
		p = (0, a.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
		_ = (0, r.ZP)(t.getRecipientId()),
		f = (0, c.Z)(),
		E = p === h.ULH.PROFILE && !f;
	return (0, i.jsx)(d.JO, {
		disabled: f || n,
		tooltip:
			f || n
				? m.Z.Messages.SHOW_USER_PROFILE_UNAVAILABLE
				: E
					? m.Z.Messages.HIDE_USER_PROFILE
					: m.Z.Messages.SHOW_USER_PROFILE,
		icon: s.UserCircleStatusIcon,
		onClick: () => {
			(0, o.a)(_, !E), l.Z.toggleProfilePanelSection();
		},
		selected: E && !f && !n
	});
}
