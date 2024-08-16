n.d(t, {
    s: function () {
        return o;
    }
}),
    n(47120),
    n(627341);
var r = n(278074),
    i = n(264181),
    a = n(178185),
    s = n(806185);
class o {
    static fromServer(e) {
        var t;
        return new o(
            Object.fromEntries(
                Object.entries(null !== (t = e.marketings) && void 0 !== t ? t : {}).map((e) => {
                    let [t, n] = e;
                    return [
                        t,
                        (0, r.EQ)(n)
                            .with({ type: i.Z.COACHTIP }, (e) => s.Z.fromServer(e))
                            .with({ type: i.Z.BADGE }, (e) => a.E.fromServer(e))
                            .otherwise(() => n)
                    ];
                })
            )
        );
    }
    constructor(e) {
        var t, n, r;
        (t = this),
            (r = void 0),
            (n = 'marketingsBySurfaces') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.marketingsBySurfaces = e);
    }
}
