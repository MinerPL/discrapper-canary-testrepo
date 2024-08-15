var a = t(735250),
	r = t(470079),
	i = t(120356),
	s = t.n(i),
	o = t(481060),
	l = t(838221),
	c = t(246364),
	d = t(700833),
	u = t(689938),
	m = t(944309);
function _(e) {
	let { onClick: n, text: t, icon: r } = e;
	return (0, a.jsx)('div', {
		className: m.addFormFieldContainer,
		children: (0, a.jsxs)(o.Clickable, {
			className: m.addFormField,
			onClick: n,
			children: [
				(0, a.jsx)(r, {
					className: m.icon,
					size: 'xs',
					color: 'currentColor'
				}),
				(0, a.jsx)(o.FormText, {
					className: m.addFormFieldText,
					children: t
				})
			]
		})
	});
}
n.Z = function (e) {
	let { addFormField: n, showManualApprovalWarning: i, guild: f, showHeader: C } = e,
		h = r.useCallback(
			(e) => {
				(0, d.Md)(e, n, f);
			},
			[n, f]
		),
		x = r.useCallback(
			(e) => {
				i
					? (0, o.openModalLazy)(async () => {
							let { default: n } = await t.e('54845').then(t.bind(t, 199836));
							return (t) =>
								(0, a.jsx)(n, {
									...t,
									onSubmit: () => h(e)
								});
						})
					: h(e);
			},
			[i, h]
		);
	return (0, a.jsxs)('div', {
		className: s()(m.spacingContainer, m.backgroundContainer),
		children: [
			C &&
				(0, a.jsx)('div', {
					className: m.containerTopHat,
					children: (0, a.jsx)(o.Text, {
						className: m.containerTopHatText,
						variant: 'text-xs/bold',
						color: 'header-secondary',
						children: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
					})
				}),
			(0, a.jsxs)('div', {
				className: m.leftRailIconContainer,
				children: [
					(0, a.jsx)('div', {
						className: m.iconContainer,
						children: (0, a.jsx)(o.PlusSmallIcon, {
							size: 'custom',
							color: 'currentColor',
							width: 18,
							height: 20,
							className: m.icon
						})
					}),
					(0, a.jsxs)(o.FormSection, {
						children: [
							(0, a.jsx)(o.FormTitle, {
								tag: 'h3',
								className: m.leftRailIconContainerTitle,
								children: u.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
							}),
							(0, a.jsx)(o.FormText, {
								className: m.leftRailIconContainerDescription,
								type: o.FormText.Types.DESCRIPTION,
								children: u.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
							}),
							(0, a.jsx)(_, {
								formFieldType: c.QJ.TEXT_INPUT,
								addFormField: n,
								icon: (0, o.makeIconCompat)(l.Z),
								text: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
								onClick: () => x(c.QJ.TEXT_INPUT)
							}),
							(0, a.jsx)(_, {
								formFieldType: c.QJ.PARAGRAPH,
								addFormField: n,
								icon: o.ChannelListIcon,
								text: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
								onClick: () => x(c.QJ.PARAGRAPH)
							}),
							(0, a.jsx)(_, {
								formFieldType: c.QJ.MULTIPLE_CHOICE,
								addFormField: n,
								icon: o.ListBulletsIcon,
								text: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
								onClick: () => x(c.QJ.MULTIPLE_CHOICE)
							})
						]
					})
				]
			})
		]
	});
};
