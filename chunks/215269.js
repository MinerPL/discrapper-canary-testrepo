t.r(n), t.d(n, {
    default: function () {
        return g;
    }
});
var l = t(735250);
t(470079);
var i = t(481060), u = t(239091), s = t(410575), r = t(299206), a = t(70877), d = t(572427), E = t(231259), o = t(159233), c = t(924952), _ = t(99528), T = t(830394), N = t(473545), I = t(124422), Z = t(981631), f = t(689938);
function g(e) {
    let {
            guildEventId: n,
            recurrenceId: t,
            channel: g,
            guild: M,
            analyticsContext: D,
            isRecurrenceItem: v = !1,
            onSelect: S
        } = e, O = (0, T.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: M,
            channel: g
        }), A = (0, E.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: M,
            channel: g
        }), m = (0, o.Z)({
            guildEventId: n,
            guild: M,
            channel: g,
            recurrenceId: t,
            isRecurrenceItem: v
        }), C = (0, c.Z)(n, M, g), h = (0, I.Z)(n, M, g), P = (0, d.Z)(n, M.id, t), R = (0, _.Z)(n), L = (0, r.Z)({
            id: n,
            label: f.Z.Messages.COPY_ID_EVENT
        }), p = (0, r.Z)({
            id: t,
            label: f.Z.Messages.COPY_ID_EVENT_RECURRENCE
        }), V = (0, a.Z)(n, M.id, g, t), U = (0, N.Z)({
            guildEventId: n,
            guildId: M.id,
            recurrenceId: t
        });
    return (0, l.jsx)(s.Z, {
        context: D,
        object: Z.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.Menu, {
            navId: 'user-context',
            onClose: u.Zy,
            'aria-label': f.Z.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: S,
            children: [
                (0, l.jsxs)(i.MenuGroup, {
                    children: [
                        V,
                        !v && h,
                        m,
                        !v && C,
                        A,
                        O,
                        P,
                        v && U
                    ]
                }),
                !v && (0, l.jsx)(i.MenuGroup, { children: R }),
                (0, l.jsxs)(i.MenuGroup, {
                    children: [
                        L,
                        p
                    ]
                })
            ]
        })
    });
}
