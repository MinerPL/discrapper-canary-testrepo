n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(665149),
	l = n(894017),
	r = n(79874),
	o = n(854698),
	c = n(390966),
	u = n(689938),
	d = n(75811);
function h(e) {
	let { guildEvent: t, recurrenceId: n } = e,
		h = (0, r.ZP)(t, n),
		m = (0, l.Z)(n, t.id);
	if (null == t) return null;
	let p =
		(null == t ? void 0 : t.scheduled_start_time) != null
			? (0, o.lh)(m, h.startTime, new Date(null == t ? void 0 : t.scheduled_start_time))
			: null;
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)(s.ZP.Divider, { className: d.divider }),
			(0, i.jsx)(c.z, {
				startTime: h.startTime.toISOString(),
				status: null != p ? p : t.status,
				liveText: u.Z.Messages.LIVE_EVENT,
				className: d.eventSchedule,
				textVariant: 'text-lg/semibold',
				eventType: t.entity_type,
				guildEventId: null == t ? void 0 : t.id,
				recurrenceId: n
			}),
			(0, i.jsx)(a.Text, {
				color: 'header-secondary',
				variant: 'text-md/normal',
				className: d.eventName,
				children: t.name
			})
		]
	});
}
