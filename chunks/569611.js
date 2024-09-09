n.d(t, {
    Hj: function () {
        return s;
    },
    Pz: function () {
        return l;
    },
    ZH: function () {
        return o;
    }
}),
    n(653041),
    n(411104),
    n(47120);
var r = n(427786),
    i = n.n(r);
let a = new (i())(5000);
function s(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    let i = (function (e) {
        let t = '';
        for (let n of e) {
            let e = typeof n;
            'string' === e || 'number' === e || 'boolean' === e ? (t += n + ' ') : n instanceof Error ? (t += n.message + '\n' + n.stack + ' ') : (t += JSON.stringify(n) + ' ');
        }
        return t;
    })(n);
    for (
        'string' == typeof e
            ? a.push({
                  time: Date.now(),
                  category: e,
                  message: i
              })
            : a.push({
                  time: Date.now(),
                  category: e.name,
                  timing: e.timing,
                  message: i
              });
        a.length > 5000;

    )
        a.shift();
}
function o() {
    a.clear();
}
function l(e) {
    return a
        .toArray()
        .filter((t) => null == e || e.includes(t.category))
        .map((e) => {
            let t = [];
            return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(' -> ');
        })
        .join('\n');
}
