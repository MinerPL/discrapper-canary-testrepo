n.d(t, {
	Z: function () {
		return S;
	}
}),
	n(653041),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(493683),
	l = n(447543),
	u = n(904245),
	c = n(159300),
	d = n(592125),
	_ = n(984933),
	E = n(430824),
	f = n(496675),
	h = n(699516),
	p = n(771845),
	I = n(594174),
	m = n(981631),
	T = n(689938);
function g(e, t) {
	o.Z.ensurePrivateChannel(e).then((e) => {
		null != d.Z.getChannel(e) && u.Z.sendInvite(e, t, 'context_menu', null);
	});
}
function S(e) {
	let { user: t, guildId: n, onAction: o } = e,
		u = (0, a.e7)([I.default], () => I.default.getCurrentUser(), []),
		d = (0, a.Wu)(
			[p.ZP, E.Z, f.Z],
			() => {
				let e = p.ZP.getFlattenedGuildIds(),
					t = [];
				return (
					e.forEach((e) => {
						let r = E.Z.getGuild(e);
						null != r && (0, c.b)(f.Z, r) && r.id !== n && t.push(r);
					}),
					t
				);
			},
			[n]
		),
		[S, A] = i.useState({});
	return (null == u ? void 0 : u.id) === t.id || t.bot || 0 === d.length || h.Z.isBlocked(t.id)
		? null
		: (0, r.jsx)(s.MenuItem, {
				id: 'invite-to-server',
				label: T.Z.Messages.INVITE_TO_SERVER,
				children: d.map((e) =>
					S[e.id]
						? (0, r.jsx)(
								s.MenuItem,
								{
									id: e.id,
									disabled: !0,
									label: T.Z.Messages.INVITE_SENT
								},
								e.id
							)
						: (0, r.jsx)(
								s.MenuItem,
								{
									id: e.id,
									label: e.name,
									action: () => {
										null == o || o(),
											!(function (e, t) {
												let n = _.ZP.getDefaultChannel(e.id, !0, m.Plq.CREATE_INSTANT_INVITE);
												if (null != n) {
													if (
														(A({
															...S,
															[e.id]: !0
														}),
														!f.Z.can(m.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
													) {
														g(t, e.vanityURLCode);
														return;
													}
													l.Z.createInvite(
														n.id,
														{
															max_uses: 1,
															unique: !0
														},
														'User Invite Context Menu'
													).then((e) => g(t, e.code));
												}
											})(e, t.id);
									}
								},
								e.id
							)
				)
			});
}
