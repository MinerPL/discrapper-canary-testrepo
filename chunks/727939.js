n(47120);
var r = n(735250),
    i = n(470079),
    a = n(112724),
    s = n(241915),
    o = n(981631),
    l = n(354459);
let u = 48,
    c = 32,
    d = 32,
    _ = 32;
t.Z = (0, a.Z)(function (e) {
    let { className: t, defaultPosition: n = o.VD2.BOTTOM_RIGHT, children: a, width: E, height: f } = e,
        [h, p] = i.useState(n);
    return (0, r.jsx)(s._, {
        className: t,
        position: h,
        id: 0,
        type: l.cL.VIDEO,
        onMove: (e, t) => p(t),
        maxX: E,
        maxY: f,
        edgeOffsetTop: u,
        edgeOffsetBottom: c,
        edgeOffsetLeft: d,
        edgeOffsetRight: _,
        children: a
    });
});
