n.d(e, {
	DM: function () {
		return o;
	},
	Db: function () {
		return a;
	},
	EG: function () {
		return l;
	},
	YO: function () {
		return h;
	},
	go: function () {
		return f;
	},
	jH: function () {
		return c;
	},
	lE: function () {
		return p;
	}
});
var r = n(370336),
	i = n(886115),
	s = n(899517);
function o() {
	let t = s.n,
		e = t.crypto || t.msCrypto,
		n = () => 16 * Math.random();
	try {
		if (e && e.randomUUID) return e.randomUUID().replace(/-/g, '');
		e &&
			e.getRandomValues &&
			(n = () => {
				let t = new Uint8Array(1);
				return e.getRandomValues(t), t[0];
			});
	} catch (t) {}
	return '10000000100040008000100000000000'.replace(/[018]/g, (t) => (t ^ ((15 & n()) >> (t / 4))).toString(16));
}
function u(t) {
	return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function c(t) {
	let { message: e, event_id: n } = t;
	if (e) return e;
	let r = u(t);
	if (r) return r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || '<unknown>';
	return n || '<unknown>';
}
function a(t, e, n) {
	let r = (t.exception = t.exception || {}),
		i = (r.values = r.values || []),
		s = (i[0] = i[0] || {});
	!s.value && (s.value = e || ''), !s.type && (s.type = n || 'Error');
}
function l(t, e) {
	let n = u(t);
	if (!n) return;
	let r = n.mechanism;
	if (
		((n.mechanism = {
			type: 'generic',
			handled: !0,
			...r,
			...e
		}),
		e && 'data' in e)
	) {
		let t = {
			...(r && r.data),
			...e.data
		};
		n.mechanism.data = t;
	}
}
function f(t, e, n = 5) {
	if (void 0 === e.lineno) return;
	let r = t.length,
		s = Math.max(Math.min(r - 1, e.lineno - 1), 0);
	e.pre_context = t.slice(Math.max(0, s - n), s).map((t) => (0, i.JM)(t, 0));
	let o = Math.min(r - 1, s);
	(e.context_line = (0, i.JM)(t[o], e.colno || 0)), (e.post_context = t.slice(Math.min(s + 1, r), s + 1 + n).map((t) => (0, i.JM)(t, 0)));
}
function h(t) {
	if (t && t.__sentry_captured__) return !0;
	try {
		(0, r.xp)(t, '__sentry_captured__', !0);
	} catch (t) {}
	return !1;
}
function p(t) {
	return Array.isArray(t) ? t : [t];
}
