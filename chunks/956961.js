n.d(t, {
	Z: function () {
		return M;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(913527),
	o = n.n(l),
	c = n(442837),
	u = n(524437),
	d = n(481060),
	_ = n(239091),
	E = n(294218),
	I = n(703656),
	m = n(324701),
	T = n(768943),
	h = n(695346),
	N = n(592125),
	f = n(655354),
	C = n(324081),
	p = n(240126),
	g = n(791914),
	S = n(981631),
	A = n(689938),
	R = n(72506),
	x = n(674069);
let O = {
	offset: {
		left: 4,
		right: -12
	}
};
function M(e) {
	let { setTab: t, closePopout: n } = e,
		s = (0, c.e7)([T.Z], () => T.Z.getMessageReminders()),
		[r, l] = a.useState(!1),
		o = a.useMemo(() => s.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [s]),
		_ = r ? s : o;
	return (0, i.jsxs)('div', {
		className: R.container,
		children: [
			(0, i.jsx)(g.Z, {
				tab: u.X.TODOS,
				setTab: t,
				closePopout: n
			}),
			(0, i.jsxs)('div', {
				className: R.headerText,
				children: [
					(0, i.jsx)(d.Heading, {
						variant: 'heading-lg/bold',
						children: r ? A.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : A.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
					}),
					(0, i.jsx)(d.Anchor, {
						onClick: () => l(!r),
						children: (0, i.jsx)(d.Text, {
							variant: 'text-sm/normal',
							color: 'text-link',
							children: r ? A.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({ count: o.length }) : A.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({ count: s.length })
						})
					})
				]
			}),
			0 === _.length ? (0, i.jsx)(L, {}) : (0, i.jsx)(d.AdvancedScrollerThin, { children: _.map((e) => (0, i.jsx)(v, { messageReminder: e }, e.saveData.messageId)) })
		]
	});
}
function v(e) {
	let t,
		{ messageReminder: a } = e,
		s = a.saveData,
		l = a.message,
		u = (0, c.e7)([N.Z], () => N.Z.getChannel(s.channelId)),
		T = () => {
			(0, I.uL)(S.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), s.channelId, s.messageId));
		},
		p = null;
	return (null != s.dueAt &&
		(s.dueAt > new Date()
			? ((t = 'text-muted'),
				(p = A.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
					duration: o()
						.duration(s.dueAt.getTime() - Date.now(), 'millisecond')
						.humanize()
				})))
			: ((t = 'text-danger'),
				(p = A.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
					duration: o()
						.duration(Date.now() - s.dueAt.getTime(), 'millisecond')
						.humanize()
				})))),
	null == l || null == u)
		? null
		: (0, i.jsxs)('div', {
				className: x.container,
				children: [
					(0, i.jsx)(C.Z, {
						channel: u,
						gotoChannel: T,
						children: (0, i.jsxs)('div', {
							className: R.reminderActions,
							children: [
								null != a.saveData.notes && a.saveData.notes.length > 0
									? (0, i.jsxs)(d.Text, {
											variant: 'text-sm/normal',
											color: 'text-muted',
											className: R.notes,
											selectable: !0,
											children: [
												(0, i.jsx)(d.FileIcon, {
													size: 'xxs',
													color: 'currentColor'
												}),
												a.saveData.notes
											]
										})
									: null,
								null != p
									? (0, i.jsx)(d.Text, {
											variant: 'text-sm/medium',
											color: t,
											children: p
										})
									: null,
								(0, i.jsx)(d.TooltipContainer, {
									text: A.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
									children: (0, i.jsx)(d.Clickable, {
										onClick: (e) =>
											(0, _.jW)(e, async () => {
												let { default: e } = await n.e('6045').then(n.bind(n, 883150));
												return (t) =>
													(0, i.jsx)(e, {
														...t,
														message: l
													});
											}),
										className: R.clock,
										children: (0, i.jsx)(d.ClockIcon, {
											size: 'custom',
											width: 20,
											height: 20,
											color: 'currentColor'
										})
									})
								}),
								(0, i.jsx)(d.TooltipContainer, {
									text: A.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
									children: (0, i.jsx)(d.Clickable, {
										onClick: () => (0, m.x)(s),
										className: R.delete,
										children: (0, i.jsx)(d.TrashIcon, {
											size: 'custom',
											width: 20,
											height: 20,
											color: 'currentColor'
										})
									})
								})
							]
						})
					}),
					(0, i.jsxs)('div', {
						className: r()(x.messageContainer, R.unloadedMessage),
						children: [
							(0, i.jsx)(f.Z, {
								className: x.jumpMessageButton,
								onJump: T
							}),
							(0, i.jsx)(
								E.Z,
								{
									message: l,
									channel: u,
									className: x.message,
									compact: h.jU.getSetting(),
									animateAvatar: !1,
									focusProps: O,
									trackAnnouncementViews: !0
								},
								l.id
							)
						]
					})
				]
			});
}
function L() {
	return (0, i.jsx)(p.Z, {
		Icon: d.DoubleCheckmarkIcon,
		header: A.Z.Messages.MESSAGE_REMINDERS_EMPTY,
		tip: A.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
	});
}
