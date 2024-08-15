n.d(t, {
	DB: function () {
		return s;
	},
	Lm: function () {
		return d;
	},
	Ob: function () {
		return o;
	},
	Rw: function () {
		return l;
	},
	Sd: function () {
		return a;
	},
	gS: function () {
		return u;
	},
	mG: function () {
		return c;
	}
});
var r = n(586072),
	i = n(981631);
function a() {
	let { isUserEligibleForCreatorMonetization: e } = r.bT.useExperiment(
		{ location: 'e3bb71_1' },
		{ autoTrackExposure: !1 }
	);
	return e;
}
function s() {
	let { isUserEligibleForCreatorMonetization: e } = r.bT.getCurrentConfig(
		{ location: 'e3bb71_2' },
		{ autoTrackExposure: !1 }
	);
	return e;
}
function o(e) {
	let t = (function (e) {
			let { enableFastMonetizationOnboardingForGuild: t } = r.z.useExperiment(
					{
						guildId: null != e ? e : i.lds,
						location: 'e3bb71_3'
					},
					{ autoTrackExposure: !0 }
				),
				{ enableFastMonetizationOnboardingForUser: n } = r.AC.useExperiment(
					{ location: 'e3bb71_4' },
					{ autoTrackExposure: !1 }
				);
			return null != e && t && n;
		})(null == e ? void 0 : e.id),
		n = (function (e) {
			let { enableFastMonetizationOnboardingForUser: t } = r.AC.useExperiment(
				{ location: 'e3bb71_7' },
				{ autoTrackExposure: !1 }
			);
			return null != e && e.hasFeature(i.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t;
		})(e);
	return t || n;
}
function l(e) {
	return (
		(function (e) {
			let { enableFastMonetizationOnboardingForGuild: t } = r.z.getCurrentConfig({
					guildId: null != e ? e : i.lds,
					location: 'e3bb71_5'
				}),
				{ enableFastMonetizationOnboardingForUser: n } = r.AC.getCurrentConfig({ location: 'e3bb71_6' });
			return null != e && t && n;
		})(null == e ? void 0 : e.id) ||
		(function (e) {
			let { enableFastMonetizationOnboardingForUser: t } = r.AC.getCurrentConfig({ location: 'e3bb71_8' });
			return null != e && e.hasFeature(i.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t;
		})(e)
	);
}
function u(e) {
	let { enableWaitlist: t } = r.IW.useExperiment(
		{
			guildId: null != e ? e : i.lds,
			location: 'e3bb71_9'
		},
		{ autoTrackExposure: !1 }
	);
	return t;
}
function c(e) {
	let { enableWaitlist: t } = r.IW.getCurrentConfig({
		guildId: null != e ? e : i.lds,
		location: 'e3bb71_10'
	});
	return t;
}
function d() {
	let { enableCreatorMonetizationNagActivateForUser: e } = r.aC.getCurrentConfig(
		{ location: 'e3bb71_11' },
		{ autoTrackExposure: !0 }
	);
	return e;
}
