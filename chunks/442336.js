n.d(t, {
	Z: function () {
		return f;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(442837),
	l = n(481060),
	r = n(92114),
	o = n(9156),
	c = n(585483),
	u = n(621600),
	d = n(665149),
	h = n(110255),
	m = n(981631),
	p = n(689938),
	_ = n(299834);
function f(e) {
	let { channel: t } = e,
		n = (0, l.useRedesignIconContext)().enabled,
		[f, E] = (0, s.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]),
		[C, g] = a.useState(!1);
	a.useEffect(() => {
		let e = () => g(!0);
		return (
			c.S.subscribe(m.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
			() => {
				c.S.unsubscribe(m.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
			}
		);
	}, []);
	let I = (e) => {
			e.shiftKey ? r.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !f }, u.UE.muted(!f)) : g((e) => !e);
		},
		x = p.Z.Messages.NOTIFICATION_SETTINGS;
	return (0, i.jsx)(l.Popout, {
		shouldShow: C,
		animation: l.Popout.Animation.NONE,
		position: 'bottom',
		align: 'right',
		autoInvert: !1,
		onRequestClose: () => g(!1),
		renderPopout: (e) =>
			(0, i.jsx)(h.Z, {
				...e,
				channel: t,
				navId: 'channel-context',
				label: p.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL
			}),
		children: (e, t) => {
			let { isShown: a } = t;
			return (0, i.jsx)(d.ZP.Icon, {
				...e,
				onClick: I,
				tooltip: a ? null : x,
				icon: f || E !== m.bL.ALL_MESSAGES ? l.BellSlashIcon : l.BellIcon,
				foreground: f && !n ? _.strikethrough : null,
				'aria-label': x,
				selected: a
			});
		}
	});
}
