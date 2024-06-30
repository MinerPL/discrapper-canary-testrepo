r.d(e, {
    dO: function () {
        return o;
    },
    pq: function () {
        return R;
    }
}), r(47120);
var n = r(688619), _ = r.n(n);
function a(t, e, r) {
    let [n, _] = t, [a, i] = e, o = (n + _) / 2;
    return r === o ? o : r < o ? a + (r - n) / (o - n) * (o - a) : o + (r - o) / (_ - o) * (i - o);
}
let i = [
    0,
    2
];
function o(t, e, r) {
    let n = _()(t);
    if ('background' !== e)
        return n.set('hsl.s', '*'.concat(r)).hex();
    {
        let t = function (t, e, r) {
            let [n, _] = t, [a, i] = e;
            return a + (r - n) / (_ - n) * (i - a);
        }([
            0,
            1
        ], [
            0.25,
            1
        ], r);
        return n.set('hsl.s', '*'.concat(t)).hex();
    }
}
let E = [
        1.3,
        0.7
    ], s = [
        0.98,
        1
    ], c = [
        0.75,
        1.5
    ], I = [
        1.45,
        0.45
    ];
function R(t, e, r, n) {
    switch (e) {
    case 'background':
    case 'border':
        return _()(t).set('hsl.l', '*'.concat(a(i, 'light' === r ? s : E, n))).hex();
    case 'text':
        return _()(t).set('hsl.l', '*'.concat(a(i, 'light' === r ? I : c, n))).hex();
    default:
        return t;
    }
}
