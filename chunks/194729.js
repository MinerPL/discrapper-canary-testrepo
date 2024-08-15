n(390547), n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(392711),
	o = n.n(l),
	c = n(664751),
	d = n(748780),
	u = n(873546),
	_ = n(442837),
	E = n(481060),
	h = n(570140),
	m = n(212093),
	I = n(827837),
	g = n(785570),
	p = n(963202),
	T = n(252618),
	S = n(353926),
	f = n(440190),
	C = n(665149),
	N = n(5955),
	A = n(918701),
	v = n(471985),
	Z = n(121711),
	L = n(703656),
	O = n(108427),
	R = n(706454),
	x = n(210887),
	b = n(480294),
	P = n(683301),
	M = n(430824),
	D = n(230307),
	y = n(900849),
	j = n(879484),
	U = n(117496),
	G = n(296386),
	k = n(150192),
	w = n(769727),
	B = n(584885),
	H = n(59222),
	V = n(749436),
	F = n(26580),
	Y = n(731455),
	W = n(981631),
	z = n(46140),
	K = n(689938),
	q = n(745322),
	Q = n(368179),
	X = n(52518);
function J(e, t, n) {
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
class $ extends a.PureComponent {
	componentDidMount() {
		var e, t, n;
		let {
			isFetching: i,
			guilds: { gamesYouPlay: a, featured: s },
			searchRoute: r,
			currentHomepageCategoryId: l,
			currentCategoryId: o,
			mostRecentQuery: d
		} = this.props;
		if (
			((0, I.N)(),
			(0, G.le)(),
			null == P.ZP.getSearchIndex() && (0, m.Ue)(),
			h.Z.wait(() => {
				(0, g.M)(W.x8Z.SERVER_DISCOVERY_BADGE);
			}),
			!i &&
				0 === d.length &&
				y.Zt({
					loadId: this.loadId,
					gamesYouPlayGuilds: a.guilds,
					allGuilds: s.guilds,
					categoryId: o
				}),
			null != r)
		) {
			let { query: e, offset: t, limit: n, preferredLocale: i, categoryId: a } = c.parse(r);
			(0, m.bR)(e, {
				categoryId: parseInt(a, 10),
				preferredLocale: i,
				offset: parseInt(t, 10),
				filters: { approximate_member_count: y.sq },
				length: parseInt(n, 10)
			});
		} else null != l && l !== Y.Hk && h.Z.wait(() => (0, m.uY)(l));
		let u =
			null !== (t = null === (e = (0, L.s1)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t
				? t
				: 0;
		u > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({ to: u })),
			(0, O.e)('guild_discovery');
	}
	componentDidUpdate(e) {
		let {
			guilds: { gamesYouPlay: t, featured: n },
			isFetching: i,
			mostRecentQuery: a,
			currentHomepageCategoryId: s,
			currentCategoryId: r
		} = this.props;
		if (
			(e.isFetching &&
				!i &&
				y.Zt({
					loadId: this.loadId,
					gamesYouPlayGuilds: t.guilds,
					allGuilds: n.guilds,
					categoryId: r
				}),
			e.currentCategoryId !== r)
		) {
			var l;
			null === (l = this._scroller.current) || void 0 === l || l.scrollTo({ to: 0 });
		}
		e.currentCategoryId !== r && y.Az(this.loadId, Array.from(this._guildIdsSeen)),
			e.mostRecentQuery.length > 0 && a.length < 1 && s !== r && (0, m.uY)(null != s ? s : Y.Hk);
	}
	componentWillUnmount() {
		let { currentCategoryId: e, recommendationsLoadId: t, recommendationsGuilds: n } = this.props;
		e === Y.Hk
			? null != n && null != t && y.Az(t, this.getOrderedGuildIdsSeen(n.map((e) => e.id)), 'Game Recommendations')
			: y.Az(this.loadId, Array.from(this._guildIdsSeen));
	}
	getOrderedGuildIdsSeen(e) {
		return e.filter((e) => this._guildIdsSeen.has(e));
	}
	renderGamesYouPlay() {
		let { guilds: e, mightHaveGamesYouPlay: t, theme: n, userGuilds: a } = this.props,
			s = Object.keys(a),
			r = e[W.Lcj.GAMES_YOU_PLAY];
		r.guilds = r.guilds.filter((e) => !s.includes(e.id));
		let { loadingGuildId: l } = this.state;
		return t
			? (0, i.jsx)(B.Z, {
					loadId: this.loadId,
					title: K.Z.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
					guildsData: r,
					loadingGuildId: l,
					analyticsContext: y.P1.RECOMMENDED,
					onViewGuild: this.handleViewGuild,
					onGuildCardSeen: this.handleGuildCardSeen,
					fetchGuilds: m.gk,
					theme: n
				})
			: null;
	}
	renderSearchBar() {
		var e, t;
		let {
			mostRecentQuery: n,
			guilds: { search: a },
			defaultLanguage: s,
			isFetchingSearch: r,
			currentCategoryId: l,
			categories: o,
			currentCategoryName: c
		} = this.props;
		j.w.trackExposure({ location: '54961b_1' });
		let { shouldDisplayRecommendedSearchTags: d } = j.w.getCurrentConfig(
				{ location: '54961b_2' },
				{ autoTrackExposure: !1 }
			),
			u = d
				? l === Y.Hk
					? K.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS
					: K.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({ categoryName: c })
				: l === Y.Hk
					? K.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER
					: K.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({ categoryName: c }),
			_ = null !== (t = null === (e = a[n]) || void 0 === e ? void 0 : e[l]) && void 0 !== t ? t : P.xk;
		return (0, i.jsx)(V.Z, {
			loadId: this.loadId,
			searchResults: _,
			mostRecentQuery: n,
			isFetchingSearch: r,
			defaultLanguage: s,
			placeholder: u,
			currentCategoryId: l,
			categories: o
		});
	}
	renderSearchResults() {
		var e, t;
		let {
				mostRecentQuery: n,
				guilds: { search: a },
				availableLanguages: s,
				defaultLanguage: r,
				isFetchingSearch: l,
				theme: o,
				currentCategoryId: c,
				currentCategoryName: d
			} = this.props,
			{ loadingGuildId: u } = this.state,
			_ =
				c === Y.Hk
					? K.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER
					: K.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({ categoryName: d }),
			E = null !== (t = null === (e = a[n]) || void 0 === e ? void 0 : e[c]) && void 0 !== t ? t : P.xk;
		return (0, i.jsx)(H.Z, {
			loadId: this.loadId,
			availableLanguages: s,
			defaultLanguage: r,
			placeholder: _,
			isFetchingSearch: l,
			searchResults: E,
			mostRecentQuery: n,
			loadingGuildId: u,
			currentCategoryId: c,
			currentCategoryName: d,
			scroller: this._scroller.current,
			theme: o,
			onViewGuild: this.handleViewGuild,
			onGuildCardSeen: this.handleGuildCardSeen,
			onTagClick: (e, t) => this.handleTagSearch(e, t, y.P1.SEARCH)
		});
	}
	renderRecommendedGuildsSection() {
		let { guilds: e, theme: t } = this.props,
			{ loadingGuildId: n } = this.state;
		return (0, i.jsx)(B.Z, {
			loadId: this.loadId,
			title: K.Z.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
			guildsData: e.featured,
			analyticsContext: y.P1.POPULAR,
			onViewGuild: this.handleViewGuild,
			onGuildCardSeen: this.handleGuildCardSeen,
			fetchGuilds: () => (0, m.$z)(0, 30),
			loadingGuildId: n,
			theme: t,
			onTagClick: (e, t) => this.handleTagSearch(e, t, y.P1.POPULAR)
		});
	}
	renderPopularGuildsSection() {
		let { guilds: e, theme: t, currentCategoryId: n } = this.props,
			{ loadingGuildId: a } = this.state;
		return (0, i.jsx)(B.Z, {
			loadId: this.loadId,
			title: K.Z.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
			guildsData: e[n],
			loadingGuildId: a,
			analyticsContext: y.P1.POPULAR,
			onViewGuild: this.handleViewGuild,
			onGuildCardSeen: this.handleGuildCardSeen,
			fetchGuilds: () => (0, m.K5)(n),
			currentCategoryId: n,
			theme: t,
			onTagClick: (e, t) => this.handleTagSearch(e, t, y.P1.POPULAR)
		});
	}
	render() {
		var e, t;
		let { currentCategoryName: n, mostRecentQuery: s, currentCategoryId: l, guilds: c } = this.props,
			d = s.length > 0;
		j.w.trackExposure({ location: '54961b_3' });
		let { shouldDisplayRecommendedSearchTags: _ } = j.w.getCurrentConfig(
				{ location: '54961b_4' },
				{ autoTrackExposure: !1 }
			),
			h =
				l === Y.Hk
					? null === (e = c[W.Lcj.FEATURED]) || void 0 === e
						? void 0
						: e.guilds
					: null === (t = c[l]) || void 0 === t
						? void 0
						: t.guilds;
		if (l === Y.U) return (0, i.jsx)(N.Z, { loadId: this.loadId });
		let m =
			l === Y.Hk
				? K.Z.Messages.GUILD_DISCOVERY_HOME_TITLE
				: K.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({ categoryName: n });
		return (0, i.jsxs)('div', {
			className: q.pageWrapper,
			children: [
				(0, i.jsx)(T.yY, {
					subsection: d ? s : void 0,
					location: m
				}),
				(0, i.jsx)('div', { className: r()(q.dragRegion, q.pageHeaderDrag, { [q.searchPageDrag]: d }) }),
				u.tq && (0, i.jsx)(C.ZP, { children: (0, i.jsx)(a.Fragment, {}) }),
				(0, i.jsx)(E.AdvancedScrollerAuto, {
					className: q.scroller,
					ref: this._scroller,
					onScroll: this.handleScroll,
					children: (0, i.jsx)('div', {
						className: r()(q.viewWrapper, { [q.searchPage]: d }),
						children: d
							? this.renderSearchResults()
							: (0, i.jsxs)(E.HeadingLevel, {
									forceLevel: 1,
									component: (0, i.jsxs)('div', {
										className: q.searchHeader,
										children: [
											(0, i.jsx)('img', {
												alt: '',
												className: q.headerImage,
												src: X
											}),
											(0, i.jsx)('div', {
												className: q.headerContentWrapper,
												children: (0, i.jsxs)('div', {
													className: q.headerContent,
													children: [
														(0, i.jsx)(E.Heading, {
															variant: 'heading-xl/semibold',
															className: q.searchTitle,
															children:
																l === Y.Hk
																	? K.Z.Messages.GUILD_DISCOVERY_HOME_TITLE
																	: K.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({ categoryName: n })
														}),
														(0, i.jsx)(E.Text, {
															variant: 'text-md/normal',
															className: q.searchSubtitle,
															children: l === Y.Hk && K.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
														}),
														this.renderSearchBar(),
														_ &&
															(0, i.jsx)(F.F, {
																hideOverflow: !0,
																section: y.P1.HEADER,
																className: q.headerTagContainer,
																discoveryTagStyle: F.B.LIGHT,
																onTagClick: (e) => this.handleTagSearch(e, void 0, y.P1.HEADER),
																tags: o()
																	.chain(h)
																	.flatMap((e) => e.keywords)
																	.compact()
																	.uniq()
																	.sampleSize(10)
																	.value()
															})
													]
												})
											})
										]
									}),
									children: [
										(0, i.jsx)('div', {
											className: q.__invalid_featuredBody,
											children: l === Y.Hk ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
										}),
										(0, i.jsxs)('div', {
											className: q.footer,
											children: [
												(0, i.jsx)('img', {
													alt: '',
													src: Q,
													className: q.footerImage
												}),
												(0, i.jsx)(E.Heading, {
													variant: 'heading-md/semibold',
													children: K.Z.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
												}),
												(0, i.jsx)(E.Button, {
													look: E.Button.Looks.LINK,
													color: E.Button.Colors.LINK,
													size: E.Button.Sizes.MIN,
													onClick: this.scrollToTop,
													children: K.Z.Messages.GUILD_DISCOVERY_FOOTER_BODY
												})
											]
										})
									]
								})
					})
				})
			]
		});
	}
	constructor(...e) {
		super(...e),
			J(this, '_scroller', a.createRef()),
			J(this, '_guildIdsSeen', new Set()),
			J(this, 'loadId', (0, U.P)()),
			J(this, 'state', {
				animatedValue: new d.Z.Value(0),
				loadingGuildId: null
			}),
			J(this, 'scrollToTop', () => {
				null != this._scroller.current && this._scroller.current.scrollTo({ to: 0 });
			}),
			J(this, 'handleScroll', () => {
				var e, t;
				let { animatedValue: n } = this.state,
					i =
						null !==
							(t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) &&
						void 0 !== t
							? t
							: 0;
				n.setValue(Math.min(1, i / 200));
			}),
			J(this, 'handleViewGuild', async (e, t, n, i) => {
				var a, s;
				let { currentCategoryId: r } = this.props,
					{ loadingGuildId: l } = this.state;
				if (e === l) return;
				let o =
						null !==
							(s = null === (a = this._scroller.current) || void 0 === a ? void 0 : a.getScrollerState().scrollTop) &&
						void 0 !== s
							? s
							: 0,
					{ location: c } = (0, L.s1)();
				(0, L.dL)({
					...c,
					state: o
				}),
					this.setState({ loadingGuildId: e });
				let d = r !== Y.Hk ? r : null;
				try {
					await y.Lq({
						loadId: null != i ? i : this.loadId,
						guildId: e,
						index: t,
						analyticsContext: n,
						categoryId: d
					});
				} catch (e) {
					this.setState({ loadingGuildId: null });
				}
			}),
			J(this, 'handleGuildCardSeen', (e) => {
				this._guildIdsSeen.add(e);
			}),
			J(this, 'handleTagSearch', (e, t, n) => {
				let { currentCategoryId: i, defaultLanguage: a } = this.props;
				if (null == i) return;
				let s = { approximate_member_count: y.sq };
				(0, m.G7)(e, s),
					(0, m.bR)(e, {
						filters: s,
						categoryId: i,
						preferredLocale: a.code,
						offset: 0,
						length: H.D,
						tag: !0
					}),
					y.j$(this.loadId, i, n, t),
					this.scrollToTop();
			});
	}
}
let ee = _.ZP.connectStores([x.Z, R.default, D.Z, b.Z, P.ZP, k.Z, M.Z], () => {
	var e;
	let t = Y.dU,
		n = R.default.locale,
		i = null !== (e = o().find(t, { code: n })) && void 0 !== e ? e : t[0],
		a = Object.keys(D.Z.applicationStatistics),
		s = b.Z.hasConsented(W.pjP.PERSONALIZATION) && a.length > 0,
		r = P.ZP.getCurrentCategoryId(),
		l = P.ZP.getCurrentHomepageCategoryId();
	return {
		isFetching: P.ZP.isFetching(),
		isFetchingSearch: P.ZP.isFetchingSearch(),
		guilds: P.ZP.getDiscoverableGuilds(),
		mostRecentQuery: P.ZP.getMostRecentQuery(),
		currentCategoryId: r,
		currentHomepageCategoryId: l,
		currentCategoryName: k.Z.getCategoryName(r),
		categories: k.Z.getDiscoveryCategories(),
		userGuilds: M.Z.getGuilds(),
		theme: x.Z.theme,
		mightHaveGamesYouPlay: s,
		availableLanguages: t,
		defaultLanguage: i
	};
})($);
function et(e) {
	let { searchRoute: t } = e,
		{
			fetching: n,
			loadId: a,
			recommendedGuilds: s
		} = (0, _.cj)([f.Z], () => ({
			recommendedGuilds: f.Z.getRecommendedGuilds(),
			loadId: f.Z.getLoadId(),
			fetching: f.Z.isFetching()
		}));
	return (0, i.jsx)(ee, {
		searchRoute: t,
		fetchingRecommendations: n,
		usingGameRecommendations: !1,
		recommendationsGuilds: s,
		recommendationsLoadId: a
	});
}
t.Z = function (e) {
	let { searchRoute: t } = e,
		{ guilds: n } = (0, p.C3)({
			location: 'guild_discovery',
			includeConverted: !0
		}),
		s = n.length > 0,
		{ clanDiscoveryEnabled: r } = (0, p.nk)('guild_discovery'),
		l = (0, _.e7)([P.ZP], () => P.ZP.getCurrentCategoryId()),
		o = (0, _.e7)([P.ZP], () => P.ZP.getIsReady()),
		c = (0, v.Z)(z.dr.QUEST_HOME_DESKTOP),
		d = (0, A.XT)(),
		u = (0, _.e7)([S.Z], () => S.Z.hasLoadedExperiments);
	return (a.useEffect(() => {
		c && d && (0, m.uY)(Y.Gj.Quests);
	}, [c, d]),
	a.useEffect(() => {
		if (!!d) u && !c && (0, L.dL)(W.Z5c.SETTINGS('inventory'));
	}, [c, d, u]),
	(s || r) && (!o || l === Y.Gj.Clans))
		? (0, i.jsx)(w.Z, {})
		: c && l === Y.Gj.Quests
			? (0, i.jsx)(Z.Z, {})
			: (0, i.jsx)(et, { searchRoute: t });
};
