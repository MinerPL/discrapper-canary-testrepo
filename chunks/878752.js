n.d(t, {
	Z: function () {
		return N;
	}
});
var i = n(735250);
n(470079);
var a = n(512722),
	s = n.n(a),
	l = n(442837),
	r = n(779618),
	o = n(446226),
	c = n(441167),
	u = n(822183),
	d = n(641015),
	h = n(131951),
	m = n(594174),
	p = n(700785),
	_ = n(213652),
	f = n(320427),
	E = n(145010),
	C = n(933686),
	g = n(997614),
	I = n(159909),
	x = n(981631),
	T = n(468289);
function N(e) {
	let { channel: t, hasActiveStream: n, themeable: a = !1 } = e,
		N = (0, l.e7)([m.default], () => {
			let e = m.default.getCurrentUser();
			return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
		}),
		v = (0, o.Z)(),
		{ isSharedCanvasEnabled: S } = u.Z.useExperiment({
			guildId: null == t ? void 0 : t.guild_id,
			location: 'b7309a_1'
		}),
		{ enableViewerClipping: Z } = c.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
		A = (0, r.Z)(h.Z);
	if (null == t || null != v) return null;
	let M = (0, d.Z)(t),
		b = p.BT({
			permission: x.Plq.ADD_REACTIONS,
			user: N,
			context: t
		});
	return (0, i.jsxs)('div', {
		className: T.voiceEffectsActionBar,
		children: [
			M &&
				(0, i.jsx)(g.Z, {
					channel: t,
					themeable: a
				}),
			b && (0, i.jsx)(C.Z, { channel: t }),
			Z && A && (0, i.jsx)(_.Z, { channel: t }),
			S && n && (0, i.jsx)(f.Z, {}),
			S && n && (0, i.jsx)(E.Z, { channel: t }),
			S && n && (0, i.jsx)(I.Z, {})
		]
	});
}
