t.d(s, {
	Z: function () {
		return N;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(481060),
	l = t(906732),
	c = t(864106),
	d = t(1585),
	_ = t(580747),
	E = t(345861),
	u = t(150039),
	I = t(993413),
	T = t(689938),
	S = t(539523);
function N(e) {
	let {
			user: s,
			guild: t,
			className: i,
			sectionTitle: E,
			forcedDivider: N = !1,
			withTutorial: m = !1,
			isTryItOutFlow: A = !1
		} = e,
		{ analyticsLocations: O } = (0, l.ZP)(),
		g = null != t,
		{
			userAvatarDecoration: h,
			guildAvatarDecoration: p,
			pendingAvatarDecoration: R,
			pendingErrors: x
		} = (0, u.$U)(s, t),
		M = (0, _.Z)('enable_avatar_decoration_uploads'),
		f = a.useCallback(
			() =>
				(0, d.ps)({
					analyticsLocations: O,
					isTryItOutFlow: A,
					guild: t
				}),
			[O, A, t]
		),
		D = A || void 0 !== R ? null != R : (g ? p : h) != null,
		P = m ? o.ShinyButton : o.Button;
	return (0, n.jsxs)(I.Z, {
		className: i,
		forcedDivider: N,
		hasBackground: !0,
		title: E,
		errors: x,
		children: [
			(0, n.jsxs)('div', {
				className: S.buttonsContainer,
				children: [
					(0, n.jsx)(P, {
						size: o.Button.Sizes.SMALL,
						onClick: f,
						className: r()({ [S.buttonHighlighted]: m }),
						children: T.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
					}),
					D &&
						(0, n.jsx)(o.Button, {
							className: S.removeButton,
							color: o.Button.Colors.PRIMARY,
							look: o.Button.Looks.LINK,
							size: o.Button.Sizes.SMALL,
							onClick: function () {
								(0, u.PO)(null == t ? void 0 : t.id, null);
							},
							children: (0, c.ad)(s, t)
								? T.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION
								: T.Z.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
						})
				]
			}),
			s.isStaff() && M && (0, n.jsx)(C, { user: s })
		]
	});
}
let C = (e) => {
	let { user: s } = e;
	return (0, n.jsxs)('div', {
		className: S.overrideButtonsContainer,
		children: [
			(0, n.jsx)(o.Text, {
				variant: 'text-xs/bold',
				children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
			}),
			(0, n.jsx)(E.Z, {
				onChange: (e) => {
					null != e &&
						(s.avatarDecoration = {
							asset: e,
							skuID: 'PALUE000000001'
						});
				},
				buttonCTA: 'Upload Override'
			})
		]
	});
};
