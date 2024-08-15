t.d(n, {
	Z: function () {
		return I;
	}
});
var l = t(735250);
t(470079);
var s = t(120356),
	o = t.n(s),
	i = t(442837),
	r = t(481060),
	u = t(239091),
	a = t(592125),
	c = t(430824),
	d = t(924301),
	E = t(894017),
	_ = t(854698),
	C = t(390966),
	N = t(765305),
	h = t(689938),
	m = t(285747);
function I(e) {
	let { recurrenceId: n, originalScheduledStartTime: s, guildEventId: I, onClick: g, isActive: L } = e,
		x = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(I)),
		M = (0, E.Z)(n, null == x ? void 0 : x.id),
		T = (0, i.e7)([c.Z], () => c.Z.getGuild(null == x ? void 0 : x.guild_id)),
		S = (0, i.e7)([a.Z], () => a.Z.getChannel(null == x ? void 0 : x.channel_id));
	if (null == x) return null;
	let { is_canceled: v = !1 } = null != M ? M : {},
		Z = (null == M ? void 0 : M.scheduled_start_time) != null ? new Date(null == M ? void 0 : M.scheduled_start_time) : s,
		p = (0, _.DK)(x),
		f = v ? N.p1.CANCELED : N.p1.SCHEDULED;
	p === n && (f = x.status);
	let k = (null == x ? void 0 : x.scheduled_start_time) != null ? (0, _.lh)(M, Z, new Date(null == x ? void 0 : x.scheduled_start_time)) : null,
		B = (e) => {
			e.stopPropagation(),
				null != T &&
					(0, u.jW)(e, async () => {
						let { default: e } = await Promise.all([t.e('15450'), t.e('37133'), t.e('62318')]).then(t.bind(t, 215269));
						return (t) =>
							(0, l.jsx)(e, {
								guildEventId: x.id,
								recurrenceId: n,
								channel: S,
								guild: T,
								isRecurrenceItem: !0,
								...t
							});
					});
		};
	return (0, l.jsxs)(r.ClickableContainer, {
		className: o()(m.container, {
			[m.canceled]: v,
			[m.clickable]: null != g,
			[m.active]: L
		}),
		onClick: (e) => {
			e.stopPropagation(), !v && (null == g || g(n));
		},
		onContextMenu: B,
		'aria-label': '',
		children: [
			(0, l.jsx)(C.z, {
				startTime: Z.toISOString(),
				status: null != k ? k : f,
				eventType: x.entity_type,
				guildEventId: x.id,
				recurrenceId: n,
				className: m.timeStatus
			}),
			v &&
				(0, l.jsx)(r.Text, {
					variant: 'text-sm/semibold',
					color: 'text-danger',
					className: m.canceledStatus,
					children: h.Z.Messages.EVENT_CANCELED
				}),
			(0, l.jsx)(r.Tooltip, {
				text: h.Z.Messages.MORE,
				position: 'top',
				'aria-label': h.Z.Messages.EDIT,
				children: (e) =>
					(0, l.jsx)(r.Clickable, {
						...e,
						onClick: B,
						className: m.iconButton,
						children: (0, l.jsx)(r.MoreHorizontalIcon, {
							size: 'custom',
							color: 'currentColor',
							width: 20,
							height: 20,
							className: m.icon
						})
					})
			})
		]
	});
}
