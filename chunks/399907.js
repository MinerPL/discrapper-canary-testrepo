n(47120);
var r = n(956067),
    i = n(147913),
    a = n(70956),
    s = n(640795),
    o = n(139674);
let l = 4 * a.Z.Millis.HOUR;
class u extends i.Z {
    _initialize() {
        setTimeout(() => r.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => o.Z.getBlockedDomainList()), 1000), setTimeout(() => (0, s.q)(), 10 * a.Z.Millis.SECOND), (this.intervalID = setInterval(s.q, l));
    }
    _terminate() {
        clearInterval(this.intervalID);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (r = void 0),
            (n = 'intervalID') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new u();
