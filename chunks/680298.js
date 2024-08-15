t.d(n, {
	Z: function () {
		return u;
	}
});
var i = t(735250),
	a = t(470079),
	s = t(481060),
	l = t(239091),
	r = t(911969),
	o = t(399860),
	d = t(689938),
	c = t(521422);
function u(e) {
	let { applicationIcon: n, applicationName: u, canNavigate: I, command: m, guildId: _ } = e,
		N = a.useMemo(() => {
			var e;
			return 0 !== Object.keys(null !== (e = m.permissions) && void 0 !== e ? e : {}).length;
		}, [m.permissions]),
		E = a.useCallback(() => {
			null != m &&
				I() &&
				(0, s.openModalLazy)(async () => {
					let { default: e } = await t.e('78786').then(t.bind(t, 50474));
					return (t) =>
						(0, i.jsx)(e, {
							applicationIcon: n,
							applicationId: m.applicationId,
							applicationName: u,
							command: m,
							guildId: _,
							...t
						});
				});
		}, [n, u, I, m, _]),
		T = a.useCallback(
			(e) => {
				(0, l.jW)(e, async () => {
					let { default: e } = await t.e('5396').then(t.bind(t, 731646));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							id: m.id,
							label: d.Z.Messages.COPY_ID_COMMAND
						});
				});
			},
			[m]
		),
		h = m.type === r.yU.CHAT ? s.SlashBoxIcon : s.PaperIcon,
		g = (0, o.gw)(m.type, m.displayName);
	return (0, i.jsxs)(s.Clickable, {
		onClick: E,
		className: c.item,
		onContextMenu: T,
		children: [
			(0, i.jsxs)('div', {
				className: c.identifier,
				children: [
					(0, i.jsx)(h, {
						className: c.icon,
						size: 'md',
						color: 'currentColor'
					}),
					(0, i.jsx)(s.Text, {
						variant: 'text-md/normal',
						children: g
					})
				]
			}),
			(0, i.jsx)('div', {
				className: c.statusContainer,
				children: N
					? (0, i.jsxs)('div', {
							className: c.statusLine,
							children: [
								(0, i.jsx)(s.Text, {
									variant: 'text-md/normal',
									children: d.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES
								}),
								(0, i.jsx)(s.CircleInformationIcon, {
									size: 'sm',
									color: 'currentColor',
									className: c.statusIcon
								})
							]
						})
					: null
			})
		]
	});
}
