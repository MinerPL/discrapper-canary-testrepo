n.d(t, {
    KX: function () {
        return i;
    },
    X2: function () {
        return _;
    },
    cg: function () {
        return f;
    },
    pF: function () {
        return E;
    }
});
var r,
    i,
    a = n(314897),
    s = n(924301),
    o = n(894017),
    l = n(79874),
    u = n(854698),
    c = n(765305),
    d = n(689938);
function _(e, t) {
    let n = a.default.getId();
    return s.ZP.getRsvp(e, t, n);
}
function E() {
    return [
        {
            name: d.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
            value: 0
        },
        {
            name: d.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
            value: 1
        }
    ];
}
function f(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: i, openRsvpPicker: a, onRsvp: d } = e,
        E = s.ZP.getGuildScheduledEvent(t);
    if (null == E) return;
    let f = (0, o.c)(n, t),
        { startTime: h } = (0, l.Kq)(E, n),
        p = (null == E ? void 0 : E.scheduled_start_time) != null ? (0, u.lh)(f, h, new Date(null == E ? void 0 : E.scheduled_start_time)) : null,
        m = null != p && c.$I.has(p) ? null : null != n ? n : (0, u.DK)(E),
        I = _(E.id),
        T = _(E.id, m);
    null == m ? (i(t, null, r, null != I ? c.gv.UNINTERESTED : c.gv.INTERESTED), null == d || d()) : null != T ? (i(t, m, r, null != I ? c.gv.INTERESTED : c.gv.UNINTERESTED), null == d || d()) : a(E, m);
}
((r = i || (i = {}))[(r.SERIES = 0)] = 'SERIES'), (r[(r.RECURRENCE = 1)] = 'RECURRENCE');
