n.d(t, {
    s: function () {
        return i;
    }
}), n(47120);
var i, s, o = n(735250), a = n(470079), l = n(442837), r = n(481060), c = n(749210), u = n(153124), d = n(823379), h = n(41776), m = n(981631), p = n(689938), g = n(995637);
(s = i || (i = {}))[s.CHAT = 0] = 'CHAT', s[s.REACTIONS = 1] = 'REACTIONS';
t.Z = e => {
    let {
            type: t,
            guild: i,
            closePopout: s,
            ctaRef: f
        } = e, T = (0, u.Dt)(), [_, v] = a.useState(!1), b = (0, l.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
    a.useEffect(() => {
        _ && !b && s();
    }, [
        _,
        b,
        s
    ]);
    let E = null, I = p.Z.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
    switch (t) {
    case 0:
        E = p.Z.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
        break;
    case 1:
        E = p.Z.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
        break;
    default:
        return (0, d.vE)(t);
    }
    if (null == E)
        return null;
    let x = async () => {
        v(!0);
        try {
            await c.Z.joinGuild(i.id, { source: m.vtS.CHAT_INPUT_BLOCKER }), s();
        } catch {
            v(!1);
        }
    };
    return (0, o.jsxs)(r.Dialog, {
        className: g.container,
        'aria-labelledby': T,
        children: [
            (0, o.jsx)('img', {
                alt: '',
                className: g.image,
                src: n(64395)
            }),
            (0, o.jsxs)('div', {
                className: g.content,
                children: [
                    (0, o.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        id: T,
                        children: E
                    }),
                    (0, o.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: I
                    }),
                    (0, o.jsxs)('div', {
                        className: g.buttonContainer,
                        children: [
                            (0, o.jsx)(r.Button, {
                                buttonRef: f,
                                onClick: x,
                                submitting: _,
                                children: p.Z.Messages.LURKER_MODE_POPOUT_JOIN
                            }),
                            (0, o.jsx)(r.Button, {
                                onClick: s,
                                look: r.Button.Looks.BLANK,
                                className: g.cancel,
                                children: p.Z.Messages.LURKER_MODE_POPOUT_CANCEL
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
