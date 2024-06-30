r.r(t), r.d(t, {
    createModeratorOverwrite: function () {
        return p;
    },
    default: function () {
        return C;
    }
}), r(47120);
var n = r(735250), l = r(470079), a = r(442837), o = r(481060), i = r(741361), d = r(881052), s = r(911969), c = r(185413), u = r(592125), h = r(430824), x = r(285952), g = r(153124), m = r(700785), M = r(146085), S = r(71080), b = r(689938), E = r(899509);
function p(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: M.yP
    };
}
function C(e) {
    let {
            transitionState: t,
            onClose: r,
            channelId: m
        } = e, C = (0, g.Dt)(), N = (0, a.e7)([u.Z], () => u.Z.getChannel(m)), R = (0, a.e7)([h.Z], () => h.Z.getGuild(null == N ? void 0 : N.getGuildId())), [A, j] = l.useState({}), [I, _] = l.useState(!1), [f, y] = l.useState(null);
    if (null == N || null == R)
        return null;
    let L = async () => {
        _(!0);
        try {
            await function (e, t) {
                let r = Object.values(t).filter(e => {
                    let {row: t} = e;
                    return null != t.id;
                }).map(e => {
                    let {row: t} = e;
                    return t.rowType === S.aC.ROLE ? p(t.id, s.BN.ROLE) : p(t.id, s.BN.MEMBER);
                });
                return (0, i.hw)(e.id, r, !0);
            }(N, A), r();
        } catch (t) {
            let e = new d.Hx(t);
            _(!1), y(e);
        }
    };
    return (0, n.jsxs)(o.ModalRoot, {
        transitionState: t,
        'aria-labelledby': C,
        size: o.ModalSize.SMALL,
        className: E.modalRoot,
        children: [
            (0, n.jsxs)(o.ModalHeader, {
                separator: !1,
                direction: x.Z.Direction.VERTICAL,
                align: x.Z.Align.CENTER,
                className: E.header,
                children: [
                    (0, n.jsx)(o.Heading, {
                        variant: 'heading-xl/semibold',
                        children: b.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                    }),
                    (0, n.jsxs)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: E.headerSubtitle,
                        children: [
                            (0, n.jsx)(o.StageIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: E.headerSubtitleIcon
                            }),
                            N.name
                        ]
                    })
                ]
            }),
            (0, n.jsx)(c.AddMembersBody, {
                guild: R,
                channel: N,
                permission: M.yP,
                pendingAdditions: A,
                setPendingAdditions: j
            }),
            null != f ? (0, n.jsx)(o.Text, {
                className: E.error,
                variant: 'text-xs/normal',
                color: 'text-danger',
                children: f.getAnyErrorMessage()
            }) : null,
            (0, n.jsxs)(o.ModalFooter, {
                children: [
                    (0, n.jsx)(o.Button, {
                        onClick: L,
                        submitting: I,
                        children: b.Z.Messages.ADD
                    }),
                    (0, n.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: r,
                        children: b.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
