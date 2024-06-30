t.d(n, {
    Z: function () {
        return c;
    }
}), t(47120);
var l = t(735250), i = t(470079), a = t(442837), r = t(481060), u = t(194359), s = t(699516), d = t(594174), o = t(689938);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu', {
            id: t,
            username: c,
            bot: Z
        } = e, E = (0, a.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t;
        }, [t]), [M, f] = (0, a.Wu)([s.Z], () => [
            s.Z.isFriend(t),
            s.Z.isBlocked(t)
        ], [t]), [_, g] = i.useState(!1);
    return Z || E ? null : M ? (0, l.jsx)(r.MenuItem, {
        id: 'remove-friend',
        label: o.Z.Messages.REMOVE_FRIEND,
        action: function () {
            (0, r.openModal)(e => (0, l.jsx)(r.ConfirmModal, {
                header: o.Z.Messages.REMOVE_FRIEND_TITLE.format({ name: c }),
                confirmText: o.Z.Messages.REMOVE_FRIEND,
                cancelText: o.Z.Messages.CANCEL,
                onConfirm: () => {
                    u.Z.removeFriend(t, { location: n }), g(!1);
                },
                ...e,
                children: (0, l.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: o.Z.Messages.REMOVE_FRIEND_BODY.format({ name: c })
                })
            }));
        }
    }) : (0, l.jsx)(r.MenuItem, {
        id: 'add-friend',
        label: _ ? o.Z.Messages.ADD_FRIEND_BUTTON_AFTER : o.Z.Messages.ADD_FRIEND,
        action: () => {
            !_ && (u.Z.addRelationship({
                userId: t,
                context: { location: n }
            }), g(!0));
        },
        disabled: f || _ && !M
    });
}
