n.d(t, {
    Gb: function () {
        return _;
    },
    J1: function () {
        return c;
    },
    KV: function () {
        return d;
    },
    Ql: function () {
        return u;
    },
    j$: function () {
        return E;
    }
});
var r, i, a = n(314897), o = n(230900), s = n(854698), l = n(765305);
function u(e) {
    return !!(null == e ? void 0 : e.id);
}
function c(e) {
    var t, n;
    return null == e ? null : {
        start: e.start,
        end: e.end,
        frequency: e.frequency,
        interval: e.interval,
        by_weekday: e.byWeekday,
        by_n_weekday: e.byNWeekday,
        by_month: e.byMonth,
        by_month_day: (null !== (n = null === (t = e.byMonthDay) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 ? e.byMonthDay : null,
        by_year_day: e.byYearDay,
        count: e.count
    };
}
function d(e) {
    return null == e ? null : {
        start: new Date(e.start).toISOString(),
        end: null != e.end ? new Date(e.end).toISOString() : null,
        frequency: e.frequency,
        interval: e.interval,
        byWeekday: e.by_weekday,
        byNWeekday: e.by_n_weekday,
        byMonth: e.by_month,
        byMonthDay: e.by_month_day,
        byYearDay: e.by_year_day,
        count: e.count
    };
}
(r = i || (i = {})).CHANNEL_SELECTOR = 'ChannelSelector', r.DETAILS = 'Details', r.PREVIEW = 'Preview';
function _(e, t, n) {
    let {
        name: r,
        description: i,
        privacyLevel: o,
        channelId: s,
        scheduledStartTime: u,
        scheduledEndTime: d,
        entityType: _,
        entityMetadata: E,
        image: f,
        recurrenceRule: h,
        eventExceptions: p
    } = e;
    return {
        id: null != n ? n : l.Ku,
        name: r,
        description: null != i ? i : null,
        privacy_level: o,
        scheduled_start_time: u,
        scheduled_end_time: d,
        entity_type: _,
        entity_metadata: null != E ? E : null,
        image: null != f ? f : void 0,
        channel_id: s,
        guild_id: t,
        creator_id: a.default.getId(),
        status: l.p1.SCHEDULED,
        recurrence_rule: c(h),
        guild_scheduled_event_exceptions: p.map(e => ({
            event_exception_id: e.eventExceptionId,
            event_id: e.eventId,
            guild_id: e.guildId,
            scheduled_start_time: e.scheduledStartTime,
            scheduled_end_time: e.scheduledEndTime,
            is_canceled: e.isCanceled
        }))
    };
}
function E(e, t) {
    var n, r, i, a, u, c, _, E;
    let f = {
        name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '',
        privacyLevel: null !== (r = null == e ? void 0 : e.privacy_level) && void 0 !== r ? r : l.j8.GUILD_ONLY,
        description: null !== (i = null == e ? void 0 : e.description) && void 0 !== i ? i : '',
        scheduledStartTime: null !== (a = null == e ? void 0 : e.scheduled_start_time) && void 0 !== a ? a : (0, s.ib)().toISOString(),
        entityType: null !== (u = null == e ? void 0 : e.entity_type) && void 0 !== u ? u : l.WX.NONE,
        entityMetadata: null !== (c = null == e ? void 0 : e.entity_metadata) && void 0 !== c ? c : void 0,
        channelId: null == e ? void 0 : e.channel_id,
        creatorId: null == e ? void 0 : e.creator_id,
        image: null == e ? void 0 : e.image,
        scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
        recurrenceRule: d(null == e ? void 0 : e.recurrence_rule),
        eventExceptions: (null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : []).map(e => ({
            eventExceptionId: e.event_exception_id,
            eventId: e.event_id,
            guildId: e.guild_id,
            scheduledStartTime: e.scheduled_start_time,
            scheduledEndTime: e.scheduled_end_time,
            isCanceled: e.is_canceled
        }))
    };
    if (null != (E = e) && 'id' in E && (null == e ? void 0 : e.entity_type) === l.WX.EXTERNAL) {
        let t = (0, o.cS)(e);
        null != t && (f.entityMetadata = { location: t });
    } else
        null == f.channelId && null != t && (f.channelId = t.id, t.isGuildStageVoice() ? f.entityType = l.WX.STAGE_INSTANCE : t.isGuildVoice() && (f.entityType = l.WX.VOICE));
    return f;
}
