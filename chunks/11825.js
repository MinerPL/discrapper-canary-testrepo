n.d(t, {
    z: function () {
        return c;
    }
});
var i = n(735250), a = n(470079), s = n(481060), l = n(833592), r = n(689938);
let o = e => {
        let {
            item: t,
            closePopout: n
        } = e;
        return (0, i.jsx)(s.Menu, {
            navId: 'notification-actions',
            onClose: n,
            onSelect: n,
            'aria-label': r.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
            children: (0, i.jsx)(s.MenuItem, {
                id: 'delete',
                label: r.Z.Messages.DELETE,
                icon: s.TrashIcon,
                action: async () => {
                    await (0, l.g3)(t);
                }
            })
        });
    }, c = a.memo(function (e) {
        let {item: t} = e;
        return (0, i.jsx)(s.Popout, {
            renderPopout: e => (0, i.jsx)(o, {
                ...e,
                item: t
            }),
            position: 'bottom',
            align: 'right',
            animation: s.Popout.Animation.NONE,
            children: e => {
                let {onClick: t} = e;
                return (0, i.jsx)(s.CircleIconButton, {
                    tooltip: r.Z.Messages.MORE,
                    color: s.CircleIconButtonColors.TERTIARY,
                    icon: (0, i.jsx)(s.MoreHorizontalIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: e => {
                        e.stopPropagation(), t(e);
                    },
                    'aria-haspopup': 'menu'
                });
            }
        });
    });
