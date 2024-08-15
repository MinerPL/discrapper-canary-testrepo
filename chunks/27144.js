n.d(t, {
	L: function () {
		return s;
	},
	z: function () {
		return o;
	}
});
var r = n(818083);
let i = (0, r.B)({
		kind: 'user',
		id: '2024-07_user_profile_past_activity',
		label: 'User Profile Past Activity Experiment',
		defaultConfig: {
			pastActivityEnabled: !1,
			selfPastActivityEnabled: !1,
			mostRecentActivityEnabled: !1,
			newActivityCardsEnabled: !1
		},
		treatments: [
			{
				id: 1,
				label: 'Past activity enabled',
				config: {
					pastActivityEnabled: !0,
					selfPastActivityEnabled: !0,
					mostRecentActivityEnabled: !1,
					newActivityCardsEnabled: !0
				}
			},
			{
				id: 2,
				label: 'Past and most recent activity enabled',
				config: {
					pastActivityEnabled: !0,
					selfPastActivityEnabled: !0,
					mostRecentActivityEnabled: !0,
					newActivityCardsEnabled: !0
				}
			}
		]
	}),
	a = (0, r.B)({
		kind: 'user',
		id: '2024-08_self_recent_activity',
		label: 'Self Recent Activity Experiment',
		defaultConfig: {
			pastActivityEnabled: !1,
			selfPastActivityEnabled: !1,
			mostRecentActivityEnabled: !1,
			newActivityCardsEnabled: !1
		},
		treatments: [
			{
				id: 1,
				label: "Enables past activity on the current user's profile",
				config: {
					pastActivityEnabled: !1,
					selfPastActivityEnabled: !0,
					mostRecentActivityEnabled: !1,
					newActivityCardsEnabled: !0
				}
			}
		]
	}),
	s = (e) => {
		let { location: t, autoTrackExposure: n = !0, trackExposureOptions: r = {} } = e,
			s = i.getCurrentConfig(
				{ location: t },
				{
					autoTrackExposure: n,
					trackExposureOptions: r
				}
			),
			o = a.getCurrentConfig(
				{ location: t },
				{
					autoTrackExposure: n,
					trackExposureOptions: r
				}
			);
		return {
			pastActivityEnabled: s.pastActivityEnabled || o.pastActivityEnabled,
			mostRecentActivityEnabled: s.mostRecentActivityEnabled || o.mostRecentActivityEnabled,
			newActivityCardsEnabled: s.newActivityCardsEnabled || o.newActivityCardsEnabled,
			selfPastActivityEnabled: s.selfPastActivityEnabled || o.selfPastActivityEnabled
		};
	},
	o = (e) => {
		let { location: t, autoTrackExposure: n = !0, trackExposureOptions: r = {} } = e,
			s = i.useExperiment(
				{ location: t },
				{
					autoTrackExposure: n,
					trackExposureOptions: r
				}
			),
			o = a.useExperiment(
				{ location: t },
				{
					autoTrackExposure: n,
					trackExposureOptions: r
				}
			);
		return {
			pastActivityEnabled: s.pastActivityEnabled || o.pastActivityEnabled,
			mostRecentActivityEnabled: s.mostRecentActivityEnabled || o.mostRecentActivityEnabled,
			newActivityCardsEnabled: s.newActivityCardsEnabled || o.newActivityCardsEnabled,
			selfPastActivityEnabled: s.selfPastActivityEnabled || o.selfPastActivityEnabled
		};
	};
