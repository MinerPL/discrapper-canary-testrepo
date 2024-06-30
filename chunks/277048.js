var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(653603), o = n.n(r), c = n(442837), u = n(481060), d = n(904245), h = n(232961), p = n(223606), m = n(453687), _ = n(63063), f = n(727779), E = n(113039), C = n(534761), g = n(981631), I = n(689938), x = n(613541), T = n(622322), N = n(250050);
let v = a.memo(function (e) {
    let {
        message: t,
        notice: n,
        compact: a = !1,
        onDismiss: l
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: s()(x.blockedNoticeContainer, { [x.compact]: a }),
                children: [
                    (0, i.jsx)('div', {
                        className: x.blockedNoticeIcon,
                        children: (0, i.jsx)(u.ShieldIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: x.shieldIcon
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: x.blockedNotice,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'interactive-normal',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s()(x.ephemeralAccessories, { [x.compact]: a }),
                children: (0, i.jsx)(f.Z, {
                    message: t,
                    onDeleteMessage: l,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        tag: 'span',
                        className: x.learnMore,
                        children: I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({ helpUrl: _.Z.getArticleURL(g.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                    })
                })
            })
        ]
    });
});
t.Z = a.memo(function (e) {
    var t, n;
    let {
            className: l,
            compact: r,
            message: u,
            children: _,
            content: f,
            onUpdate: g
        } = e, S = null === (t = u.editedTimestamp) || void 0 === t ? void 0 : t.toString(), Z = a.useRef(!1), A = (0, c.e7)([p.Z], () => p.Z.getMessage(u.id), [u.id]), M = a.useCallback(() => {
            (null == A ? void 0 : A.isBlockedEdit) ? (0, h.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
        }, [
            u,
            A
        ]);
    return a.useLayoutEffect(() => {
        Z.current ? null != g && g() : Z.current = !0;
    }, [
        g,
        u.content,
        f,
        S,
        _
    ]), (0, i.jsxs)('div', {
        id: (0, m.ut)(u),
        className: s()(l, T.markup, {
            [N.messageContent]: !0,
            [N.markupRtl]: 'rtl' === o()(u.content),
            [x.blockedEdit]: null == A ? void 0 : A.isBlockedEdit,
            [x.blockedSend]: !(null == A ? void 0 : A.isBlockedEdit)
        }),
        children: [
            null != _ ? _ : (0, E.L5)(u, f),
            (null == A ? void 0 : A.isBlockedEdit) && null != u.timestamp && (0, i.jsxs)(i.Fragment, {
                children: [
                    ' ',
                    (0, i.jsx)(C.Z, {
                        timestamp: u.timestamp,
                        isEdited: !0,
                        isInline: !1,
                        children: (0, i.jsxs)('span', {
                            className: N.edited,
                            children: [
                                '(',
                                I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX,
                                ')'
                            ]
                        })
                    })
                ]
            }),
            (0, i.jsx)(v, {
                notice: null !== (n = null == A ? void 0 : A.errorMessage) && void 0 !== n ? n : I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
                message: u,
                compact: r,
                onDismiss: M
            })
        ]
    });
}, E.HR);
