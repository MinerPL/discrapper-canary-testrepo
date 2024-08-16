n.r(t),
    n.d(t, {
        MemberListContentSettingsMenu: function () {
            return u;
        }
    });
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(485267),
    r = n(71585),
    o = n(981631),
    c = n(689938);
let u = (e) => {
    let { closePopout: t } = e,
        u = (0, a.e7)([r.Z], () => r.Z.hidden);
    return (0, i.jsx)(s.Menu, {
        onSelect: () => {},
        navId: 'member-list-settings-menu',
        variant: 'fixed',
        onClose: null != t ? t : o.dG4,
        'aria-label': c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ALT,
        children: (0, i.jsxs)(s.MenuGroup, {
            children: [
                (0, i.jsx)(s.MenuItem, {
                    id: 'about',
                    label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ABOUT,
                    icon: s.CircleInformationIcon,
                    action: () => {
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await n.e('71517').then(n.bind(n, 549505));
                            return (t) => (0, i.jsx)(e, { ...t });
                        }),
                            null == t || t();
                    }
                }),
                (0, i.jsx)(s.MenuCheckboxItem, {
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
    (0, i.jsx)(s.Popout, {
        animation: s.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(u, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick(t);
                },
                style: {
                    width: '12px',
                    height: '12px'
                },
                children: (0, i.jsx)(s.SettingsIcon, { size: 'xxs' })
            })
    });
