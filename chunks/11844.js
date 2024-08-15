var n = t(735250),
	a = t(470079),
	i = t(481060),
	r = t(906732),
	o = t(879892),
	l = t(709586),
	c = t(267642),
	d = t(981631),
	_ = t(689938),
	E = t(123600);
s.Z = function () {
	let e = a.useRef(null),
		{ analyticsLocations: s } = (0, r.ZP)();
	function u(t) {
		null != e.current && (0, i.closeModal)(e.current),
			(0, o.u)({
				analyticsLocation: {
					page: d.ZY5.GUILD_BOOSTING_USER_SETTINGS,
					section: d.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
					object: d.qAy.BUTTON_CTA,
					objectType: d.Qqv.BUY
				},
				analyticsLocations: s,
				guild: t
			});
	}
	async function I() {
		e.current = await (0, i.openModalLazy)(
			async () => {
				let { default: e } = await Promise.resolve().then(t.bind(t, 719228));
				return (s) =>
					(0, n.jsx)(e, {
						...s,
						onSelectGuild: u
					});
			},
			{
				onCloseRequest: () => {
					null != e.current && (0, i.closeModal)(e.current);
				}
			}
		);
	}
	let T = (0, c.aq)();
	return (0, n.jsxs)('div', {
		className: E.wrapper,
		children: [
			(0, n.jsx)(l.Z, {
				className: E.boostIcon,
				width: 16,
				height: 16
			}),
			(0, n.jsx)(i.Text, {
				className: E.copy,
				color: 'header-secondary',
				variant: 'text-sm/medium',
				children: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
					boostAnyGuildHook: (e, s) => {
						let t = null != T,
							a = (0, n.jsx)(
								i.Button,
								{
									className: E.cta,
									disabled: t,
									color: i.Button.Colors.LINK,
									look: i.Button.Looks.LINK,
									onClick: t ? void 0 : I,
									children: e
								},
								s
							);
						return t
							? (0, n.jsx)(
									i.Tooltip,
									{
										text: T,
										children: (e) =>
											(0, n.jsx)('span', {
												...e,
												children: a
											})
									},
									s
								)
							: a;
					}
				})
			})
		]
	});
};
