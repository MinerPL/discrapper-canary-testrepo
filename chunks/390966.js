n.d(t, {
    z: function () {
        return f;
    }
}), n(47120);
var s, a, r = n(735250), l = n(470079), i = n(120356), u = n.n(i), o = n(913527), c = n.n(o), E = n(692547), d = n(481060), N = n(44315), T = n(894017), _ = n(854698), D = n(849464), m = n(765305), v = n(231338), g = n(689938), x = n(642790);
(a = s || (s = {}))[a.SCHEDULED = 0] = 'SCHEDULED', a[a.STARTING_SOON = 1] = 'STARTING_SOON', a[a.READY = 2] = 'READY', a[a.STARTED = 3] = 'STARTED', a[a.ENDED = 4] = 'ENDED', a[a.CANCELED = 5] = 'CANCELED';
function S() {
    return (0, r.jsx)(d.TextBadge, {
        className: x.newBadge,
        color: E.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(d.Text, {
            className: x.newBadgeText,
            variant: 'text-xs/bold',
            children: g.Z.Messages.NEW
        })
    });
}
function h(e) {
    let {
        children: t,
        className: n,
        tooltipText: s
    } = e;
    return (0, r.jsx)('div', {
        className: u()(x.eventStatusContainer, n),
        children: (0, r.jsx)(d.Tooltip, {
            position: 'right',
            text: s,
            shouldShow: null != s,
            children: e => (0, r.jsx)('div', {
                ...e,
                className: u()(x.eventStatusContainer, n),
                children: t
            })
        })
    });
}
function f(e) {
    let {
            startTime: t,
            status: n,
            eventType: s,
            className: a,
            endTime: i,
            liveText: o,
            textVariant: E = 'text-sm/semibold',
            isNew: f,
            recurrenceRule: I,
            guildEventId: R,
            recurrenceId: L
        } = e, C = (0, N.O0)(v.tP.TEXT_BRAND), p = (0, N.O0)(v.tP.TEXT_POSITIVE), Z = (0, N.O0)(v.tP.TEXT_DANGER);
    null == o && (o = s === m.WX.EXTERNAL ? g.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : g.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
    let A = (0, T.Z)(L, R), [{
                startDateTimeString: j,
                endDateTimeString: M,
                currentOrPastEvent: O,
                upcomingEvent: U,
                diffMinutes: P
            }, G] = l.useState((0, _.ub)(t, i));
    l.useEffect(() => {
        G((0, _.ub)(t, i));
        let e = setInterval(() => G((0, _.ub)(t, i)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [
        t,
        i
    ]);
    let H = j;
    null != M && '' !== M && (H = g.Z.Messages.START_DATE_TO_END_DATE.format({
        start: j,
        end: M
    }));
    let w = l.useMemo(() => n === m.p1.CANCELED || (null == A ? void 0 : A.is_canceled) ? 5 : n === m.p1.ACTIVE ? 3 : m.$I.has(n) ? 4 : O ? 2 : U ? 1 : 0, [
            n,
            null == A ? void 0 : A.is_canceled,
            O,
            U
        ]), b = function (e, t, n, s, a) {
            switch (e) {
            case 1:
                return a > 0 ? g.Z.Messages.STARTING_IN_MINUTES.format({ minutes: a }) : g.Z.Messages.STARTING_SOON;
            case 2:
                return g.Z.Messages.STARTING_SOON;
            case 3:
                return null != s && '' !== s ? g.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                    start: n,
                    startHook: e => (0, r.jsx)(d.Text, {
                        color: 'text-positive',
                        variant: 'text-sm/semibold',
                        className: x.liveEventEndTime,
                        children: e
                    }),
                    end: s
                }) : null != n ? n : '';
            default:
                return t;
            }
        }(w, H, o, M, P), {
            Icon: V,
            iconColor: k,
            textColor: Y,
            tooltipText: z
        } = l.useMemo(() => function (e) {
            let t, {
                    timeStatus: n,
                    textBrand: s,
                    textPositive: a,
                    textDanger: r,
                    endDateTimeString: l,
                    startDateTimeString: i
                } = e, u = d.CalendarIcon, o = s, c = 'header-secondary';
            switch (n) {
            case 3:
                o = a, c = null != l ? void 0 : 'text-positive';
                break;
            case 4:
                u = d.ClockIcon;
                break;
            case 2:
            case 1:
                c = 'text-brand', t = i;
                break;
            case 5:
                o = r;
            }
            return {
                Icon: u,
                iconColor: o.hex,
                textColor: c,
                tooltipText: t
            };
        }({
            timeStatus: w,
            textBrand: C,
            textPositive: p,
            textDanger: Z,
            endDateTimeString: M,
            startDateTimeString: j
        }), [
            w,
            C,
            p,
            Z,
            M,
            j
        ]), B = null;
    if (null != I) {
        let e = (0, _.Ho)(I);
        B = g.Z.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({ recurrenceRule: e.toText() });
        let n = c()(t);
        B = function (e, t) {
            let n = t.toDate(), s = n.toLocaleString(g.Z.getLocale(), { weekday: 'long' });
            switch (e) {
            case D.z.WEEKLY:
                return g.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({ weekday: s });
            case D.z.BIWEEKLY:
                return g.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({ weekday: s });
            case D.z.MONTHLY:
                let a = Math.ceil(n.getDate() / 7);
                return g.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                    weekday: s,
                    nth: a
                });
            case D.z.YEARLY:
                return g.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                    date: n.toLocaleString(g.Z.getLocale(), {
                        month: 'short',
                        day: '2-digit'
                    })
                });
            case D.z.WEEKDAY_ONLY:
                return g.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
            case D.z.WEEKEND_ONLY:
                return g.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
            default:
                return null;
            }
        }((0, _.zi)(n, I), n);
    }
    return (0, r.jsxs)(h, {
        className: u()(a, { [x.isRecurring]: null != B }),
        tooltipText: z,
        children: [
            f && n === m.p1.SCHEDULED ? (0, r.jsx)(S, {}) : (0, r.jsx)(V, {
                color: k,
                size: 'custom',
                width: 20,
                height: 20
            }),
            (0, r.jsxs)('div', {
                className: x.eventStatusLabel,
                children: [
                    (0, r.jsx)(d.Text, {
                        color: Y,
                        variant: E,
                        children: b
                    }),
                    null != B && (0, r.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        children: B
                    })
                ]
            })
        ]
    });
}
