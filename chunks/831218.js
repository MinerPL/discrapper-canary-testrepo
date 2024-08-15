n(47120);
var i,
	l,
	r,
	a = n(735250),
	s = n(470079),
	o = n(299608),
	c = n.n(o),
	u = n(91192),
	d = n(924826),
	h = n(442837),
	p = n(902704),
	_ = n(481060),
	f = n(925549),
	g = n(607070),
	m = n(367907),
	C = n(453542),
	I = n(762914),
	E = n(702321),
	N = n(82295),
	x = n(313201),
	S = n(518311),
	v = n(355298),
	Z = n(869404),
	T = n(333984),
	L = n(210887),
	A = n(592125),
	b = n(158776),
	M = n(55589),
	R = n(515753),
	O = n(981631),
	P = n(689938),
	y = n(680136);
function j(e, t, n) {
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
((r = i || (i = {}))[(r.PAGES = 0)] = 'PAGES'), (r[(r.DMS = 1)] = 'DMS');
let D = s.memo(function () {
	return (0, a.jsxs)('svg', {
		width: '184',
		height: '428',
		viewBox: '0 0 184 428',
		className: y.empty,
		children: [
			(0, a.jsx)('rect', {
				x: 40,
				y: 6,
				width: 144,
				height: 20,
				rx: 10
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 16,
				r: 16
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 50,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.9
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 60,
				r: 16,
				opacity: 0.9
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 94,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.8
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 104,
				r: 16,
				opacity: 0.8
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 138,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.7
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 148,
				r: 16,
				opacity: 0.7
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 182,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.6
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 192,
				r: 16,
				opacity: 0.6
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 226,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.5
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 236,
				r: 16,
				opacity: 0.5
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 270,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.4
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 280,
				r: 16,
				opacity: 0.4
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 314,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.3
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 324,
				r: 16,
				opacity: 0.3
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 358,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.2
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 368,
				r: 16,
				opacity: 0.2
			}),
			(0, a.jsx)('rect', {
				x: 40,
				y: 402,
				width: 144,
				height: 20,
				rx: 10,
				opacity: 0.1
			}),
			(0, a.jsx)('circle', {
				cx: 16,
				cy: 412,
				r: 16,
				opacity: 0.1
			})
		]
	});
});
class w extends (l = s.Component) {
	static getDerivedStateFromProps(e) {
		let { children: t, privateChannelIds: n } = e;
		if (null == t)
			return {
				preRenderedChildren: 0,
				nonNullChildren: [],
				totalRowCount: n.length
			};
		{
			let e = t.filter((e) => null != e),
				i = e.length;
			return {
				preRenderedChildren: i,
				nonNullChildren: e,
				totalRowCount: i + n.length
			};
		}
	}
	componentDidMount() {
		let { selectedChannelId: e, homeLink: t } = this.props;
		null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
	}
	shouldComponentUpdate(e) {
		return !(0, p.Z)(this.props, e, ['children']);
	}
	componentDidUpdate(e) {
		let { selectedChannelId: t, homeLink: n } = this.props;
		null != t && t !== e.selectedChannelId
			? this.scrollToChannel(t)
			: null == t && n !== e.homeLink && this.scrollToChannel(null),
			this.reportAnalytics();
	}
	scrollToChannel(e) {
		if (null == this._list) return;
		let { padding: t } = this.props,
			{ preRenderedChildren: n } = this.state,
			i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
			l = 0;
		i < 0 || null == e
			? this._list.scrollTo({ to: l })
			: ((l += 44 * (i + n) + t),
				this._list.scrollIntoViewRect({
					start: Math.max(l - 8, 0),
					end: l + 44 + 8
				}));
	}
	render() {
		let { privateChannelIds: e, padding: t } = this.props,
			{ preRenderedChildren: n } = this.state;
		return (0, a.jsx)(u.SJ, {
			children: (i) => {
				let { ref: l, role: r, ...s } = i;
				return (0, a.jsx)(_.FocusJumpSection, {
					children: (i) =>
						(0, a.jsx)(_.List, {
							fade: !0,
							innerRole: r,
							innerAriaLabel: P.Z.Messages.DIRECT_MESSAGES,
							innerTag: 'ul',
							ref: (e) => {
								var t;
								(this._list = e),
									(this.props.listRef.current = e),
									(l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
							},
							onScroll: this.handleScroll,
							className: y.scroller,
							sectionHeight: this.getSectionHeight,
							paddingTop: t,
							paddingBottom: 8,
							rowHeight: this.getRowHeight,
							renderSection: this.renderSection,
							renderRow: this.renderRow,
							sections: [n, Math.max(e.length, 1)],
							...s,
							...i
						})
				});
			}
		});
	}
	constructor(...e) {
		super(...e),
			j(this, 'state', {
				initialized: !1,
				preRenderedChildren: 0,
				totalRowCount: 0,
				nonNullChildren: []
			}),
			j(this, '_list', null),
			j(this, 'hasReportedAnalytics', !1),
			j(this, 'reportAnalytics', () => {
				var e;
				if (this.hasReportedAnalytics) return;
				let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
				if (null == t) return;
				let { privateChannelIds: n, channels: i } = this.props;
				if (0 === n.length) return;
				let l = s.Children.count(this.props.children);
				if (null == t) return;
				let r = Math.round((t.offsetHeight - 44 * l) / 44),
					a = r > n.length ? n.slice(0, r + 1) : n,
					o = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
					c = n.some((e) => (0, E.Z)(e)),
					u = {
						num_users_visible: a.length,
						num_users_visible_with_mobile_indicator: o.filter((e) => null != e && b.Z.isMobileOnline(e)).length
					};
				(this.hasReportedAnalytics = !0),
					m.ZP.trackWithMetadata(O.rMx.DM_LIST_VIEWED, {
						...u,
						...(0, C.X)(),
						changelog_dm_visible: c
					});
			}),
			j(this, 'getSectionHeight', (e) => {
				let { showDMHeader: t } = this.props;
				return 0 === e ? 0 : t ? 40 : 0;
			}),
			j(
				this,
				'handleScroll',
				c()(() => {
					if (null != this._list) {
						let e = this._list.getScrollerNode();
						null != e && f.Z.updateChannelListScroll(O.ME, e.scrollTop);
					}
				}, 100)
			),
			j(this, 'renderDM', (e, t) => {
				let { privateChannelIds: n, channels: i, selectedChannelId: l } = this.props,
					{ totalRowCount: r, preRenderedChildren: s } = this.state,
					o = i[n[t]];
				return null == o
					? null
					: (0, a.jsx)(
							R.ZP,
							{
								channel: o,
								selected: o.id === l,
								'aria-posinset': s + t + 1,
								'aria-setsize': r
							},
							o.id
						);
			}),
			j(this, 'renderChild', (e) => {
				let { nonNullChildren: t, totalRowCount: n } = this.state,
					i = t[e];
				return s.isValidElement(i)
					? s.cloneElement(i, {
							'aria-setsize': n,
							'aria-posinset': e + 1
						})
					: i;
			}),
			j(this, 'renderRow', (e) => {
				let { section: t, row: n } = e,
					{ privateChannelIds: i } = this.props;
				return 0 === t
					? this.renderChild(n)
					: 0 === n && 0 === i.length
						? (0, a.jsx)(D, {}, 'no-private-channels')
						: this.renderDM(t, n);
			}),
			j(this, 'renderSection', (e) => {
				let { section: t } = e,
					{ showDMHeader: n } = this.props;
				return 0 !== t && n
					? (0, a.jsxs)(
							N.Z,
							{
								className: y.privateChannelsHeaderContainer,
								children: [
									(0, a.jsx)('span', {
										className: y.headerText,
										children: P.Z.Messages.DIRECT_MESSAGES
									}),
									(0, a.jsx)(S.Z, {
										tooltip: P.Z.Messages.CREATE_DM,
										tooltipPosition: 'top',
										popoutAlign: 'left',
										iconClassName: y.privateChannelRecipientsInviteButtonIcon,
										icon: _.PlusSmallIcon,
										subscribeToGlobalHotkey: !0
									})
								]
							},
							t
						)
					: null;
			}),
			j(this, 'getRowHeight', (e, t) => {
				let { privateChannelIds: n } = this.props;
				return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
			});
	}
}
j(w, 'defaultProps', { padding: 8 });
t.Z = (e) => {
	let { version: t, theme: n, children: i, showDMHeader: l } = e,
		r = s.Children.count(i),
		o = A.Z.getMutablePrivateChannels(),
		c = (0, Z.k1)(o),
		p = (0, h.Wu)(
			[M.Z, v.Z, T.Z],
			() => {
				let e = M.Z.getPrivateChannelIds(),
					t = (0, Z.tU)(e, [v.Z, T.Z]);
				return (0, I.Ce)(t);
			},
			[]
		),
		_ = (0, h.cj)([g.Z, L.Z, A.Z], () => ({
			theme: L.Z.darkSidebar ? O.BRd.DARK : n,
			keyboardModeEnabled: g.Z.keyboardModeEnabled,
			version: null != t ? ''.concat(t, ':').concat(A.Z.getPrivateChannelsVersion()) : A.Z.getPrivateChannelsVersion()
		})),
		f = s.useRef(null),
		m = s.useCallback((e) => {
			let t = f.current,
				n = document.querySelector(e);
			null != t &&
				null != n &&
				t.scrollIntoViewNode({
					node: n,
					callback: () => {
						requestAnimationFrame(() => {
							var t;
							return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
						});
					}
				});
		}, []),
		C = s.useCallback(
			() =>
				new Promise((e) => {
					let t = f.current;
					if (null == t) return e();
					t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
				}),
			[]
		),
		E = s.useCallback(
			() =>
				new Promise((e) => {
					let t = f.current;
					if (null == t) return e();
					t.scrollToBottom({
						callback() {
							requestAnimationFrame(() => setTimeout(e, 100));
						}
					});
				}),
			[]
		),
		N = (0, x.Dt)(),
		S = (0, d.ZP)({
			id: 'private-channels-'.concat(N),
			isEnabled: _.keyboardModeEnabled,
			scrollToStart: C,
			scrollToEnd: E,
			defaultFocused: (r + (l ? 1 : 0)).toString(),
			setFocus: m
		});
	return (0, a.jsx)(u.bG, {
		navigator: S,
		children: (0, a.jsx)(w, {
			channels: c,
			privateChannelIds: p,
			listRef: f,
			theme: n,
			version: t,
			...e,
			children: i,
			..._
		})
	});
};
