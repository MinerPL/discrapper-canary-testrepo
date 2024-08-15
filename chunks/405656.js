n.d(t, {
	$G: function () {
		return h;
	},
	BU: function () {
		return T;
	},
	Fr: function () {
		return O;
	},
	Fz: function () {
		return v;
	},
	Ko: function () {
		return _;
	},
	Pe: function () {
		return R;
	},
	WU: function () {
		return N;
	},
	cl: function () {
		return g;
	},
	g9: function () {
		return p;
	},
	jW: function () {
		return f;
	},
	kG: function () {
		return A;
	},
	qc: function () {
		return I;
	},
	zV: function () {
		return m;
	}
}),
	n(47120),
	n(724458);
var r = n(392711),
	i = n.n(r),
	a = n(349033),
	s = n(999650),
	o = n(731290),
	l = n(594174),
	u = n(709054),
	c = n(981631),
	d = n(689938);
function _(e) {
	switch (e) {
		case c.dCx.FILTER_FROM:
			return d.Z.Messages.SEARCH_ANSWER_FROM;
		case c.dCx.FILTER_MENTIONS:
			return d.Z.Messages.SEARCH_ANSWER_MENTIONS;
		case c.dCx.FILTER_HAS:
			return d.Z.Messages.SEARCH_ANSWER_HAS;
		case c.dCx.FILTER_BEFORE:
		case c.dCx.FILTER_ON:
		case c.dCx.FILTER_AFTER:
			return d.Z.Messages.SEARCH_ANSWER_DATE;
		case c.dCx.FILTER_IN:
			return d.Z.Messages.SEARCH_ANSWER_IN;
		case c.dCx.FILTER_FILE_TYPE:
			return d.Z.Messages.SEARCH_ANSWER_FILE_TYPE;
		case c.dCx.FILTER_FILE_NAME:
			return d.Z.Messages.SEARCH_ANSWER_FILE_NAME;
		case c.dCx.FILTER_PINNED:
			return d.Z.Messages.SEARCH_ANSWER_BOOLEAN;
	}
}
let E = {
	[c.dCx.FILTER_BEFORE]: !0,
	[c.dCx.FILTER_AFTER]: !0,
	[c.dCx.FILTER_ON]: !0
};
function f(e, t) {
	if (o.Z.didAgree(t)) {
		let t = l.default.getCurrentUser();
		null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
	}
}
function h(e) {
	let t = {};
	for (let [n, r] of (e.forEach((e) => {
		let { type: n } = e;
		if (c.TNx.test(n)) return;
		switch (n) {
			case c.dCx.ANSWER_BEFORE:
			case c.dCx.ANSWER_ON:
			case c.dCx.ANSWER_AFTER:
				let r = e.getData('start'),
					i = e.getData('end');
				r && (t.min_id = u.default.fromTimestamp(r)), i && (t.max_id = u.default.fromTimestamp(i));
				return;
		}
		let a = (function (e) {
			let t = s.ZP[e],
				n = null != t ? t.queryKey : null;
			return null == n && (n = 'content'), n;
		})(n);
		null == t[a] && (t[a] = new Set());
		let o = t[a];
		switch (n) {
			case c.dCx.ANSWER_USERNAME_FROM:
			case c.dCx.ANSWER_USERNAME_MENTIONS:
				o.add(e.getData('userId'));
				break;
			case c.dCx.ANSWER_FILE_TYPE:
			case c.dCx.ANSWER_FILE_NAME:
				o.add(e.getMatch(1));
				break;
			case c.dCx.ANSWER_IN:
				o.add(e.getData('channel').id);
				break;
			case c.dCx.ANSWER_HAS:
				o.add(e.getData('has'));
				break;
			case c.dCx.ANSWER_PINNED:
				o.add(e.getData('pinned'));
				break;
			default:
				o.add(e.getFullMatch().trim());
		}
	}),
	Object.entries(t)))
		r instanceof Set && (t[n] = Array.from(r));
	return t.content && ((t.content = t.content.join(' ').trim()), !t.content && delete t.content), t;
}
function p(e, t, n) {
	let r, i;
	let a = e.find((a, s) =>
		t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[s + 1] && (i = e[s + 1]), !0) : ((r = a), !1)
	);
	return null == a
		? null
		: {
				previousToken: r,
				currentToken: a,
				nextToken: i,
				focusOffset: t,
				anchorOffset: n
			};
}
function I(e, t) {
	let n;
	let { currentToken: r, nextToken: i, previousToken: s } = (e = null != e ? e : {});
	if (0 === t.length)
		return {
			type: c.Sap.EMPTY,
			filter: null,
			token: null
		};
	if (null == r)
		return {
			type: c.Sap.FILTER_ALL,
			filter: null,
			token: null
		};
	if (c.TNx.test(r.type)) {
		if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
			return {
				type: c.Sap.FILTER,
				filter: r.type,
				token: i
			};
		if (null != i && !c.KA4.test(i.type))
			return {
				type: c.Sap.FILTER,
				filter: r.type,
				token: null
			};
	}
	return r.type === a.ZP.NON_TOKEN_TYPE && null != s && c.TNx.test(s.type)
		? {
				type: c.Sap.FILTER,
				filter: s.type,
				token: r
			}
		: (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
			{
				type: c.Sap.FILTER_ALL,
				filter: null,
				token: n
			});
}
function m(e, t) {
	let n = [];
	return (
		i()(e).forEach((e) => {
			if (null == e || 0 === e.results.length) return;
			let r = e.group;
			n = n.concat(
				e.results.map((e) => {
					let n = e.text;
					if (t === c.Sap.FILTER_ALL) {
						var i;
						r = null !== (i = e.group) && void 0 !== i ? i : r;
						let t = s.ZP[r];
						(null == t ? void 0 : t.key) != null &&
							(null == t ? void 0 : t.key) !== '' &&
							(n = ''.concat(t.key, ' ').concat(n));
					}
					return n;
				})
			);
		}),
		n.filter((e) => e)
	);
}
function T(e) {
	return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function g(e) {
	return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let S = new a.ZP();
function A(e) {
	return S.tokenize(e);
}
function N() {
	return S.clearCache();
}
function v(e) {
	return null != e ? E[e] : null;
}
function O(e, t) {
	let n = c.TNx.test(e.type);
	return (null != t || !n) && (null == t || !n || !!c.KA4.test(t.type)) && !0;
}
function R() {
	(0, s.Pe)(),
		S.reset(),
		i()(s.ZP).forOwn((e, t) =>
			S.addRule({
				type: t,
				...e
			})
		);
}
