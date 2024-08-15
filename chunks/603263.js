n.d(t, {
	Nz: function () {
		return u;
	},
	QQ: function () {
		return T;
	},
	QY: function () {
		return C;
	},
	Vj: function () {
		return c;
	},
	j8: function () {
		return h;
	},
	jn: function () {
		return _;
	},
	m$: function () {
		return d;
	},
	oO: function () {
		return E;
	},
	qt: function () {
		return N;
	},
	u$: function () {
		return f;
	},
	yC: function () {
		return o;
	}
}),
	n(724458);
var i = n(570140),
	a = n(367907),
	s = n(768119),
	r = n(405656),
	l = n(981631);
function o(e, t, n, o) {
	(0, r.jW)(t, e), o && (t.search_everywhere = !0);
	let c = Object.keys(t);
	a.ZP.trackWithMetadata(l.rMx.SEARCH_STARTED, {
		search_type: s.Z.getSearchType(),
		prev_search_id: s.Z.getAnalyticsId(e),
		num_modifiers: c.length,
		modifiers: c.reduce((e, n) => {
			let i = t[n];
			return (e[n] = Array.isArray(i) ? i.length : 1), e;
		}, {})
	}),
		i.Z.dispatch({
			type: 'SEARCH_START',
			query: t,
			searchId: e,
			queryString: n,
			searchEverywhere: o
		});
}
function c(e) {
	return 'relevance' === e.sort_by ? l.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? l.QIO.OLDEST : l.QIO.NEWEST;
}
function u(e, t) {
	let n = s.Z.getQuery(e),
		i = (function (e) {
			switch (e) {
				case l.QIO.MOST_RELEVANT:
					return {
						sort_by: 'relevance',
						sort_order: 'desc'
					};
				case l.QIO.OLDEST:
					return {
						sort_by: 'timestamp',
						sort_order: 'asc'
					};
				case l.QIO.NEWEST:
				default:
					return {
						sort_by: 'timestamp',
						sort_order: 'desc'
					};
			}
		})(t);
	return o(e, {
		...n,
		...i,
		offset: 0
	});
}
function d(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.vpv;
	return I(e, t);
}
function _(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.vpv;
	return I(e, -t);
}
function E(e, t) {
	return m(e, t * l.vpv);
}
function I(e, t) {
	let n = s.Z.getOffset(e);
	return m(e, n + t);
}
function m(e, t) {
	let n = s.Z.getQuery(e),
		i = s.Z.getTotalResults(e);
	if (!(t < 0) && !(t > i))
		return o(e, {
			...n,
			offset: t
		});
}
function T(e) {
	i.Z.dispatch({
		type: 'SEARCH_CLEAR_HISTORY',
		searchId: e
	});
}
function h(e, t) {
	null != e &&
		i.Z.dispatch({
			type: 'SEARCH_EDITOR_STATE_CHANGE',
			searchId: e,
			editorState: t
		});
}
function N(e) {
	a.ZP.trackWithMetadata(l.rMx.SEARCH_CLOSED, { search_id: s.Z.getAnalyticsId(e) }),
		i.Z.wait(() =>
			i.Z.dispatch({
				type: 'SEARCH_EDITOR_STATE_CLEAR',
				searchId: e
			})
		);
}
function f(e, t, n) {
	null != e &&
		i.Z.dispatch({
			type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
			searchId: e,
			tokens: t,
			cursorScope: n
		});
}
function C(e, t) {
	i.Z.dispatch({
		type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
		searchId: e,
		showBlocked: t
	});
}
