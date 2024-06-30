n.r(t), n.d(t, {
    default: function () {
        return h;
    }
});
var i = n(735250), a = n(470079), l = n(481060), s = n(239091), r = n(299206), o = n(726521), c = n(99325), u = n(683818), d = n(689938);
function h(e) {
    let {
            entry: t,
            onSelect: h,
            closePopout: p,
            forceLightTheme: m,
            hideEditButton: _ = !1
        } = e, {
            isEntryAdmin: f,
            canEdit: E,
            canRemove: C
        } = (0, u.Z)(t), g = (0, r.Z)({
            id: t.guildId,
            label: d.Z.Messages.COPY_ID_GUILD,
            onSuccess: p
        });
    a.useEffect(() => {
        !E && !C && null == g && (0, s.Zy)();
    });
    let I = () => {
        c.kx(t.channelId, t.guildId);
    };
    function x() {
        (0, s.Zy)(), null == p || p();
    }
    return (0, i.jsxs)(l.Menu, {
        className: m ? 'theme-light' : null,
        navId: 'guild-entry-context',
        onClose: x,
        'aria-label': d.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
        onSelect: h,
        children: [
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    E && !_ ? (0, i.jsx)(l.MenuItem, {
                        id: 'update-entry',
                        label: d.Z.Messages.HUB_ENTRY_UPDATE,
                        action: function () {
                            (0, l.openModalLazy)(async () => {
                                let {default: e} = await n.e('34191').then(n.bind(n, 303647));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    entry: t
                                });
                            }), x();
                        }
                    }) : null,
                    C ? (0, i.jsx)(l.MenuItem, {
                        id: 'remove-from-hub',
                        label: d.Z.Messages.HUB_ENTRY_REMOVE,
                        action: function () {
                            (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
                                header: d.Z.Messages.HUB_ENTRY_REMOVE,
                                confirmText: d.Z.Messages.REMOVE,
                                cancelText: d.Z.Messages.CANCEL,
                                onConfirm: I,
                                ...e,
                                children: (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    children: d.Z.Messages.HUB_ENTRY_REMOVE_BODY.format({ guildName: t.name })
                                })
                            })), x();
                        },
                        color: 'danger'
                    }) : null,
                    f ? null : (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(l.MenuItem, {
                            id: 'report-server-listing',
                            label: d.Z.Messages.REPORT_SERVER_NO_NAME,
                            action: function () {
                                null != t && ((0, o.sq)(t), x());
                            },
                            icon: l.FlagIcon,
                            color: 'danger'
                        })
                    })
                ]
            }),
            (0, i.jsx)(l.MenuGroup, { children: g })
        ]
    });
}
