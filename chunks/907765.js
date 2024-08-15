r.d(t, {
	R: function () {
		return _;
	}
});
var n = r(622916),
	a = r(688838),
	o = r(151122),
	i = r(255768);
let _ = (0, o._I)(() => {
	let e;
	return {
		name: 'Dedupe',
		processEvent(t) {
			if (t.type) return t;
			try {
				if (
					(function (e, t) {
						return (
							!!t &&
							(!!(
								(function (e, t) {
									let r = e.message,
										n = t.message;
									return !!((r || n) && (!r || n) && (r || !n) && r === n && s(e, t) && E(e, t)) || !1;
								})(e, t) ||
								(function (e, t) {
									let r = c(t),
										n = c(e);
									return !!(r && n && r.type === n.type && r.value === n.value && s(e, t) && E(e, t)) || !1;
								})(e, t)
							) ||
								!1)
						);
					})(t, e)
				)
					return i.X && n.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null;
			} catch (e) {}
			return (e = t);
		}
	};
});
function E(e, t) {
	let r = (0, a.Fr)(e),
		n = (0, a.Fr)(t);
	if (!r && !n) return !0;
	if ((r && !n) || (!r && n)) return !1;
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) {
		let t = n[e],
			a = r[e];
		if (t.filename !== a.filename || t.lineno !== a.lineno || t.colno !== a.colno || t.function !== a.function) return !1;
	}
	return !0;
}
function s(e, t) {
	let r = e.fingerprint,
		n = t.fingerprint;
	if (!r && !n) return !0;
	if ((r && !n) || (!r && n)) return !1;
	try {
		return !(r.join('') !== n.join(''));
	} catch (e) {
		return !1;
	}
}
function c(e) {
	return e.exception && e.exception.values && e.exception.values[0];
}
