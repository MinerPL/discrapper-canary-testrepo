t.d(n, {
	Z: function () {
		return c;
	}
});
var l = t(735250),
	s = t(470079),
	i = t(442837),
	a = t(481060),
	r = t(249842),
	d = t(838367),
	u = t(83474);
function c(e) {
	let { guildId: n, channelId: t, messageId: c, ...o } = e,
		{ unavailable: h, guild: _ } = (0, i.cj)(
			[d.Z],
			() => ({
				guild: d.Z.getGuild(n),
				unavailable: d.Z.hasFetchFailed(n)
			}),
			[n]
		),
		m = null != _,
		E = s.useCallback(async () => {
			try {
				!m && (await (0, r.P)(n));
			} catch {}
		}, [m, n]);
	return h
		? (0, l.jsx)(a.Popout, {
				position: 'right',
				renderPopout: (e) => (0, l.jsx)(u.SK, {}),
				...o
			})
		: (0, l.jsx)(a.Popout, {
				position: 'right',
				preload: E,
				renderPopout: (e) =>
					null == _
						? (0, l.jsx)(l.Fragment, {})
						: (0, l.jsx)(u.sK, {
								...e,
								guild: _,
								channelId: t,
								messageId: c
							}),
				...o
			});
}
