var i = n(735250),
	a = n(470079),
	s = n(442837),
	l = n(481060),
	r = n(287734),
	o = n(358221),
	c = n(305325),
	u = n(281956),
	d = n(27457),
	h = n(823379),
	m = n(5192),
	p = n(501655),
	_ = n(689938),
	f = n(226409);
let E = (e, t) => m.ZP.getName(e.getGuildId(), e.id, t.user);
t.Z = function (e) {
	var t, n;
	let { participants: m, channel: g, hasConnectPermission: C } = e,
		I = (0, u.J)(g.guild_id),
		x = a.useCallback(() => {
			I ? (0, c.hk)(g.guild_id, () => r.default.selectVoiceChannel(g.id)) : r.default.selectVoiceChannel(g.id);
		}, [g.id, g.guild_id, I]),
		T = m.filter((e) => e.type === p.Ui.VOICE),
		N = 4 === T.length ? 2 : 3,
		v = (0, s.Wu)([o.Z], () => T.map((e) => o.Z.getParticipant(g.id, e.id)).filter(h.lm), [g.id, T]);
	return (0, i.jsxs)('div', {
		className: f.container,
		children: [
			(0, i.jsx)('div', {
				className: f.tiles,
				style: { maxWidth: 168 * N },
				children: v.slice(0, 5).map((e) =>
					(0, i.jsx)(
						d.ZP,
						{
							participant: e,
							channel: g,
							className: f.tile,
							paused: !0,
							inCall: !0,
							noVideoRender: !0,
							inPopout: !1,
							width: 48
						},
						e.id
					)
				)
			}),
			(0, i.jsx)(l.Heading, {
				className: f.channelName,
				variant: 'heading-xxl/semibold',
				children: g.name
			}),
			(0, i.jsx)('div', {
				className: f.participantsRow,
				children: (0, i.jsx)(l.Text, {
					color: 'header-secondary',
					variant: 'text-sm/normal',
					children:
						((t = g),
						0 === (n = T).length
							? _.Z.Messages.CURRENTLY_IN_STAGE_EMPTY
							: 1 === n.length
								? _.Z.Messages.CURRENTLY_IN_STAGE_1.format({ a: E(t, n[0]) })
								: 2 === n.length
									? _.Z.Messages.CURRENTLY_IN_STAGE_2.format({
											a: E(t, n[0]),
											b: E(t, n[1])
										})
									: n.length > 2
										? _.Z.Messages.CURRENTLY_IN_STAGE_2_N.format({
												a: E(t, n[0]),
												b: E(t, n[1]),
												n: n.length - 2
											})
										: void 0)
				})
			}),
			(0, i.jsx)(l.Button, {
				disabled: !C,
				className: f.joinButton,
				color: C ? l.Button.Colors.GREEN : l.Button.Colors.PRIMARY,
				onClick: x,
				size: l.Button.Sizes.MEDIUM,
				children: C ? _.Z.Messages.STAGE_CHANNEL_JOIN : _.Z.Messages.CHANNEL_LOCKED_SHORT
			})
		]
	});
};
