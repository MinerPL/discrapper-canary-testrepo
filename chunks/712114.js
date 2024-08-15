n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(990547),
	l = n(481060),
	r = n(213609),
	o = n(536442),
	c = n(39604),
	u = n(176127),
	d = n(689938),
	h = n(823472);
function m(e) {
	let { onOpenClips: t, lastClipsSession: n, closePopout: m } = e;
	return (a.useEffect(
		() => () => {
			(0, c.eL)();
		},
		[]
	),
	(0, r.Z)({
		type: s.ImpressionTypes.VIEW,
		name: s.ImpressionNames.HOTSPOT,
		properties: { hotspot_location: o.v6.CLIPS_CHANNEL_ATTACH_REMINDER }
	}),
	null == n)
		? (0, i.jsx)(i.Fragment, {})
		: (0, i.jsxs)('div', {
				className: h.recentClipsPopout,
				children: [
					(0, i.jsx)('div', {
						className: h.thumbnailStackContainer,
						children: (0, i.jsx)(u.Z, {})
					}),
					(0, i.jsx)(l.Heading, {
						className: h.header,
						color: 'header-primary',
						variant: 'heading-md/extrabold',
						children: d.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({ count: n.newClipIds.length })
					}),
					(0, i.jsx)(l.Text, {
						color: 'text-normal',
						className: h.__invalid_content,
						variant: 'text-sm/medium',
						children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({ applicationName: n.applicationName })
					}),
					(0, i.jsxs)('div', {
						className: h.buttonsContainer,
						children: [
							(0, i.jsx)(l.Button, {
								color: l.Button.Colors.PRIMARY,
								look: l.Button.Looks.LINK,
								onClick: function () {
									(0, o.Kw)(o.v6.CLIPS_CHANNEL_ATTACH_REMINDER), m();
								},
								children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA
							}),
							(0, i.jsx)(l.Button, {
								color: l.Button.Colors.BRAND,
								onClick: t,
								children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA
							})
						]
					})
				]
			});
}
