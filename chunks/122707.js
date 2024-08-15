n.d(t, {
	q: function () {
		return s;
	}
}),
	n(47120);
var i = n(709054),
	a = n(765104);
function s(e, t) {
	var n;
	let s = null !== (n = a.Z.summaries(e)) && void 0 !== n ? n : [],
		l = 0;
	for (let e of s) i.default.compare(e.endId, t) > 0 && (l += 1);
	return l;
}
