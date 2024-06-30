t.d(n, {
    Z: function () {
        return L;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(140835), r = t(246521), s = t(481060), o = t(911969), c = t(555573), u = t(10718), d = t(895924), m = t(585483), p = t(499254), _ = t(541099), E = t(827498), A = t(496158), N = t(676161), h = t(660090), C = t(783097), f = t(870205), I = t(981631), x = t(689079), P = t(689938), v = t(271047);
function g(e) {
    var n, t;
    let {
            channel: r,
            command: o,
            section: u,
            sectionName: A
        } = e, N = l.useCallback(() => {
            let e = _.Z.entrypoint();
            p.y(E.ti.COMMAND), c.Po({
                channelId: r.id,
                command: o,
                section: u,
                location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                sectionName: A,
                source: e
            }), m.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: r.id });
        }, [
            r.id,
            o,
            u,
            A
        ]), h = (null !== (t = null === (n = o.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, C = l.useMemo(() => (0, i.jsxs)('div', {
            className: v.commandTextContainer,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: o.displayName
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    lineClamp: 1,
                    children: o.displayDescription
                })
            ]
        }), [
            o.displayDescription,
            o.displayName
        ]);
    return h ? (0, i.jsxs)(s.Clickable, {
        className: v.command,
        onClick: N,
        children: [
            C,
            (0, i.jsx)(a.F, {})
        ]
    }) : (0, i.jsxs)('div', {
        className: v.command,
        children: [
            (0, i.jsx)(s.Clickable, {
                onClick: N,
                children: C
            }),
            (0, i.jsx)(T, {
                channel: r,
                command: o,
                sectionName: A
            })
        ]
    });
}
function T(e) {
    let {
            channel: n,
            command: t,
            sectionName: a
        } = e, o = (0, A.D)(n), [c, u] = l.useState(!1), d = l.useCallback(async e => {
            e.stopPropagation();
            try {
                await (0, C.Y$)({
                    command: t,
                    optionValues: {},
                    context: o,
                    sectionName: a
                }), p.y(E.ti.COMMAND);
            } finally {
                u(!1);
            }
        }, [
            t,
            o,
            a
        ]);
    return (0, i.jsxs)(s.Button, {
        type: 'submit',
        onClick: d,
        disabled: c,
        size: s.ButtonSizes.ICON,
        color: s.Button.Colors.PRIMARY,
        className: v.commandSentCTAButton,
        innerClassName: v.commandSentCTAButtonInner,
        'aria-label': P.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({ commandName: t.name }),
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'redesign-button-primary-text',
                children: P.Z.Messages.SEND
            }),
            (0, i.jsx)(r.U, {
                size: 'xs',
                color: s.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
            })
        ]
    });
}
function M(e) {
    let {
        channel: n,
        commands: t,
        section: l,
        headerName: a,
        sectionName: r,
        children: o
    } = e;
    return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: v.commandListHeader,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-sm/semibold',
                        children: a
                    }),
                    o
                ]
            }),
            (0, i.jsx)('ul', {
                className: v.commandContainer,
                'aria-label': a,
                children: t.map(e => (0, i.jsx)(g, {
                    channel: n,
                    command: e,
                    section: l,
                    sectionName: r
                }, e.id))
            })
        ]
    });
}
function L(e) {
    var n;
    let {
            channel: t,
            application: a,
            sectionName: r
        } = e, {
            filterSection: s,
            commandsByActiveSection: c,
            sectionDescriptors: d
        } = u.wi(t, { commandType: o.yU.CHAT }, {
            placeholderCount: 0,
            limit: x.tn,
            includeFrecency: !0
        }), m = null !== (n = d.find(e => e.id === a.id)) && void 0 !== n ? n : null, {
            sortOrder: p,
            setSortOrder: _,
            commands: E,
            canSort: A
        } = (0, h.Z)({
            sectionId: a.id,
            commandsByActiveSection: c
        });
    l.useEffect(() => {
        s(a.id);
    }, [
        a.id,
        s
    ]);
    let C = (0, N.Z)({
        channel: t,
        commands: E,
        limit: 5
    });
    return (0, i.jsxs)('ul', {
        className: v.contentContainer,
        children: [
            (0, i.jsx)(M, {
                channel: t,
                section: m,
                commands: C,
                headerName: P.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
                sectionName: r
            }),
            (0, i.jsx)(M, {
                channel: t,
                section: m,
                commands: E,
                headerName: P.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
                sectionName: r,
                children: A && (0, i.jsx)(f.Z, {
                    sortOrder: p,
                    onSortOptionClick: _
                })
            })
        ]
    });
}
