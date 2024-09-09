t.d(s, {
    _: function () {
        return o;
    }
}),
    t(47120);
var n = t(392711),
    a = t.n(n),
    i = t(442837),
    r = t(651941);
function o(e) {
    return (0, i.Wu)([r.Z], () =>
        a()(r.Z.getUserVerifiedKeys(e))
            .entries()
            .map((e) => {
                let [s, t] = e;
                return {
                    verifiedKey: s,
                    timestamp: t
                };
            })
            .sortBy((e) => -1 * e.timestamp)
            .value()
    );
}
