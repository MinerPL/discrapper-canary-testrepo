n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(392711),
    l = n.n(s),
    r = n(442837),
    o = n(570140),
    c = n(239091),
    u = n(561472),
    d = n(367907),
    h = n(731429),
    m = n(188471),
    p = n(933557),
    _ = n(287746),
    f = n(541716),
    E = n(665149),
    g = n(910611),
    C = n(359110),
    I = n(592125),
    x = n(703558),
    T = n(430824),
    N = n(979651),
    v = n(664342),
    S = n(124368),
    Z = n(981631),
    A = n(689938),
    M = n(437996);
function b(e) {
    let { channelId: t, baseChannelId: s, channelViewSource: b = 'Split View' } = e,
        R = (0, r.e7)([I.Z], () => I.Z.getChannel(t)),
        j = (0, r.e7)([T.Z], () => T.Z.getGuild(null == R ? void 0 : R.getGuildId())),
        L = (0, p.ZP)(R);
    (function (e) {
        let t = (0, r.e7)([N.Z], () => null != e && !l().isEmpty(N.Z.getVoiceStatesForChannel(e.id)));
        a.useEffect(() => {
            t &&
                null != e &&
                (o.Z.dispatch({
                    type: 'SIDEBAR_CLOSE',
                    baseChannelId: e.parent_id
                }),
                (0, C.ad)(e, { source: S.on.VOICE_AUTO_OPEN }));
        }, [t, e]);
    })(R);
    let P = a.useRef(!1);
    if (
        (a.useEffect(() => {
            if (null == R || P.current) return;
            P.current = !0;
            let e = (0, h.K)(I.Z.getChannel(R.id), !0);
            (0, d.yw)(Z.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, d.$H)(R.id),
                channel_view: b
            }),
                (0, m.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: R.id });
        }, [R, b]),
        null == R || null == j)
    )
        return null;
    let O = (0, i.jsx)(v.Z, {
        channel: R,
        baseChannelId: s
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Z, {
                channel: R,
                draftType: x.d.ChannelMessage
            }),
            (0, i.jsx)(E.ZP, {
                toolbar: O,
                'aria-label': A.Z.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
                children: (0, g.ud)({
                    channel: R,
                    channelName: L,
                    guild: j,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: R
                                });
                        });
                    },
                    handleClick: function () {
                        if (null != R) (0, C.Kh)(R.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: M.chat,
                children: (0, i.jsx)(
                    _.Z,
                    {
                        channel: R,
                        guild: j,
                        chatInputType: f.I.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
