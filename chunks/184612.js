r.d(e, {
    r: function () {
        return a;
    }
});
var n = r(177668), _ = r(50074);
function a(t, {
    metadata: e,
    tunnel: r,
    dsn: a
}) {
    let i = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && e.sdk && {
                sdk: {
                    name: e.sdk.name,
                    version: e.sdk.version
                }
            },
            ...!!r && !!a && { dsn: (0, n.RA)(a) }
        }, o = function (t) {
            return [
                { type: 'user_report' },
                t
            ];
        }(t);
    return (0, _.Jd)(i, [o]);
}
