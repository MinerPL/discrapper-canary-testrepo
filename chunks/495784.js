var t = a(913527),
	n = a.n(t),
	l = a(704215),
	i = a(951716),
	r = a(605236),
	o = a(972830),
	c = a(430824),
	d = a(594174),
	N = a(374023),
	u = a(709054),
	_ = a(645792),
	m = a(981631),
	E = a(921944);
s.Z = {
	init(e) {
		let { hasModalOpen: s, openModal: a } = e;
		if (!N.s.isDisallowPopupsSet())
			(0, o.h)(() => {
				if ((0, i.Z)()) return;
				let e = d.default.getCurrentUser(),
					t = null != e && 7 > n()().diff(n()(u.default.extractTimestamp(e.id)), 'days'),
					o = null != Object.values(c.Z.getGuilds()).find((e) => e.hasFeature(m.oNc.HUB)),
					N = !(0, r.un)(l.z.HUB_BACK_TO_SCHOOL_UPSELL);
				!(t || s() || o || !N) && (0, _.b)() && (_.Z.trackExposure({ location: '8b792a_1' }), a(), (0, r.kk)(l.z.HUB_BACK_TO_SCHOOL_UPSELL));
			});
	},
	hideHubUpsell() {
		(0, r.EW)(l.z.HUB_BACK_TO_SCHOOL_UPSELL, { dismissAction: E.L.AUTO });
	}
};
