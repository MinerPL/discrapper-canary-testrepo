t.d(s, {
	Z: function () {
		return M;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(512722),
	r = t.n(i),
	o = t(442837),
	l = t(570140),
	c = t(232567),
	d = t(809206),
	_ = t(497321),
	E = t(634894),
	u = t(100527),
	I = t(906732),
	T = t(475977),
	S = t(957730),
	N = t(296810),
	C = t(921813),
	m = t(935147),
	A = t(246946),
	O = t(25990),
	g = t(594174),
	h = t(74538),
	p = t(695346),
	R = t(265159),
	x = t(532495);
function M() {
	let e = (0, o.e7)([g.default], () => {
		let e = g.default.getCurrentUser();
		return r()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
	});
	a.useEffect(() => {
		(0, c.In)(e.id);
	}, [e.id]);
	let s = (0, o.e7)([A.Z], () => A.Z.hidePersonalInformation),
		{ pendingBio: t, ...i } = (0, o.cj)([O.Z], () => O.Z.getAllPending()),
		M = p.dN.useSetting() && null != t ? S.ZP.parse(void 0, t).content : t,
		f = h.ZP.canUsePremiumProfileCustomization(e),
		{ analyticsLocations: D } = (0, I.ZP)(u.Z.PROFILE);
	a.useEffect(() => () => l.Z.wait(d.W3), []);
	let P = 'UserSettingsProfileCustomization';
	return ((0, E.j)({
		location: P + ' auto on',
		autoTrackExposure: !0
	}),
	(0, E.j)({
		location: P + ' auto off',
		autoTrackExposure: !1
	}),
	s)
		? (0, n.jsx)(_.Z, {})
		: (0, n.jsxs)(I.Gt, {
				value: D,
				children: [
					(0, n.jsx)(T.Z, {}),
					(0, n.jsx)(N.Z, {
						profilePreview: (0, n.jsx)(C.Z, {
							user: e,
							canUsePremiumCustomization: f,
							onUpsellClick: R.Z,
							pendingBio: M,
							...i
						}),
						children: (0, n.jsx)(x.Z, {})
					}),
					!f && (0, n.jsx)(m.Z, { user: e })
				]
			});
}
