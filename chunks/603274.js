n.d(t, {
	Z: function () {
		return A;
	}
}),
	n(47120),
	n(390547),
	n(653041);
var i = n(735250);
n(470079);
var l = n(120356),
	r = n.n(l),
	a = n(392711),
	s = n.n(a),
	o = n(442837),
	c = n(481060),
	u = n(317381),
	d = n(884338),
	h = n(565799),
	p = n(501655),
	_ = n(199902),
	f = n(592125),
	g = n(594174),
	m = n(938475),
	C = n(823379),
	I = n(709054),
	E = n(853856),
	N = n(981631),
	x = n(689938),
	S = n(416590),
	v = n(403614);
function Z(e, t) {
	return 0 === t.length
		? null
		: (0, i.jsxs)('div', {
				className: S.row,
				children: [
					(0, i.jsx)(e, {
						className: S.activityIcon,
						color: 'currentColor'
					}),
					(0, i.jsx)(d.Z, {
						guildId: void 0,
						users: t,
						max: 6
					})
				]
			});
}
function T() {
	var e, t;
	let n = (0, o.Wu)([E.Z, f.Z], () =>
			I.default
				.keys(E.Z.getFavoriteChannels())
				.map((e) => f.Z.getChannel(e))
				.filter(C.lm)
		),
		l = n.map((e) => e.id),
		r = n.filter((e) => e.type === N.d4z.GUILD_VOICE),
		a = n.filter((e) => e.type === N.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
		x = (0, o.Wu)(
			[m.ZP],
			() =>
				s().flatMap(r, (e) =>
					m.ZP.getVoiceStatesForChannel(e).map((e) => {
						let { user: t } = e;
						return t;
					})
				),
			[r]
		),
		v = (0, o.Wu)([h.Z], () =>
			s().flatMap(a, (e) =>
				h.Z.getMutableParticipants(e, p.pV.SPEAKER)
					.filter((e) => e.type === p.Ui.VOICE)
					.map((e) => {
						let { user: t } = e;
						return t;
					})
			)
		),
		T = (0, o.e7)([h.Z], () => {
			let e = 0;
			for (let t of a) e += h.Z.getParticipantCount(t, p.pV.AUDIENCE);
			return e;
		}),
		L = (0, o.Wu)(
			[_.Z],
			() =>
				_.Z.getAllApplicationStreams()
					.filter((e) => l.includes(e.channelId))
					.map((e) => e.ownerId),
			[l]
		),
		A = (0, o.Wu)(
			[u.ZP],
			() => {
				let e = u.ZP.getEmbeddedActivitiesByChannel(),
					t = [];
				for (let r of l) {
					var n, i;
					t.push(
						...(null !==
							(i = null === (n = e.get(r)) || void 0 === n ? void 0 : n.flatMap((e) => Array.from(e.userIds))) &&
						void 0 !== i
							? i
							: [])
					);
				}
				return t;
			},
			[l]
		),
		b = (0, o.Wu)([g.default], () => A.map((e) => g.default.getUser(e)), [A]),
		M = (0, o.Wu)([g.default], () => L.map((e) => g.default.getUser(e)), [L]),
		R = Z(
			c.VoiceNormalIcon,
			x.filter((e) => !L.includes(e.id) && !A.includes(e.id))
		);
	let O =
			((e = v),
			(t = T),
			0 === e.length
				? null
				: (0, i.jsxs)('div', {
						className: S.row,
						children: [
							(0, i.jsx)(c.StageIcon, {
								size: 'lg',
								color: 'currentColor',
								className: S.activityIcon
							}),
							(0, i.jsx)(d.Z, {
								guildId: void 0,
								users: e,
								max: 3
							}),
							(0, i.jsxs)('div', {
								className: S.stageListenerPill,
								children: [
									(0, i.jsx)(c.HeadphonesIcon, {
										size: 'xs',
										color: 'currentColor'
									}),
									(0, i.jsx)(c.Text, {
										className: S.stageListenerCount,
										color: 'text-normal',
										variant: 'text-xs/medium',
										children: t
									})
								]
							})
						]
					})),
		P = Z(
			c.ScreenArrowIcon,
			M.filter((e) => null != e && !A.includes(e.id))
		),
		y = Z(c.ActivitiesIcon, b);
	return (0, i.jsxs)(i.Fragment, {
		children: [O, R, P, y]
	});
}
function L() {
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)('div', {
				className: r()(S.row, S.rowGuildName),
				children: (0, i.jsx)('span', {
					className: r()(S.guildNameText, S.guildNameTextLimitedSize),
					children: x.Z.Messages.FAVORITES_GUILD_NAME
				})
			}),
			(0, i.jsx)(T, {})
		]
	});
}
function A(e) {
	let { 'aria-label': t = !1, onShow: n, children: l } = e;
	return (0, i.jsx)(c.Tooltip, {
		hideOnClick: !0,
		spacing: 20,
		position: 'right',
		text: (0, i.jsx)(L, {}),
		'aria-label': t,
		tooltipClassName: v.listItemTooltip,
		onTooltipShow: n,
		children: (e) =>
			(0, i.jsx)('div', {
				...e,
				children: l
			})
	});
}
