n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(717881), o = n(906732), s = n(199902), l = n(785717), u = n(221292), c = n(659101), d = n(981631), _ = n(710598);
function E(e) {
    let {
            activity: t,
            user: n,
            guild: E,
            channelId: f,
            onClose: h,
            analyticsParams: p
        } = e, {analyticsLocations: m} = (0, o.ZP)(), {
            trackUserProfileAction: I,
            ...T
        } = (0, l.KZ)(), g = (0, i.e7)([s.Z], () => null != s.Z.getAnyStreamForUser(n.id));
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(a.Z, {
            type: a.P.USER_POPOUT_V2,
            activity: t,
            className: _.activity,
            user: n,
            guildId: null == E ? void 0 : E.id,
            channelId: f,
            source: d.Sbl.PROFILE_POPOUT,
            onOpenGameProfile: h,
            onAction: () => {
                I({ action: 'JOIN_ACTIVITY' }), (0, u.Ac)({
                    activityType: g ? d.IIU.STREAMING : null == t ? void 0 : t.type,
                    activityName: null == t ? void 0 : t.name,
                    activityPlatform: null == t ? void 0 : t.platform,
                    activitySessionId: null == t ? void 0 : t.session_id,
                    applicationId: null == t ? void 0 : t.application_id,
                    analyticsLocations: m,
                    ...T
                }), null == h || h();
            },
            actionColor: _.buttonColor,
            analyticsParams: p
        })
    });
}
