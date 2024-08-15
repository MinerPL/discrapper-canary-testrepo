a.r(t),
	a.d(t, {
		default: function () {
			return p;
		}
	}),
	a(47120);
var n = a(735250),
	l = a(470079),
	s = a(392711),
	r = a(442837),
	i = a(381499),
	o = a(481060),
	c = a(367907),
	d = a(971628),
	u = a(695346),
	m = a(675478),
	h = a(430824),
	S = a(892880),
	x = a(226951),
	T = a(498058),
	g = a(158631),
	f = a(644148),
	v = a(243980),
	_ = a(995923),
	b = a(981631),
	E = a(71080),
	C = a(689938),
	R = a(268405);
function p(e) {
	let {
			headerText: t = C.Z.Messages.BROADCASTING_SETTINGS,
			buttonCTA: a = C.Z.Messages.BROADCAST_SETTINGS_SAVE,
			transitionState: p,
			onClose: I,
			onSave: M
		} = e,
		A = (0, f.jp)(),
		[w, N] = l.useState(A),
		[Z, j] = l.useState(''),
		L = u.Uc.useSetting(),
		[U, D] = l.useState(null == L || L),
		y = u.xd.useSetting(),
		[O, G] = l.useState(y),
		[B, k] = l.useState(!1),
		[P, F] = l.useState(!1),
		H = (0, g._n)(),
		z = (0, T.Z)(null == H ? void 0 : H.channelId),
		$ = null != H,
		K = l.useMemo(() => L !== U || !(0, s.isEqual)(A, w) || y !== O, [L, U, A, w, y, O]),
		Q = null != M,
		W = l.useMemo(() => U || Object.keys(w[E.aC.USER]).length > 0 || Object.keys(w[E.aC.GUILD]).length > 0, [U, w]),
		q = (!W && $) || (!W && Q) || (!K && !Q),
		V = l.useMemo(() => '@' === Z.trim().charAt(0), [Z]),
		Y = (0, r.Wu)([h.Z], () => h.Z.getGuildIds()),
		J = (0, f.Kw)(Y),
		X = l.useMemo(() => J.map((e) => e.id), [J]),
		[ee, et] = (0, f.BT)(
			V,
			function (e) {
				var t;
				let a = ((t = Z.trim()), V ? t.slice(1) : t);
				return RegExp(''.concat(x.Z.escape(a)), 'i').test(e);
			},
			U
		);
	function ea() {
		var e;
		null == M || M();
		let [t, a] = er();
		c.ZP.trackWithMetadata(b.rMx.BROADCAST_SETTINGS_UPDATED, {
			auto_broadcast: O,
			broadcast_to_all_friends: U,
			num_allowed_users_in_broadcast: a.length,
			allowed_users: a,
			num_guilds_in_broadcast: t.length,
			guilds: t,
			num_viewers_in_broadcast: z.length,
			current_viewers: null !== (e = z.map((e) => e.id)) && void 0 !== e ? e : [],
			started_broadcast: Q
		});
	}
	function en(e) {
		j(e);
	}
	function el(e, t) {
		let a = (0, d.G)(t);
		N((n) => {
			let l = { ...n };
			return (l[e] = { ...l[e] }), a in l[e] ? delete l[e][a] : (l[e][a] = (0, f.OU)(t)), l;
		});
	}
	function es(e, t) {
		N((a) => {
			let n = { ...a };
			return (n[e] = { ...n[e] }), delete n[e][t], n;
		});
	}
	function er() {
		let e = new Set(),
			t = new Set();
		Object.values(w[E.aC.USER]).forEach((e) => {
			let { row: a } = e;
			return t.add(a.id);
		}),
			Object.values(w[E.aC.GUILD]).forEach((t) => {
				let { row: a } = t;
				return e.add(a.id);
			});
		let a = (0, f.KO)(Array.from(e));
		return [a, (0, f.bI)(Array.from(t))];
	}
	return (
		l.useEffect(() => {
			c.ZP.trackWithMetadata(b.rMx.OPEN_MODAL, { type: Q ? 'Start Broadcast' : 'Update Broadcast' });
		}, [Q]),
		l.useEffect(() => {
			(0, s.chunk)(X, 100).forEach((e) => {
				S.Z.requestMembers(e, Z.trim());
			});
		}, [X, Z]),
		(0, n.jsxs)(o.ModalRoot, {
			transitionState: p,
			children: [
				(0, n.jsx)(o.Heading, {
					variant: 'heading-xl/semibold',
					className: R.header,
					children: t
				}),
				(0, n.jsx)(o.ModalCloseButton, {
					onClick: I,
					className: R.close
				}),
				(0, n.jsxs)(o.ModalContent, {
					className: R.content,
					paddingFix: !1,
					children: [
						(0, n.jsx)(o.Text, {
							variant: 'text-sm/normal',
							color: 'header-secondary',
							className: R.description,
							children: C.Z.Messages.BROADCASTING_DESCRIPTION
						}),
						(0, n.jsx)(o.FormTitle, {
							tag: o.FormTitleTags.H5,
							className: R.title,
							children: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
						}),
						(0, n.jsxs)('div', {
							className: R.switch,
							children: [
								(0, n.jsx)(o.Text, {
									variant: 'text-sm/normal',
									children: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
								}),
								(0, n.jsx)(o.Switch, {
									checked: U,
									onChange: (e) => {
										D(e);
									}
								})
							]
						}),
						(0, n.jsx)(v.Z, {
							selectedTags: w[E.aC.USER],
							query: Z,
							onQueryChange: en,
							onClickRow: (e) => el(E.aC.USER, e),
							onRemoveTag: (e) => es(E.aC.USER, e),
							title: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
							hintText: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({ count: _.uv }),
							placeholderText: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
							users: ee,
							expanded: B,
							setExpanded: (e) => {
								en(''), k(e), F(!1);
							},
							maxCount: _.uv
						}),
						(0, n.jsx)(v.Z, {
							selectedTags: w[E.aC.GUILD],
							query: Z,
							onQueryChange: en,
							onClickRow: (e) => el(E.aC.GUILD, e),
							onRemoveTag: (e) => es(E.aC.GUILD, e),
							title: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
							hintText: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({ count: _.Ly }),
							placeholderText: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
							guilds: et,
							expanded: P,
							setExpanded: (e) => {
								en(''), F(e), k(!1);
							},
							maxCount: _.Ly
						}),
						(0, n.jsx)(o.FormTitle, {
							tag: o.FormTitleTags.H5,
							className: R.title,
							children: C.Z.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
						}),
						(0, n.jsxs)('div', {
							className: R.switch,
							children: [
								(0, n.jsx)(o.Text, {
									variant: 'text-sm/normal',
									children: C.Z.Messages.AUTO_BROADCAST_TOGGLE
								}),
								(0, n.jsx)(o.Switch, {
									checked: O,
									onChange: G
								})
							]
						})
					]
				}),
				(0, n.jsx)(o.ModalFooter, {
					children: (0, n.jsx)(o.Button, {
						disabled: q,
						onClick: function () {
							if (!q) {
								if (K) {
									let [e, t] = er();
									m.hW.updateAsync(
										'broadcast',
										(a) => {
											(a.allowedGuildIds = e),
												(a.allowedUserIds = t),
												(a.allowFriends = i.D5.create({ value: U })),
												(a.autoBroadcast = i.D5.create({ value: O })),
												ea(),
												I();
										},
										m.fy.INFREQUENT_USER_ACTION
									);
									return;
								}
								ea(), I();
							}
						},
						children: a
					})
				})
			]
		})
	);
}
