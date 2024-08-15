n.d(t, {
	Z: function () {
		return f;
	}
});
var i = n(735250),
	s = n(470079),
	a = n(512722),
	o = n.n(a),
	r = n(399606),
	l = n(822183),
	c = n(673125),
	d = n(610947),
	u = n(594174),
	h = n(308508);
function p(e) {
	let { streamerId: t, channelId: n } = e,
		a = s.useRef(null),
		l = (0, r.e7)([u.default], () => u.default.getCurrentUser());
	return (
		o()(null != l, 'user cannot be null'),
		(0, d.Z)(a, l, t, n),
		(0, i.jsx)('canvas', {
			className: h.canvas,
			ref: a
		})
	);
}
function f(e) {
	let { guildId: t, channelId: n, streamerId: s } = e,
		{ isSharedCanvasEnabled: a } = l.Z.useExperiment(
			{
				guildId: t,
				location: 'f0d1b1_1'
			},
			{ autoTrackExposure: !0 }
		),
		o = (0, r.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
	return a && o
		? (0, i.jsx)(p, {
				guildId: t,
				channelId: n,
				streamerId: s
			})
		: null;
}
