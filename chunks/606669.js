t.d(n, {
	Z: function () {
		return u;
	}
});
var o = t(735250);
t(470079);
var r = t(442837),
	a = t(481060),
	i = t(857595),
	c = t(607070),
	l = t(689938);
function u() {
	let {
			saturation: e,
			useReducedMotion: n,
			roleStyle: t
		} = (0, r.cj)([c.Z], () => ({
			saturation: c.Z.saturation,
			useReducedMotion: c.Z.useReducedMotion,
			roleStyle: c.Z.roleStyle
		})),
		u = [
			{
				name: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
				value: 'username'
			},
			{
				name: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
				value: 'dot'
			},
			{
				name: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
				value: 'hidden'
			}
		];
	return [
		(0, o.jsx)(
			a.MenuGroup,
			{
				children: (0, o.jsx)(a.MenuCheckboxItem, {
					id: 'reduced-motion',
					label: l.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,
					checked: n,
					action: () => (0, i.Zt)(n ? 'no-preference' : 'reduce')
				})
			},
			'reduced-motion'
		),
		(0, o.jsx)(
			a.MenuGroup,
			{
				children: (0, o.jsx)(a.MenuControlItem, {
					id: 'input',
					label: l.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
					control: (n, t) =>
						(0, o.jsx)(a.MenuSliderControl, {
							...n,
							ref: t,
							value: 100 * e,
							onChange: (e) => (0, i.o2)(e / 100),
							'aria-label': l.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
						})
				})
			},
			'input'
		),
		(0, o.jsx)(
			a.MenuGroup,
			{
				children: (0, o.jsx)(a.MenuItem, {
					id: 'role-colors',
					label: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
					children: u.map((e) => {
						let { name: n, value: r } = e;
						return (0, o.jsx)(
							a.MenuRadioItem,
							{
								id: r,
								group: 'role-colors',
								checked: r === t,
								label: n,
								action: () => (0, i.u1)(r)
							},
							r
						);
					})
				})
			},
			'role-colors'
		)
	];
}
