l(47120);
var n = l(735250), a = l(470079), o = l(392711), s = l.n(o), i = l(442837), r = l(481060), C = l(48210), c = l(605436), d = l(430824), u = l(496675), m = l(689938), _ = l(627249);
t.Z = e => {
    let {
            guild: t,
            transitionState: l,
            onClose: o
        } = e, [E, h] = a.useState(7), [M, x] = a.useState(null), [b, T] = a.useState([]), L = a.useCallback(async () => {
            x(null), x(await C.Z.updateEstimate(t.id, E, b));
        }, [
            E,
            t.id,
            b
        ]);
    a.useEffect(() => {
        L();
    }, [L]);
    let g = (0, i.Wu)([
        u.Z,
        d.Z
    ], () => {
        let e = u.Z.getHighestRole(t);
        return s()(d.Z.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, c.pM)(t.id, e.id)).filter(l => u.Z.isRoleHigher(t, e, l)).value().map(e => {
            let {
                id: t,
                name: l
            } = e;
            return {
                label: l,
                value: t
            };
        });
    }, [t]);
    return (0, n.jsxs)(r.ModalRoot, {
        transitionState: l,
        children: [
            (0, n.jsx)(r.ModalHeader, {
                separator: !1,
                children: (0, n.jsxs)(r.Heading, {
                    variant: 'heading-lg/semibold',
                    children: [
                        m.Z.Messages.PRUNE_MEMBERS,
                        '\u2014',
                        null != t ? t.toString() : ''
                    ]
                })
            }),
            (0, n.jsxs)('div', {
                className: _.content,
                children: [
                    (0, n.jsx)(r.FormItem, {
                        title: m.Z.Messages.FORM_LABEL_LAST_SEEN,
                        children: (0, n.jsx)(r.RadioGroup, {
                            value: E,
                            options: [
                                {
                                    name: m.Z.Messages.LAST_SEEN.format({ days: 7 }),
                                    value: 7
                                },
                                {
                                    name: m.Z.Messages.LAST_SEEN.format({ days: 30 }),
                                    value: 30
                                }
                            ],
                            onChange: e => {
                                let {value: t} = e;
                                h(t);
                            },
                            className: _.spacing
                        })
                    }),
                    (0, n.jsx)(r.FormItem, {
                        title: m.Z.Messages.PRUNE_WITH_ROLES,
                        children: (0, n.jsx)(r.SearchableSelect, {
                            multi: !0,
                            value: b,
                            onChange: e => T(e),
                            options: g
                        })
                    }),
                    (0, n.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        className: _.spacing,
                        children: b.length > 0 ? m.Z.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
                            members: M,
                            days: E
                        }) : m.Z.Messages.FORM_HELP_LAST_SEEN_1.format({
                            members: M,
                            days: E
                        })
                    })
                ]
            }),
            (0, n.jsxs)(r.ModalFooter, {
                children: [
                    (0, n.jsx)(r.Button, {
                        onClick: () => {
                            C.Z.prune(t.id, E, b), o();
                        },
                        children: m.Z.Messages.PRUNE
                    }),
                    (0, n.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: o,
                        children: m.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
};
