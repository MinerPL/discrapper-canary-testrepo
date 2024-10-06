n.d(t, {
    A: function () {
        return s;
    },
    l: function () {
        return a;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-07_friend_request_spam_inbox',
    label: 'Friend request spam inbox',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Separate spam friend requests into separate inbox and suppress notifications',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
