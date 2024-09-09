n.r(t),
    n.d(t, {
        MemberListContentSettingsMenu: function () {
            return u;
        }
    });
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(485267),
    r = n(71585),
    o = n(981631),
    c = n(689938);
let u = (e) => {
    let { closePopout: t } = e,
        u = (0, s.e7)([r.Z], () => r.Z.hidden);
    return (0, i.jsx)(a.Menu, {
        onSelect: () => {},
        navId: 'member-list-settings-menu',
        onClose: null != t ? t : o.dG4,
        'aria-label': c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ALT,
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [
                (0, i.jsx)(a.MenuItem, {
                    id: 'about',
                    label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ABOUT,
                    icon: a.CircleInformationIcon,
                    action: () => {
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('71517').then(n.bind(n, 549505));
                            return (t) => (0, i.jsx)(e, { ...t });
                        }),
                            null == t || t();
                    }
                }),
                (0, i.jsx)(a.MenuCheckboxItem, {
                    id: 'hide',
                    label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_HIDE,
                    checked: u,
                    action: () => {
                        (0, l.lY)(), null == t || t();
                    }
                })
            ]
        })
    });
};
t.default = () =>
    (0, i.jsx)(a.Popout, {
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(u, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick(t);
                },
                style: {
                    width: '12px',
                    height: '12px'
                },
                children: (0, i.jsx)(a.SettingsIcon, { size: 'xxs' })
            })
    });
