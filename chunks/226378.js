n.d(t, {
    NL: function () {
        return c;
    }
});
var i,
    a,
    s = n(470079),
    r = n(595519),
    l = n(527805),
    o = n(689938);
function c(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: a } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: a } = e,
                    s = null == t,
                    c = {
                        disabled: !1,
                        isJoinAction: !s,
                        text: s ? o.Z.Messages.START : o.Z.Messages.EMBEDDED_ACTIVITIES_JOIN,
                        tooltip: void 0
                    },
                    u = (0, r.WS)(a, s);
                if (null != t && null != i && t.launchId === i.launchId)
                    return {
                        ...c,
                        disabled: !0,
                        text: o.Z.Messages.EMBEDDED_ACTIVITIES_JOINED,
                        tooltip: o.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
                    };
                if (s)
                    return {
                        ...c,
                        disabled: !u,
                        tooltip: u ? void 0 : o.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START
                    };
                if (null != n && n !== l.Fw.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case l.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = o.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                            break;
                        case l.Fw.ACTIVITY_AGE_GATED:
                            e = o.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                            break;
                        case l.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = o.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
                            break;
                        case l.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = o.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
                            break;
                        case l.Fw.CHANNEL_FULL:
                            e = o.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
                            break;
                        case l.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                            e = o.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
                            break;
                        case l.Fw.NO_CHANNEL:
                        case l.Fw.NO_GUILD:
                        case l.Fw.NO_USER:
                        case l.Fw.IS_AFK_CHANNEL:
                            e = o.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL;
                    }
                    return {
                        ...c,
                        disabled: !0,
                        tooltip: e
                    };
                }
                return c;
            })({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: i,
                channel: a
            }),
        [t, n, i, a]
    );
}
((i = a || (a = {}))[(i.ACTIVE = 0)] = 'ACTIVE'), (i[(i.ENDED = 1)] = 'ENDED');
