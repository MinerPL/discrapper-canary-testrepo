t.d(s, {
	Z: function () {
		return E;
	}
});
var n = t(735250);
t(470079);
var a = t(442837),
	i = t(481060),
	r = t(993413),
	o = t(496675),
	l = t(52597),
	c = t(981631),
	d = t(689938),
	_ = t(290605);
function E(e) {
	let { errors: s, pendingNick: t, currentNick: E, username: u, guild: I } = e,
		T = null != t ? t : E,
		S = (0, a.e7)([o.Z], () => o.Z.can(c.Plq.CHANGE_NICKNAME, I) || o.Z.can(c.Plq.MANAGE_NICKNAMES, I));
	return (0, n.jsxs)(r.Z, {
		title: d.Z.Messages.SERVER_NICKNAME,
		errors: s,
		children: [
			(0, n.jsx)(i.TextInput, {
				value: null != T ? T : '',
				placeholder: u,
				maxLength: c.l$U,
				onChange: function (e) {
					(0, l.wi)(e, E);
				},
				disabled: !S
			}),
			!S &&
				(0, n.jsx)(i.FormText, {
					className: _.nicknameDisabled,
					type: i.FormText.Types.DESCRIPTION,
					children: d.Z.Messages.CHANGE_IDENTITY_NICKNAME_PERMISSIONS_DISABLED
				})
		]
	});
}
