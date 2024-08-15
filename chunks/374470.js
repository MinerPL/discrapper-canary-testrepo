function r(e, t) {
	var n, r;
	if (null == e) return !1;
	let i = null == e ? void 0 : null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
	if (null == i) return console.warn('Unable to determine render window for element', e), !1;
	let a = null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : 'Element',
		s = i[a];
	return null == s ? (console.warn('Unable to find element constructor "'.concat(a, '" in'), i), !1) : e instanceof s;
}
n.d(t, {
	k: function () {
		return r;
	}
});
