i.d(n, {
    Z: function () {
        return v;
    }
});
var t = i(735250), o = i(470079), s = i(120356), l = i.n(s), a = i(442837), r = i(481060), c = i(717881), d = i(906732), u = i(199902), I = i(158776), E = i(543595), _ = i(785717), f = i(221292), Z = i(981631), m = i(110957), S = i(667589);
function v(e) {
    let {
            user: n,
            type: i,
            showActions: s,
            onClose: v
        } = e, x = (0, a.e7)([u.Z], () => null != u.Z.getAnyStreamForUser(n.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(n.id)), N = o.useMemo(() => h.filter(e => e.type !== Z.IIU.CUSTOM_STATUS), [h]), g = o.useMemo(() => x ? N.find(e => e.type === Z.IIU.PLAYING) : null, [
            N,
            x
        ]), C = o.useMemo(() => N.filter(e => e !== g), [
            g,
            N
        ]), {
            analyticsLocations: p,
            newestAnalyticsLocation: R
        } = (0, d.ZP)(), {
            trackUserProfileAction: T,
            ...M
        } = (0, _.KZ)(), j = {
            location: {
                page: Z.ZY5.USER_PROFILE,
                section: Z.jXE.PROFILE_MODAL
            }
        };
    return (0, t.jsxs)(r.ScrollerThin, {
        className: S.listScroller,
        fade: !0,
        children: [
            x ? (0, t.jsx)(c.Z, {
                type: i,
                user: n,
                source: R,
                className: m.userProfileActivity,
                showChannelDetails: i === E.Y.SIMPLIFIED_PROFILE,
                activity: g,
                actionColor: m.actionColor,
                analyticsParams: j,
                showActions: s,
                onOpenGameProfile: v,
                onAction: () => {
                    T({ action: 'JOIN_ACTIVITY' }), (0, f.Ac)({
                        activityType: Z.IIU.STREAMING,
                        activityName: null == g ? void 0 : g.name,
                        activityPlatform: null == g ? void 0 : g.platform,
                        activitySessionId: null == g ? void 0 : g.session_id,
                        applicationId: null == g ? void 0 : g.application_id,
                        analyticsLocations: p,
                        ...M
                    });
                }
            }) : null,
            C.map(e => (0, t.jsx)(c.Z, {
                type: i,
                activity: e,
                user: n,
                useStoreStream: !1,
                source: R,
                className: l()(m.userProfileActivity, i === E.Y.SIMPLIFIED_PROFILE && m.simplifiedProfileActivity),
                showChannelDetails: i === E.Y.SIMPLIFIED_PROFILE,
                actionColor: m.actionColor,
                analyticsParams: j,
                showActions: s,
                onOpenGameProfile: v,
                onAction: () => {
                    T({ action: 'JOIN_ACTIVITY' }), (0, f.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: p,
                        ...M
                    });
                }
            }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
        ]
    });
}
