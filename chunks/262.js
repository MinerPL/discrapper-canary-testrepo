n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(857395),
	r = n(739566),
	l = n(834129),
	o = n(689938);
function c(e) {
	let { children: t, messageReference: n } = e;
	if (null == n) return (0, i.jsx)(a.Anchor, { children: t });
	let { guild_id: r, channel_id: l, message_id: o } = n;
	return null == r
		? (0, i.jsx)(a.Anchor, { children: t })
		: (0, i.jsx)(s.Z, {
				guildId: r,
				channelId: l,
				messageId: o,
				children: (e) => {
					let { 'aria-controls': n, 'aria-expanded': s, ...r } = e;
					return (0, i.jsx)(a.Anchor, {
						...r,
						children: t
					});
				}
			});
}
function u(e) {
	let { usernameHook: t, message: a, compact: s } = e,
		{ content: u, timestamp: d, messageReference: _ } = a,
		E = (0, r.ZP)(a),
		I = t(E),
		m = o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
			username: E.nick,
			usernameHook: I,
			webhookName: u,
			webhookNameHook: (e, t) =>
				(0, i.jsx)(
					c,
					{
						messageReference: _,
						children: e
					},
					t
				)
		});
	return (0, i.jsx)(l.Z, {
		icon: n(570111),
		timestamp: d,
		compact: s,
		children: m
	});
}
