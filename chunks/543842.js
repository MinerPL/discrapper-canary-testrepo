function r(e, t) {
	var n;
	let r = null == t ? void 0 : null === (n = t.replace(/-/g, '_')) || void 0 === n ? void 0 : n.toUpperCase();
	if (null != r && r in e) return e[r];
}
n.d(t, {
	Z: function () {
		return r;
	}
}),
	n(757143);
