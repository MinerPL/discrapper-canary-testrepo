n.d(t, {
    A: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-07_friend_request_spam_inbox',
    label: 'Friend request spam inbox',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Separate spam friend requests into separate inbox and suppress notifications',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
