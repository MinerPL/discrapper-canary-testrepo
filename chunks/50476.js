var s = n(735250),
    o = n(481060),
    r = n(689938),
    a = n(173074);
function l(e) {
    let { onClick: t, children: n } = e;
    return (0, s.jsx)(o.Button, {
        onClick: t,
        className: a.button,
        innerClassName: a.buttonInner,
        look: 'blank',
        children: n
    });
}
t.Z = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)('div', {
        className: a.buttons,
        children: [
            (0, s.jsxs)(l, {
                onClick: t,
                children: [r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP, (0, s.jsx)(o.ScreenIcon, {})]
            }),
            (0, s.jsxs)(l, {
                onClick: n,
                children: [r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE, (0, s.jsx)(o.GameControllerIcon, {})]
            })
        ]
    });
};
