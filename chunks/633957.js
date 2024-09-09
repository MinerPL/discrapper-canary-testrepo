n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(481060),
    l = n(2052),
    o = n(317381),
    c = n(638880),
    u = n(122613),
    d = n(527805),
    _ = n(884338),
    E = n(100527),
    I = n(906732),
    m = n(895924),
    T = n(973616),
    h = n(314897),
    N = n(592125),
    C = n(158776),
    f = n(594174),
    p = n(823379),
    g = n(226378),
    S = n(701488),
    A = n(689938),
    R = n(810250);
function O(e) {
    var t;
    let { application: n, channelId: O, guildId: x } = e,
        { analyticsLocations: M } = (0, I.ZP)(E.Z.ACTIVITY_INSTANCE_EMBED),
        v = (0, l.O)(),
        L = (0, a.e7)([N.Z], () => N.Z.getChannel(O)),
        Z = (null == L ? void 0 : null === (t = L.isThread) || void 0 === t ? void 0 : t.call(L)) ? (null == L ? void 0 : L.parent_id) : O,
        P = (0, a.e7)([h.default], () => h.default.getId()),
        {
            embeddedActivity: D,
            currentEmbeddedActivity: b,
            activityLaunchState: j
        } = (0, a.cj)([o.ZP], () => ({
            embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != Z ? Z : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: o.ZP.getLaunchState(n.id, null != Z ? Z : void 0)
        })),
        U = (0, a.Wu)([f.default], () => {
            var e;
            return Array.from(null !== (e = null == D ? void 0 : D.userIds) && void 0 !== e ? e : [])
                .map((e) => f.default.getUser(e))
                .filter(p.lm);
        }),
        y = (0, a.e7)([C.Z], () => {
            var e;
            let t = null == D ? void 0 : D.userIds.values().next().value;
            return null == t ? null : null === (e = C.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        B = s.useMemo(() => {
            let e = new T.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = S.wT), e;
        }, [n]),
        k = (0, d.s5)({
            userId: P,
            channelId: O,
            application: B
        }),
        G = null == D,
        F = (0, g.NL)({
            embeddedActivity: D,
            joinability: k,
            currentEmbeddedActivity: b,
            channel: L
        }),
        w = s.useId(),
        V = null != j && j.isLaunching && j.componentId === w,
        H = async () => {
            G
                ? await (0, u.Z)({
                      targetApplicationId: n.id,
                      channelId: O,
                      locationObject: v.location,
                      analyticsLocations: M,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: D.applicationId,
                      activityChannelId: O,
                      locationObject: v.location,
                      analyticsLocations: M,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  });
        },
        Y = F.disabled ? A.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : A.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: R.container,
        children: (0, i.jsxs)('div', {
            className: R.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: R.headerContainer,
                    children: G
                        ? (0, i.jsx)('div', {
                              className: R.__invalid_endedNote,
                              children: (0, i.jsx)(r.Text, {
                                  variant: 'text-md/medium',
                                  children: Y
                              })
                          })
                        : (0, i.jsx)(r.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != y ? y : A.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                          })
                }),
                (0, i.jsxs)('div', {
                    className: R.footerContainer,
                    children: [
                        (0, i.jsx)(r.Tooltip, {
                            text: F.tooltip,
                            tooltipContentClassName: R.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, s.createElement)(
                                    r.Button,
                                    {
                                        ...n,
                                        key: ''.concat(F.isJoinAction),
                                        onClick: () => {
                                            H(), null == t || t();
                                        },
                                        color: F.isJoinAction ? r.ButtonColors.GREEN : r.ButtonColors.PRIMARY,
                                        submitting: V,
                                        disabled: F.disabled
                                    },
                                    F.text
                                );
                            }
                        }),
                        !G &&
                            (0, i.jsx)(_.Z, {
                                guildId: x,
                                users: U,
                                max: 4,
                                size: _.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
}
