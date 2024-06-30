r.d(e, {
    y: function () {
        return a;
    }
});
var n = r(50074), _ = r(868145);
function a(t, e, r) {
    let a = [
        { type: 'client_report' },
        {
            timestamp: r || (0, _.yW)(),
            discarded_events: t
        }
    ];
    return (0, n.Jd)(e ? { dsn: e } : {}, [a]);
}
