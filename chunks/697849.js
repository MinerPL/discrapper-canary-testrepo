t.r(n), t(47120);
var i = t(735250),
	a = t(470079),
	l = t(442837),
	r = t(481060),
	o = t(100527),
	c = t(906732),
	s = t(313201),
	d = t(724912),
	u = t(41776),
	_ = t(592125),
	g = t(626135),
	v = t(981888),
	h = t(897285),
	f = t(924301),
	I = t(951539),
	m = t(592126),
	p = t(315416),
	E = t(711373),
	x = t(274311),
	b = t(854698),
	C = t(405613),
	N = t(285784),
	T = t(95291),
	Z = t(187443),
	j = t(464766),
	S = t(724278),
	L = t(462747),
	D = t(462179),
	k = t(765305),
	R = t(981631),
	y = t(946508);
function M(e) {
	let { guildEvent: n, guild: t, channel: a, onActionTaken: r, isHub: o, isMember: c, recurrenceId: s } = e,
		d = (0, f.xt)(n),
		_ = (0, l.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(n.id, s), [s, n]),
		g = (0, I.ZP)(n),
		v = (0, l.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
		h = (0, x.T)(null == a ? void 0 : a.id, n.id),
		m = (0, D.Z)({
			guild: t,
			channel: a,
			guildScheduledEvent: n,
			isActive: d,
			recurrenceId: s,
			onActionTaken: r
		}),
		{ entity_type: p } = n;
	return o
		? (0, i.jsx)(Z.Z, {
				isActive: d,
				isUserLurking: v,
				rsvped: _,
				isMember: c,
				isDetailsView: !0,
				guildName: null == t ? void 0 : t.name,
				isChannelPublic: h,
				canInvite: g,
				...m
			})
		: (0, i.jsx)(N.ZP, {
				isActive: d,
				isUserLurking: v,
				rsvped: _,
				isChannelPublic: h,
				canInvite: g,
				entityType: p,
				...m
			});
}
n.default = (e) => {
	let { guildScheduledEventId: n, parentGuildId: t, transitionState: u, initialRecurrenceId: I, onClose: x } = e,
		{ analyticsLocations: N } = (0, c.ZP)(o.Z.GUILD_EVENT_MODAL),
		[Z, D] = a.useState(I),
		B = (0, l.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(n), [n]),
		P = null == B ? void 0 : B.id,
		w = null == B ? void 0 : B.guild_id,
		{ guild: A, isMember: G } = (0, m.Z)(w, P),
		O = (0, d.Z)(t),
		U = null == B ? void 0 : B.channel_id,
		V = (0, l.e7)([_.Z], () => _.Z.getChannel(U), [U]),
		F = (0, s.Dt)(),
		[H, z] = a.useState(k.fL.EVENT_INFO),
		W = (0, E.Z)(P, Z),
		X = (0, p.Z)(w, P, Z),
		[J, { loading: Y, error: K }] = (0, v.Z)(() => h.Z.getGuildEventUsers(null == B ? void 0 : B.id, Z, w));
	a.useEffect(() => {
		null == B
			? x()
			: g.default.track(R.rMx.OPEN_MODAL, {
					type: k.zw,
					guild_id: B.guild_id
				});
	}, [B, x]);
	let q = a.useRef(null),
		[Q, $] = a.useState(0);
	if (
		(a.useLayoutEffect(() => {
			var e, n;
			let t = (null == B ? void 0 : B.recurrence_rule) != null ? 16 : 0;
			$(
				(null !== (n = null == q ? void 0 : null === (e = q.current) || void 0 === e ? void 0 : e.offsetHeight) &&
				void 0 !== n
					? n
					: 0) + t
			);
		}, [q, null == B ? void 0 : B.recurrence_rule]),
		null == B || null == A || (!G && !O))
	)
		return null;
	let ee = (e) => {
			if (e !== H) e === k.fL.RSVP_LIST && J(), z(e);
		},
		en = null != Z ? Z : (0, b.DK)(B);
	return (0, i.jsx)(c.Gt, {
		value: N,
		children: (0, i.jsxs)(r.ModalRoot, {
			size: r.ModalSize.MEDIUM,
			transitionState: u,
			'aria-labelledby': F,
			className: y.root,
			children: [
				(null == B ? void 0 : B.image) != null &&
					(0, i.jsx)(T.Z, {
						source: (0, C.Z)(B),
						className: y.banner
					}),
				(0, i.jsx)(j.Z, {
					onClose: x,
					selectedTab: H,
					onTabSelected: ee,
					userCount: X,
					hasBanner: (null == B ? void 0 : B.image) != null,
					isHub: O
				}),
				(0, i.jsx)('div', {
					className: y.container,
					children: (0, i.jsx)(r.ModalContent, {
						className: y.contentContainer,
						style: { height: Q },
						children: (0, i.jsxs)(r.Slides, {
							activeSlide: H,
							width: 600,
							centered: !1,
							children: [
								(0, i.jsx)(r.Slide, {
									id: k.fL.EVENT_INFO,
									children: (0, i.jsx)(S.Z, {
										guildEvent: B,
										guild: A,
										channel: V,
										headerId: F,
										onClose: x,
										onClickInterestedCount: () => ee(k.fL.RSVP_LIST),
										isHub: O,
										containerRef: q,
										recurrenceId: en,
										setRecurrenceId: D
									})
								}),
								(0, i.jsx)(r.Slide, {
									id: k.fL.RSVP_LIST,
									children: (0, i.jsx)(L.Z, {
										guildEvent: B,
										recurrenceId: en,
										eventUsers: W,
										loading: Y,
										containerHeight: Q,
										error: K
									})
								})
							]
						})
					})
				}),
				(0, i.jsx)(r.ModalFooter, {
					className: y.footer,
					children: (0, i.jsx)(M, {
						guildEvent: B,
						isHub: O,
						isMember: G,
						guild: A,
						channel: V,
						onActionTaken: x,
						recurrenceId: en
					})
				})
			]
		})
	});
};
