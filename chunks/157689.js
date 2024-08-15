n.d(t, {
	Z: function () {
		return r;
	}
});
var l = n(709054),
	s = n(482241),
	i = n(854698);
function r(e, t, n, r) {
	let a = (0, i.iA)(t, e),
		d = (0, i.Uq)(a.startDate, n.startDate) ? null : n.startDate,
		o = (0, i.Uq)(a.endDate, n.endDate) ? null : n.endDate;
	if (null != r)
		return (0, i.Y4)(n, a)
			? s.Z.deleteGuildEventException(e.guild_id, e.id, r.event_exception_id)
			: s.Z.updateGuildEventException(
					{
						scheduled_start_time: null == d ? void 0 : d.toISOString(),
						scheduled_end_time: null == o ? void 0 : o.toISOString(),
						is_canceled: r.is_canceled
					},
					e.guild_id,
					e.id,
					t
				);
	{
		let n = l.default.extractTimestamp(t);
		return s.Z.createGuildEventException(
			{
				original_scheduled_start_time: new Date(n).toISOString(),
				scheduled_start_time: null == d ? void 0 : d.toISOString(),
				scheduled_end_time: null == o ? void 0 : o.toISOString(),
				is_canceled: !1
			},
			e.guild_id,
			e.id
		);
	}
}
