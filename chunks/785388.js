n.r(t),
	n.d(t, {
		default: function () {
			return Q;
		}
	}),
	n(47120),
	n(653041),
	n(177593),
	n(411104);
var i = n(735250),
	s = n(470079),
	o = n(120356),
	a = n.n(o),
	l = n(392711),
	r = n.n(l),
	c = n(866442),
	u = n(442837),
	d = n(780384),
	h = n(481060),
	m = n(596454),
	p = n(129861),
	g = n(700582),
	f = n(607070),
	T = n(600164),
	_ = n(633302),
	v = n(712057),
	b = n(660189),
	E = n(372900),
	I = n(566006),
	x = n(620652),
	C = n(815605),
	S = n(222677),
	R = n(995774),
	N = n(665906),
	O = n(210887),
	Z = n(314897),
	j = n(592125),
	M = n(271383),
	A = n(542578),
	y = n(375954),
	P = n(496675),
	L = n(699516),
	w = n(594174),
	U = n(768581),
	k = n(176354),
	B = n(5192),
	D = n(709054),
	F = n(91047),
	V = n(981631),
	H = n(689938),
	G = n(825102),
	W = n(224499);
function z(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function K(e) {
	return null == e.id ? _.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
let Y = (e) => {
	let { emoji: t, channelId: n, messageId: o } = e,
		[l, r] = s.useState(!0),
		[c, u] = s.useState([]),
		d = s.useMemo(() => {
			if (null == c || c.length < 1) return;
			let e = (0, C.Zn)(t, c[0], n, {
				emojiSize: x.M.LARGE,
				messageId: o
			});
			return (0, i.jsx)(x.Z, {
				className: G.__invalid_effect,
				effect: e,
				emojiSize: x.M.LARGE,
				onComplete: () => r(!1)
			});
		}, [c, t, n, o]);
	return (
		s.useEffect(() => {
			let e = !1;
			return (
				r(!0),
				!(async function () {
					let n = await (0, k.B6)(t);
					Array.isArray(n) && n.length > 0 && !e && u(n);
				})(),
				() => {
					e = !0;
				}
			);
		}, [t]),
		(0, i.jsxs)('div', {
			className: G.burstEmojiSection,
			children: [
				d,
				(0, i.jsx)(m.Z, {
					className: a()(G.burstEmoji, { [G.hideEmoji]: l }),
					emojiId: t.id,
					emojiName: t.name,
					animated: t.animated,
					size: 'reaction'
				}),
				(0, i.jsx)(h.Text, {
					variant: 'text-md/medium',
					children: K(t)
				})
			]
		})
	);
};
class J extends s.PureComponent {
	render() {
		let { emoji: e, count: t, isSelected: n, setSelected: s, reactionType: o, colors: l } = this.props,
			r = K(e),
			u = (function (e, t, n, s) {
				let o =
					null == e.id
						? k.ZP.getURL(e.name)
						: U.ZP.getEmojiURL({
								id: e.id,
								animated: e.animated,
								size: 24
							});
				return null != o && '' !== o
					? (0, i.jsx)('img', {
							className: n,
							src: o,
							alt: e.name
						})
					: (0, i.jsx)('span', {
							className: s,
							children: e.name
						});
			})(e, 24, G.emoji, a()(G.emoji, G.emojiText)),
			d = o === I.O.BURST,
			m = (d ? H.Z.Messages.BURST_REACTION_REACTORS_A11Y : H.Z.Messages.REACTION_REACTORS_A11Y).format({
				name: r,
				n: t
			}),
			p = {},
			g = {};
		if (d) {
			let { backgroundColor: e = '', opacity: t = 1, accentColor: i = '' } = null != l ? l : {};
			if (((g.color = i), n)) {
				var f;
				p.background = null !== (f = (0, c.wK)(e, t)) && void 0 !== f ? f : '';
			}
		}
		return (0, i.jsx)(h.Tooltip, {
			position: 'left',
			text: r,
			children: (l) => {
				let { onMouseEnter: r, onMouseLeave: c } = l;
				return (0, i.jsxs)(h.Clickable, {
					className: a()({
						[G.reactionDefault]: !n,
						[G.reactionSelected]: n
					}),
					'aria-label': m,
					onClick: () =>
						s({
							emoji: e,
							reactionType: o
						}),
					onMouseEnter: r,
					onMouseLeave: c,
					style: p,
					children: [
						u,
						(0, i.jsx)(h.Text, {
							variant: 'text-sm/bold',
							style: g,
							children: t
						})
					]
				});
			}
		});
	}
}
function q(e) {
	let { emoji: t, user: n, message: s, channel: o, guildId: a, reactionType: l, onRemoveReactor: r, disableManage: c = !1 } = e,
		d = (0, u.e7)([Z.default], () => Z.default.getId()),
		m = (0, u.e7)([w.default], () => w.default.getUser(n.id), [n]),
		f = (0, N.$R)(o),
		_ = (0, u.e7)([P.Z], () => P.Z.can(V.Plq.MANAGE_MESSAGES, o) && f) || d === n.id,
		v = (0, u.e7)([M.ZP, j.Z, L.Z], () => B.ZP.getName(a, o.id, n));
	return (0, i.jsxs)(T.Z, {
		className: G.reactorDefault,
		onContextMenu: (e) => (0, F.Pv)(e, n, o),
		align: T.Z.Align.CENTER,
		children: [
			(0, i.jsx)(T.Z.Child, {
				wrap: !0,
				grow: 0,
				shrink: 0,
				className: W.marginReset,
				children: (0, i.jsx)(g.Z, {
					user: null != m ? m : n,
					size: h.AvatarSizes.SIZE_24
				})
			}),
			(0, i.jsx)(T.Z.Child, {
				children: (0, i.jsxs)(h.Text, {
					tag: 'strong',
					variant: 'text-md/normal',
					className: G.name,
					children: [
						null != v &&
							'' !== v &&
							(0, i.jsx)('span', {
								className: n.isPomelo() ? '' : G.nickname,
								children: v
							}),
						(0, i.jsx)(p.Z, {
							user: n,
							className: null != v && '' !== v ? G.tagFaded : null,
							usernameClass: G.username,
							discriminatorClass: G.discriminator,
							forceUsername: !0
						})
					]
				})
			}),
			!c &&
				_ &&
				(0, i.jsx)(h.Clickable, {
					onClick: function () {
						S.WO({
							channelId: o.id,
							messageId: s.id,
							emoji: t,
							location: S.TW.MESSAGE,
							userId: n.id,
							options: { burst: l === I.O.BURST }
						}),
							null == r || r();
					},
					children: (0, i.jsx)(h.XSmallIcon, {
						size: 'xs',
						color: 'currentColor',
						className: G.remove
					})
				})
		]
	});
}
class X extends s.PureComponent {
	componentDidMount() {
		this.loadMore();
	}
	componentDidUpdate(e) {
		(!r().isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) &&
			this.setState(
				{
					lastId: null,
					loadingMore: !1
				},
				() => this.loadMore()
			);
	}
	loadMore() {
		let { message: e, reaction: t, reactionType: n } = this.props,
			{ lastId: i } = this.state;
		this.setState({ loadingMore: !0 }),
			S.U0({
				channelId: e.getChannelId(),
				messageId: e.id,
				emoji: t.emoji,
				limit: V.pTL,
				after: i,
				type: n
			}).then((e) => {
				var t;
				return this.setState({
					loadingMore: !1,
					lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
				});
			});
	}
	renderSection() {
		return null;
	}
	render() {
		let { hasMore: e, reactors: t, reaction: n, message: s, reactionType: o } = this.props,
			a = [];
		return (
			0 === t.length && this.state.loadingMore ? a.push(length) : (a.push(t.length), e && a.push(1)),
			(0, i.jsxs)('div', {
				className: G.reactorsContainer,
				children: [
					o === I.O.BURST &&
						(0, i.jsx)(Y, {
							emoji: n.emoji,
							channelId: s.getChannelId(),
							messageId: s.id
						}),
					(0, i.jsx)(h.List, {
						className: G.reactors,
						fade: !0,
						ref: this.scrollerRef,
						sections: a,
						sectionHeight: 0,
						rowHeight: this.getRowHeight,
						renderRow: this.renderRow,
						renderSection: this.renderSection,
						onScroll: e ? this.handleScroll : void 0
					})
				]
			})
		);
	}
	constructor(...e) {
		super(...e),
			z(this, 'scrollerRef', s.createRef()),
			z(this, 'state', {
				lastId: null,
				loadingMore: !1
			}),
			z(this, 'handleScroll', () => {
				let { current: e } = this.scrollerRef;
				if (null == e) return;
				let t = e.getScrollerState();
				t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore();
			}),
			z(this, 'getRowHeight', (e, t) => {
				let { reactors: n } = this.props;
				if (1 === e) return 0 === t ? 44 : 0;
				if (0 === e) {
					if (0 === t && 0 === n.length) return 440;
					if (null != this.props.reactors[t]) return 44;
				}
				return 0;
			}),
			z(this, 'renderRow', (e) => {
				let { section: t, row: n } = e,
					{ message: s, guildId: o, channel: a, reaction: l, reactors: r, reactionType: c, disableManage: u } = this.props,
					d = r[n];
				if (1 === t) return 0 === n ? (0, i.jsx)(h.Spinner, { className: G.spinnerMore }, 'hasMore') : null;
				return 0 === r.length && this.state.loadingMore
					? (0, i.jsx)(h.Spinner, { className: G.spinner }, 'loadingMore')
					: null != d &&
							(0, i.jsx)(
								q,
								{
									message: s,
									emoji: l.emoji,
									guildId: o,
									channel: a,
									user: d,
									reaction: l,
									reactionType: c,
									disableManage: u
								},
								d.id
							);
			});
	}
}
let $ = u.ZP.connectStores([A.Z], (e) => {
	let { message: t, reaction: n, reactionType: i } = e,
		s = A.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
	if (null == s)
		return {
			reactors: [],
			hasMore: !1
		};
	let o = Object.values(s),
		a = (i === I.O.BURST ? n.burst_count : n.count) > o.length;
	return {
		reactors: o,
		hasMore: a
	};
})(X);
function Q(e) {
	var t;
	let { message: n, selectedReaction: o, disableManage: a = !1, disableTabs: l = !1, onClose: r, transitionState: c, 'aria-label': m = H.Z.Messages.REACTIONS } = e,
		p = (0, u.e7)([j.Z], () => j.Z.getChannel(n.getChannelId())),
		g = null == p ? void 0 : p.getGuildId(),
		T = (0, u.e7)(
			[y.Z, b.Z],
			() => {
				var e, t;
				let i = null !== (t = y.Z.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = b.Z.getMessage(D.default.castMessageIdAsChannelId(n.id))) || void 0 === e ? void 0 : e.firstMessage;
				return null != i ? i.reactions : [];
			},
			[n]
		);
	let _ =
			((t = T),
			s.useMemo(() => {
				let e = [];
				return (
					t.forEach((t) => {
						t.burst_count > 0 &&
							e.push({
								...t,
								count: 0
							}),
							t.count > 0 &&
								e.push({
									...t,
									burst_count: 0
								});
					}),
					e.sort((e, t) => {
						let n = e.burst_count > 0 ? e.burst_count : e.count;
						return (t.burst_count > 0 ? t.burst_count : t.count) - n;
					}),
					e
				);
			}, [t])),
		x = _[0],
		[C, S] = (function (e, t, n) {
			let [i, o] = s.useState(null != e ? e : t);
			return (
				s.useEffect(() => {
					null != i &&
						null ==
							n.find((e) => {
								let t = null != e.me_vote ? I.O.VOTE : e.burst_count > 0 ? I.O.BURST : I.O.NORMAL;
								return (0, R.ir)(e.emoji, i.emoji) && t === i.reactionType;
							}) &&
						o(t);
				}, [i, o, n, t]),
				[i, o]
			);
		})(
			o,
			null != x
				? {
						emoji: x.emoji,
						reactionType: x.burst_count > 0 ? I.O.BURST : I.O.NORMAL
					}
				: null,
			T
		),
		N = s.useMemo(() => {
			var e;
			return null == C ? null : null !== (e = T.find((e) => (0, R.ir)(e.emoji, C.emoji))) && void 0 !== e ? e : null;
		}, [T, C]),
		Z = (0, u.e7)([f.Z], () => f.Z.saturation),
		M = (0, u.e7)([O.Z], () => (0, d.wj)(O.Z.theme));
	if (
		(s.useEffect(() => {
			(0 === T.length || (null == C && null == N)) && setImmediate(r);
		}, [r, T.length, N, C]),
		null == C || null == N)
	)
		return (0, i.jsx)(h.Spinner, {});
	if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
	return (0, i.jsx)(E.Z.Provider, {
		value: null != g ? g : void 0,
		children: (0, i.jsxs)(h.ModalRoot, {
			'aria-label': m,
			transitionState: c,
			size: h.ModalSize.DYNAMIC,
			className: G.container,
			children: [
				l
					? null
					: (0, i.jsx)(h.Scroller, {
							className: G.scroller,
							fade: !0,
							children: _.map((e) => {
								var t;
								let n = e.burst_count > 0;
								return (0, i.jsx)(
									J,
									{
										isSelected: ee(C, e, n ? I.O.BURST : I.O.NORMAL),
										setSelected: S,
										reactionType: n ? I.O.BURST : I.O.NORMAL,
										emoji: e.emoji,
										count: n ? e.burst_count : e.count,
										colors: null != e.burst_colors ? (0, v.Z)(e.burst_colors, Z, M) : void 0
									},
									''
										.concat(n ? 'burst-' : 'normal-')
										.concat(null !== (t = e.emoji.id) && void 0 !== t ? t : '', ':')
										.concat(e.emoji.name)
								);
							})
						}),
				(0, i.jsx)($, {
					message: n,
					reaction: N,
					guildId: g,
					channel: p,
					reactionType: C.reactionType,
					disableManage: a
				})
			]
		})
	});
}
let ee = (e, t, n) => r().isEqual(e.emoji, t.emoji) && e.reactionType === n;
