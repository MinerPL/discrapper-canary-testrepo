n.d(t, {
    JS: function () {
        return i;
    },
    Qv: function () {
        return E;
    },
    ZP: function () {
        return A;
    },
    w1: function () {
        return I;
    }
}), n(757143);
var i, l, o = n(442837), u = n(911969), a = n(906732), r = n(835473), d = n(592125), c = n(358085), p = n(317381), f = n(638880), s = n(146936), v = n(619915), Z = n(761122), g = n(361213), m = n(716600), h = n(952561), _ = n(778569), w = n(701488);
(l = i || (i = {}))[l.START = 0] = 'START', l[l.JOIN = 1] = 'JOIN', l[l.LEAVE = 2] = 'LEAVE';
function A(e) {
    let {
            activityItem: t,
            channel: n,
            guildId: i,
            locationObject: l,
            onActivityItemSelected: o,
            embeddedActivitiesManager: a,
            assetNames: r = ['embedded_cover'],
            backgroundResolution: d = 250
        } = e, {
            application: p,
            activity: f
        } = t, s = f.client_platform_config[(0, Z.Z)((0, c.getOS)())], m = null != s.label_until && Date.now() < Date.parse(s.label_until), h = (0, _.Z)({
            applicationId: p.id,
            size: d,
            names: r
        }), A = null != f.activity_preview_video_asset_id ? (0, g.Z)(p.id, f.activity_preview_video_asset_id) : null, b = (0, v.ZP)(n).find(e => {
            let {embeddedActivity: t} = e;
            return p.id === t.applicationId;
        }), y = E({
            channelId: null == n ? void 0 : n.id,
            applicationId: p.id
        }), S = I({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            guildId: i,
            locationObject: l,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: o
        }), C = t.activity.client_platform_config[(0, Z.Z)((0, c.getOS)())].release_phase, L = w.eB.includes(C) ? C.replace('_', ' ').replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
    return {
        imageBackground: h,
        videoUrl: A,
        joinableEmbeddedApp: b,
        activityAction: y,
        onActivityItemSelected: S,
        labelType: m ? s.label_type : u.ww.NONE,
        staffReleasePhase: L
    };
}
function E(e) {
    let {
            channelId: t,
            applicationId: n
        } = e, i = 0, l = (0, o.e7)([d.Z], () => d.Z.getChannel(t)), u = (0, m.Z)(), a = (0, h.Z)(), c = (0, r.q)(n), p = (0, v.ZP)(l).find(e => {
            let {embeddedActivity: t} = e;
            return null != c && c.id === t.applicationId;
        });
    return null == c ? i : (null != l && (null == u ? void 0 : u.channelId) === l.id && (null == a ? void 0 : a.id) === c.id ? i = 2 : null != p && (i = 1), i);
}
function I(e) {
    let {
            applicationId: t,
            channelId: n,
            guildId: i,
            locationObject: l,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: u
        } = e, r = E({
            channelId: n,
            applicationId: t
        }), d = (0, h.Z)(), {analyticsLocations: c} = (0, a.ZP)();
    switch (r) {
    case 0:
        return () => {
            (0, s.Z)({
                targetApplicationId: t,
                currentEmbeddedApplication: d,
                locationObject: l,
                guildId: i,
                channelId: n,
                embeddedActivitiesManager: o,
                analyticsLocations: c
            }).then(e => e && (null == u ? void 0 : u({ applicationId: t })));
        };
    case 1:
        return () => {
            !p.ZP.isLaunchingActivity() && (0, f.Z)({
                applicationId: t,
                currentEmbeddedApplication: d,
                activityChannelId: n,
                locationObject: l,
                embeddedActivitiesManager: o,
                analyticsLocations: c
            }).then(e => e && (null == u ? void 0 : u({ applicationId: t })));
        };
    case 2:
        return () => {
            !p.ZP.isLaunchingActivity() && (null != n && o.leaveActivity({
                channelId: n,
                applicationId: t
            }), null == u || u({ applicationId: t }));
        };
    }
}
