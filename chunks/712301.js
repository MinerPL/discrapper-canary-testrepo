l.d(n, {
	Z: function () {
		return A;
	}
});
var t = l(735250);
l(470079);
var r = l(442837),
	i = l(481060),
	a = l(749210),
	s = l(287734),
	u = l(933557),
	d = l(314897),
	o = l(592125),
	c = l(984933),
	Z = l(271383),
	E = l(430824),
	M = l(496675),
	_ = l(699516),
	f = l(594174),
	g = l(979651),
	I = l(934415),
	m = l(700785),
	R = l(981631),
	N = l(689938);
function A(e, n) {
	let l = (0, r.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
		A = (0, r.e7)(
			[g.Z, o.Z],
			() => {
				let l = g.Z.getUserVoiceChannelId(n, e.id);
				return o.Z.getChannel(l);
			},
			[n, e.id]
		);
	if ((0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == A) return null;
	let C = e.id === d.default.getId();
	if (!C && !M.Z.can(R.Plq.MOVE_MEMBERS, A)) return null;
	let O = l.filter((n) => {
		let { channel: l } = n;
		return (
			l.id !== A.id &&
			(C
				? M.Z.can(R.Plq.CONNECT, l) && !(0, I.rY)(l, g.Z, E.Z)
				: M.Z.can(R.Plq.MOVE_MEMBERS, l) &&
					(M.Z.can(R.Plq.CONNECT, l) ||
						m.BT({
							permission: R.Plq.CONNECT,
							user: e,
							context: l
						})) &&
					!(0, I.rY)(l, g.Z, E.Z))
		);
	});
	return 0 === O.length
		? null
		: (0, t.jsx)(i.MenuItem, {
				id: 'voice-move',
				label: N.Z.Messages.MOVE_TO,
				children: O.map((l) => {
					let { channel: r } = l;
					return (0, t.jsx)(
						i.MenuItem,
						{
							id: r.id,
							action: () => {
								var l;
								return (l = r), void (e.id === d.default.getId() ? s.default.selectVoiceChannel(l.id) : a.Z.setChannel(n, e.id, l.id));
							},
							label: (0, u.F6)(r, f.default, _.Z)
						},
						r.id
					);
				})
			});
}
