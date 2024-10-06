n.d(t, {
    Z: function () {
        return l;
    },
    m: function () {
        return o;
    }
}),
    n(47120);
var r = n(470079),
    i = n(846519),
    a = n(70956);
let s = (e) => String(e).padStart(2, '0'),
    o = (e) => {
        let t = Math.floor(e) % a.Z.Seconds.MINUTE,
            n = Math.floor(e / a.Z.Seconds.MINUTE) % a.Z.Seconds.MINUTE,
            r = Math.floor(e / a.Z.Seconds.HOUR);
        return 0 === r ? ''.concat(s(n), ':').concat(s(t)) : ''.concat(s(r), ':').concat(s(n), ':').concat(s(t));
    };
function l(e) {
    let { start: t, end: n } = e,
        [s] = (0, r.useState)(new i.Xp()),
        [o, l] = (0, r.useState)(Date.now());
    (0, r.useEffect)(() => (s.start(a.Z.Millis.HALF_SECOND, () => l(Date.now())), () => s.stop()), [s]);
    let u = (n - t) / a.Z.Millis.SECOND,
        c = Math.max(Math.min((o - t) / a.Z.Millis.SECOND, u), 0);
    return {
        elapsed: c,
        duration: u,
        percentage: Math.max(Math.min(c / u, 1), 0)
    };
}
