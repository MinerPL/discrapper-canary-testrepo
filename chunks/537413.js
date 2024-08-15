t.d(n, {
	Z: function () {
		return a;
	}
}),
	t(47120);
var l = t(451467),
	s = t(37113);
function a(e, n, t) {
	for (let a of s.no[e]) if ((0, l.Z)(e, a.resolution, a.fps, n, t)) return [a.resolution, a.fps];
	return null;
}
