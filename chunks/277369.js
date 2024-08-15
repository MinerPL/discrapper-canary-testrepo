n.d(t, {
	Z: function () {
		return d;
	}
});
var s = n(735250);
n(470079);
var a = n(399606),
	i = n(481060),
	r = n(430824),
	l = n(594174),
	o = n(723047),
	c = n(689938);
function d(e) {
	let { guildId: t, application: d } = e,
		u = (0, a.e7)([r.Z], () => r.Z.getGuild(t)),
		_ = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
		I = (0, o.mY)();
	if (null == u || !u.isOwner(_)) return null;
	let E = d.team;
	return (0, s.jsxs)('div', {
		children: [
			(0, s.jsx)(i.FormText, {
				type: i.FormText.Types.DESCRIPTION,
				disabled: I,
				children:
					null != E
						? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_DESCRIPTION.format({
								teamName: E.name
							})
						: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_NO_TEAM_DESCRIPTION
			}),
			(0, s.jsx)(i.Spacer, { size: 16 }),
			(0, s.jsx)(i.Button, {
				look: i.Button.Looks.FILLED,
				color: null != E ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
				onClick: () => {
					var e;
					return (
						(e = d),
						void (0, i.openModalLazy)(async () => {
							let { default: t } = await n.e('83942').then(n.bind(n, 743582));
							return (n) =>
								(0, s.jsx)(t, {
									...n,
									application: e
								});
						})
					);
				},
				disabled: I,
				children:
					null != E
						? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_CHANGE_TEAM_CTA
						: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_SELECT_TEAM_CTA
			})
		]
	});
}
