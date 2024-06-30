n.d(t, {
    $: function () {
        return i;
    }
});
var r = n(818083);
function i(e) {
    let {
            isRecentlyOnlineEnabled: t,
            maxRecentMs: n
        } = a.getCurrentConfig({ location: 'n/a' }, { autoTrackExposure: !1 }), r = Date.now() - (null != e ? e : 0);
    return {
        isRecentlyOnlineShowable: t && r <= n,
        isRecentlyOnlineTrackable: r <= 172800000
    };
}
let a = (0, r.B)({
    kind: 'user',
    id: '2024-05_clientside_recently_online_desktop',
    label: 'Recently Online Clientside Desktop',
    defaultConfig: {
        allowPrioritySubscriptions: !1,
        isRecentlyOnlineEnabled: !1,
        maxRecentMs: -1
    },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                allowPrioritySubscriptions: !0,
                isRecentlyOnlineEnabled: !1,
                maxRecentMs: -1
            }
        },
        {
            id: 1,
            label: 'Enabled: 1h',
            config: {
                allowPrioritySubscriptions: !0,
                isRecentlyOnlineEnabled: !0,
                maxRecentMs: 3600000
            }
        },
        {
            id: 2,
            label: 'Enabled: 4h',
            config: {
                allowPrioritySubscriptions: !0,
                isRecentlyOnlineEnabled: !0,
                maxRecentMs: 14400000
            }
        },
        {
            id: 3,
            label: 'Enabled: 48h',
            config: {
                allowPrioritySubscriptions: !0,
                isRecentlyOnlineEnabled: !0,
                maxRecentMs: 172800000
            }
        }
    ]
});
t.Z = a;
