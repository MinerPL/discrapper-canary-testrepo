t.d(s, {
	Z: function () {
		return E;
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
	_ = t(949985);
function E(e) {
	let {
			showRemoveBannerButton: s,
			errors: t,
			onBannerChange: a,
			guildId: E,
			className: u,
			disabled: I = !1,
			showPremiumIcon: T = !0,
			isTryItOutFlow: S = !1,
			forcedDivider: N,
			withHighlight: C = !1
		} = e,
		m = C ? r.ShinyButton : r.Button;
	return (0, n.jsx)(l.Z, {
		className: u,
		title: d.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
		showPremiumIcon: T,
		errors: t,
		disabled: I,
		forcedDivider: N,
		children: (0, n.jsxs)('div', {
			className: _.buttonsContainer,
			children: [
				(0, n.jsx)(m, {
					className: i()({ [_.buttonHighlighted]: C }),
					size: r.Button.Sizes.SMALL,
					onClick: () => (0, o.$r)(c.pC.BANNER, E, S, void 0),
					children: d.Z.Messages.CHANGE_BANNER
				}),
				s &&
					(0, n.jsx)(r.Button, {
						className: _.removeButton,
						color: r.Button.Colors.PRIMARY,
						look: r.Button.Looks.LINK,
						size: r.Button.Sizes.SMALL,
						onClick: () => a(null),
						children: null != E ? d.Z.Messages.USER_SETTINGS_RESET_BANNER : d.Z.Messages.USER_SETTINGS_REMOVE_BANNER
					})
			]
		})
	});
}
