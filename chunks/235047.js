t.d(n, {
    W: function () {
        return I;
    },
    Z: function () {
        return M;
    }
});
var i = t(735250);
t(470079);
var a = t(913527), r = t.n(a), l = t(442837), o = t(481060), s = t(962796), u = t(742989), c = t(802463), d = t(550727), E = t(448239), f = t(689938);
function M(e) {
    let {showReminders: n} = u.Z.useExperiment({ location: 'use_message_reminders_item' }, { autoTrackExposure: !1 }), t = (0, l.e7)([c.Z], () => c.Z.isMessageReminder(e.id)), a = I(e, n => (0, s.BW)(e, r()().add(n, 'millisecond').toDate()));
    return n ? (0, i.jsx)(o.MenuItem, {
        id: 'mark-todo',
        label: t ? f.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : f.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: t ? (0, o.makeIconCompat)(E.Z) : void 0,
        action: () => t ? (0, s.Kp)(e.id) : (0, s.BW)(e),
        children: t ? null : a
    }) : null;
}
function I(e, n) {
    return d.B.map(e => {
        let {
            duration: t,
            getLabel: a
        } = e;
        return (0, i.jsx)(o.MenuItem, {
            id: 'mark-todo-'.concat(t),
            label: a(),
            action: () => n(t)
        }, t);
    });
}
