n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041);
var i = n(88315),
    a = n(199766),
    s = n(813900);
function l(e) {
    let { line: t, context: n, canvasWidth: l, canvasHeight: r, fallbackColor: o, outlineColorDark: c, outlineColorLight: u, linesDrawnAt: d, deadDrawables: h } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let m = t.points.map((e) => (0, i.RR)(e, l, r)),
        p = d.current[t.id],
        _ = (e) => p + e.deltaTime,
        E = (e) => _(e) + 1500 >= Date.now(),
        f = (e) => _(e) <= Date.now() && E(e),
        C = m.find(f);
    if (null == C) {
        !E(t.points[t.points.length - 1]) && h.push(t);
        return;
    }
    let g = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(C.x, C.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                f(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
        },
        { fillColor: I, outlineColor: x } = (0, i.bg)(t.userId, c, u, o),
        T = g(x, 6 + s.q2),
        N = null != T && f(T);
    N && (0, a.I)(n, T.x, T.y, x, s.q2), g(I, 6), N && (0, a.T)(n, T.x, T.y, t.userId);
}
