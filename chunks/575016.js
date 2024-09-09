n.d(t, {
    A: function () {
        return o;
    },
    h: function () {
        return s;
    }
});
var i,
    s,
    a = n(913527),
    r = n.n(a),
    l = n(689938);
function o(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let s = 0 === i ? l.Z.Messages.MESSAGE_REMINDERS_REMINDER_DUE_IN : l.Z.Messages.MESSAGE_REMINDERS_DUE_IN,
        a = 0 === i ? l.Z.Messages.MESSAGE_REMINDERS_REMINDER_OVERDUE : l.Z.Messages.MESSAGE_REMINDERS_OVERDUE,
        o = n > t;
    return {
        dueInText: (o ? a : s).format({
            duration: r()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: o
    };
}
((i = s || (s = {}))[(i.LONG = 0)] = 'LONG'), (i[(i.SHORT = 1)] = 'SHORT');
