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
        f = (e) => _(e) + 1500 >= Date.now(),
        E = (e) => _(e) <= Date.now() && f(e),
        g = m.find(E);
    if (null == g) {
        !f(t.points[t.points.length - 1]) && h.push(t);
        return;
    }
    let C = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(g.x, g.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                E(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
        },
        { fillColor: I, outlineColor: x } = (0, i.bg)(t.userId, c, u, o),
        T = C(x, 6 + s.q2),
        N = null != T && E(T);
    N && (0, a.I)(n, T.x, T.y, x, s.q2), C(I, 6), N && (0, a.T)(n, T.x, T.y, t.userId);
}
