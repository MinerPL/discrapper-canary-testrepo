n.d(t, {
	X7: function () {
		return l;
	},
	Zy: function () {
		return s;
	},
	cB: function () {
		return a;
	}
});
var r = n(818083);
let i = (0, r.B)({
		id: '2023-12_quests',
		kind: 'user',
		label: 'Quests',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 0,
				label: 'Control',
				config: { enabled: !1 }
			},
			{
				id: 1,
				label: 'Quests enabled',
				config: { enabled: !0 }
			}
		]
	}),
	a = (e) => {
		let { location: t } = e;
		return i.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
	},
	s = (e) => {
		let { location: t } = e;
		return i.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
	},
	o = (0, r.B)({
		id: '2024-04_quest_preview_tool',
		kind: 'user',
		label: 'Quest Preview Tool',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'Preview tool enabled',
				config: { enabled: !0 }
			}
		]
	});
function l(e) {
	let { location: t } = e;
	return o.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
