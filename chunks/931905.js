n.d(t, {
	h: function () {
		return o;
	},
	m: function () {
		return u;
	}
});
var r = n(735250);
n(470079);
var a = n(481060),
	i = n(17894),
	l = n(689938),
	s = n(410113);
let o = (e) => {
	let { onConfirm: t, onCancel: n, title: o, subtitle: u, confirmCta: c, showOpenDiscord: d = !0 } = e;
	return (0, r.jsxs)('div', {
		className: s.confirmationContainer,
		children: [
			(0, r.jsx)(a.Heading, {
				className: s.confirmationHeader,
				variant: 'heading-lg/extrabold',
				children: o
			}),
			null != u
				? (0, r.jsx)(a.Text, {
						className: s.confirmationSubtitle,
						variant: 'text-sm/normal',
						color: 'header-secondary',
						children: u
					})
				: null,
			(0, r.jsxs)('div', {
				className: s.buttonContainer,
				children: [
					d &&
						(0, r.jsx)(a.Button, {
							fullWidth: !0,
							onClick: () => (0, i.Z)('application_sub_mweb_success_modal'),
							children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
						}),
					(0, r.jsx)(a.Button, {
						fullWidth: !0,
						color: a.Button.Colors.PRIMARY,
						onClick: t,
						children: c
					}),
					null != n &&
						(0, r.jsx)(a.Button, {
							fullWidth: !0,
							color: a.Button.Colors.PRIMARY,
							look: a.Button.Looks.LINK,
							onClick: n,
							children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
						})
				]
			})
		]
	});
};
function u(e) {
	let { onConfirm: t, tierName: n, subscription: o } = e;
	return (0, r.jsxs)('div', {
		className: s.confirmationContainer,
		children: [
			(0, r.jsx)(a.Heading, {
				className: s.confirmationHeader,
				variant: 'heading-lg/extrabold',
				children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({ tier: n })
			}),
			(0, r.jsx)(a.Text, {
				className: s.confirmationSubtitle,
				variant: 'text-sm/normal',
				color: 'header-secondary',
				children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({ timestamp: null == o ? void 0 : o.currentPeriodEnd })
			}),
			(0, r.jsxs)('div', {
				className: s.buttonContainer,
				children: [
					(0, r.jsx)(a.Button, {
						className: s.__invalid_openDiscordButton,
						onClick: () => (0, i.Z)('application_sub_mweb_success_modal'),
						children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
					}),
					(0, r.jsx)(a.Button, {
						className: s.__invalid_doneButton,
						look: a.Button.Looks.BLANK,
						onClick: t,
						children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
					})
				]
			})
		]
	});
}
