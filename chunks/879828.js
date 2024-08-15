t.d(n, {
	Z: function () {
		return m;
	}
});
var s = t(735250),
	i = t(470079),
	o = t(704215),
	l = t(481060),
	r = t(605236),
	a = t(929498),
	c = t(678738),
	d = t(151545),
	u = t(527790),
	I = t(304042),
	_ = t(921944),
	f = t(689938),
	E = t(694842);
function m(e) {
	let { user: n, currentUser: t, onClose: m } = e,
		{ live: p, recent: x, stream: Z } = (0, a.Z)(n.id),
		v = n.id === t.id,
		h = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
	return (
		i.useEffect(() => {
			if (!!v && !h)
				(0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
					dismissAction: _.L.AUTO_DISMISS,
					forceTrack: !0
				});
		}, [v, h]),
		(0, s.jsxs)(l.ScrollerThin, {
			className: E.scroller,
			fade: !0,
			children: [
				(0, s.jsxs)(c.Z, {
					children: [
						null != Z &&
							(0, s.jsx)(I.Z, {
								user: n,
								currentUser: t,
								stream: Z,
								onClose: m
							}),
						p.map((e, i) =>
							(0, s.jsx)(
								d.Z,
								{
									user: n,
									currentUser: t,
									activity: e,
									onClose: m
								},
								'live-'.concat(i)
							)
						)
					]
				}),
				(0, s.jsx)(c.Z, {
					heading: (0, s.jsxs)('div', {
						className: E.heading,
						children: [
							f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
							(0, s.jsx)(l.Tooltip, {
								tooltipContentClassName: E.tooltipContent,
								text: f.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
								children: (e) =>
									(0, s.jsx)(l.CircleInformationIcon, {
										...e,
										size: 'xxs',
										color: 'currentColor'
									})
							})
						]
					}),
					children: x.map((e) =>
						(0, s.jsx)(
							u.Z,
							{
								user: n,
								entry: e,
								onClose: m
							},
							e.id
						)
					)
				})
			]
		})
	);
}
