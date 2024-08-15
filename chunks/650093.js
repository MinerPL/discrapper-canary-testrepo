r.d(t, {
	L2: function () {
		return E;
	},
	_6: function () {
		return s;
	},
	iK: function () {
		return c;
	}
});
var n = r(694043),
	a = r(622916),
	o = r(665909),
	i = r(395848);
let _ = {};
function E(e) {
	let t = _[e];
	if (t) return t;
	let r = i.m[e];
	if ((0, n.QC)(r)) return (_[e] = r.bind(i.m));
	let E = i.m.document;
	if (E && 'function' == typeof E.createElement)
		try {
			let t = E.createElement('iframe');
			(t.hidden = !0), E.head.appendChild(t);
			let n = t.contentWindow;
			n && n[e] && (r = n[e]), E.head.removeChild(t);
		} catch (t) {
			o.X && a.kg.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t);
		}
	return r ? (_[e] = r.bind(i.m)) : r;
}
function s(e) {
	_[e] = void 0;
}
function c(...e) {
	return E('setTimeout')(...e);
}
