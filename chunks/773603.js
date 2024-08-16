var r = n(147018),
    i = n(992051),
    a = n(955903),
    s = n(936940),
    o = n(545576),
    l = n(354848),
    u = n(344135),
    c = n(457110),
    d = n(859209),
    _ = a && a.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!a &&
                s(function () {
                    _.finally.call(
                        {
                            then: function () {}
                        },
                        function () {}
                    );
                })
        },
        {
            finally: function (e) {
                var t = u(this, o('Promise')),
                    n = l(e);
                return this.then(
                    n
                        ? function (n) {
                              return c(t, e()).then(function () {
                                  return n;
                              });
                          }
                        : e,
                    n
                        ? function (n) {
                              return c(t, e()).then(function () {
                                  throw n;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !i && l(a))
) {
    var E = o('Promise').prototype.finally;
    _.finally !== E && d(_, 'finally', E, { unsafe: !0 });
}
