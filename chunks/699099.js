l.r(t),
	l.d(t, {
		default: function () {
			return S;
		}
	}),
	l(47120);
var s = l(735250),
	n = l(470079),
	r = l(120356),
	a = l.n(r),
	u = l(442837),
	i = l(481060),
	o = l(988298),
	c = l(461745),
	d = l(212819),
	h = l(43267),
	_ = l(447003),
	f = l(933557),
	p = l(606206),
	I = l(585483),
	E = l(981631),
	N = l(689938),
	T = l(753383),
	m = l(224499);
function C(e, t, l) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = l),
		e
	);
}
let A = (e) => {
		let { channel: t, categoryName: l, guildName: n } = e,
			r = i.TextIcon;
		return (
			(0, _.Z)(t) ? (r = i.TextLockIcon) : t.isNSFW() && (r = i.TextWarningIcon),
			(0, s.jsxs)('div', {
				className: T.result,
				children: [
					(0, s.jsx)(r, {
						className: T.resultIcon,
						colorClass: T.resultIconBackground,
						size: 'xs'
					}),
					(0, s.jsxs)('div', {
						className: T.resultText,
						children: [
							(0, s.jsx)('span', { children: t.name }),
							(0, s.jsx)('span', {
								className: T.resultCategoryName,
								children: l
							})
						]
					}),
					(0, s.jsx)('div', {
						className: T.resultGuildName,
						children: n
					})
				]
			})
		);
	},
	v = (e) => {
		let { channel: t } = e,
			l = (0, f.ZP)(t);
		return (0, s.jsxs)('div', {
			className: T.result,
			children: [
				(0, s.jsx)(i.Avatar, {
					src: (0, h.x)(t),
					'aria-label': null != l ? l : '',
					className: T.resultAvatar,
					size: i.AvatarSizes.SIZE_32
				}),
				(0, s.jsx)('div', {
					className: T.resultText,
					children: l
				})
			]
		});
	},
	g = (e) => {
		let t,
			{ user: l, comparator: n, status: r } = e;
		if (null != n && n === l.tag) {
			let e = n.split('#');
			e.pop(), (t = e.join('#'));
		} else t = null != n && '' !== n ? n : l.username;
		return (0, s.jsxs)('div', {
			className: T.result,
			children: [
				(0, s.jsx)(i.Avatar, {
					src: l.getAvatarURL(void 0, 32),
					'aria-label': l.username,
					className: T.resultAvatar,
					size: i.AvatarSizes.SIZE_32,
					status: r
				}),
				(0, s.jsxs)('div', {
					className: T.resultText,
					children: [
						(0, s.jsx)('span', { children: t }),
						(0, s.jsx)('span', {
							className: T.resultUsername,
							children: l.tag
						})
					]
				})
			]
		});
	};
class L extends n.Component {
	render() {
		let e, t;
		let { result: l, selected: n, sending: r } = this.props;
		switch (l.type) {
			case d.h8.GROUP_DM:
				e = (0, s.jsx)(v, { channel: l.data.record });
				break;
			case d.h8.TEXT_CHANNEL: {
				let { categoryName: t, guildName: n } = l;
				e = (0, s.jsx)(A, {
					channel: l.data.record,
					categoryName: t,
					guildName: n
				});
				break;
			}
			case d.h8.USER: {
				let {
					data: { comparator: t, record: n },
					status: r
				} = l;
				e = (0, s.jsx)(g, {
					comparator: t,
					user: n,
					status: r
				});
			}
		}
		return (
			(t = l.sent
				? (0, s.jsx)(i.Button, {
						className: T.inviteButton,
						look: i.Button.Looks.LINK,
						size: i.Button.Sizes.SMALL,
						disabled: !0,
						color: i.Button.Colors.WHITE,
						children: N.Z.Messages.ACTIVITY_INVITE_MODAL_SENT
					})
				: (0, s.jsx)(i.Button, {
						color: i.Button.Colors.GREEN,
						look: n ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
						className: T.inviteButton,
						size: i.Button.Sizes.SMALL,
						submitting: r,
						onClick: this.handleClick,
						children: N.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE
					})),
			(0, s.jsxs)('div', {
				className: a()(T.resultWrapper, { [T.resultWrapperSelected]: n }),
				onMouseEnter: this.handleMouseEnter,
				children: [e, t]
			})
		);
	}
	constructor(...e) {
		super(...e),
			C(this, 'handleClick', () => {
				let { onInvite: e, row: t } = this.props;
				e(t);
			}),
			C(this, 'handleMouseEnter', () => {
				let { onMouseEnter: e, row: t } = this.props;
				e(t);
			});
	}
}
function S(e) {
	let { transitionState: t, onClose: l } = e,
		{
			results: r,
			query: a,
			activity: h
		} = (0, u.cj)(
			[p.Z],
			() => ({
				results: p.Z.getResults(),
				query: p.Z.getQuery(),
				activity: p.Z.getActivity()
			}),
			[]
		),
		[_, f] = n.useState(a),
		[C, A] = n.useState(0),
		[v, g] = n.useState([]),
		[S, x] = n.useState(!1),
		M = n.useRef(null),
		y = n.useCallback(() => {
			var e;
			null === (e = M.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
		}, [M]),
		R = n.useCallback(() => {
			var e;
			null === (e = M.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
		}, [M]);
	n.useEffect(
		() => (
			I.S.subscribe(E.CkL.SCROLL_PAGE_UP, y),
			() => {
				I.S.unsubscribe(E.CkL.SCROLL_PAGE_UP, y);
			}
		),
		[y]
	),
		n.useEffect(
			() => (
				I.S.subscribe(E.CkL.SCROLL_PAGE_DOWN, R),
				() => {
					I.S.unsubscribe(E.CkL.SCROLL_PAGE_DOWN, R);
				}
			),
			[R]
		),
		n.useEffect(() => {
			null == h && l();
		}, [l, h]),
		n.useEffect(() => {
			var e;
			null === (e = M.current) || void 0 === e || e.scrollToTop(), A(0);
		}, [M, r]);
	let O = n.useCallback(
			(e) => {
				let {
					data: t,
					data: {
						record: { id: l }
					}
				} = r[e];
				if (!(null == l || v.includes(l)))
					switch ((g([...v, l]), t.type)) {
						case d.h8.GROUP_DM:
						case d.h8.TEXT_CHANNEL:
							(0, o.GG)(t.record.id);
							break;
						case d.h8.USER:
							(0, o.R2)(t.record.id);
					}
			},
			[r, v]
		),
		j = n.useCallback(
			(e) => {
				A(e);
			},
			[A]
		),
		D = () => {
			b('');
		},
		b = (e) => {
			f(e), (0, o.rh)(e);
		};
	return null == h
		? null
		: (0, s.jsxs)(i.ModalRoot, {
				transitionState: t,
				size: i.ModalSize.SMALL,
				'aria-label': N.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({ name: h.name }),
				children: [
					(0, s.jsxs)(i.ModalHeader, {
						separator: S,
						children: [
							(0, s.jsx)(i.ModalCloseButton, {
								className: T.closeButton,
								onClick: l
							}),
							(0, s.jsxs)('div', {
								className: T.header,
								children: [
									(0, s.jsx)(i.FormTitle, {
										tag: 'h2',
										className: m.marginBottom8,
										children: N.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({ name: h.name })
									}),
									(0, s.jsx)(c.ZP, {
										size: c.ZP.Sizes.MEDIUM,
										query: _,
										selectedSection: 0,
										selectedRow: C,
										sections: [r.length],
										className: m.marginTop4,
										onSelect: (e, t) => {
											null == t ? D() : O(t);
										},
										onSelectionChange: (e, t) => {
											var l;
											A(t),
												null === (l = M.current) ||
													void 0 === l ||
													l.scrollIntoViewRect({
														start: 44 * t,
														end: 44 * t + 44
													});
										},
										onQueryChange: b,
										placeholder: N.Z.Messages.ACTIVITY_INVITE_MODAL_SEARCH_PLACEHOLDER,
										autoFocus: !0,
										onClear: D
									})
								]
							})
						]
					}),
					(0, s.jsx)(i.ModalListContent, {
						scrollerRef: M,
						className: 0 === r.length ? T.noResults : T.results,
						paddingBottom: 8,
						sections: [r.length],
						sectionHeight: 0,
						renderSection: E.VqG,
						rowHeight: (e, t) => (e > 0 ? 0 : null != r[t] ? 44 : 0),
						renderRow: (e) => {
							let { section: t, row: l } = e;
							if (t > 0) return null;
							let n = r[l];
							return null == n
								? null
								: (0, s.jsx)(
										L,
										{
											row: l,
											result: n,
											sending: null != n.data.record.id && v.includes(n.data.record.id),
											selected: l === C,
											onMouseEnter: j,
											onInvite: O
										},
										n.data.record.id
									);
						},
						onScroll: (e) => {
							let t = e.currentTarget.scrollTop > 0;
							S !== t && x(t);
						}
					})
				]
			});
}
