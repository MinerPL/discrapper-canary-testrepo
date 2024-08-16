r.d(t, {
    V: function () {
        return a;
    }
});
var n = r(452896);
function a(e, t, r = [t], a = 'npm') {
    let o = e._metadata || {};
    !o.sdk &&
        (o.sdk = {
            name: `sentry.javascript.${t}`,
            packages: r.map((e) => ({
                name: `${a}:@sentry/${e}`,
                version: n.J
            })),
            version: n.J
        }),
        (e._metadata = o);
}
