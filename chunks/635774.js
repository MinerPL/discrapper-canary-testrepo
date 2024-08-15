a.d(t, {
	Z: function () {
		return g;
	}
});
var n = a(735250);
a(470079);
var s = a(120356),
	i = a.n(s),
	r = a(442837),
	o = a(481060),
	l = a(230711),
	u = a(706454),
	d = a(346585),
	c = a(347649),
	E = a(981631),
	_ = a(689938),
	m = a(740080);
function g(e) {
	let { onClose: t, handleStartFlow: a } = e,
		s = (0, c.CC)(),
		g = (0, r.e7)([u.default], () => u.default.locale);
	return (0, n.jsxs)('div', {
		className: m.infoContainer,
		children: [
			(0, n.jsx)(o.Heading, {
				className: i()(m.finishTitle, { [m.finishTitlePadding]: s }),
				color: 'header-primary',
				variant: 'heading-xl/bold',
				children: s
					? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({ date: (0, d.IE)(g) })
					: _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
			}),
			(0, n.jsx)(o.Text, {
				className: m.subtitleFinish,
				color: 'header-secondary',
				variant: 'text-md/medium',
				children: s
					? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({ date: (0, d.IE)(g) })
					: _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
			}),
			(0, n.jsx)(o.Text, {
				className: m.promptFinish,
				color: 'header-secondary',
				variant: 'text-md/medium',
				children: _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
					onClick: () => {
						t(), l.Z.open(E.oAB.ACCOUNT);
					}
				})
			}),
			(0, n.jsx)(o.Button, {
				className: m.button,
				type: 'button',
				size: o.Button.Sizes.SMALL,
				onClick: s ? a : t,
				children: s
					? _.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
					: _.Z.Messages.INVITES_DISABLED_CONFIRMATION
			})
		]
	});
}
