n.d(t, {
    Z: function () {
        return E;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(782568), o = n(31336), c = n(906467), d = n(502568), u = n(63063), _ = n(689938);
function E() {
    let e = (0, s.e7)([c.Z], () => c.Z.isDeveloper), [t, E] = a.useState(!1), [m, I] = a.useState(0), T = e => {
            clearTimeout(m), I(setTimeout(() => {
                E(e);
            }, 100));
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => T(!0),
        onMouseLeave: () => T(!1),
        children: (0, i.jsx)(l.Popout, {
            shouldShow: t,
            animation: l.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            onRequestOpen: () => E(!0),
            onRequestClose: () => E(!1),
            renderPopout: () => function (e) {
                let {
                    onClose: t,
                    isDiscordDeveloper: a
                } = e;
                return (0, i.jsx)(l.Menu, {
                    onSelect: () => {
                    },
                    navId: 'staff-help-popout',
                    variant: 'fixed',
                    onClose: t,
                    'aria-label': _.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, i.jsxs)(l.MenuGroup, {
                        children: [
                            (0, i.jsx)(l.MenuItem, {
                                id: 'staff-help-bug-reporter',
                                label: _.Z.Messages.BUG_REPORT_TITLE,
                                icon: l.BugIcon,
                                action: () => (0, l.openModalLazy)(async () => {
                                    let {default: e} = await n.e('83051').then(n.bind(n, 115072));
                                    return t => (0, i.jsx)(e, { ...t });
                                })
                            }),
                            a && (0, i.jsx)(l.MenuItem, {
                                id: 'staff-devtools',
                                label: 'Toggle DevTools',
                                icon: l.StaffBadgeIcon,
                                action: () => (0, o.SO)()
                            }),
                            (0, i.jsx)(l.MenuItem, {
                                id: 'staff-help-center',
                                label: 'Go to Help Center',
                                icon: l.WindowLaunchIcon,
                                action: () => (0, r.Z)(u.w)
                            })
                        ]
                    })
                });
            }({
                onClose: () => E(!1),
                isDiscordDeveloper: e
            }),
            children: (e, t) => {
                let {isShown: n} = t;
                return (0, i.jsx)(d.JO, {
                    ...e,
                    icon: l.BugIcon,
                    'aria-label': _.Z.Messages.HELP,
                    selected: n
                });
            }
        })
    });
}
