function i(e, n) {
    var t, i, a, l, o;
    let r;
    let s = null !== (t = n.limit) && void 0 !== t ? t : 1 / 0,
        c = (function (e, n) {
            return e.filter((e) => n.every((n) => n(e)));
        })(e, null !== (i = n.filterPredicates) && void 0 !== i ? i : []);
    return (function (e, n, t) {
        let i = [];
        for (let a of e) {
            let e = (function (e, n) {
                return e.sort((e, t) => {
                    for (let i of n) {
                        let n = i(e, t);
                        if (0 !== n) return n;
                    }
                    return 0;
                });
            })(a, n);
            if ((i.push(...e), i.length >= t)) break;
        }
        return i;
    })(
        (r =
            null != n.bucketPredicates && n.bucketPredicates.length > 0
                ? s >= c.length
                    ? (function (e, n) {
                          let t = Array(n.length)
                              .fill(null)
                              .map(() => []);
                          for (let i of e)
                              for (let e = 0; e < n.length; e++)
                                  if (n[e](i)) {
                                      t[e].push(i);
                                      break;
                                  }
                          return t;
                      })(c, null !== (a = n.bucketPredicates) && void 0 !== a ? a : [])
                    : (function (e, n, t) {
                          let i = [],
                              a = e;
                          for (let e of n) {
                              let n = [],
                                  l = [];
                              for (let t of a) e(t) ? l.push(t) : n.push(t);
                              if ((i.push(l), (a = n), i.reduce((e, n) => n.length + e, 0) >= t)) break;
                          }
                          return i;
                      })(c, null !== (l = n.bucketPredicates) && void 0 !== l ? l : [], s)
                : [c]),
        null !== (o = n.sortComparers) && void 0 !== o ? o : [],
        s
    ).slice(0, s);
}
t.d(n, {
    N: function () {
        return i;
    }
}),
    t(653041),
    t(47120),
    t(724458);
