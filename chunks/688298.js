t.d(n, {
	Z: function () {
		return c;
	}
});
var a = t(735250),
	r = t(470079),
	i = t(481060),
	s = t(689938),
	o = t(548722);
function l(e) {
	let { showSecondaryColor: n, palette: t, onPrimaryColorChange: l, onSecondaryColorChange: c } = e,
		d = r.useRef(null);
	return (
		(0, i.useFocusLock)(d),
		(0, a.jsxs)('div', {
			className: o.popoutContainer,
			children: [
				(0, a.jsx)(i.Text, {
					variant: 'text-xs/semibold',
					color: 'header-secondary',
					className: o.customColorsHeader,
					children: s.Z.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
				}),
				(0, a.jsxs)('div', {
					ref: d,
					className: o.colorPickersContainer,
					children: [
						(0, a.jsxs)('div', {
							className: o.colorColumn,
							children: [
								(0, a.jsx)('div', {
									className: o.colorSwatch,
									style: { backgroundColor: t.primary }
								}),
								(0, a.jsx)(i.Text, {
									variant: 'text-xs/medium',
									color: 'text-normal',
									children: s.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
								}),
								(0, a.jsx)(i.CustomColorPicker, {
									className: o.colorPicker,
									value: t.primary,
									eagerUpdate: !0,
									wrapperComponentType: 'div',
									showEyeDropper: !0,
									onChange: l
								})
							]
						}),
						n &&
							(0, a.jsxs)('div', {
								className: o.colorColumn,
								children: [
									(0, a.jsx)('div', {
										className: o.colorSwatch,
										style: { backgroundColor: t.secondary }
									}),
									(0, a.jsx)(i.Text, {
										variant: 'text-xs/medium',
										color: 'text-normal',
										children: s.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
									}),
									(0, a.jsx)(i.CustomColorPicker, {
										className: o.colorPicker,
										value: t.secondary,
										eagerUpdate: !0,
										wrapperComponentType: 'div',
										showEyeDropper: !0,
										onChange: c
									})
								]
							})
					]
				})
			]
		})
	);
}
function c(e) {
	let {
		shouldShow: n,
		showSecondaryColor: t,
		onRequestClose: r,
		children: s,
		palette: o,
		onPrimaryColorChange: c,
		onSecondaryColorChange: d
	} = e;
	return (0, a.jsx)(i.Popout, {
		renderPopout: () =>
			(0, a.jsx)(l, {
				showSecondaryColor: t,
				palette: o,
				onPrimaryColorChange: c,
				onSecondaryColorChange: d
			}),
		position: 'left',
		shouldShow: n,
		onRequestClose: r,
		animation: i.Popout.Animation.TRANSLATE,
		animationPosition: 'right',
		children: s
	});
}
