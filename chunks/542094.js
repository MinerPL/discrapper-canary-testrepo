n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return C;
    },
    ZP: function () {
        return E;
    },
    fD: function () {
        return A;
    },
    w1: function () {
        return w;
    }
}),
    n(757143);
var i,
    l,
    r = n(442837),
    o = n(911969),
    u = n(906732),
    a = n(835473),
    c = n(592125),
    d = n(358085),
    s = n(317381),
    f = n(638880),
    p = n(122613),
    v = n(619915),
    Z = n(761122),
    h = n(361213),
    g = n(716600),
    m = n(952561),
    _ = n(778569),
    I = n(701488);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function E(e) {
    let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: u = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: c, commandOrigin: s, source: f } = e,
        { application: p, activity: g } = t,
        m = g.client_platform_config[(0, Z.Z)((0, d.getOS)())],
        I = null != m.label_until && Date.now() < Date.parse(m.label_until),
        E = (0, _.Z)({
            applicationId: p.id,
            size: a,
            names: u
        }),
        y = null != g.activity_preview_video_asset_id ? (0, h.Z)(p.id, g.activity_preview_video_asset_id) : null,
        b = (0, v.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        S = C({
            channelId: null == n ? void 0 : n.id,
            applicationId: p.id
        }),
        M = w({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: s,
            source: f
        }),
        T = A(t.activity);
    return {
        imageBackground: E,
        videoUrl: y,
        joinableEmbeddedApp: b,
        activityAction: S,
        onActivityItemSelected: M,
        labelType: I ? m.label_type : o.ww.NONE,
        staffReleasePhase: T
    };
}
function A(e) {
    let t = e.client_platform_config[(0, Z.Z)((0, d.getOS)())].release_phase;
    return I.eB.includes(t) ? t.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function C(e) {
    let { channelId: t, applicationId: n } = e,
        i = 0,
        l = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        o = (0, g.Z)(),
        u = (0, m.Z)(),
        d = (0, a.q)(n),
        s = (0, v.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
        });
    return null == d ? i : (null != l && (null == o ? void 0 : o.channelId) === l.id && (null == u ? void 0 : u.id) === d.id ? (i = 2) : null != s && (i = 1), i);
}
function w(e) {
    let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: o, commandOrigin: a, sectionName: c, source: d } = e,
        v = C({
            channelId: n,
            applicationId: t
        }),
        { analyticsLocations: Z } = (0, u.ZP)();
    switch (v) {
        case 0:
            return async () => {
                await (0, p.Z)({
                    targetApplicationId: t,
                    locationObject: i,
                    channelId: n,
                    analyticsLocations: Z,
                    componentId: o,
                    commandOrigin: a,
                    sectionName: c,
                    source: d
                }).then((e) => e && (null == r ? void 0 : r({ applicationId: t })));
            };
        case 1:
            return async () => {
                !s.ZP.isLaunchingActivity() &&
                    (await (0, f.Z)({
                        applicationId: t,
                        activityChannelId: n,
                        locationObject: i,
                        analyticsLocations: Z,
                        componentId: o,
                        commandOrigin: a,
                        sectionName: c,
                        source: d
                    }).then((e) => e && (null == r ? void 0 : r({ applicationId: t }))));
            };
        case 2:
            return () => {
                !s.ZP.isLaunchingActivity() &&
                    (null != n &&
                        l.leaveActivity({
                            channelId: n,
                            applicationId: t
                        }),
                    null == r || r({ applicationId: t }));
            };
    }
}
