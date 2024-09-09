n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(703656),
    d = n(430824),
    _ = n(914010),
    E = n(900849),
    I = n(41776),
    m = n(981631),
    T = n(689938),
    h = n(143980),
    N = n(389397);
t.Z = () => {
    let e = (0, l.e7)([_.Z], () => _.Z.getGuildId(), []),
        t = (0, l.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        n = (0, l.e7)([I.Z], () => I.Z.getHistorySnapshot(), []),
        [s, f] = a.useState(!1);
    if (null == t) return null;
    let C = async () => {
        f(!0);
        try {
            E.mT(t.id), await c.Z.joinGuild(t.id, { source: m.vtS.NOTICE_BAR });
        } catch {
            f(!1);
        }
    };
    return (0, i.jsxs)('div', {
        className: r()(h.notice, N.notice),
        children: [
            (0, i.jsxs)(o.Button, {
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                className: r()(h.button, h.back),
                innerClassName: h.iconButton,
                onClick: () => {
                    let e = (0, u.s1)();
                    null != n && null != n.location ? (0, u.dL)({ ...n.location }) : e.goBack();
                },
                children: [
                    (0, i.jsx)(o.ArrowSmallLeftIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.arrow
                    }),
                    T.Z.Messages.BACK
                ]
            }),
            (0, i.jsx)(o.Text, {
                className: h.header,
                variant: 'text-sm/normal',
                children: T.Z.Messages.LURKER_MODE_NAG_BAR_HEADER
            }),
            (0, i.jsx)(o.Button, {
                className: h.button,
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                submitting: s,
                onClick: C,
                children: T.Z.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({ guild: t.name })
            })
        ]
    });
};
