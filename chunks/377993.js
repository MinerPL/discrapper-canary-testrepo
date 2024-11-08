n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(144144),
    d = n(100527),
    u = n(906732),
    h = n(385499),
    p = n(82295),
    m = n(184301),
    f = n(347475),
    g = n(158776),
    C = n(699516),
    x = n(111583),
    v = n(594174),
    _ = n(626135),
    I = n(585483),
    E = n(233870),
    b = n(51144),
    N = n(998502),
    Z = n(276264),
    T = n(981631),
    S = n(388032),
    j = n(204394);
let A = [],
    y = N.ZP.getEnableHardwareAcceleration();
function P(e) {
    let { user: t, channel: l, status: d, activities: u } = e,
        h = (0, r.e7)([x.Z], () => null != x.Z.getTypingUsers(l.id)[t.id]),
        p = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
        _ = (0, r.e7)([g.Z], () => g.Z.isMobileOnline(t.id)),
        E = (0, r.e7)([C.Z], () => C.Z.getNickname(t.id)),
        N = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('18283')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l
                    });
            });
        };
    return (0, i.jsx)(s.Popout, {
        preload: () => (0, m.Z)(t, { channelId: l.id }),
        renderPopout: (e) =>
            (0, i.jsx)(f.Z, {
                ...e,
                userId: t.id,
                channelId: l.id
            }),
        position: a.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(b.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            I.S.dispatchToLastSubscribed(T.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(l.id);
        },
        children: (e) =>
            (0, i.jsx)(
                Z.Z,
                {
                    user: t,
                    currentUser: p,
                    isOwner: t.id === l.ownerId,
                    ownerTooltipText: S.intl.string(S.t['MRXZ+/']),
                    shouldAnimateStatus: y,
                    isTyping: h,
                    status: d,
                    activities: u,
                    channel: l,
                    onContextMenu: N,
                    isMobile: _,
                    nick: E,
                    ...e
                },
                t.id
            )
    });
}
function M(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function R(e) {
    var t;
    let { channel: n } = e,
        a = v.default.getCurrentUser(),
        o = null == a ? void 0 : a.isStaff(),
        { analyticsLocations: c } = (0, u.ZP)(d.Z.MEMBER_LIST);
    let { listItems: m } =
        ((t = n),
        (0, r.e7)(
            [C.Z, v.default, g.Z],
            () => {
                let e = (0, E.T)(t.recipients, v.default),
                    n = {};
                for (let t of e) {
                    var i, l, a;
                    C.Z.isFriend(t.id) || t.id === (null === (i = v.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
                        ? (n[t.id] = {
                              status: null !== (l = g.Z.getStatus(t.id)) && void 0 !== l ? l : T.Skl.OFFLINE,
                              activities: null !== (a = g.Z.getActivities(t.id)) && void 0 !== a ? a : A
                          })
                        : (n[t.id] = {
                              status: T.Skl.OFFLINE,
                              activities: A
                          });
                }
                let r = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities
                    };
                    r.push(e);
                }
                return { listItems: r };
            },
            [t],
            M
        ));
    l.useEffect(() => {
        _.default.track(T.rMx.MEMBER_LIST_VIEWED, {
            channel_id: n.id,
            channel_type: n.type,
            guild_id: n.guild_id
        });
    }, [n.guild_id, n.id, n.type]);
    let f = o && m.every((e) => e.user.isStaff());
    return (0, i.jsx)(u.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: j.membersWrap,
            children: (0, i.jsxs)(s.Scroller, {
                className: j.members,
                fade: !0,
                children: [
                    (0, i.jsxs)(p.Z, {
                        className: j.membersGroup,
                        children: [''.concat(S.intl.string(S.t['9Oq93t']), '\u2014').concat(m.length, ' '), f && (0, i.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM })]
                    }),
                    m.map((e) =>
                        (0, i.jsx)(
                            P,
                            {
                                user: e.user,
                                status: e.status,
                                activities: e.activities,
                                channel: n
                            },
                            e.user.id
                        )
                    )
                ]
            })
        })
    });
}
