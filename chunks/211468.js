r.d(t, {
    dO: function () {
        return _;
    },
    pq: function () {
        return u;
    }
}),
    r(47120);
var n = r(688619),
    a = r.n(n);
function o(e, t, r) {
    let [n, a] = e,
        [o, i] = t,
        _ = (n + a) / 2;
    return r === _ ? _ : r < _ ? o + ((r - n) / (_ - n)) * (_ - o) : _ + ((r - _) / (a - _)) * (i - _);
}
let i = [0, 2];
function _(e, t, r) {
    let n = a()(e);
    if ('background' !== t) return n.set('hsl.s', '*'.concat(r)).hex();
    {
        let e = (function (e, t, r) {
            let [n, a] = e,
                [o, i] = t;
            return o + ((r - n) / (a - n)) * (i - o);
        })([0, 1], [0.25, 1], r);
        return n.set('hsl.s', '*'.concat(e)).hex();
    }
}
let E = [1.3, 0.7],
    s = [0.98, 1],
    c = [0.75, 1.5],
    I = [1.45, 0.45];
function u(e, t, r, n) {
    switch (t) {
        case 'background':
        case 'border':
            return a()(e)
                .set('hsl.l', '*'.concat(o(i, 'light' === r ? s : E, n)))
                .hex();
        case 'text':
            return a()(e)
                .set('hsl.l', '*'.concat(o(i, 'light' === r ? I : c, n)))
                .hex();
        default:
            return e;
    }
}
