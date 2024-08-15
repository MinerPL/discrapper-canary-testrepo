n.d(t, {
	PF: function () {
		return w;
	},
	R7: function () {
		return D;
	},
	Tg: function () {
		return b;
	},
	UU: function () {
		return M;
	},
	gK: function () {
		return L;
	},
	hM: function () {
		return N;
	},
	iy: function () {
		return P;
	},
	mO: function () {
		return C;
	},
	t1: function () {
		return A;
	},
	uL: function () {
		return U;
	},
	v2: function () {
		return y;
	},
	yC: function () {
		return R;
	}
}),
	n(757143);
var r = n(392711),
	i = n.n(r),
	a = n(772848),
	s = n(544891),
	o = n(377108),
	l = n(570140),
	u = n(367907),
	c = n(198620),
	d = n(706454),
	_ = n(675478),
	E = n(656733),
	f = n(626135),
	h = n(708406),
	p = n(591759),
	I = n(668781),
	m = n(981631),
	T = n(526761),
	g = n(689938);
let S = /-/g;
function A(e) {
	let t = null != e ? { [e]: 1 } : {};
	u.ZP.trackWithMetadata(m.rMx.SEARCH_STARTED, {
		search_type: m.aib.GIF,
		load_id: E.Z.getAnalyticsID(),
		num_modifiers: Object.keys(t).length,
		modifiers: t
	});
}
function N(e, t) {
	let { startTime: n, ...r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		i = {
			offset: 0,
			limit: null,
			totalResults: e.length
		},
		a = (0, h._)(E.Z.getAnalyticsID(), t, {
			...i,
			...r,
			results: e
		}),
		s = null == n ? {} : { load_duration_ms: Date.now() - n };
	u.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_VIEWED, {
		...a,
		...s
	});
}
function v(e, t, n) {
	let r = Date.now();
	A(t),
		s.tn
			.get({
				url: m.ANM.GIFS_SEARCH,
				query: {
					q: e,
					media_format: E.Z.getSelectedFormat(),
					provider: 'tenor',
					locale: d.default.locale,
					limit: n
				},
				oldFormErrors: !0
			})
			.then(
				(i) => {
					let a = i.body;
					N(a, t, {
						startTime: r,
						limit: n
					}),
						l.Z.dispatch({
							type: 'GIF_PICKER_QUERY_SUCCESS',
							query: e,
							items: a
						});
				},
				() =>
					l.Z.dispatch({
						type: 'GIF_PICKER_QUERY_FAILURE',
						query: e
					})
			);
}
let O = i().debounce(v, 250);
function R(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = arguments.length > 3 ? arguments[3] : void 0;
	'' === e
		? y()
		: (l.Z.dispatch({
				type: 'GIF_PICKER_QUERY',
				query: e
			}),
			n ? v(e, t, r) : O(e, t, r));
}
function C(e) {
	if ('' !== e && null != e)
		s.tn
			.get({
				url: m.ANM.GIFS_SUGGEST,
				query: {
					q: e,
					provider: 'tenor',
					limit: 5,
					locale: d.default.locale
				},
				oldFormErrors: !0
			})
			.then((t) => {
				let n = t.body;
				l.Z.dispatch({
					type: 'GIF_PICKER_SUGGESTIONS_SUCCESS',
					query: e,
					items: n
				});
			});
}
function y() {
	l.Z.dispatch({
		type: 'GIF_PICKER_QUERY',
		query: ''
	});
}
function D(e) {
	let { type: t, index: n, offset: r, limit: i, results: a, totalResults: o, query: l, gifId: c } = e,
		d = (0, h._)(E.Z.getAnalyticsID(), t, {
			offset: r,
			limit: i,
			results: a,
			totalResults: o
		});
	u.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_SELECTED, {
		...d,
		index_num: n,
		source_object: 'GIF Picker',
		query: l
	}),
		null != c &&
			s.tn.post({
				url: m.ANM.GIFS_SELECT,
				body: {
					id: c,
					q: l
				},
				oldFormErrors: !0
			});
}
function L() {
	let e = (0, a.Z)().replace(S, '');
	u.ZP.trackWithMetadata(m.rMx.SEARCH_OPENED, {
		search_type: m.aib.GIF,
		load_id: e
	}),
		l.Z.wait(() => {
			l.Z.dispatch({
				type: 'GIF_PICKER_INITIALIZE',
				analyticsID: e
			});
		});
}
function b() {
	s.tn
		.get({
			url: m.ANM.GIFS_TRENDING,
			query: {
				provider: 'tenor',
				locale: d.default.locale,
				media_format: E.Z.getSelectedFormat()
			},
			oldFormErrors: !0
		})
		.then((e) => {
			let { body: t } = e,
				{ categories: n, gifs: r } = t;
			l.Z.dispatch({
				type: 'GIF_PICKER_TRENDING_FETCH_SUCCESS',
				trendingCategories: n,
				trendingGIFPreview: r[0]
			});
		});
}
function M(e) {
	let t = Date.now();
	A(m.wI2.TRENDING_GIFS),
		s.tn
			.get({
				url: m.ANM.GIFS_TRENDING_GIFS,
				query: {
					media_format: E.Z.getSelectedFormat(),
					provider: 'tenor',
					locale: d.default.locale,
					limit: e
				},
				oldFormErrors: !0
			})
			.then(
				(n) => {
					let { body: r } = n;
					N(r, m.wI2.TRENDING_GIFS, {
						startTime: t,
						limit: e
					}),
						l.Z.dispatch({
							type: 'GIF_PICKER_QUERY_SUCCESS',
							items: r
						});
				},
				() => {
					l.Z.dispatch({ type: 'GIF_PICKER_QUERY_FAILURE' });
				}
			);
}
function P(e) {
	let t = p.Z.toURLSafe(e);
	return null == t ? e : (0, c.MO)(t) ? (0, c.q5)(t).toString() : e;
}
function U(e) {
	_.DZ.updateAsync(
		'favoriteGifs',
		(t) => {
			var n;
			let r = null !== (n = i().max(Object.values(t.gifs).map((e) => e.order))) && void 0 !== n ? n : 0;
			if (
				((t.gifs[P(e.url)] = {
					...e,
					order: r + 1
				}),
				o.wK.toBinary(t).length > T.vY)
			)
				return (
					I.Z.show({
						title: g.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
						body: g.Z.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
					}),
					!1
				);
			let a = i().size(t.gifs);
			a > 2 && (t.hideTooltip = !0), f.default.track(m.rMx.GIF_FAVORITED, { total_num_favorited: a });
		},
		T.fy.INFREQUENT_USER_ACTION
	);
}
function w(e) {
	_.DZ.updateAsync(
		'favoriteGifs',
		(t) => {
			e in t.gifs ? delete t.gifs[e] : delete t.gifs[P(e)],
				f.default.track(m.rMx.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) });
		},
		T.fy.INFREQUENT_USER_ACTION
	);
}
