n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(442837), o = n(481060), c = n(749210), d = n(703656), u = n(430824), _ = n(914010), E = n(900849), m = n(41776), I = n(981631), T = n(689938), h = n(595708), N = n(40578);
t.Z = () => {
    let e = (0, r.e7)([_.Z], () => _.Z.getGuildId(), []), t = (0, r.e7)([u.Z], () => u.Z.getGuild(e), [e]), n = (0, r.e7)([m.Z], () => m.Z.getHistorySnapshot(), []), [s, f] = a.useState(!1);
    if (null == t)
        return null;
    let p = async () => {
        f(!0);
        try {
            E.mT(t.id), await c.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR });
        } catch {
            f(!1);
        }
    };
    return (0, i.jsxs)('div', {
        className: l()(h.notice, N.notice),
        children: [
            (0, i.jsxs)(o.Button, {
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                className: l()(h.button, h.back),
                innerClassName: h.iconButton,
                onClick: () => {
                    let e = (0, d.s1)();
                    null != n && null != n.location ? (0, d.dL)({ ...n.location }) : e.goBack();
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
                onClick: p,
                children: T.Z.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({ guild: t.name })
            })
        ]
    });
};
