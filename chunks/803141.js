n(47120), n(653041);
var r = n(412788),
	i = n(594174),
	a = n(131681),
	s = n(932941),
	o = n(363072),
	l = n(526761);
function u(e, t, n) {
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
let c = null;
function d() {
	let e = (0, a.U)() ? [...s.pF, ...s.wq, ...s.$u] : [],
		t = i.default.getCurrentUser();
	if (null == t ? void 0 : t.isStaff()) {
		let t = n(932941).Bk;
		e.push(...t);
	}
	(c = new o.B()).addWords(e);
}
function _() {
	d();
}
function E() {
	d();
}
function f(e) {
	let { local: t, settings: n } = e;
	if (!t || n.type !== l.yP.PRELOADED_USER_SETTINGS) return !1;
	null != c && c.clear(), d();
}
class h extends r.Z {
	loadCache() {
		let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
		null != e && (c = null != e.keywordTrie ? o.B.fromSnapshot(e.keywordTrie) : null);
	}
	takeSnapshot() {
		return {
			version: h.LATEST_SNAPSHOT_VERSION,
			data: { keywordTrie: c }
		};
	}
	getKeywordTrie() {
		return c;
	}
	initializeForKeywordTests() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
		!(function () {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
			null == c && (c = new o.B()), c.addWords(e);
		})(e);
	}
	constructor() {
		super({
			CONNECTION_OPEN: _,
			CONNECTION_OPEN_SUPPLEMENTAL: _,
			CACHE_LOADED: () => this.loadCache(),
			OVERLAY_INITIALIZE: E,
			USER_SETTINGS_PROTO_UPDATE: f
		});
	}
}
u(h, 'displayName', 'KeywordFilterStore'), u(h, 'LATEST_SNAPSHOT_VERSION', 2), (t.Z = new h());
