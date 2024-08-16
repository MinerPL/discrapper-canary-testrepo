n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(2052),
    o = n(317381),
    c = n(638880),
    u = n(122613),
    d = n(527805),
    _ = n(884338),
    E = n(100527),
    I = n(906732),
    m = n(973616),
    T = n(314897),
    h = n(592125),
    N = n(158776),
    f = n(594174),
    C = n(823379),
    p = n(226378),
    g = n(701488),
    S = n(689938),
    A = n(810250);
function R(e) {
    var t;
    let { application: n, channelId: R, guildId: x } = e,
        { analyticsLocations: O } = (0, I.ZP)(E.Z.ACTIVITY_INSTANCE_EMBED),
        M = (0, l.O)(),
        v = (0, s.e7)([h.Z], () => h.Z.getChannel(R)),
        L = (null == v ? void 0 : null === (t = v.isThread) || void 0 === t ? void 0 : t.call(v)) ? (null == v ? void 0 : v.parent_id) : R,
        Z = (0, s.e7)([T.default], () => T.default.getId()),
        {
            embeddedActivity: P,
            currentEmbeddedActivity: b,
            activityLaunchState: D
        } = (0, s.cj)([o.ZP], () => ({
            embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != L ? L : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: o.ZP.getLaunchState(n.id, null != L ? L : void 0)
        })),
        j = (0, s.Wu)([f.default], () => {
            var e;
            return Array.from(null !== (e = null == P ? void 0 : P.userIds) && void 0 !== e ? e : [])
                .map((e) => f.default.getUser(e))
                .filter(C.lm);
        }),
        U = (0, s.e7)([N.Z], () => {
            var e;
            let t = null == P ? void 0 : P.userIds.values().next().value;
            return null == t ? null : null === (e = N.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        y = a.useMemo(() => {
            let e = new m.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = g.wT), e;
        }, [n]),
        B = (0, d.s5)({
            userId: Z,
            channelId: R,
            application: y
        }),
        k = null == P,
        G = (0, p.NL)({
            embeddedActivity: P,
            joinability: B,
            currentEmbeddedActivity: b,
            channel: v
        }),
        F = a.useId(),
        w = null != D && D.isLaunching && D.componentId === F,
        V = async () => {
            k
                ? await (0, u.Z)({
                      targetApplicationId: n.id,
                      channelId: R,
                      locationObject: M.location,
                      analyticsLocations: O,
                      componentId: F
                  })
                : await (0, c.Z)({
                      applicationId: P.applicationId,
                      activityChannelId: R,
                      locationObject: M.location,
                      analyticsLocations: O,
                      componentId: F
                  });
        },
        H = G.disabled ? S.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : S.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: A.container,
        children: (0, i.jsxs)('div', {
            className: A.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: A.headerContainer,
                    children: k
                        ? (0, i.jsx)('div', {
                              className: A.__invalid_endedNote,
                              children: (0, i.jsx)(r.Text, {
                                  variant: 'text-md/medium',
                                  children: H
                              })
                          })
                        : (0, i.jsx)(r.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != U ? U : S.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                          })
                }),
                (0, i.jsxs)('div', {
                    className: A.footerContainer,
                    children: [
                        (0, i.jsx)(r.Tooltip, {
                            text: G.tooltip,
                            tooltipContentClassName: A.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, a.createElement)(
                                    r.Button,
                                    {
                                        ...n,
                                        key: ''.concat(G.isJoinAction),
                                        onClick: () => {
                                            V(), null == t || t();
                                        },
                                        color: G.isJoinAction ? r.ButtonColors.GREEN : r.ButtonColors.PRIMARY,
                                        submitting: w,
                                        disabled: G.disabled
                                    },
                                    G.text
                                );
                            }
                        }),
                        !k &&
                            (0, i.jsx)(_.Z, {
                                guildId: x,
                                users: j,
                                max: 4,
                                size: _.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
}
