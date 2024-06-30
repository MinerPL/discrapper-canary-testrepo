t.r(n), t(47120);
var i = t(735250), l = t(470079), a = t(442837), r = t(481060), o = t(100527), c = t(906732), s = t(724912), d = t(41776), u = t(592125), _ = t(153124), f = t(626135), g = t(981888), v = t(897285), h = t(924301), b = t(951539), I = t(592126), m = t(315416), p = t(711373), x = t(274311), E = t(854698), N = t(405613), C = t(285784), T = t(95291), Z = t(187443), j = t(464766), S = t(724278), L = t(462747), k = t(462179), R = t(765305), D = t(981631), M = t(170945);
function P(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: l,
            onActionTaken: r,
            isHub: o,
            isMember: c,
            recurrenceId: s
        } = e, u = (0, h.xt)(n), _ = (0, a.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(n.id, s), [
            s,
            n
        ]), f = (0, b.ZP)(n), g = (0, a.e7)([d.Z], () => d.Z.isLurking(t.id), [t.id]), v = (0, x.T)(null == l ? void 0 : l.id, n.id), I = (0, k.Z)({
            guild: t,
            channel: l,
            guildScheduledEvent: n,
            isActive: u,
            recurrenceId: s,
            onActionTaken: r
        }), {entity_type: m} = n;
    return o ? (0, i.jsx)(Z.Z, {
        isActive: u,
        isUserLurking: g,
        rsvped: _,
        isMember: c,
        isDetailsView: !0,
        guildName: null == t ? void 0 : t.name,
        isChannelPublic: v,
        canInvite: f,
        ...I
    }) : (0, i.jsx)(C.ZP, {
        isActive: u,
        isUserLurking: g,
        rsvped: _,
        isChannelPublic: v,
        canInvite: f,
        entityType: m,
        ...I
    });
}
n.default = e => {
    let {
            guildScheduledEventId: n,
            parentGuildId: t,
            transitionState: d,
            initialRecurrenceId: b,
            onClose: x
        } = e, {analyticsLocations: C} = (0, c.ZP)(o.Z.GUILD_EVENT_MODAL), [Z, k] = l.useState(b), B = (0, a.e7)([h.ZP], () => h.ZP.getGuildScheduledEvent(n), [n]), y = null == B ? void 0 : B.id, w = null == B ? void 0 : B.guild_id, {
            guild: A,
            isMember: G
        } = (0, I.Z)(w, y), U = (0, s.Z)(t), O = null == B ? void 0 : B.channel_id, V = (0, a.e7)([u.Z], () => u.Z.getChannel(O), [O]), F = (0, _.Dt)(), [z, H] = l.useState(R.fL.EVENT_INFO), W = (0, p.Z)(y, Z), X = (0, m.Z)(w, y, Z), [J, {
                loading: q,
                error: K
            }] = (0, g.Z)(() => v.Z.getGuildEventUsers(null == B ? void 0 : B.id, Z, w));
    l.useEffect(() => {
        null == B ? x() : f.default.track(D.rMx.OPEN_MODAL, {
            type: R.zw,
            guild_id: B.guild_id
        });
    }, [
        B,
        x
    ]);
    let Y = l.useRef(null), [Q, $] = l.useState(0);
    if (l.useLayoutEffect(() => {
            var e, n;
            let t = (null == B ? void 0 : B.recurrence_rule) != null ? 16 : 0;
            $((null !== (n = null == Y ? void 0 : null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
        }, [
            Y,
            null == B ? void 0 : B.recurrence_rule
        ]), null == B || null == A || !G && !U)
        return null;
    let ee = e => {
            if (e !== z)
                e === R.fL.RSVP_LIST && J(), H(e);
        }, en = null != Z ? Z : (0, E.DK)(B);
    return (0, i.jsx)(c.Gt, {
        value: C,
        children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.MEDIUM,
            transitionState: d,
            'aria-labelledby': F,
            className: M.root,
            children: [
                (null == B ? void 0 : B.image) != null && (0, i.jsx)(T.Z, {
                    source: (0, N.Z)(B),
                    className: M.banner
                }),
                (0, i.jsx)(j.Z, {
                    onClose: x,
                    selectedTab: z,
                    onTabSelected: ee,
                    userCount: X,
                    hasBanner: (null == B ? void 0 : B.image) != null,
                    isHub: U
                }),
                (0, i.jsx)('div', {
                    className: M.container,
                    children: (0, i.jsx)(r.ModalContent, {
                        className: M.contentContainer,
                        style: { height: Q },
                        children: (0, i.jsxs)(r.Slides, {
                            activeSlide: z,
                            width: 600,
                            centered: !1,
                            children: [
                                (0, i.jsx)(r.Slide, {
                                    id: R.fL.EVENT_INFO,
                                    children: (0, i.jsx)(S.Z, {
                                        guildEvent: B,
                                        guild: A,
                                        channel: V,
                                        headerId: F,
                                        onClose: x,
                                        onClickInterestedCount: () => ee(R.fL.RSVP_LIST),
                                        isHub: U,
                                        containerRef: Y,
                                        recurrenceId: en,
                                        setRecurrenceId: k
                                    })
                                }),
                                (0, i.jsx)(r.Slide, {
                                    id: R.fL.RSVP_LIST,
                                    children: (0, i.jsx)(L.Z, {
                                        guildEvent: B,
                                        recurrenceId: en,
                                        eventUsers: W,
                                        loading: q,
                                        containerHeight: Q,
                                        error: K
                                    })
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(r.ModalFooter, {
                    className: M.footer,
                    children: (0, i.jsx)(P, {
                        guildEvent: B,
                        isHub: U,
                        isMember: G,
                        guild: A,
                        channel: V,
                        onActionTaken: x,
                        recurrenceId: en
                    })
                })
            ]
        })
    });
};
