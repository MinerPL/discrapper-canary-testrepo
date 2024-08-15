n.d(t, {
	Z: function () {
		return u;
	}
});
var r = n(735250);
n(470079);
var i = n(246841),
	a = n(620662),
	s = n(503438),
	o = n(981631),
	l = n(120297);
function u(e) {
	let { activity: t, user: n, source: u, look: c, color: d, onAction: _ } = e;
	return null != t && (0, a.Z)(t, o.xjy.PLAY) && (0, s.Z)(t)
		? (0, r.jsx)(
				i.Z,
				{
					className: l.button,
					size: l.buttonSize,
					look: c,
					color: d,
					fullWidth: !0,
					activity: t,
					user: n,
					source: u,
					onAction: _
				},
				'play'
			)
		: null;
}
