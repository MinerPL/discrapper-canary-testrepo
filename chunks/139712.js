n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var s = n(735250), a = n(470079), r = n(481060), l = n(482241), i = n(124165), u = n(765305), o = n(689938), c = n(344748);
function E(e) {
    let {
            event: t,
            recurrenceId: n,
            guildId: E,
            onRsvp: d,
            ...N
        } = e, [T, _] = a.useState(i.KX.SERIES), D = (0, i.X2)(t.id, null), m = (null == D ? void 0 : D.response) === u.gv.INTERESTED ? u.gv.UNINTERESTED : u.gv.INTERESTED, v = m === u.gv.INTERESTED ? o.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : o.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
    return (0, s.jsx)(r.ConfirmModal, {
        ...N,
        header: v,
        confirmText: o.Z.Messages.OK,
        cancelText: o.Z.Messages.CANCEL,
        onConfirm: () => {
            T === i.KX.SERIES ? l.Z.updateRsvp(t.id, null, E, m) : l.Z.updateRsvp(t.id, n, E, m), null == d || d(), N.onClose();
        },
        confirmButtonColor: r.Button.Colors.BRAND,
        children: (0, s.jsx)(r.RadioGroup, {
            className: c.responseOptions,
            value: T,
            options: (0, i.pF)(),
            onChange: e => _(e.value)
        })
    });
}
function d(e, t, n, a) {
    (0, i.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, s, a, r) => l.Z.updateRsvp(e, s, n, r),
        openRsvpPicker: (e, t) => {
            (0, r.openModalLazy)(() => Promise.resolve(r => (0, s.jsx)(E, {
                ...r,
                event: e,
                recurrenceId: t,
                guildId: n,
                onRsvp: a
            })));
        },
        onRsvp: a
    });
}
