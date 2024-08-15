t.d(s, {
	Z: function () {
		return u;
	}
});
var n = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(481060),
	o = t(654904),
	l = t(993413),
	c = t(486324),
	d = t(689938),
	_ = t(335027);
let E = [
	{
		name: 'gif',
		extensions: ['gif']
	}
];
function u(e) {
	let { showRemoveAvatarButton: s, errors: t, onAvatarChange: a, sectionTitle: u, changeAvatarButtonText: I, guildId: T, className: S, disabled: N = !1, isTryItOutFlow: C = !1, forcedDivider: m, withHighlight: A = !1 } = e,
		O = A ? r.ShinyButton : r.Button;
	return (0, n.jsx)(l.Z, {
		className: S,
		title: u,
		errors: t,
		disabled: N,
		forcedDivider: m,
		children: (0, n.jsxs)('div', {
			className: _.buttonsContainer,
			children: [
				(0, n.jsx)(O, {
					className: i()({ [_.buttonHighlighted]: A }),
					size: r.Button.Sizes.SMALL,
					onClick: () => (0, o.$r)(c.pC.AVATAR, T, C, C ? E : void 0),
					children: null != I ? I : d.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
				}),
				s &&
					(0, n.jsx)(r.Button, {
						className: _.removeButton,
						color: r.Button.Colors.PRIMARY,
						look: r.Button.Looks.LINK,
						size: r.Button.Sizes.SMALL,
						onClick: () => a(null),
						children: null != T ? d.Z.Messages.USER_SETTINGS_RESET_AVATAR : d.Z.Messages.USER_SETTINGS_REMOVE_AVATAR
					})
			]
		})
	});
}
