n.d(t, {
	z: function () {
		return L;
	}
}),
	n(47120);
var s,
	a,
	l = n(735250),
	r = n(470079),
	i = n(120356),
	u = n.n(i),
	c = n(913527),
	o = n.n(c),
	E = n(692547),
	d = n(481060),
	N = n(44315),
	_ = n(894017),
	T = n(854698),
	m = n(849464),
	D = n(765305),
	v = n(231338),
	x = n(689938),
	h = n(888902);
((a = s || (s = {}))[(a.SCHEDULED = 0)] = 'SCHEDULED'),
	(a[(a.STARTING_SOON = 1)] = 'STARTING_SOON'),
	(a[(a.READY = 2)] = 'READY'),
	(a[(a.STARTED = 3)] = 'STARTED'),
	(a[(a.ENDED = 4)] = 'ENDED'),
	(a[(a.CANCELED = 5)] = 'CANCELED');
function g() {
	return (0, l.jsx)(d.TextBadge, {
		className: h.newBadge,
		color: E.Z.unsafe_rawColors.BRAND_260.css,
		text: (0, l.jsx)(d.Text, {
			className: h.newBadgeText,
			variant: 'text-xs/bold',
			children: x.Z.Messages.NEW
		})
	});
}
function f(e) {
	let { children: t, className: n, tooltipText: s } = e;
	return (0, l.jsx)('div', {
		className: u()(h.eventStatusContainer, n),
		children: (0, l.jsx)(d.Tooltip, {
			position: 'right',
			text: s,
			shouldShow: null != s,
			children: (e) =>
				(0, l.jsx)('div', {
					...e,
					className: u()(h.eventStatusContainer, n),
					children: t
				})
		})
	});
}
function L(e) {
	let {
			startTime: t,
			status: n,
			eventType: s,
			className: a,
			endTime: i,
			liveText: c,
			textVariant: E = 'text-sm/semibold',
			isNew: L,
			recurrenceRule: S,
			guildEventId: A,
			recurrenceId: I
		} = e,
		Z = (0, N.O0)(v.tP.TEXT_BRAND),
		C = (0, N.O0)(v.tP.TEXT_POSITIVE),
		R = (0, N.O0)(v.tP.TEXT_DANGER);
	null == c &&
		(c = s === D.WX.EXTERNAL ? x.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : x.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
	let p = (0, _.Z)(I, A),
		[{ startDateTimeString: j, endDateTimeString: O, currentOrPastEvent: M, upcomingEvent: U, diffMinutes: w }, G] =
			r.useState((0, T.ub)(t, i));
	r.useEffect(() => {
		G((0, T.ub)(t, i));
		let e = setInterval(() => G((0, T.ub)(t, i)), 1000);
		return () => {
			clearInterval(e);
		};
	}, [t, i]);
	let P = j;
	null != O &&
		'' !== O &&
		(P = x.Z.Messages.START_DATE_TO_END_DATE.format({
			start: j,
			end: O
		}));
	let b = r.useMemo(
			() =>
				n === D.p1.CANCELED || (null == p ? void 0 : p.is_canceled)
					? 5
					: n === D.p1.ACTIVE
						? 3
						: D.$I.has(n)
							? 4
							: M
								? 2
								: U
									? 1
									: 0,
			[n, null == p ? void 0 : p.is_canceled, M, U]
		),
		H = (function (e, t, n, s, a) {
			switch (e) {
				case 1:
					return a > 0 ? x.Z.Messages.STARTING_IN_MINUTES.format({ minutes: a }) : x.Z.Messages.STARTING_SOON;
				case 2:
					return x.Z.Messages.STARTING_SOON;
				case 3:
					return null != s && '' !== s
						? x.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
								start: n,
								startHook: (e) =>
									(0, l.jsx)(d.Text, {
										color: 'text-positive',
										variant: 'text-sm/semibold',
										className: h.liveEventEndTime,
										children: e
									}),
								end: s
							})
						: null != n
							? n
							: '';
				default:
					return t;
			}
		})(b, P, c, O, w),
		{
			Icon: V,
			iconColor: Y,
			textColor: k,
			tooltipText: z
		} = r.useMemo(
			() =>
				(function (e) {
					let t,
						{
							timeStatus: n,
							textBrand: s,
							textPositive: a,
							textDanger: l,
							endDateTimeString: r,
							startDateTimeString: i
						} = e,
						u = d.CalendarIcon,
						c = s,
						o = 'header-secondary';
					switch (n) {
						case 3:
							(c = a), (o = null != r ? void 0 : 'text-positive');
							break;
						case 4:
							u = d.ClockIcon;
							break;
						case 2:
						case 1:
							(o = 'text-brand'), (t = i);
							break;
						case 5:
							c = l;
					}
					return {
						Icon: u,
						iconColor: c.hex,
						textColor: o,
						tooltipText: t
					};
				})({
					timeStatus: b,
					textBrand: Z,
					textPositive: C,
					textDanger: R,
					endDateTimeString: O,
					startDateTimeString: j
				}),
			[b, Z, C, R, O, j]
		),
		W = null;
	if (null != S) {
		let e = (0, T.Ho)(S);
		W = x.Z.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({ recurrenceRule: e.toText() });
		let n = o()(t);
		W = (function (e, t) {
			let n = t.toDate(),
				s = n.toLocaleString(x.Z.getLocale(), { weekday: 'long' });
			switch (e) {
				case m.z.WEEKLY:
					return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({ weekday: s });
				case m.z.BIWEEKLY:
					return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({ weekday: s });
				case m.z.MONTHLY:
					let a = Math.ceil(n.getDate() / 7);
					return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
						weekday: s,
						nth: a
					});
				case m.z.YEARLY:
					return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
						date: n.toLocaleString(x.Z.getLocale(), {
							month: 'short',
							day: '2-digit'
						})
					});
				case m.z.WEEKDAY_ONLY:
					return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
				case m.z.WEEKEND_ONLY:
					return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
				default:
					return null;
			}
		})((0, T.zi)(n, S), n);
	}
	return (0, l.jsxs)(f, {
		className: u()(a, { [h.isRecurring]: null != W }),
		tooltipText: z,
		children: [
			L && n === D.p1.SCHEDULED
				? (0, l.jsx)(g, {})
				: (0, l.jsx)(V, {
						color: Y,
						size: 'custom',
						width: 20,
						height: 20
					}),
			(0, l.jsxs)('div', {
				className: h.eventStatusLabel,
				children: [
					(0, l.jsx)(d.Text, {
						color: k,
						variant: E,
						children: H
					}),
					null != W &&
						(0, l.jsx)(d.Text, {
							color: 'header-secondary',
							variant: 'text-xs/normal',
							children: W
						})
				]
			})
		]
	});
}
