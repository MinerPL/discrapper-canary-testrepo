n(47120);
var r = n(147913),
    i = n(579806),
    a = n(246946);
let s = !1;
function o() {
    var e;
    let t = null === i.Z || void 0 === i.Z ? void 0 : null === (e = i.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
    if (null == t) return;
    let n = a.Z.enableContentProtection;
    n !== s && (t(n), (s = n));
}
class l extends r.Z {
    constructor() {
        var e, t, n;
        o(),
            super(),
            (e = this),
            (t = 'stores'),
            (n = new Map().set(a.Z, o)),
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
}
t.Z = new l();
