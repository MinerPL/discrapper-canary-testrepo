r.d(t, {
    o: function () {
        return _;
    }
});
var n = r(622916),
    a = r(967752),
    o = r(617726),
    i = r(939747);
function _(e, t) {
    n.kg.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    let r = e.getDsn(),
        _ = e.getSdkMetadata(),
        E = (function (e, t, r, n) {
            let _ = { sent_at: new Date().toISOString() };
            r &&
                r.sdk &&
                (_.sdk = {
                    name: r.sdk.name,
                    version: r.sdk.version
                }),
                n && t && (_.dsn = (0, a.RA)(t));
            let E = (function (e) {
                let t = (0, i.uv)(e);
                return [
                    {
                        type: 'statsd',
                        length: t.length
                    },
                    t
                ];
            })(e);
            return (0, o.Jd)(_, [E]);
        })(t, r, _, e.getOptions().tunnel);
    e.sendEnvelope(E);
}
