var a = t(735250),
	n = t(470079),
	l = t(481060),
	s = t(43267),
	r = t(93687),
	c = t(785232);
i.Z = n.memo(function (e) {
	let { channel: i, size: t, facepileSizeOverride: n, experimentLocation: d, isTyping: o, status: u, className: A, animated: I = !1, ..._ } = e,
		{ isFacepileEnabled: S } = r.Z.useExperiment({ location: d }, { autoTrackExposure: !0 });
	return i.recipients.length >= 2 && S && null == i.icon
		? (0, a.jsx)(c.Z, {
				'aria-label': _['aria-label'],
				'aria-hidden': _['aria-hidden'],
				className: A,
				recipients: i.recipients,
				size: null != n ? n : t,
				isTyping: o,
				status: u
			})
		: (0, a.jsx)(l.Avatar, {
				'aria-hidden': _['aria-hidden'],
				'aria-label': _['aria-label'],
				className: A,
				size: t,
				src: (0, s.x)(i, 80, I)
			});
});
