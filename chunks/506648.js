var i = n(735250),
	a = n(470079),
	s = n(481060),
	r = n(770146),
	l = n(863969),
	o = n(38761),
	c = n(6074),
	d = n(39377),
	u = n(981631),
	_ = n(689938),
	E = n(269866);
let h = [
		{
			feature: u.Qa3.SINGLE_PLAYER,
			getText: () => _.Z.Messages.APPLICATION_STORE_SINGLE_PLAYER,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
			IconComponent: s.UserIcon
		},
		{
			feature: u.Qa3.LOCAL_MULTIPLAYER,
			getText: () => _.Z.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
			IconComponent: s.GroupIcon
		},
		{
			feature: u.Qa3.ONLINE_MULTIPLAYER,
			getText: () => _.Z.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
			IconComponent: s.GroupIcon
		},
		{
			feature: u.Qa3.PVP,
			getText: () => _.Z.Messages.APPLICATION_STORE_PVP,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_PVP_TOOLTIP,
			IconComponent: s.ModerationIcon
		},
		{
			feature: u.Qa3.LOCAL_COOP,
			getText: () => _.Z.Messages.APPLICATION_STORE_LOCAL_COOP,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
			IconComponent: s.GroupIcon
		},
		{
			feature: u.Qa3.ONLINE_COOP,
			getText: () => _.Z.Messages.APPLICATION_STORE_ONLINE_COOP,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
			IconComponent: s.GroupIcon
		},
		{
			feature: u.Qa3.CROSS_PLATFORM,
			getText: () => _.Z.Messages.APPLICATION_STORE_CROSS_PLATFORM,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
			IconComponent: s.RefreshIcon
		},
		{
			feature: u.Qa3.RICH_PRESENCE,
			getText: () => _.Z.Messages.APPLICATION_STORE_RICH_PRESENCE,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
			IconComponent: c.Z
		},
		{
			feature: u.Qa3.DISCORD_GAME_INVITES,
			getText: () => _.Z.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
			IconComponent: o.Z
		},
		{
			feature: u.Qa3.SPECTATOR_MODE,
			getText: () => _.Z.Messages.APPLICATION_STORE_SPECTATOR_MODE,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
			IconComponent: s.VideoIcon
		},
		{
			feature: u.Qa3.CONTROLLER_SUPPORT,
			getText: () => _.Z.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
			IconComponent: s.DpadIcon
		},
		{
			feature: u.Qa3.CLOUD_SAVES,
			getText: () => _.Z.Messages.APPLICATION_STORE_CLOUD_SAVES,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
			IconComponent: l.Z
		},
		{
			feature: u.Qa3.SECURE_NETWORKING,
			getText: () => _.Z.Messages.APPLICATION_STORE_SECURE_NETWORKING,
			getTooltip: () => _.Z.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
			IconComponent: d.Z
		}
	],
	m = (e) => {
		let { IconComponent: t, text: n, tooltip: a } = e;
		return (0, i.jsxs)('div', {
			className: E.row,
			children: [
				(0, i.jsx)(s.Tooltip, {
					text: a,
					children: (e) =>
						(0, i.jsx)(t, {
							className: E.featureIcon,
							...e
						})
				}),
				(0, i.jsx)('span', {
					className: E.featureText,
					children: n
				}),
				(0, i.jsx)(s.CheckmarkLargeIcon, {
					size: 'md',
					color: 'currentColor',
					className: E.checkmarkIcon
				})
			]
		});
	};
class I extends a.PureComponent {
	render() {
		let { sku: e } = this.props,
			t = h
				.filter((t) => {
					let { feature: n } = t;
					return e.features.has(n);
				})
				.map((e) => {
					let { feature: t, IconComponent: n, getText: a, getTooltip: s } = e;
					return (0, i.jsx)(
						m,
						{
							IconComponent: n,
							text: a(),
							tooltip: s()
						},
						t
					);
				});
		return 0 === t.length
			? null
			: (0, i.jsxs)('div', {
					className: E.features,
					children: [(0, i.jsx)(r.Z, { children: _.Z.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES }), t]
				});
	}
}
t.Z = I;
