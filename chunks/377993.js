n.d(t, {
	Z: function () {
		return U;
	}
}),
	n(47120),
	n(653041);
var i = n(735250),
	a = n(470079),
	s = n(873546),
	l = n(442837),
	r = n(481060),
	o = n(239091),
	c = n(144144),
	u = n(100527),
	d = n(906732),
	h = n(385499),
	m = n(82295),
	p = n(554300),
	_ = n(556084),
	f = n(184301),
	E = n(103575),
	g = n(158776),
	C = n(699516),
	I = n(111583),
	x = n(594174),
	T = n(626135),
	N = n(768581),
	v = n(585483),
	S = n(233870),
	Z = n(51144),
	A = n(998502),
	M = n(276264),
	b = n(981631),
	R = n(689938),
	j = n(410740),
	L = n(460356);
let P = [],
	O = A.ZP.getEnableHardwareAcceleration();
function y(e) {
	let { user: t, channel: a, status: u, activities: d } = e,
		h = (0, l.e7)([I.Z], () => null != I.Z.getTypingUsers(a.id)[t.id]),
		m = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
		p = (0, l.e7)([g.Z], () => g.Z.isMobileOnline(t.id)),
		_ = (0, l.e7)([C.Z], () => C.Z.getNickname(t.id)),
		T = (e) => {
			(0, o.jW)(e, async () => {
				let { default: e } = await Promise.all([n.e('79695'), n.e('70474'), n.e('17354')]).then(n.bind(n, 354589));
				return (n) =>
					(0, i.jsx)(e, {
						...n,
						user: t,
						channel: a
					});
			});
		};
	return (0, i.jsx)(r.Popout, {
		preload: () => (0, f.Z)(t, { channelId: a.id }),
		renderPopout: (e) =>
			(0, i.jsx)(E.Z, {
				...e,
				location: 'PrivateChannelRecipients',
				userId: t.id,
				channelId: a.id
			}),
		position: s.tq ? 'window_center' : 'left',
		spacing: 16,
		onShiftClick: () => {
			let e = '@'.concat(Z.ZP.getUserTag(t, { decoration: 'never' })),
				n = '<@'.concat(t.id, '>');
			v.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
				plainText: e,
				rawText: n
			}),
				c.Z.startTyping(a.id);
		},
		children: (e) =>
			(0, i.jsx)(
				M.Z,
				{
					user: t,
					currentUser: m,
					isOwner: t.id === a.ownerId,
					ownerTooltipText: R.Z.Messages.GROUP_OWNER,
					shouldAnimateStatus: O,
					isTyping: h,
					status: u,
					activities: d,
					channel: a,
					onContextMenu: T,
					isMobile: p,
					nick: _,
					...e
				},
				t.id
			)
	});
}
function D(e) {
	var t;
	let { integration: l, channel: c } = e,
		u = a.useCallback(
			(e) => {
				(0, o.jW)(e, async () => {
					let { default: e } = await n.e('37969').then(n.bind(n, 496281));
					return (t) =>
						(0, i.jsx)(e, {
							...t,
							channel: c,
							integration: l
						});
				});
			},
			[l, c]
		),
		d = l.application.bot,
		m = N.ZP.getApplicationIconURL({
			id: l.application.id,
			icon: l.application.icon,
			bot: null === (t = l.application) || void 0 === t ? void 0 : t.bot,
			botIconFirst: !0
		});
	return null != d
		? (0, i.jsx)(r.Popout, {
				preload: () => (0, f.Z)(d.id, m, { channelId: c.id }),
				renderPopout: (e) =>
					(0, i.jsx)(E.Z, {
						...e,
						location: 'PrivateChannelRecipients',
						userId: d.id,
						channelId: c.id
					}),
				position: s.tq ? 'window_center' : 'left',
				spacing: 16,
				children: (e) =>
					(0, i.jsx)(p.Z, {
						onContextMenu: u,
						className: j.member,
						name: (0, i.jsx)('span', {
							className: j.username,
							children: l.application.name
						}),
						avatar: (0, i.jsx)(r.Avatar, {
							size: r.AvatarSizes.SIZE_32,
							src: m,
							'aria-label': l.application.name,
							statusTooltip: !0
						}),
						decorators: (0, i.jsx)(h.Z, {
							className: j.botTag,
							verified: null == d ? void 0 : d.isVerifiedBot()
						}),
						id: l.application.id,
						focusProps: {
							offset: {
								top: 4,
								bottom: 4,
								left: 4,
								right: 4
							}
						},
						...e
					})
			})
		: null;
}
function k(e, t) {
	if (e.listItems.length !== t.listItems.length) return !1;
	for (let n = 0; n < e.listItems.length; n++) {
		let i = e.listItems[n],
			a = t.listItems[n];
		if (i.user !== a.user || i.status !== a.status || i.activities !== a.activities) return !1;
	}
	return !0;
}
function U(e) {
	var t;
	let { channel: s } = e,
		o = x.default.getCurrentUser(),
		c = null == o ? void 0 : o.isStaff(),
		{ analyticsLocations: E } = (0, d.ZP)(u.Z.MEMBER_LIST);
	let { listItems: I } =
			((t = s),
			(0, l.e7)(
				[C.Z, x.default, g.Z],
				() => {
					let e = (0, S.T)(t.recipients, x.default),
						n = {};
					for (let t of e) {
						var i, a, s;
						C.Z.isFriend(t.id) || t.id === (null === (i = x.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
							? (n[t.id] = {
									status: null !== (a = g.Z.getStatus(t.id)) && void 0 !== a ? a : b.Skl.OFFLINE,
									activities: null !== (s = g.Z.getActivities(t.id)) && void 0 !== s ? s : P
								})
							: (n[t.id] = {
									status: b.Skl.OFFLINE,
									activities: P
								});
					}
					let l = [];
					for (let t of e) {
						let e = {
							user: t,
							status: n[t.id].status,
							activities: n[t.id].activities
						};
						l.push(e);
					}
					return { listItems: l };
				},
				[t],
				k
			)),
		{
			installedIntegrations: N,
			applicationsShelf: v,
			fetched: Z,
			appsInGDMEnabled: A,
			availableApplications: M
		} = (0, _.j)({ channelId: s.id });
	a.useEffect(() => {
		if (c)
			for (let e of I)
				(0, f.Z)(e.user, {
					dispatchWait: !0,
					channelId: s.id
				});
	}, [c, I, s.id]),
		a.useEffect(() => {
			T.default.track(b.rMx.MEMBER_LIST_VIEWED, {
				channel_id: s.id,
				channel_type: s.type,
				guild_id: s.guild_id
			});
		}, [s.guild_id, s.id, s.type]);
	let O = c && I.every((e) => e.user.isStaff());
	return (0, i.jsx)(d.Gt, {
		value: E,
		children: (0, i.jsx)('div', {
			className: L.membersWrap,
			children: (0, i.jsxs)(r.Scroller, {
				className: L.members,
				fade: !0,
				children: [
					(0, i.jsxs)(m.Z, {
						className: L.membersGroup,
						children: [
							''.concat(R.Z.Messages.MEMBERS, '\u2014').concat(I.length, ' '),
							O
								? (0, i.jsx)(h.Z, {
										className: L.__invalid_decorator,
										type: h.Z.Types.STAFF_ONLY_DM
									})
								: null
						]
					}),
					I.map((e) =>
						(0, i.jsx)(
							y,
							{
								user: e.user,
								status: e.status,
								activities: e.activities,
								channel: s
							},
							e.user.id
						)
					),
					A &&
						(N.length > 0 || (Z && v.length > 0)) &&
						(0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsx)(m.Z, {
									className: L.membersGroup,
									children: ''.concat(R.Z.Messages.APPS, '\u2014').concat(N.length)
								}),
								N.map((e) =>
									(0, i.jsx)(
										D,
										{
											integration: e,
											channel: s
										},
										e.application.id
									)
								),
								M.length > 0 &&
									(0, i.jsx)(p.Z, {
										className: j.member,
										onClick: () => {
											(0, r.openModalLazy)(async () => {
												let { default: e } = await n.e('4536').then(n.bind(n, 422677));
												return (t) =>
													(0, i.jsx)(e, {
														...t,
														channelId: s.id
													});
											});
										},
										avatar: (0, i.jsx)('div', {
											className: L.appIconWrapper,
											children: (0, i.jsx)(r.PlusSmallIcon, {
												size: 'sm',
												color: 'currentColor'
											})
										}),
										name: R.Z.Messages.PRIVATE_CHANNEL_ADD_APPS
									})
							]
						})
				]
			})
		})
	});
}
