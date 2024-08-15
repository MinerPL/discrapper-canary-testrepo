var a = t(735250);
t(470079);
var r = t(120356),
	i = t.n(r),
	s = t(481060),
	o = t(246364),
	l = t(700833),
	c = t(689938),
	d = t(944309);
n.Z = function (e) {
	let { addFormField: n, guild: t } = e;
	return (0, a.jsxs)('div', {
		className: i()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
		children: [
			(0, a.jsx)('div', {
				className: d.iconContainer,
				children: (0, a.jsx)(s.BookCheckIcon, {
					size: 'custom',
					color: 'currentColor',
					width: 18,
					height: 20,
					className: d.icon
				})
			}),
			(0, a.jsxs)(s.FormSection, {
				children: [
					(0, a.jsx)(s.FormTitle, {
						tag: 'h3',
						className: d.leftRailIconContainerTitle,
						children: c.Z.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
					}),
					(0, a.jsx)(s.FormText, {
						className: d.leftRailIconContainerDescription,
						type: s.FormText.Types.DESCRIPTION,
						children: c.Z.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
					}),
					(0, a.jsx)(s.Button, {
						onClick: () => (0, l.Md)(o.QJ.TERMS, n, t),
						children: c.Z.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
					})
				]
			})
		]
	});
};
