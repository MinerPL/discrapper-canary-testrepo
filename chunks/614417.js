n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(271383),
    c = n(785717),
    d = n(221292),
    _ = n(687158),
    E = n(471879),
    f = n(502762),
    h = n(475413),
    p = n(228168),
    I = n(689938),
    m = n(104010),
    T = n(609440);
function S(e) {
    let { user: t, guildId: n, setPopoutRef: S, channelId: g, messageId: A, roleId: N, onViewBlockedProfileClick: O, newAnalyticsLocations: R = [] } = e,
        { analyticsLocations: v } = (0, l.ZP)([...R, o.Z.BLOCKED_PROFILE_POPOUT]),
        C = (0, c.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: g,
            messageId: A,
            roleId: N
        }),
        y = i.useRef(null),
        L = (0, _.ZP)(t.id, n),
        D = (0, a.e7)([u.ZP], () => (null != n ? u.ZP.getMember(n, t.id) : null));
    return (
        i.useEffect(() => {
            null == S || S(null == y ? void 0 : y.current);
        }, [y, S]),
        (0, r.jsx)(l.Gt, {
            value: v,
            children: (0, r.jsx)(c.Mt, {
                value: C,
                shouldTrackViewOnMount: null == D || null != D.fullProfileLoadedTimestamp,
                children: (0, r.jsx)(s.Dialog, {
                    ref: y,
                    'aria-label': t.username,
                    children: (0, r.jsx)(f.Z, {
                        user: t,
                        displayProfile: L,
                        profileType: p.y0.BITE_SIZE,
                        children: (0, r.jsxs)('div', {
                            className: m.container,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: T,
                                    className: m.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, r.jsxs)('div', {
                                    className: m.body,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, r.jsx)(s.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: m.header,
                                            children: I.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: I.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: t.username })
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: I.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_CONFIRMATION
                                        }),
                                        (0, r.jsx)(h.tG, {
                                            className: m.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: I.Z.Messages.VIEW_PROFILE,
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == O || O(),
                                                    (0, d.pQ)({
                                                        action: 'VIEW_BLOCKED_PROFILE',
                                                        analyticsLocations: v,
                                                        ...C
                                                    });
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    );
}
