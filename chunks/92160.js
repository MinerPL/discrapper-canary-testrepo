n.d(t, {
	Z: function () {
		return c;
	}
});
var s = n(735250);
n(470079);
var a = n(120356),
	i = n.n(a),
	r = n(481060),
	l = n(689938),
	o = n(998777);
function c(e) {
	let { className: t, enabled: n, previewCTA: a, onPreview: c, onToggle: d, animateStatus: u, firstLine: _, secondLine: I, disabled: E } = e;
	return (0, s.jsxs)('div', {
		className: i()(t, o.enableContainer),
		children: [
			n
				? (0, s.jsx)(r.CheckmarkLargeIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 24,
						height: 24,
						className: i()(o.activeCircle, { [o.animate]: u })
					})
				: (0, s.jsx)(r.PencilIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 24,
						height: 24,
						className: i()(o.editCircle, { [o.animate]: u })
					}),
			(0, s.jsxs)('div', {
				className: o.enableDescription,
				children: [
					(0, s.jsx)(r.Text, {
						variant: 'text-sm/normal',
						children: _
					}),
					(0, s.jsx)(r.Text, {
						variant: 'text-sm/normal',
						children: I
					})
				]
			}),
			(0, s.jsxs)('div', {
				className: o.buttonContainer,
				children: [
					null == c
						? null
						: (0, s.jsx)(r.Button, {
								className: o.previewButton,
								look: r.Button.Looks.LINK,
								size: r.Button.Sizes.SMALL,
								onClick: c,
								disabled: E,
								color: r.Button.Colors.PRIMARY,
								children: null != a ? a : l.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PREVIEW
							}),
					(0, s.jsx)(r.Button, {
						disabled: null == d || E,
						size: r.Button.Sizes.SMALL,
						color: n ? r.Button.Colors.RED : r.Button.Colors.BRAND,
						onClick: d,
						children: n ? l.Z.Messages.DISABLE : l.Z.Messages.ENABLE
					})
				]
			})
		]
	});
}
