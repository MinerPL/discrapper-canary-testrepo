n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return w;
    },
    ZP: function () {
        return A;
    },
    fD: function () {
        return I;
    },
    w1: function () {
        return C;
    }
}),
    n(789020),
    n(757143);
var i,
    l,
    r = n(442837),
    o = n(911969),
    u = n(906732),
    a = n(835473),
    c = n(592125),
    d = n(630388),
    s = n(358085),
    f = n(317381),
    p = n(638880),
    v = n(122613),
    h = n(619915),
    g = n(761122),
    Z = n(361213),
    m = n(716600),
    _ = n(952561),
    y = n(778569),
    E = n(701488),
    b = n(981631);
((l = i || (i = {}))[(l.START = 0)] = 'START'), (l[(l.JOIN = 1)] = 'JOIN'), (l[(l.LEAVE = 2)] = 'LEAVE');
function A(e) {
    let { activityItem: t, channel: n, locationObject: i, onActivityItemSelected: l, embeddedActivitiesManager: r, assetNames: u = ['embedded_cover'], backgroundResolution: a = 250, launchingComponentId: c, commandOrigin: d, source: f } = e,
        { application: p, activity: v } = t,
        m = v.client_platform_config[(0, g.Z)((0, s.getOS)())],
        _ = null != m.label_until && Date.now() < Date.parse(m.label_until),
        E = (0, y.Z)({
            applicationId: p.id,
            size: a,
            names: u
        }),
        b = null != v.activity_preview_video_asset_id ? (0, Z.Z)(p.id, v.activity_preview_video_asset_id) : null,
        A = (0, h.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
        }),
        S = w({
            channelId: null == n ? void 0 : n.id,
            applicationId: p.id
        }),
        x = C({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: d,
            source: f
        }),
        L = I(p, t.activity);
    return {
        imageBackground: E,
        videoUrl: b,
        joinableEmbeddedApp: A,
        activityAction: S,
        onActivityItemSelected: x,
        labelType: _ ? m.label_type : o.ww.NONE,
        staffReleasePhase: L
    };
}
function I(e, t) {
    var n;
    let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
    if (!((0, d.yE)(i, b.udG.EMBEDDED_RELEASED) || (0, d.yE)(i, b.udG.EMBEDDED_FIRST_PARTY))) return;
    let l = t.client_platform_config[(0, g.Z)((0, s.getOS)())].release_phase;
    return E.eB.includes(l) ? l.replace('_', ' ').replace(/(^\w|\s\w)/g, (e) => e.toUpperCase()) : void 0;
}
function w(e) {
    let { channelId: t, applicationId: n, fetchesApplication: i = !0 } = e,
        l = 0,
        o = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
        u = (0, m.Z)(),
        d = (0, _.Z)({ fetchesApplication: i }),
        s = (0, a.q)(n, i),
        f = (0, h.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != s && s.id === t.applicationId;
        });
    return null == s ? l : (null != o && (null == u ? void 0 : u.channelId) === o.id && (null == d ? void 0 : d.id) === s.id ? (l = 2) : null != f && (l = 1), l);
}
function C(e) {
    let { applicationId: t, channelId: n, locationObject: i, embeddedActivitiesManager: l, onActivityItemSelectedProp: r, launchingComponentId: o, commandOrigin: a, sectionName: c, source: d, fetchesApplication: s = !0 } = e,
        h = w({
            channelId: n,
            applicationId: t,
            fetchesApplication: s
        }),
        { analyticsLocations: g } = (0, u.ZP)();
    switch (h) {
        case 0:
            return async () => {
                await (0, v.Z)({
                    targetApplicationId: t,
                    locationObject: i,
                    channelId: n,
                    analyticsLocations: g,
                    componentId: o,
                    commandOrigin: a,
                    sectionName: c,
                    source: d
                }).then((e) => e && (null == r ? void 0 : r({ applicationId: t })));
            };
        case 1:
            return async () => {
                !f.ZP.isLaunchingActivity() &&
                    (await (0, p.Z)({
                        applicationId: t,
                        activityChannelId: n,
                        locationObject: i,
                        analyticsLocations: g,
                        componentId: o,
                        sectionName: c,
                        source: d
                    }).then((e) => e && (null == r ? void 0 : r({ applicationId: t }))));
            };
        case 2:
            return () => {
                !f.ZP.isLaunchingActivity() &&
                    (null != n &&
                        l.leaveActivity({
                            channelId: n,
                            applicationId: t
                        }),
                    null == r || r({ applicationId: t }));
            };
    }
}
