var l = t(735250);
t(470079);
var s = t(442837), a = t(780384), i = t(481060), r = t(210887), o = t(918701), u = t(231338), c = t(689938), d = t(451656);
n.Z = function (e) {
    let {quest: n} = e, t = (0, s.e7)([r.Z], () => r.Z.getState().theme), m = (0, a.wj)(t) ? u.BR.DARK : u.BR.LIGHT;
    return (0, l.jsx)('div', {
        className: d.wrapper,
        children: (0, l.jsxs)('div', {
            className: d.content,
            children: [
                (0, l.jsx)('img', {
                    src: (0, o.uo)(n, m),
                    alt: '',
                    className: d.gameTile
                }),
                (0, l.jsxs)('div', {
                    className: d.copy,
                    children: [
                        (0, l.jsx)(i.Heading, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({ gameTitle: n.config.messages.gameTitle })
                        }),
                        (0, l.jsx)(i.Text, {
                            className: d.subheading,
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: c.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
                        })
                    ]
                })
            ]
        })
    });
};
