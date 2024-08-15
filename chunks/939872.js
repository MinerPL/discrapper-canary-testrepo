n.d(t, {
	m: function () {
		return d;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	r = n(17894),
	l = n(430824),
	o = n(313550),
	c = n(689938),
	u = n(947461);
let d = (e) => {
	let { onClose: t, listing: n, guildId: d } = e,
		_ = (0, a.e7)([l.Z], () => l.Z.getGuild(d), [d]),
		E = (0, o.Z)({
			listing: n,
			guildId: d
		});
	return (0, i.jsxs)('div', {
		className: u.confirmationContainer,
		children: [
			(0, i.jsx)(s.Heading, {
				className: u.confirmationHeader,
				variant: 'heading-lg/extrabold',
				children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
					serverName: null == _ ? void 0 : _.toString(),
					tierName: n.name
				})
			}),
			!E.isEmpty() &&
				(0, i.jsx)(s.Text, {
					className: u.confirmationSubtitle,
					variant: 'text-sm/normal',
					color: 'header-secondary',
					children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: E.asString() })
				}),
			(0, i.jsx)(s.Button, {
				className: u.openDiscordButton,
				onClick: () => (0, r.Z)('role_sub_mweb_success_modal'),
				children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
			}),
			(0, i.jsx)(s.Button, {
				className: u.doneButton,
				look: s.Button.Looks.BLANK,
				onClick: () => t(!0),
				children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
			})
		]
	});
};
