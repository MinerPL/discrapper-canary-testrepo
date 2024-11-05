n.d(t, {
    J: function () {
        return C;
    },
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(789020);
var i = n(192379),
    l = n(442837),
    a = n(317381),
    r = n(122613),
    s = n(574952),
    o = n(100527),
    c = n(906732),
    d = n(783097),
    u = n(895924),
    h = n(812236),
    p = n(630388),
    m = n(981631),
    f = n(388032);
function g(e) {
    let { channel: t, primaryEntryPointCommand: n, application: r } = e,
        [s, u] = i.useState(!1),
        g = (0, l.e7)([a.ZP], () => a.ZP.getCurrentEmbeddedActivity()),
        C = i.useMemo(() => (null != n ? (0, d.XZ)(n.displayName) : f.intl.string(f.t['3xjX0d'])), [n]),
        x = void 0 !== r.flags && (0, p.yE)(r.flags, m.udG.EMBEDDED),
        v = null != g && g.applicationId === r.id && g.channelId === t.id,
        { analyticsLocations: _ } = (0, c.ZP)(o.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        I = null != t.recipients ? t.recipients[0] : void 0,
        E = (0, h.ms)({
            channel: t,
            applicationId: r.id,
            botUserId: I
        });
    return {
        isExecutingLaunchInteraction: s,
        buttonText: E && x ? (v ? f.intl.string(f.t['Hi1/aW']) : null != C ? C : f.intl.string(f.t.zKX8Nj)) : f.intl.string(f.t['3xjX0d']),
        hasActiveMatchingEmbeddedActivity: v,
        isEmbeddedApp: x,
        currentEmbeddedActivity: g,
        channelRecipientUserId: I,
        setIsExecutingLaunchInteraction: u,
        analyticsLocations: _
    };
}
function C(e) {
    let { channel: t, application: n, isEmbeddedApp: l, hasActiveMatchingEmbeddedActivity: a, currentEmbeddedActivity: o, onOpenButtonPress: c, channelRecipientUserId: d, setIsExecutingLaunchInteraction: p, analyticsLocations: m } = e,
        f = (0, h.ms)({
            channel: t,
            applicationId: n.id,
            botUserId: d
        }),
        g = i.useCallback(() => {
            a && null != o
                ? (0, s.Z)().leaveActivity({
                      channelId: t.id,
                      applicationId: o.applicationId
                  })
                : (p(!0),
                  (0, r.Z)({
                      targetApplicationId: n.id,
                      channelId: t.id,
                      analyticsLocations: m,
                      onExecutedCallback: () => {
                          p(!1);
                      },
                      commandOrigin: u.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [a, t.id, n.id, o, m, p]);
    return f && l ? g : c;
}
