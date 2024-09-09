n.d(t, {
    U: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(46140),
    r = n(689938);
function l(e) {
    let { onClose: t, onSelect: n, quest: l } = e;
    return (0, i.jsx)(a.Menu, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(l.id),
        'aria-label': r.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: t,
        children: (0, i.jsxs)(
            a.MenuGroup,
            {
                children: [
                    (0, i.jsx)(a.MenuItem, {
                        id: 'desktop',
                        label: r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                        action: () => n(s.cd.DESKTOP),
                        icon: a.ScreenIcon
                    }),
                    (0, i.jsx)(a.MenuItem, {
                        id: 'console',
                        label: r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                        action: () => n(s.cd.CONSOLE),
                        icon: a.GameControllerIcon
                    })
                ]
            },
            'actions'
        )
    });
}
function o(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(a.Popout, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(l, {
                ...n,
                onClose: t
            });
        },
        children: t
    });
}
