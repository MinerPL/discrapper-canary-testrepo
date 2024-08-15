n.d(t, {
	Z: function () {
		return R;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(392711),
	o = n.n(r),
	c = n(442837),
	u = n(481060),
	d = n(447543),
	h = n(603263),
	m = n(367907),
	p = n(210887),
	_ = n(695346),
	f = n(768119),
	E = n(944486),
	C = n(585483),
	g = n(251285),
	I = n(406326),
	x = n(994463),
	T = n(619753),
	N = n(981631),
	v = n(689938),
	S = n(718518);
function Z(e, t, n) {
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
class A extends a.Component {
	componentDidMount() {
		this.autoAnalytics();
	}
	componentDidUpdate(e) {
		(this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId);
	}
	render() {
		return null;
	}
	constructor(...e) {
		var t;
		super(...e),
			(t = this),
			Z(this, 'autoAnalytics', function () {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
				if (null == t.props.searchAnalyticsId) return;
				let n = 0,
					i = 0,
					a = 0,
					s = 0;
				null != t.props.searchResults &&
					o()(t.props.searchResults)
						.flatten()
						.filter((e) => e.isSearchHit)
						.forEach((e) => {
							null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && s++), null != e.embeds && e.embeds.length > 0 && a++, null != e.attachments && e.attachments.length > 0 && i++;
						}),
					m.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_VIEWED, {
						search_type: t.props.searchType,
						search_id: t.props.searchAnalyticsId,
						prev_search_id: e !== t.props.searchAnalyticsId ? e : null,
						is_error: t.props.searchHasError,
						limit: t.props.searchLimit,
						offset: t.props.searchOffset,
						page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
						total_results: t.props.searchTotalResults,
						page_results: null != t.props.searchResults ? t.props.searchResults.length : null,
						is_indexing: t.props.searchIsIndexing,
						page_num_messages: n,
						page_num_links: s,
						page_num_embeds: a,
						page_num_attach: i
					});
			});
	}
}
let M = (e) => {
	let { children: t } = e;
	return (0, i.jsx)('div', {
		className: S.emptyResultsWrap,
		children: (0, i.jsx)('div', {
			className: S.emptyResultsContent,
			children: t
		})
	});
};
class b extends a.PureComponent {
	componentDidMount() {
		C.S.subscribe(N.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
	}
	componentWillUnmount() {
		C.S.unsubscribe(N.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
	}
	componentDidUpdate(e) {
		let { search: t } = e;
		if (this.props.search.showBlockedResults !== t.showBlockedResults) {
			let e = this.scrollerRef.current;
			if (null == e) return;
			e.scrollToBottom();
		}
		let n = f.Z.getQuery(this.props.searchId);
		JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) &&
			this.setState({
				searchQuery: n,
				searchMode:
					(null == n ? void 0 : n.sort_by) != null && null != n.sort_order
						? h.Vj({
								sort_by: n.sort_by,
								sort_order: n.sort_order
							})
						: N.QIO.NEWEST
			});
	}
	render() {
		let { searchAnalyticsId: e, searchType: t, searchResults: n } = this.props,
			{ offset: a, hasError: s, totalResults: l, isHistoricalIndexing: r } = this.props.search;
		return (0, i.jsxs)('section', {
			className: S.searchResultsWrap,
			'aria-label': v.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
			children: [
				this.renderHeader(),
				(0, i.jsx)(u.AdvancedScroller, {
					ref: this.scrollerRef,
					className: S.scroller,
					children: this.renderContent()
				}),
				(0, i.jsx)(A, {
					searchType: t,
					searchAnalyticsId: e,
					searchResults: n,
					searchOffset: a,
					searchLimit: N.vpv,
					searchHasError: s,
					searchTotalResults: l,
					searchIsIndexing: r
				})
			]
		});
	}
	constructor(...e) {
		super(...e),
			Z(this, 'state', {
				searchMode: N.QIO.NEWEST,
				searchQuery: null
			}),
			Z(this, 'scrollerRef', a.createRef()),
			Z(this, 'scrollTo', (e, t, n) => {
				let i = this.scrollerRef.current;
				if (null == i) return;
				let a = i.getScrollerState().scrollTop - e;
				i.scrollTo({
					to: a,
					animate: t,
					callback: n
				});
			}),
			Z(this, 'selectChannel', (e) => {
				e !== E.Z.getChannelId() && d.Z.transitionToInviteChannelSync(e);
			}),
			Z(this, 'searchPrevious', () => {
				let {
					searchId: e,
					search: { isSearching: t }
				} = this.props;
				!t && h.jn(e);
			}),
			Z(this, 'searchNext', () => {
				let {
					searchId: e,
					search: { isSearching: t }
				} = this.props;
				!t && h.m$(e);
			}),
			Z(this, 'handleSearchResultsClose', () => {
				let { searchId: e } = this.props;
				h.qt(e);
			}),
			Z(this, 'searchByMode', (e) => {
				let {
						searchId: t,
						search: { isSearching: n }
					} = this.props,
					{ searchMode: i } = this.state;
				e !== i &&
					!n &&
					(m.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_SORT_CHANGED, {
						search_id: f.Z.getAnalyticsId(t),
						new_sort_type: e
					}),
					h.Nz(t, e),
					this.setState({ searchMode: e }));
			}),
			Z(this, 'toggleShowBlockedMessages', () => {
				let {
					searchId: e,
					search: { showBlockedResults: t }
				} = this.props;
				h.QY(e, !t);
			}),
			Z(this, 'renderHeader', () => {
				let { searchMode: e } = this.state,
					{ totalResults: t, isSearching: n, isHistoricalIndexing: a, documentsIndexed: s } = this.props.search;
				return (0, i.jsx)(I.Z, {
					searchMode: e,
					searchByMode: this.searchByMode,
					totalResults: t,
					isSearching: n,
					isIndexing: a,
					documentsIndexed: s
				});
			}),
			Z(this, 'renderIndexing', () => {
				let e = f.Z.getSearchType(this.props.searchId) === N.aib.GUILD ? v.Z.Messages.SEARCH_GUILD_STILL_INDEXING : v.Z.Messages.SEARCH_DM_STILL_INDEXING;
				return (0, i.jsxs)(M, {
					children: [
						(0, i.jsx)(x.Z, {}),
						(0, i.jsx)('div', {
							className: (S.emptyResultsText, S.stillIndexing),
							children: e
						})
					]
				});
			}),
			Z(this, 'renderNoResults', () => {
				let { showNoResultsAlt: e } = this.props.search,
					t = e ? v.Z.Messages.SEARCH_NO_RESULTS_ALT : v.Z.Messages.SEARCH_NO_RESULTS;
				return (0, i.jsxs)(M, {
					children: [
						(0, i.jsx)('div', { className: l()(S.noResultsImage, { [S.alt]: e }) }),
						(0, i.jsx)('div', {
							className: l()(S.emptyResultsText, S.noResults, { [S.alt]: e }),
							children: t
						})
					]
				});
			}),
			Z(this, 'renderError', () =>
				(0, i.jsxs)(M, {
					children: [
						(0, i.jsx)('div', { className: S.errorImage }),
						(0, i.jsx)('div', {
							className: l()(S.emptyResultsText, S.errorMessage),
							children: v.Z.Messages.SEARCH_ERROR
						})
					]
				})
			),
			Z(this, 'renderContent', () => {
				let { searchResults: e, blockCount: t } = this.props,
					{ totalResults: n, isSearching: a, isIndexing: s, hasError: l } = this.props.search;
				return l
					? this.renderError()
					: s
						? this.renderIndexing()
						: a
							? null
							: n > 0
								? (0, i.jsx)(T.Z, {
										search: this.props.search,
										searchResults: e,
										blockCount: t,
										searchId: this.props.searchId,
										renderEmbeds: this.props.renderEmbeds,
										scrollTo: this.scrollTo
									})
								: this.renderNoResults();
			});
	}
}
function R(e) {
	let { searchId: t } = e,
		n = (0, c.cj)([f.Z], () => f.Z.getResultsState(t), [t]);
	return (0, i.jsx)(b, {
		searchId: t,
		search: n,
		...(0, c.cj)(
			[f.Z],
			() => ({
				searchAnalyticsId: f.Z.getAnalyticsId(t),
				searchType: f.Z.getSearchType()
			}),
			[t]
		),
		...(0, g.Z)(t),
		renderEmbeds: _.NA.useSetting(),
		developerMode: _.Sb.useSetting(),
		...(0, c.cj)([p.Z], () => {
			let { theme: e } = p.Z;
			return { theme: e };
		})
	});
}
