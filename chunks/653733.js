n.d(t, {
    h: function () {
        return o;
    }
});
var r = n(358085), i = n(280234), a = n(480384);
function o(e) {
    if (!(0, r.isDesktop)())
        return {
            isRecentlyOnlineUIEnabled: !1,
            shouldPrioritizeSubscription: !1
        };
    let {
        allowPrioritySubscriptions: t,
        isRecentlyOnlineEnabled: n
    } = i.Z.getCurrentConfig({ location: 'guild-subscriptions-store' }, { autoTrackExposure: !1 });
    if (!n && !t)
        return {
            isRecentlyOnlineUIEnabled: !1,
            shouldPrioritizeSubscription: !1
        };
    let o = a.Z.getPriorityGuilds().includes(e);
    return {
        isRecentlyOnlineUIEnabled: o && n,
        shouldPrioritizeSubscription: o && t
    };
}
