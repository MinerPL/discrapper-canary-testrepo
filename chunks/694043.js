r.d(t, {
	Ak: function () {
		return i;
	},
	QC: function () {
		return _;
	},
	t$: function () {
		return E;
	},
	zb: function () {
		return s;
	}
});
var n = r(309544),
	a = r(622916);
let o = r(899517).n;
function i() {
	if (!('fetch' in o)) return !1;
	try {
		return new Headers(), new Request('http://www.example.com'), new Response(), !0;
	} catch (e) {
		return !1;
	}
}
function _(e) {
	return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function E() {
	if ('string' == typeof EdgeRuntime) return !0;
	if (!i()) return !1;
	if (_(o.fetch)) return !0;
	let e = !1,
		t = o.document;
	if (t && 'function' == typeof t.createElement)
		try {
			let r = t.createElement('iframe');
			(r.hidden = !0), t.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = _(r.contentWindow.fetch)), t.head.removeChild(r);
		} catch (e) {
			n.X && a.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
		}
	return e;
}
function s() {
	return 'ReportingObserver' in o;
}
