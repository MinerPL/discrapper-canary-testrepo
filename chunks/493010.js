var i = n(735250),
    a = n(470079),
    s = n(704215),
    l = n(481060),
    r = n(475179),
    o = n(561472),
    c = n(287746),
    u = n(325708),
    d = n(541716),
    h = n(605236),
    m = n(665149),
    p = n(703558),
    _ = n(585483),
    E = n(909820),
    f = n(981631),
    C = n(921944),
    g = n(689938),
    I = n(437996);
t.Z = function (e) {
    let { channel: t, guild: n, maxWidth: x } = e;
    a.useEffect(() => {
        (0, h.EW)(s.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: C.L.AUTO });
    }, []);
    let T = a.useCallback(() => {
            r.Z.updateChatOpen(t.id, !1), _.S.safeDispatch(f.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        N = (0, i.jsx)(m.ZP.Icon, {
            icon: l.XSmallIcon,
            tooltip: g.Z.Messages.CLOSE,
            onClick: T
        });
    return (0, i.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: x,
        floatingLayer: E.ZP,
        children: [
            (0, i.jsx)(o.Z, {
                channel: t,
                draftType: p.d.ChannelMessage
            }),
            (0, i.jsxs)(m.ZP, {
                toolbar: N,
                'aria-label': g.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                children: [
                    (0, i.jsx)(m.ZP.Icon, {
                        icon: l.ChatIcon,
                        disabled: !0,
                        'aria-label': g.Z.Messages.VOICE_CHAT_TEXT_CHANNEL
                    }),
                    (0, i.jsx)(m.ZP.Title, { children: t.name })
                ]
            }),
            (0, i.jsx)('div', {
                className: I.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: t,
                        guild: n,
                        chatInputType: d.I.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
};
