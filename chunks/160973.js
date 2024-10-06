t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(442837),
    a = t(595519),
    l = t(374065),
    o = t(761122),
    r = t(542094),
    s = t(973616),
    c = t(592125),
    d = t(496675),
    u = t(358085),
    m = t(231338),
    p = t(689938);
function _(e) {
    let n,
        { channelId: t, application: _, activityAction: C } = e,
        h = (0, i.e7)([c.Z], () => c.Z.getChannel(t)),
        f = (0, i.e7)([d.Z], () => d.Z.can(m.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        A = (0, l.KF)(null == h ? void 0 : h.id),
        E = !1;
    switch (C) {
        case r.JS.LEAVE:
            E = !1;
            break;
        case r.JS.START:
            (null == h ? void 0 : h.isGuildVoice()) ? A !== l.jy.CAN_LAUNCH && (E = !0) : !(0, a.WS)(h) && (E = !0);
            break;
        case r.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (E = !f) : !(0, a.WS)(h) && (E = !0);
    }
    if (C !== r.JS.LEAVE) {
        let e = _ instanceof s.Z ? _.embeddedActivityConfig : _.embedded_activity_config,
            t = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(t) ? (null == h ? void 0 : h.isThread()) && ((E = !0), (n = p.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_IN_THREAD)) : ((E = !1), (n = p.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_ON_DEVICE));
    }
    return (
        E && null == n && (n = p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START),
        {
            disabled: E,
            reason: n
        }
    );
}
