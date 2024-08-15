t.d(n, {
	RM: function () {
		return a;
	},
	Ug: function () {
		return l;
	}
});
let s = (0, t(818083).B)({
	kind: 'guild',
	id: '2023-02_onboardingdropdowns',
	label: 'Enables dropdown selections from onboarding prompts',
	defaultConfig: { dropdownsAllowed: !1 },
	treatments: [
		{
			id: 1,
			label: 'On',
			config: { dropdownsAllowed: !0 }
		}
	]
});
function l(e) {
	return s.useExperiment(
		{
			guildId: e,
			location: 'a12ce7_1'
		},
		{ autoTrackExposure: !1 }
	);
}
function a(e) {
	return s.getCurrentConfig({
		guildId: e,
		location: 'a12ce7_2'
	});
}
