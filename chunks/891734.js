n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(632471),
    i = n(740078),
    a = n(510104),
    s = n(126387);
function o(e, t) {
    void 0 === t && (t = {});
    var n = t,
        o = n.placement,
        l = n.boundary,
        u = n.rootBoundary,
        c = n.padding,
        d = n.flipVariations,
        _ = n.allowedAutoPlacements,
        E = void 0 === _ ? i.Ct : _,
        f = (0, r.Z)(o),
        h = f
            ? d
                ? i.bw
                : i.bw.filter(function (e) {
                      return (0, r.Z)(e) === f;
                  })
            : i.mv,
        p = h.filter(function (e) {
            return E.indexOf(e) >= 0;
        });
    0 === p.length && (p = h);
    var m = p.reduce(function (t, n) {
        return (
            (t[n] = (0, a.Z)(e, {
                placement: n,
                boundary: l,
                rootBoundary: u,
                padding: c
            })[(0, s.Z)(n)]),
            t
        );
    }, {});
    return Object.keys(m).sort(function (e, t) {
        return m[e] - m[t];
    });
}
