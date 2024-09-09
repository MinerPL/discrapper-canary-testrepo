r.d(t, {
    y: function () {
        return o;
    }
});
var n = r(617726),
    a = r(101284);
function o(e, t, r) {
    let o = [
        { type: 'client_report' },
        {
            timestamp: r || (0, a.yW)(),
            discarded_events: e
        }
    ];
    return (0, n.Jd)(t ? { dsn: t } : {}, [o]);
}
