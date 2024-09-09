n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(782568),
    o = n(31336),
    c = n(906467),
    u = n(63063),
    d = n(665149),
    _ = n(689938);
function E() {
    let e = (0, s.e7)([c.Z], () => c.Z.isDeveloper),
        [t, E] = a.useState(!1),
        [I, m] = a.useState(0),
        T = (e) => {
            clearTimeout(I),
                m(
                    setTimeout(() => {
                        E(e);
                    }, 100)
                );
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => T(!0),
        onMouseLeave: () => T(!1),
        children: (0, i.jsx)(r.Popout, {
            shouldShow: t,
            animation: r.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => E(!0),
            onRequestClose: () => E(!1),
            renderPopout: () =>
                (function (e) {
                    let { onClose: t, isDiscordDeveloper: a } = e;
                    return (0, i.jsx)(r.Menu, {
                        onSelect: () => {},
                        navId: 'staff-help-popout',
                        variant: 'fixed',
                        onClose: t,
                        'aria-label': _.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                        children: (0, i.jsxs)(r.MenuGroup, {
                            children: [
                                (0, i.jsx)(r.MenuItem, {
                                    id: 'staff-help-bug-reporter',
                                    label: _.Z.Messages.BUG_REPORT_TITLE,
                                    icon: r.BugIcon,
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await n.e('83051').then(n.bind(n, 115072));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        })
                                }),
                                a &&
                                    (0, i.jsx)(r.MenuItem, {
                                        id: 'staff-devtools',
                                        label: 'Toggle DevTools',
                                        icon: r.StaffBadgeIcon,
                                        action: () => (0, o.SO)()
                                    }),
                                (0, i.jsx)(r.MenuItem, {
                                    id: 'staff-help-center',
                                    label: 'Go to Help Center',
                                    icon: r.WindowLaunchIcon,
                                    action: () => (0, l.Z)(u.w)
                                })
                            ]
                        })
                    });
                })({
                    onClose: () => E(!1),
                    isDiscordDeveloper: e
                }),
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(d.JO, {
                    ...e,
                    icon: r.BugIcon,
                    'aria-label': _.Z.Messages.HELP,
                    selected: n
                });
            }
        })
    });
}
