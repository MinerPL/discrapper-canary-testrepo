n.d(t, {
	s: function () {
		return l;
	}
});
var i = n(470079),
	a = n(818083),
	s = n(981631);
let r = (0, a.B)({
		kind: 'guild',
		id: '2021-10_study_group',
		label: 'Student hub study group',
		defaultConfig: { enableStudyGroup: !1 },
		treatments: [
			{
				id: 1,
				label: 'Enables study group sidebar',
				config: { enableStudyGroup: !0 }
			}
		]
	}),
	l = (e) => {
		var t;
		return (
			i.useEffect(() => {
				null != e &&
					e.hasFeature(s.oNc.HUB) &&
					r.trackExposure({
						guildId: e.id,
						location: '467c32_1'
					});
			}, [e]),
			r.useExperiment(
				{
					guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : s.lds,
					location: '467c32_2'
				},
				{
					autoTrackExposure: !1,
					disable: null == e || !e.hasFeature(s.oNc.HUB)
				}
			)
		);
	};
