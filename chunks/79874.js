n.d(t, {
    Kq: function () {
        return u;
    },
    ZP: function () {
        return s;
    },
    zI: function () {
        return l;
    }
});
var r = n(442837), i = n(924301), a = n(894017), o = n(854698);
function s(e, t) {
    t = null != t ? t : (0, o.DK)(e);
    let n = (0, a.Z)(t, e.id);
    return c(e, n, t);
}
function l(e, t) {
    let n = (0, r.e7)([i.ZP], () => i.ZP.getGuildScheduledEvent(e));
    t = null != t ? t : (0, o.DK)(n);
    let s = (0, a.Z)(t, null == n ? void 0 : n.id);
    return null == n ? null : c(n, s, t);
}
function u(e, t) {
    let n = (0, a.c)(t, e.id);
    return c(e, n, t);
}
function c(e, t, n) {
    if (null == e.recurrence_rule || null == n)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
    let r = (0, o.iA)(n, e), {
            startDate: i,
            endDate: a
        } = (0, o.x6)(r, t);
    return {
        startTime: i.toDate(),
        endTime: null == a ? void 0 : a.toDate()
    };
}
