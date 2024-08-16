var r = n(325008),
    i = n(581031),
    a = n(926515),
    s = n(936940),
    o = n(835884),
    l = n(279129),
    u = n(610067),
    c = n(339718),
    d = n(470592),
    _ = Object.assign,
    E = Object.defineProperty,
    f = i([].concat);
e.exports =
    !_ ||
    s(function () {
        if (
            r &&
            1 !==
                _(
                    { b: 1 },
                    _(
                        E({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                E(this, 'b', {
                                    value: 3,
                                    enumerable: !1
                                });
                            }
                        }),
                        { b: 2 }
                    )
                ).b
        )
            return !0;
        var e = {},
            t = {},
            n = Symbol('assign detection'),
            i = 'abcdefghijklmnopqrst';
        return (
            (e[n] = 7),
            i.split('').forEach(function (e) {
                t[e] = e;
            }),
            7 !== _({}, e)[n] || o(_({}, t)).join('') !== i
        );
    })
        ? function (e, t) {
              for (var n = c(e), i = arguments.length, s = 1, _ = l.f, E = u.f; i > s; ) {
                  for (var h, p = d(arguments[s++]), m = _ ? f(o(p), _(p)) : o(p), I = m.length, T = 0; I > T; ) (h = m[T++]), (!r || a(E, p, h)) && (n[h] = p[h]);
              }
              return n;
          }
        : _;
