n.d(t, {
	C: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
		id: '2024-04_memberlist_hover_interactions',
		kind: 'user',
		label: 'Memberlist Hover Interactions',
		defaultConfig: {
			showReplyIcon: !1,
			openOnHover: !1
		},
		treatments: [
			{
				id: 0,
				label: 'Control',
				config: {
					showReplyIcon: !1,
					openOnHover: !1
				}
			},
			{
				id: 1,
				label: 'Show Reply Icon',
				config: {
					showReplyIcon: !0,
					openOnHover: !1
				}
			},
			{
				id: 2,
				label: 'Open on Hover',
				config: {
					showReplyIcon: !1,
					openOnHover: !0
				}
			}
		]
	}),
	i = (e) => {
		let { location: t, autoTrackExposure: n = !0 } = e,
			{ showReplyIcon: i, openOnHover: a } = r.useExperiment({ location: t }, { autoTrackExposure: n });
		return {
			showReplyIcon: i,
			openOnHover: a
		};
	};
