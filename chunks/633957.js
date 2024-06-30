n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(2052), o = n(317381), c = n(638880), d = n(146936), u = n(527805), _ = n(952561), E = n(513202), m = n(100527), I = n(906732), T = n(973616), h = n(314897), N = n(592125), f = n(158776), p = n(594174), C = n(602623), g = n(823379), S = n(226378), A = n(701488), x = n(689938), O = n(656366);
function R(e) {
    var t;
    let {
            application: n,
            channelId: R,
            guildId: M
        } = e, [v, L] = a.useState(!1), {analyticsLocations: Z} = (0, I.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED), P = (0, r.O)(), b = (0, _.Z)(), D = (0, s.e7)([N.Z], () => N.Z.getChannel(R)), j = (null == D ? void 0 : null === (t = D.isThread) || void 0 === t ? void 0 : t.call(D)) ? null == D ? void 0 : D.parent_id : R, U = (0, s.e7)([h.default], () => h.default.getId()), {
            embeddedActivity: y,
            currentEmbeddedActivity: B
        } = (0, s.cj)([o.ZP], () => ({
            embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != j ? j : '').find(e => e.applicationId === n.id),
            currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity()
        })), k = (0, s.Wu)([p.default], () => {
            var e;
            return Array.from(null !== (e = null == y ? void 0 : y.userIds) && void 0 !== e ? e : []).map(e => p.default.getUser(e)).filter(g.lm);
        }), G = (0, s.e7)([f.Z], () => {
            var e;
            let t = null == y ? void 0 : y.userIds.values().next().value;
            return null == t ? null : null === (e = f.Z.findActivity(t, e => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }), F = a.useMemo(() => {
            let e = new T.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = A.wT), e;
        }, [n]), w = (0, u.s5)({
            userId: U,
            channelId: R,
            application: F
        }), V = null == y, H = (0, S.NL)({
            embeddedActivity: y,
            joinability: w,
            currentEmbeddedActivity: B,
            channel: D
        }), Y = async () => {
            L(!0);
            try {
                V ? await (0, d.Z)({
                    targetApplicationId: n.id,
                    currentEmbeddedApplication: b,
                    channelId: R,
                    guildId: M,
                    locationObject: P.location,
                    embeddedActivitiesManager: E.Z,
                    analyticsLocations: Z
                }) : await (0, c.Z)({
                    applicationId: y.applicationId,
                    currentEmbeddedApplication: b,
                    activityChannelId: R,
                    locationObject: P.location,
                    embeddedActivitiesManager: E.Z,
                    analyticsLocations: Z
                });
            } finally {
                L(!1);
            }
        }, W = H.disabled ? x.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : x.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: O.container,
        children: (0, i.jsxs)('div', {
            className: O.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: O.headerContainer,
                    children: V ? (0, i.jsx)('div', {
                        className: O.__invalid_endedNote,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: W
                        })
                    }) : (0, i.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        lineClamp: 1,
                        color: 'text-normal',
                        children: null != G ? G : x.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                    })
                }),
                (0, i.jsxs)('div', {
                    className: O.footerContainer,
                    children: [
                        (0, i.jsx)(l.Tooltip, {
                            text: H.tooltip,
                            children: e => {
                                let {
                                    onClick: t,
                                    ...n
                                } = e;
                                return (0, a.createElement)(l.Button, {
                                    ...n,
                                    key: ''.concat(H.isJoinAction),
                                    onClick: () => {
                                        Y(), null == t || t();
                                    },
                                    color: H.isJoinAction ? l.ButtonColors.GREEN : l.ButtonColors.PRIMARY,
                                    submitting: v,
                                    disabled: H.disabled
                                }, H.text);
                            }
                        }),
                        !V && (0, i.jsx)(C.Z, {
                            guildId: M,
                            users: k,
                            max: 4,
                            size: C.u.SIZE_32
                        })
                    ]
                })
            ]
        })
    });
}
