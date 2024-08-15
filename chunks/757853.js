n.d(t, {
	F: function () {
		return W;
	},
	G: function () {
		return l;
	}
}),
	n(47120);
var l,
	a,
	s = n(735250),
	i = n(470079),
	r = n(120356),
	o = n.n(r),
	c = n(913527),
	u = n.n(c),
	d = n(91192),
	h = n(442837),
	_ = n(481060),
	f = n(700582),
	E = n(560361),
	g = n(724757),
	m = n(212819),
	S = n(933557),
	I = n(266076),
	A = n(810123),
	p = n(448486),
	C = n(987509),
	N = n(592125),
	L = n(430824),
	b = n(158776),
	v = n(306680),
	T = n(699516),
	x = n(594174),
	Z = n(626135),
	y = n(55935),
	M = n(823379),
	R = n(51144),
	P = n(784384),
	O = n(981631),
	D = n(490897),
	w = n(689938),
	j = n(619499);
function G(e) {
	let {
			message: t,
			destination: n,
			rowMode: l,
			icon: a,
			label: r,
			subLabel: c,
			selected: u,
			disabled: h,
			onPressDestination: f,
			'aria-setsize': g,
			'aria-posinset': m
		} = e,
		S = (0, d.JA)(n.id),
		[I, A] = i.useState(!1),
		p = i.useRef(!1),
		C = i.useCallback(() => {
			if ('send' === l) {
				A(!0), (p.current = !0);
				return;
			}
			null == f || f(n);
		}, [l, f, n]),
		N = i.useCallback(() => {
			Z.default.track(O.rMx.FORWARD_ONE_TAP_VIEW, {
				channel_id: t.channel_id,
				message_id: t.id
			}),
				(p.current = !1),
				null == f ||
					f(n, {
						transitionToDestination: !0,
						closeAfterSend: !0
					});
		}, [t.channel_id, t.id, f, n]),
		L = i.useCallback(() => {
			A(!1),
				(p.current = !1),
				Z.default.track(O.rMx.FORWARD_ONE_TAP_UNDO, {
					channel_id: t.channel_id,
					message_id: t.id
				});
		}, [t]);
	return (
		(0, E.Z)(() => {
			p.current &&
				((p.current = !1),
				null == f ||
					f(n, {
						transitionToDestination: !1,
						closeAfterSend: !1
					}));
		}),
		(0, s.jsxs)(_.Clickable, {
			className: o()(j.destinationRow, { [j.disabled]: h }),
			onClick: h || I ? void 0 : C,
			'aria-selected': u,
			'aria-setsize': g,
			'aria-posinset': m,
			...S,
			children: [
				(0, s.jsxs)('div', {
					className: j.identity,
					children: [
						(0, s.jsx)('div', {
							className: j.iconWrapper,
							children: a
						}),
						(0, s.jsxs)('div', {
							className: j.labels,
							children: [
								(0, s.jsx)(_.Text, {
									tag: 'strong',
									className: j.label,
									variant: 'text-md/semibold',
									lineClamp: 1,
									children: r
								}),
								(0, s.jsx)(_.Text, {
									className: j.subLabel,
									variant: 'text-xs/normal',
									color: 'text-muted',
									children: c
								})
							]
						})
					]
				}),
				'toggle' === l &&
					!h &&
					(0, s.jsx)(_.Checkbox, {
						type: _.Checkbox.Types.INVERTED,
						displayOnly: !0,
						size: 24,
						value: u,
						className: j.checkbox
					}),
				'send' === l &&
					!h &&
					(0, s.jsxs)('div', {
						className: j.actions,
						children: [
							I
								? (0, s.jsx)(_.Button, {
										size: _.Button.Sizes.SMALL,
										color: _.Button.Colors.PRIMARY,
										look: _.Button.Looks.LINK,
										onClick: N,
										children: w.Z.Messages.VIEW
									})
								: (0, s.jsx)('div', {
										className: o()(
											(0, _.getButtonStyle)({
												size: _.Button.Sizes.SMALL,
												color: _.Button.Colors.BRAND
											}),
											j.fauxButton
										),
										children: w.Z.Messages.SEND
									}),
							I &&
								(0, s.jsx)(_.Button, {
									size: _.Button.Sizes.SMALL,
									color: _.Button.Colors.BRAND,
									look: _.Button.Looks.OUTLINED,
									onClick: L,
									children: w.Z.Messages.UNDO
								})
						]
					})
			]
		})
	);
}
function k(e) {
	let { user: t, subLabel: n, ...l } = e,
		a = R.ZP.useName(t),
		i = R.ZP.useUserTag(t, { decoration: 'never' }),
		r = (0, h.e7)([T.Z], () => T.Z.getNickname(t.id)),
		o = (0, h.e7)([b.Z], () => b.Z.getStatus(t.id));
	return (0, s.jsx)(G, {
		...l,
		icon: (0, s.jsx)(f.Z, {
			'aria-hidden': !0,
			size: _.AvatarSizes.SIZE_32,
			user: t,
			status: o
		}),
		label: null != r ? r : a,
		subLabel: null != n ? n : i
	});
}
function F(e) {
	let { channel: t, subLabel: n, ...l } = e,
		a = (0, S.ZP)(t),
		i = (0, p._)(t);
	return (0, s.jsx)(G, {
		...l,
		icon: (0, s.jsx)(I.Z, {
			'aria-hidden': !0,
			size: _.AvatarSizes.SIZE_32,
			channel: t,
			experimentLocation: 'forward-modal'
		}),
		label: a,
		subLabel: null != n ? n : i
	});
}
function U(e) {
	let { channel: t, subLabel: n, ...l } = e,
		a = (0, h.e7)([L.Z], () => L.Z.getGuild(null == t ? void 0 : t.guild_id)),
		i = (0, S.ZP)(t),
		r = (0, h.e7)([N.Z, x.default, T.Z], () => {
			let e = N.Z.getChannel(t.parent_id);
			return null == e ? null : (0, S.F6)(e, x.default, T.Z, !1);
		}),
		o = (0, h.e7)([v.ZP], () => v.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
		c = null == a ? void 0 : a.name;
	if (t.isThread() || t.isForumPost()) {
		let e = t.isForumPost() ? _.ForumIcon : _.TextIcon;
		c = (0, s.jsxs)('div', {
			className: j.threadSubLabel,
			children: [
				(0, s.jsx)(e, {
					color: _.tokens.colors.TEXT_SECONDARY,
					className: j.subLabelIcon
				}),
				(0, s.jsx)(_.Text, {
					variant: 'text-xs/medium',
					color: 'text-secondary',
					lineClamp: 1,
					children: r
				}),
				null != o
					? (0, s.jsxs)(s.Fragment, {
							children: [
								(0, s.jsx)(_.Text, {
									className: j.subLabelSeparator,
									variant: 'text-xs/medium',
									color: 'text-secondary',
									children: '\u2022'
								}),
								(0, s.jsx)(_.Text, {
									variant: 'text-xs/medium',
									color: 'text-secondary',
									children: (0, y.Xf)(u()(o))
								})
							]
						})
					: null
			]
		});
	}
	return (0, s.jsx)(G, {
		...l,
		icon: (0, s.jsx)(A.Z, {
			size: A.E.SMALL_32,
			guild: a,
			channel: t
		}),
		label: i,
		subLabel: null != n ? n : c
	});
}
function W(e) {
	let {
			rowData: t,
			rowMode: n,
			message: l,
			originChannel: a,
			selectedDestinations: r,
			handleToggleDestination: o,
			disableSelection: c,
			...u
		} = e,
		h = i.useMemo(() => [t.length], [t.length]),
		f = i.useCallback(() => 48, []),
		E = i.useMemo(() => {
			var e;
			return null !== (e = null == r ? void 0 : r.map(C.hC)) && void 0 !== e ? e : [];
		}, [r]),
		S = i.useCallback(
			(e) => {
				let { section: i, row: r } = e;
				if (i > 0) return;
				let { type: u, record: d } = t[r];
				if (u === m.h8.HEADER) return;
				let h =
						u === m.h8.USER
							? {
									type: 'user',
									id: d.id
								}
							: {
									type: 'channel',
									id: d.id
								},
					_ = (0, C.hC)(h),
					f = (0, P.H)(l, a, d),
					g = E.includes(_),
					S = {
						key: _,
						message: l,
						destination: h,
						rowMode: n,
						subLabel: null != f ? f.label : void 0,
						disabled: (c && !g) || null != f,
						selected: g,
						onPressDestination: o,
						'aria-posinset': r + 1,
						'aria-setsize': t.length
					};
				if (u === m.h8.USER)
					return (0, s.jsx)(k, {
						user: d,
						...S
					});
				if (u === m.h8.GROUP_DM)
					return (0, s.jsx)(F, {
						channel: d,
						...S
					});
				if (u === m.h8.TEXT_CHANNEL || u === m.h8.VOICE_CHANNEL)
					return (0, s.jsx)(U, {
						channel: d,
						...S
					});
				else (0, M.vE)(u);
			},
			[c, o, l, a, t, n, E]
		),
		I = i.useRef(null),
		A = (0, g.Z)('forward-modal', I);
	return (0, s.jsx)(d.bG, {
		navigator: A,
		children: (0, s.jsx)(d.SJ, {
			children: (e) => {
				let { ref: t, ...n } = e;
				return (0, s.jsx)(_.ModalListContent, {
					scrollerRef: (e) => {
						var n;
						(I.current = e),
							(t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
					},
					...n,
					...u,
					sections: h,
					sectionHeight: 0,
					renderRow: S,
					rowHeight: f
				});
			}
		})
	});
}
((a = l || (l = {})).TOGGLE = 'toggle'), (a.SEND = 'send');
