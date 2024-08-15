n.d(t, {
	o: function () {
		return r;
	}
});
var i = n(451467),
	a = n(557457),
	s = n(354459),
	l = n(37113);
function r(e, t) {
	var n, r;
	if (
		null == e ||
		e.type !== s.fO.STREAM ||
		null == e.maxResolution ||
		null == e.maxFrameRate ||
		!((null == e ? void 0 : null === (n = e.maxResolution) || void 0 === n ? void 0 : n.height) in l.LY) ||
		!(e.maxFrameRate in l.ws)
	)
		return !1;
	let o = (0, i.Z)(
		l.tI.PRESET_VIDEO,
		(0, l.aW)(null == e ? void 0 : null === (r = e.maxResolution) || void 0 === r ? void 0 : r.height),
		(0, l.L9)(e.maxFrameRate),
		t
	);
	return (
		!(
			null == e ||
			(0, a.tR)({
				maxResolution: e.maxResolution,
				maxFrameRate: e.maxFrameRate
			})
		) || o
	);
}
