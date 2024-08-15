n.d(t, {
	t: function () {
		return i;
	}
});
var r = n(887490);
function i(e, t, n, i) {
	var a, s;
	let o = 0;
	for (let a = 0; a < n.length; a++) {
		let s = n[a];
		if (null == s) continue;
		let l = o + s.length;
		if (i <= l) {
			let n = r.C0.child(t, a),
				s = r.bN.node(e, n)[0];
			if (r.LC.isText(s))
				return {
					path: n,
					offset: Math.min(Math.max(i - o, 0), s.text.length)
				};
		}
		o = l;
	}
	let l = n.length - 1;
	return {
		path: r.C0.child(t, l),
		offset: null !== (s = null === (a = n[l]) || void 0 === a ? void 0 : a.length) && void 0 !== s ? s : 0
	};
}
