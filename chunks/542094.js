n.d(t, {
	JS: function () {
		return i;
	},
	Qv: function () {
		return A;
	},
	ZP: function () {
		return E;
	},
	w1: function () {
		return w;
	}
}),
	n(757143);
var i,
	l,
	r = n(442837),
	a = n(911969),
	o = n(906732),
	u = n(835473),
	c = n(592125),
	d = n(358085),
	s = n(317381),
	p = n(638880),
	f = n(122613),
	v = n(619915),
	Z = n(761122),
	h = n(361213),
	m = n(716600),
	_ = n(952561),
	g = n(778569),
	I = n(701488);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function E(e) {
	let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: o = ['embedded_cover'], backgroundResolution: u = 250, launchingComponentId: c } = e,
		{ application: s, activity: p } = t,
		f = p.client_platform_config[(0, Z.Z)((0, d.getOS)())],
		m = null != f.label_until && Date.now() < Date.parse(f.label_until),
		_ = (0, g.Z)({
			applicationId: s.id,
			size: u,
			names: o
		}),
		E = null != p.activity_preview_video_asset_id ? (0, h.Z)(s.id, p.activity_preview_video_asset_id) : null,
		y = (0, v.ZP)(n).find((e) => {
			let { embeddedActivity: t } = e;
			return s.id === t.applicationId;
		}),
		b = A({
			channelId: null == n ? void 0 : n.id,
			applicationId: s.id
		}),
		C = w({
			applicationId: t.application.id,
			channelId: null == n ? void 0 : n.id,
			locationObject: i,
			embeddedActivitiesManager: r,
			onActivityItemSelectedProp: l,
			launchingComponentId: c
		}),
		S = t.activity.client_platform_config[(0, Z.Z)((0, d.getOS)())].release_phase,
		T = I.eB.includes(S) ? S.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
	return {
		imageBackground: _,
		videoUrl: E,
		joinableEmbeddedApp: y,
		activityAction: b,
		onActivityItemSelected: C,
		labelType: m ? f.label_type : a.ww.NONE,
		staffReleasePhase: T
	};
}
function A(e) {
	let { channelId: t, applicationId: n } = e,
		i = 0,
		l = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
		a = (0, m.Z)(),
		o = (0, _.Z)(),
		d = (0, u.q)(n),
		s = (0, v.ZP)(l).find((e) => {
			let { embeddedActivity: t } = e;
			return null != d && d.id === t.applicationId;
		});
	return null == d ? i : (null != l && (null == a ? void 0 : a.channelId) === l.id && (null == o ? void 0 : o.id) === d.id ? (i = 2) : null != s && (i = 1), i);
}
function w(e) {
	let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: a } = e,
		u = A({
			channelId: n,
			applicationId: t
		}),
		{ analyticsLocations: c } = (0, o.ZP)();
	switch (u) {
		case 0:
			return async () => {
				await (0, f.Z)({
					targetApplicationId: t,
					locationObject: i,
					channelId: n,
					analyticsLocations: c,
					componentId: a
				}).then((e) => e && (null == r ? void 0 : r({ applicationId: t })));
			};
		case 1:
			return async () => {
				!s.ZP.isLaunchingActivity() &&
					(await (0, p.Z)({
						applicationId: t,
						activityChannelId: n,
						locationObject: i,
						analyticsLocations: c,
						componentId: a
					}).then((e) => e && (null == r ? void 0 : r({ applicationId: t }))));
			};
		case 2:
			return () => {
				!s.ZP.isLaunchingActivity() &&
					(null != n &&
						l.leaveActivity({
							channelId: n,
							applicationId: t
						}),
					null == r || r({ applicationId: t }));
			};
	}
}
