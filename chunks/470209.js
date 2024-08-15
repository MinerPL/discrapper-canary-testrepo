t.d(A, {
	Z: function () {
		return C;
	}
});
var a = t(735250);
t(470079);
var n = t(512722),
	r = t.n(n),
	s = t(866442),
	o = t(481060),
	l = t(313201),
	i = t(981631),
	d = t(689938),
	c = t(793935);
let u = (0, l.hQ)();
function C(e) {
	let { newRoleParams: A, setNewRoleParams: t } = e,
		{ name: n, color: l } = A,
		C = (e) =>
			t(
				(A) => (
					r()(null != A, 'newRoleParams should be defined'),
					{
						...A,
						color: e
					}
				)
			);
	return (0, a.jsxs)('div', {
		className: c.roleInputContainer,
		children: [
			(0, a.jsx)(o.TextInput, {
				autoFocus: !0,
				value: n,
				onChange: (e) =>
					t(
						(A) => (
							r()(null != A, 'newRoleParams should be defined'),
							{
								...A,
								name: e
							}
						)
					),
				id: u,
				placeholder: d.Z.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
				maxLength: i.VKK,
				inputClassName: c.input
			}),
			(0, a.jsxs)('div', {
				className: c.roleColorContainer,
				children: [
					(0, a.jsx)(o.HiddenVisually, {
						children: d.Z.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({ color: (0, s.Rf)(l) })
					}),
					(0, a.jsx)('div', {
						className: c.roleColorPreview,
						style: { backgroundColor: (0, s.Rf)(l) }
					}),
					(0, a.jsx)(o.Spacer, {
						size: 8,
						horizontal: !0
					}),
					(0, a.jsx)(o.Popout, {
						renderPopout: (e) =>
							(0, a.jsx)(o.CustomColorPicker, {
								...e,
								value: l,
								onChange: C
							}),
						children: (e) =>
							(0, a.jsx)(o.Clickable, {
								...e,
								tag: 'span',
								'aria-label': d.Z.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
								className: c.dropperIconContainer,
								children: (0, a.jsx)(o.EyeDropperIcon, {
									size: 'xs',
									color: 'currentColor',
									className: c.dropperIcon
								})
							})
					})
				]
			})
		]
	});
}
