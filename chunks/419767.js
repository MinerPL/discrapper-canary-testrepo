r.d(e, {
    M: function () {
        return i;
    },
    Q: function () {
        return a;
    }
});
var n = r(50074), _ = r(177668);
function a(t, e, r, a) {
    let i = (0, n.HY)(r), o = {
            sent_at: new Date().toISOString(),
            ...i && { sdk: i },
            ...!!a && { dsn: (0, _.RA)(e) }
        }, E = 'aggregates' in t ? [
            { type: 'sessions' },
            t
        ] : [
            { type: 'session' },
            t.toJSON()
        ];
    return (0, n.Jd)(o, [E]);
}
function i(t, e, r, _) {
    var a, i;
    let o = (0, n.HY)(r), E = t.type && 'replay_event' !== t.type ? t.type : 'event';
    a = t, !(i = r && r.sdk) || (a.sdk = a.sdk || {}, a.sdk.name = a.sdk.name || i.name, a.sdk.version = a.sdk.version || i.version, a.sdk.integrations = [
        ...a.sdk.integrations || [],
        ...i.integrations || []
    ], a.sdk.packages = [
        ...a.sdk.packages || [],
        ...i.packages || []
    ]);
    let s = (0, n.Cd)(t, o, _, e);
    delete t.sdkProcessingMetadata;
    let c = [
        { type: E },
        t
    ];
    return (0, n.Jd)(s, [c]);
}
