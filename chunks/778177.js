n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(512722),
	o = n.n(l),
	c = n(392711),
	u = n.n(c),
	d = n(913527),
	_ = n.n(d),
	E = n(608787),
	I = n(442837),
	m = n(481060),
	T = n(603263),
	h = n(542051),
	N = n(349033),
	f = n(999650),
	C = n(933557),
	p = n(471445),
	g = n(592125),
	S = n(271383),
	A = n(699516),
	R = n(250758),
	x = n(944486),
	O = n(914010),
	M = n(246946),
	v = n(594174),
	L = n(585483),
	Z = n(63063),
	P = n(405656),
	b = n(51144),
	D = n(854709),
	j = n(981631),
	U = n(689938),
	y = n(999969);
function B(e, t, n) {
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
let k = _()('2015-05-15').local(),
	G = (0, E.Un)({
		createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
		webpackId: 547800
	}),
	F = (e, t, n) => {
		var a, s, r;
		let { user: l, text: o } = n;
		if (null == l) return (0, i.jsx)('strong', { children: o });
		let c = v.default.getUser(l.id),
			u = g.Z.getChannel(e),
			d = (null == u ? void 0 : u.isPrivate()) ? A.Z.getNickname(l.id) : null,
			_ = null !== (s = null !== (a = S.ZP.getNick(e, l.id)) && void 0 !== a ? a : d) && void 0 !== s ? s : b.ZP.getName(l),
			E = null !== (r = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== r ? r : l.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
		return [
			(0, i.jsx)(
				'img',
				{
					alt: '',
					className: y.displayAvatar,
					src: E
				},
				'avatar-'.concat(t, '-').concat(l.id)
			),
			(0, i.jsx)(
				'span',
				{
					className: y.displayedNick,
					children: _
				},
				'display-nick-'.concat(t, '-').concat(l.id)
			),
			(0, i.jsx)(
				'span',
				{
					className: y.displayUsername,
					children: b.ZP.getUserTag(l, { identifiable: M.Z.enabled && M.Z.hidePersonalInformation ? 'never' : 'always' })
				},
				'display-username-'.concat(t, '-').concat(l.id)
			)
		];
	},
	w = (e, t, n) => {
		let { channel: a, text: s } = n;
		if (null == a) return (0, i.jsx)('strong', { children: s });
		let r = g.Z.getChannel(a.parent_id),
			l = (0, p.KS)(a);
		return (0, i.jsxs)('div', {
			className: y.resultChannel,
			children: [
				null != l ? (0, i.jsx)(l, { className: y.searchResultChannelIcon }) : null,
				(0, i.jsx)('strong', { children: (0, C.F6)(a, v.default, A.Z) }),
				null != r
					? (0, i.jsx)('span', {
							className: y.searchResultChannelCategory,
							children: (0, C.F6)(r, v.default, A.Z)
						})
					: null
			]
		});
	},
	V = (e) => {
		let t,
			n,
			{ id: a, searchId: s, result: l, group: o, className: c, role: u, tabIndex: d, 'aria-selected': _, onSelect: E, onFocus: I, showFilter: T, renderResult: h } = e;
		if (T) {
			var N, C;
			t = (0, i.jsx)('span', {
				className: y.filter,
				children: null !== (C = null === (N = f.ZP[o]) || void 0 === N ? void 0 : N.key) && void 0 !== C ? C : 'addme:'
			});
		}
		return (
			(n = null != h ? h(s, o, l) : (0, i.jsx)('strong', { children: l.text })),
			(0, i.jsxs)(m.Clickable, {
				tag: 'li',
				className: r()(y.option, c),
				onClick: E,
				onFocus: I,
				id: a,
				role: u,
				tabIndex: d,
				'aria-selected': _,
				children: [
					t,
					n,
					(0, i.jsx)(m.PlusSmallIcon, {
						size: 'sm',
						color: 'currentColor',
						className: y.plusIcon
					})
				]
			})
		);
	},
	H = (e) =>
		(0, i.jsx)(V, {
			...e,
			className: y.user,
			renderResult: F
		}),
	Y = {
		[j.dCx.FILTER_FROM]: {
			titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_FROM,
			component: H
		},
		[j.dCx.FILTER_MENTIONS]: {
			titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_MENTIONS,
			component: H
		},
		[j.dCx.FILTER_HAS]: { titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_HAS },
		[j.dCx.FILTER_FILE_TYPE]: { titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_FILE_TYPE },
		[j.dCx.FILTER_IN]: {
			titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_CHANNELS,
			component: (e) =>
				(0, i.jsx)(V, {
					...e,
					renderResult: w
				})
		},
		[j.rtL.DATES]: { titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_DATES },
		[j.rtL.HISTORY]: {
			titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_HISTORY,
			groupTip(e) {
				let { searchId: t } = e;
				return (0, i.jsx)(m.Tooltip, {
					text: U.Z.Messages.SEARCH_CLEAR_HISTORY,
					position: 'left',
					children: (e) => {
						let { onMouseEnter: n, onMouseLeave: a } = e;
						return (0, i.jsx)(m.Clickable, {
							onClick: () => (0, T.QQ)(t),
							onMouseEnter: n,
							onMouseLeave: a,
							className: y.searchClearHistory,
							title: U.Z.Messages.SEARCH_CLEAR_HISTORY,
							'aria-label': U.Z.Messages.SEARCH_CLEAR_HISTORY,
							children: (0, i.jsx)(m.TrashIcon, {
								size: 'md',
								color: 'currentColor'
							})
						});
					}
				});
			},
			component: function (e) {
				let { onSelect: t, onFocus: n, result: s, showFilter: l, searchId: o, renderResult: c, group: u, ...d } = e,
					_ = '',
					E = a
						.useMemo(() => {
							var e;
							return (e = s.text), P.kG(e).map((e, t, n) => (P.Fr(e, n[t + 1]) ? e : new N.WU(e.getFullMatch(), N.Xe)));
						}, [s.text])
						.map((e) => {
							let t = e.getFullMatch();
							if ('' === t.trim()) return null;
							let n = j.TNx.test(e.type),
								a = j.KA4.test(e.type);
							return (
								(_ += t),
								(0, i.jsx)(
									'span',
									{
										className: r()({
											[y.filter]: n,
											[y.answer]: a,
											[y.nonText]: !n && !a
										}),
										children: t
									},
									e.type + t
								)
							);
						});
				return (0, i.jsxs)(m.Clickable, {
					className: r()(y.option, y.__invalid_history),
					onClick: t,
					onFocus: n,
					...d,
					'aria-label': U.Z.Messages.SEARCH_FROM_SUGGESTIONS.format({ suggestion: _ }),
					children: [
						E,
						(0, i.jsx)(m.PlusSmallIcon, {
							size: 'sm',
							color: 'currentColor',
							className: y.plusIcon
						})
					]
				});
			}
		},
		[j.rtL.SEARCH_OPTIONS]: {
			titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
			groupTip: () =>
				(0, i.jsx)(m.Tooltip, {
					text: U.Z.Messages.LEARN_MORE,
					position: 'left',
					children: (e) =>
						(0, i.jsx)('div', {
							className: y.searchLearnMore,
							...e,
							children: (0, i.jsx)(m.Anchor, {
								href: Z.Z.getArticleURL(j.BhN.USING_SEARCH),
								title: U.Z.Messages.LEARN_MORE,
								children: (0, i.jsx)(m.CircleQuestionIcon, {
									size: 'md',
									color: 'currentColor'
								})
							})
						})
				}),
			component: function (e) {
				var t;
				let { result: n, onSelect: a, onFocus: s, showFilter: l, searchId: o, ...c } = e,
					u = P.Ko(null !== (t = n.token) && void 0 !== t ? t : '');
				return (0, i.jsxs)(m.Clickable, {
					className: r()(y.option, y.searchOption),
					onClick: a,
					onFocus: s,
					...c,
					children: [
						(0, i.jsx)('span', {
							className: y.filter,
							children: n.text
						}),
						(0, i.jsx)('span', {
							className: r()({ [y.answer]: u }),
							children: u
						}),
						(0, i.jsx)(m.PlusSmallIcon, {
							size: 'sm',
							color: 'currentColor',
							className: y.plusIcon
						})
					]
				});
			}
		}
	};
class W extends a.PureComponent {
	componentDidUpdate(e, t) {
		let { resultsState: n, totalResults: i } = this.props,
			{ mode: a } = n,
			{ resultsState: s } = e;
		null != a.filter && null == s.mode.filter && i > 0 ? this.setSelectedIndex(0) : a.type === j.Sap.FILTER_ALL && s.mode.type !== a.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
	}
	setSelectedIndex(e) {
		this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
	}
	render() {
		let { selectedIndex: e } = this.state,
			{ navId: t, resultsState: n, totalResults: a, searchId: s } = this.props;
		return (0, i.jsx)(h.Z, {
			numResults: a,
			query: n.query,
			navId: t,
			hideQuery: !this.shouldShowSearchQuery(),
			focusedIndex: e,
			renderCustomResults: this.renderAutocompletes,
			renderInitialState: this.renderAutocompletes,
			onHighlightQuery: () => this.focusOption(-1),
			onSelectQuery: this.performSearch,
			onSelectSearchEverywhere: () => this.performSearch({ searchEverywhere: !0 }),
			renderNoResults: () => null,
			searchFavorites: s === j.I_8 && (0, D.X)()
		});
	}
	constructor(...e) {
		var t;
		super(...e),
			(t = this),
			B(this, 'state', {
				dateHint: (0, f.Pr)(),
				selectedIndex: -1
			}),
			B(this, 'handleDateChange', (e) => {
				this.setSearchQuery(e.format(j.b2L) + ' ', !0);
			}),
			B(this, 'keepCurrentOptionSelected', (e, t) => {
				let { selectedIndex: n } = this.state,
					{ resultsState: i, totalResults: a } = this.props,
					{ mode: s, autocompletes: r } = i,
					{ resultsState: l } = e;
				if (s.type !== l.mode.type) this.setSelectedIndex(-1);
				else if (t.selectedIndex >= 0 && (t.selectedIndex === n || l.autocompletes.length !== r.length)) {
					let e = P.zV(l.autocompletes, l.mode.type)[t.selectedIndex - 1],
						n = P.zV(r, s.type).indexOf(e);
					-1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= a && this.setSelectedIndex(a - 1);
				}
			}),
			B(this, 'focusNextOption', () => {
				this.focusOtherOption(1);
			}),
			B(this, 'focusPreviousOption', () => {
				this.focusOtherOption(-1);
			}),
			B(this, 'focusOtherOption', (e) => {
				let { selectedIndex: t } = this.state,
					{ resultsState: n } = this.props;
				if (!P.Fz(n.mode.filter)) this.focusOption(t + e);
			}),
			B(this, 'focusOption', (e) => {
				let t = e,
					{ autocompletes: n } = this.props.resultsState,
					i = this.shouldShowSearchQuery();
				t < -1 || (!i && t < 0) ? (t = P.BU(n) - 1) : i && t >= P.BU(n) ? (t = -1) : !i && t >= P.BU(n) && (t = 0), this.setSelectedIndex(t);
			}),
			B(this, 'selectOption', (e) => {
				let t = e;
				if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
				let { autocompletes: n, mode: i } = this.props.resultsState;
				if (P.Fz(i.filter)) return;
				let a = P.zV(n, i.type);
				if (t >= a.length) return !1;
				let s = a[t],
					r = (function (e) {
						let t = !0,
							n = e.trim();
						return (
							u()(f.ZP).forOwn((e) => {
								'' !== e.key && null != e.key && n === e.key && (t = !1);
							}),
							t
						);
					})(s);
				return this.setSearchQuery(s, r), !0;
			}),
			B(this, 'setSearchQuery', function (e) {
				let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					{ mode: i, cursorScope: a } = t.props.resultsState,
					s = 0;
				null != i.token ? (s = i.token.start) : (null == a ? void 0 : a.currentToken) != null && (s = a.currentToken.end);
				let r = null != i.token ? i.token.end : s;
				L.S.dispatch(j.CkL.SET_SEARCH_QUERY, {
					query: e,
					anchor: s,
					focus: r,
					performSearch: n
				}),
					t.setSelectedIndex(-1);
			}),
			B(this, 'shouldShowSearchQuery', () => {
				let { mode: e } = this.props.resultsState;
				return e.type !== j.Sap.FILTER && e.type !== j.Sap.EMPTY && !P.Fz(e.filter);
			}),
			B(this, 'renderDatePicker', () =>
				(0, i.jsxs)('div', {
					className: y.datePicker,
					children: [
						(0, i.jsx)(G, {
							onSelect: this.handleDateChange,
							maxDate: _()().local(),
							minDate: k
						}),
						(0, i.jsxs)('div', {
							className: y.datePickerHint,
							children: [
								(0, i.jsxs)('span', {
									className: y.hint,
									children: [U.Z.Messages.SEARCH_DATE_PICKER_HINT, '\xA0']
								}),
								(0, i.jsx)(m.Clickable, {
									tag: 'span',
									className: y.hintValue,
									onClick: this.handleHintClick,
									children: this.state.dateHint
								})
							]
						})
					]
				})
			),
			B(this, 'handleHintClick', () => {
				this.setSearchQuery(this.state.dateHint, !0);
			}),
			B(this, 'performSearch', (e) => {
				L.S.dispatch(j.CkL.PERFORM_SEARCH, null != e ? e : {});
			}),
			B(this, 'renderAutocompletes', () => {
				let { selectedIndex: e } = this.state,
					{ navId: t, searchId: n } = this.props,
					{ autocompletes: a, mode: s } = this.props.resultsState;
				if (P.Fz(s.filter)) return this.renderDatePicker();
				let r = -1;
				return a.map((a) => {
					var l, o, c;
					let u, d;
					if (null == a || 0 === a.results.length) return null;
					let _ = null !== (l = Y[a.group]) && void 0 !== l ? l : {};
					null != _.titleText &&
						((d = ''.concat(a.group, '-header')),
						(u = (0, i.jsx)('div', {
							id: d,
							className: y.header,
							children: _.titleText()
						})));
					let E = null !== (o = _.groupTip) && void 0 !== o ? o : null,
						I = null != E ? (0, i.jsx)(E, { searchId: n }) : null,
						m = null !== (c = _.component) && void 0 !== c ? c : V,
						T = s.type === j.Sap.FILTER_ALL;
					return (0, i.jsxs)(
						'ul',
						{
							role: 'group',
							'aria-labelledby': d,
							className: y.resultsGroup,
							children: [
								u,
								I,
								a.results.map((s) => {
									var l, o;
									if (null == s || null == a) return null;
									let c = e === (r += 1);
									return (0, i.jsx)(
										m,
										{
											searchId: n,
											group: null !== (l = s.group) && void 0 !== l ? l : a.group,
											result: s,
											showFilter: T,
											onSelect: this.selectOption.bind(null, r),
											onFocus: this.focusOption.bind(null, r),
											...(0, h.M)(t, r, c)
										},
										''
											.concat(a.group, '-')
											.concat(s.text, '-')
											.concat(null !== (o = s.key) && void 0 !== o ? o : '')
									);
								})
							]
						},
						a.group
					);
				});
			});
	}
}
t.ZP = a.forwardRef((e, t) => {
	let [n, a, s] = (0, I.Wu)([O.Z, x.Z, R.Z], () => {
		let e = O.Z.getGuildId(),
			t = x.Z.getChannelId(),
			n = null != e ? e : t;
		o()(null != n, 'SearchPopout.getStateFromStores - invalid searchId');
		let i = R.Z.getState(n),
			a = P.BU(i.autocompletes);
		return [n, i, a];
	});
	return (0, i.jsx)(W, {
		...e,
		searchId: n,
		resultsState: a,
		totalResults: s,
		ref: t
	});
});
