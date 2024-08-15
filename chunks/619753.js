n.d(t, {
	Z: function () {
		return D;
	}
}),
	n(724458),
	n(653041),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(837969),
	o = n(481060),
	c = n(668781),
	u = n(904245),
	d = n(603263),
	h = n(963374),
	m = n(607070),
	p = n(933557),
	_ = n(471445),
	f = n(95398),
	E = n(905405),
	C = n(255269),
	g = n(937889),
	I = n(703656),
	x = n(359110),
	T = n(695346),
	N = n(131704),
	v = n(592125),
	S = n(430824),
	Z = n(496675),
	A = n(699516),
	M = n(768119),
	b = n(944486),
	R = n(594174),
	j = n(101695),
	L = n(683101),
	P = n(981631),
	O = n(689938),
	y = n(647146);
function D(e) {
	var t;
	let { search: n, searchId: s, renderEmbeds: l, scrollTo: p, searchResults: _, blockCount: f, onChangePage: E } = e,
		{ offset: C, totalResults: g, isSearching: x, showBlockedResults: T } = n,
		N = a.useCallback(
			(e) => {
				if (x) return;
				let t = e - 1;
				null == E || E(t), d.oO(s, t);
			},
			[s, x, E]
		),
		S = a.useCallback(
			(e) => {
				if (e.blocked)
					c.Z.show({
						title: O.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
						body: O.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: e.author.username }),
						confirmText: O.Z.Messages.OKAY
					});
				else {
					let t = v.Z.getChannel(e.channel_id),
						n = null != t ? t.getGuildId() : null;
					u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: M.Z.getAnalyticsId(s) }), (0, I.uL)(P.Z5c.CHANNEL(n, e.channel_id, e.id));
				}
			},
			[s]
		),
		Z = a.useMemo(() => {
			let e;
			if (null == _) return [];
			let t = 0;
			return _.reduce((n, i) => {
				let a = i.find((e) => e.isSearchHit);
				if (!T && null != a && A.Z.isBlockedForMessage(a)) return n;
				let s = v.Z.getChannel(i[0].channel_id);
				return null == s
					? n
					: ((null == e || e !== s.id) &&
							n.push({
								channel: s,
								results: [],
								startIndex: t
							}),
						(t += 1),
						n[n.length - 1].results.push(i),
						(e = null == s ? void 0 : s.id),
						n);
			}, []);
		}, [_, T]),
		b = a.useRef([]),
		R = Z.reduce((e, t) => e + 1 + t.results.length, 0),
		L = a.useCallback(
			(e, t) => {
				if (!m.Z.keyboardModeEnabled) return;
				let n = b.current,
					i = null != t ? n[t] : void 0;
				if (null == i || null == i.hitRef.current) return;
				let a = i.hitRef.current.getClientRects()[0];
				p(a.top - 0.5 * a.height, !1, () => {
					var t;
					null === (t = document.getElementById(e)) || void 0 === t || t.focus();
				});
			},
			[p]
		),
		D = a.useCallback((e) => {
			let t = b.current[e];
			null == t || t.jumpTo();
		}, []),
		k = (0, r.ZP)({
			navId: 'search-results',
			itemCount: R,
			focusedIndex: 0,
			setFocus: L,
			onSelect: D
		}),
		w = M.Z.getQuery(s),
		B = M.Z.getSearchType(s) === P.aib.FAVORITES,
		H = (0, h.nC)(null !== (t = null == w ? void 0 : w.content) && void 0 !== t ? t : ''),
		G = Z.map((e) => {
			let { channel: t, results: n, startIndex: a } = e;
			return (0, i.jsx)(
				U,
				{
					channel: t,
					results: n,
					highlighter: H,
					startIndex: a,
					resultRefs: b,
					totalResults: g,
					scrollTo: p,
					searchId: s,
					renderEmbeds: l,
					offset: C,
					jumpToMessage: S,
					listNavigator: k,
					favoriteSearch: B
				},
				''.concat(t.id, '-').concat(a)
			);
		});
	G.push();
	let V = a.useRef(null);
	a.useLayoutEffect(() => {
		var e;
		null === (e = V.current) || void 0 === e || e.focus();
	}, [_]);
	let F = (0, o.useFocusJumpSection)();
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)('div', {
				ref: V,
				...k.getContainerProps(),
				...F,
				'aria-busy': x,
				children: G
			}),
			f > 0
				? (0, i.jsxs)(o.Clickable, {
						tag: 'div',
						className: y.resultsBlocked,
						onClick: () => d.QY(s, !T),
						children: [
							(0, i.jsx)('div', { className: y.resultsBlockedImage }),
							(0, i.jsx)('div', {
								className: y.__invalid_resultsBlockedText,
								children: T ? O.Z.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({ count: f }) : O.Z.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({ count: f })
							})
						]
					})
				: null,
			!x &&
				!B &&
				(0, i.jsx)(j.Z, {
					changePage: N,
					offset: C,
					totalResults: g,
					pageLength: P.vpv
				})
		]
	});
}
function k(e) {
	let { parentChannel: t, onSelectChannel: n } = e;
	if ((null == t ? void 0 : t.name) == null) return null;
	let a = null != t ? (0, _.KS)(t) : null;
	if (null == a) return null;
	let s = (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)(a, {
				className: y.parentChannelNameIcon,
				size: 'xxs',
				color: 'currentColor'
			}),
			(0, i.jsx)(o.Text, {
				className: y.parentChannelNameText,
				variant: 'text-xs/medium',
				color: 'header-secondary',
				children: t.name
			})
		]
	});
	return (0, N.Em)(t.type)
		? (0, i.jsx)(o.Clickable, {
				className: l()(y.parentChannelName, y.parentChannelNameClickable),
				onClick: (e) => {
					e.stopPropagation(), n(t.id);
				},
				children: s
			})
		: (0, i.jsx)('div', {
				className: y.parentChannelName,
				children: s
			});
}
function U(e) {
	var t, n, s;
	let { channel: l, results: r, highlighter: c, startIndex: u, resultRefs: d, totalResults: h, scrollTo: m, searchId: I, renderEmbeds: N, offset: M, jumpToMessage: j, listNavigator: O, favoriteSearch: D } = e,
		U = T.cC.useSetting(),
		w = (0, E.p)(),
		B = a.useCallback((e) => {
			if (e === b.Z.getChannelId()) return;
			let t = v.Z.getChannel(e);
			if (null != t && !!Z.Z.can(P.Plq.VIEW_CHANNEL, t)) (0, x.Kh)(t.id);
		}, []),
		H = null != l ? (0, p.F6)(l, R.default, A.Z, !1) : '???',
		G = D && null != l.guild_id ? (null === (t = S.Z.getGuild(l.guild_id)) || void 0 === t ? void 0 : t.name) : null,
		V = (null == l ? void 0 : l.parent_id) != null ? v.Z.getChannel(l.parent_id) : null,
		F = null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : null,
		W = null !== (s = (0, _.KS)(l)) && void 0 !== s ? s : o.TextIcon,
		z = Z.Z.can(P.Plq.MANAGE_MESSAGES, l),
		{ content: Y } = (0, g.ZP)(
			{
				content: H,
				embeds: []
			},
			{
				postProcessor: c,
				shouldFilterKeywords: w
			}
		),
		K = a.useRef(null),
		[q, X] = a.useState(!1);
	a.useEffect(() => {
		let e = K.current;
		null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
	}, []);
	let Q = [H, F, G].filter((e) => null != e).join(', ');
	return (0, i.jsx)(f.a.Provider, {
		value: (0, C.Z)(U, z),
		children: (0, i.jsxs)('ul', {
			role: 'group',
			className: y.searchResultGroup,
			'aria-label': Q,
			children: [
				(0, i.jsx)(o.Clickable, {
					onClick: () => B(l.id),
					children: (0, i.jsxs)('div', {
						className: y.channelNameContainer,
						children: [
							(0, i.jsx)(W, {
								className: y.channelNameIcon,
								size: 'xs',
								color: 'currentColor'
							}),
							(0, i.jsx)(o.Tooltip, {
								text: H,
								shouldShow: q,
								children: (e) =>
									(0, i.jsxs)('span', {
										...e,
										ref: K,
										className: y.channelNameText,
										children: [D && null !== G && ''.concat(G, ' : '), Y]
									})
							}),
							(0, i.jsx)(k, {
								parentChannel: V,
								onSelectChannel: B
							})
						]
					})
				}),
				r.map((e, t) => {
					let n = u + t;
					return (0, i.jsx)(
						L.Z,
						{
							ref: (e) => (d.current[n] = e),
							totalResults: h,
							scrollTo: m,
							searchId: I,
							renderEmbeds: N,
							searchOffset: M,
							pageResultsLength: r.length,
							result: e,
							index: n,
							onJump: j,
							listItemProps: O.getItemProps({ index: n })
						},
						'search-result-'.concat(n)
					);
				})
			]
		})
	});
}
