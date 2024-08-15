n.d(t, {
	k: function () {
		return I;
	}
});
var r = n(668781),
	i = n(728345),
	a = n(835873),
	s = n(973616),
	o = n(592125),
	l = n(430824),
	u = n(496675),
	c = n(594174),
	d = n(979651),
	_ = n(317381),
	E = n(638880),
	f = n(782769),
	h = n(527805),
	p = n(689938);
async function I(e) {
	let {
			channelId: t,
			applicationId: n,
			launchId: I,
			inputApplication: m,
			analyticsLocations: T,
			launchingComponentId: g
		} = e,
		S = _.ZP.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n && (null == I || e.launchId === I)),
		A = m;
	if (null == A) {
		let e = await i.Z.fetchApplication(n);
		A = s.Z.createFromServer(e);
	}
	if (null == S || null == A) return;
	let N = c.default.getCurrentUser(),
		v = o.Z.getChannel(t);
	async function O() {
		if (null != S)
			await (0, E.Z)({
				applicationId: S.applicationId,
				activityChannelId: t,
				locationObject: {},
				analyticsLocations: T,
				componentId: g
			});
	}
	!(function (e) {
		let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
		switch (t) {
			case h.Fw.CAN_JOIN:
				null == n || n();
				break;
			case h.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
				(0, a.w)();
				break;
			case h.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
				r.Z.show({
					title: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
					body: p.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
					hideActionSheet: !1
				});
				break;
			case h.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
				r.Z.show({
					title: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
					body: p.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
					hideActionSheet: !1
				});
				break;
			case h.Fw.ACTIVITY_AGE_GATED:
				r.Z.show({
					title: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
					body: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
					hideActionSheet: !1
				});
				break;
			case h.Fw.NO_CHANNEL_CONNECT_PERMISSION:
			case h.Fw.CHANNEL_FULL:
			case h.Fw.NO_CHANNEL:
			case h.Fw.NO_USER:
				r.Z.show({
					title: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
					body: p.Z.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
					hideActionSheet: !1
				});
		}
	})({
		embeddedActivityJoinability: (0, h.ZP)({
			userId: null == N ? void 0 : N.id,
			application: A,
			channelId: t,
			currentUser: N,
			isActivitiesEnabledForCurrentPlatform: (0, f.a)(v),
			ChannelStore: o.Z,
			VoiceStateStore: d.Z,
			PermissionStore: u.Z,
			GuildStore: l.Z
		}),
		handleCanJoin: O
	});
}
