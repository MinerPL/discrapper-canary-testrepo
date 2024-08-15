n.d(t, {
	Go: function () {
		return E;
	},
	NV: function () {
		return c;
	},
	Zq: function () {
		return f;
	},
	ln: function () {
		return _;
	},
	nM: function () {
		return h;
	},
	xt: function () {
		return p;
	}
});
var r = n(818083),
	i = n(836157),
	a = n(441167),
	s = n(131951),
	o = n(74538),
	l = n(779618),
	u = n(474936);
let c = (0, r.B)({
		kind: 'user',
		id: '2022-11_clips_experiment',
		label: 'Clips Experiment',
		defaultConfig: {
			enableClips: !1,
			ignorePlatformRestriction: !1,
			showClipsHeaderEntrypoint: !1
		},
		treatments: [
			{
				id: 1,
				label: 'Clips without upsells',
				config: {
					enableClips: !0,
					ignorePlatformRestriction: !1,
					showClipsHeaderEntrypoint: !0
				}
			},
			{
				id: 2,
				label: 'Clips with upsells',
				config: {
					enableClips: !0,
					ignorePlatformRestriction: !1,
					showClipsHeaderEntrypoint: !0
				}
			},
			{
				id: 99,
				label: 'Clips 4 da Developerz',
				config: {
					enableClips: !0,
					ignorePlatformRestriction: !0,
					showClipsHeaderEntrypoint: !0
				}
			}
		]
	}),
	d = (0, r.B)({
		kind: 'user',
		id: '2023-09_clips_nitro_early_access',
		label: 'Clips (Nitro EA)',
		defaultConfig: {
			enableClips: !1,
			enablePremiumEarlyAccessAnnouncementCoachmark: !1,
			enablePremiumEarlyAccessGoLiveRoadblock: !1
		},
		treatments: [
			{
				id: 1,
				label: 'Clips Nitro EA Upsells Visible',
				config: {
					enableClips: !1,
					enablePremiumEarlyAccessAnnouncementCoachmark: !0,
					enablePremiumEarlyAccessGoLiveRoadblock: !0
				}
			},
			{
				id: 2,
				label: 'Clips Enabled (Nitro)',
				config: {
					enableClips: !0,
					enablePremiumEarlyAccessAnnouncementCoachmark: !0,
					enablePremiumEarlyAccessGoLiveRoadblock: !1
				}
			}
		]
	});
function _() {
	if (!(0, l.Z)(s.Z)) return !1;
	let { enableClips: e } = d.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
		{ enableClips: t } = c.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
		{ enableDecoupledGameClipping: n } = i.Z.getCurrentConfig(
			{ location: 'areClipsEnabled' },
			{ autoTrackExposure: !1 }
		),
		{ enableViewerClipping: r } = a.Z.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 });
	return e || t || n || r;
}
function E() {
	let e = (0, l.Z)(s.Z),
		{ enableClips: t } = d.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
		{ enableClips: n } = c.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
		{ enableDecoupledGameClipping: r } = i.Z.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
		{ enableViewerClipping: o } = a.Z.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 });
	return (n || t || r || o) && e;
}
let f = (e) => {
		let { autoTrackExposure: t } = e,
			n = (0, l.Z)(s.Z),
			{ enablePremiumEarlyAccessGoLiveRoadblock: r } = d.useExperiment(
				{ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' },
				{ autoTrackExposure: t && n }
			);
		return !!n && r;
	},
	h = (e) => {
		let { autoTrackExposure: t } = e,
			n = (0, l.Z)(s.Z),
			{ enablePremiumEarlyAccessAnnouncementCoachmark: r } = d.useExperiment(
				{ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' },
				{ autoTrackExposure: t && n }
			);
		return !!n && r;
	};
function p(e) {
	return o.ZP.isPremiumAtLeast(e.premiumType, u.p9.TIER_2);
}
