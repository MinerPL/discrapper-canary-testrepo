n.d(t, {
    Eo: function () {
        return _;
    },
    KH: function () {
        return s;
    },
    nc: function () {
        return c;
    },
    yz: function () {
        return d;
    }
}),
    n(47120),
    n(724458);
var r = n(524484),
    i = n(981631);
let a = function (e, t) {
        let { multiplier: n, value: r } = e,
            [i, a] = t,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            o = r * n;
        return o <= 0
            ? 0
            : Math.min(
                  s,
                  i.reduce((e, t, n) => {
                      if (o > t) {
                          let e = a[n];
                          if (n + 1 === i.length) return a[n];
                          let r = i[n + 1],
                              s = a[n + 1];
                          return ((o - t) / (r - t)) * (s - e) + e;
                      }
                      return o === t ? a[n] : e;
                  }, 0)
              );
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.qi.LEVEL_3;
        return a(e, [r.JR[t], r.u4[t]], 100000);
    },
    o = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1]
    ],
    l = o.map((e) => {
        let [t] = e;
        return t;
    }),
    u = o.map((e) => {
        let [t, n] = e;
        return n;
    }),
    c = (e) => a(e, [l, u], 1),
    d = (e) =>
        1 === e
            ? { color: i.Ilk.BRAND_500 }
            : 2 === e || 3 === e
              ? { color: i.Ilk.GREEN_360 }
              : 4 === e || 5 === e
                ? {
                      color: i.Ilk.YELLOW_300,
                      square: !0
                  }
                : 6 === e
                  ? {
                        color: i.Ilk.RED_400,
                        square: !0
                    }
                  : {
                        color: i.Ilk.ORANGE_345,
                        flair: !0
                    };
function _(e) {
    var t;
    return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1);
}
