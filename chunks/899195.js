r.d(t, {
    V: function () {
        return i;
    },
    y: function () {
        return o;
    }
});
var n = r(370336);
let a = '_sentryMetrics';
function o(e) {
    let t = e[a];
    if (!t) return;
    let r = {};
    for (let [, [e, a]] of t) (r[e] || (r[e] = [])).push((0, n.Jr)(a));
    return r;
}
function i(e, t, r, n, o, i, _) {
    let E = e[a] || (e[a] = new Map()),
        s = `${t}:${r}@${o}`,
        c = E.get(_);
    if (c) {
        let [, e] = c;
        E.set(_, [
            s,
            {
                min: Math.min(e.min, n),
                max: Math.max(e.max, n),
                count: (e.count += 1),
                sum: (e.sum += n),
                tags: e.tags
            }
        ]);
    } else
        E.set(_, [
            s,
            {
                min: n,
                max: n,
                count: 1,
                sum: n,
                tags: i
            }
        ]);
}
