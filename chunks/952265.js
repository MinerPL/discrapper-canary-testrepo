n.d(t, {
    $s: function () {
        return S;
    },
    Ay: function () {
        return A;
    },
    DE: function () {
        return N;
    },
    Fv: function () {
        return E;
    },
    Gw: function () {
        return f;
    },
    JQ: function () {
        return I;
    },
    Jw: function () {
        return b;
    },
    Mr: function () {
        return g;
    },
    Vn: function () {
        return _;
    },
    ZD: function () {
        return p;
    },
    f9: function () {
        return T;
    },
    h7: function () {
        return m;
    },
    nf: function () {
        return C;
    },
    o: function () {
        return v;
    },
    pT: function () {
        return y;
    },
    s9: function () {
        return h;
    }
}),
    n(411104),
    n(47120),
    n(571269),
    n(298267);
var r = n(97613),
    i = n.n(r),
    a = n(903797),
    s = n(731965),
    o = n(40851),
    l = n(602091),
    u = n(981631);
let c = n(338305).Z,
    d = [l.z1, l.u1];
function f() {
    let e = (0, o.GB)();
    return null != e ? _(e) : l.z1;
}
function _(e) {
    return e === u.IlC.POPOUT ? l.u1 : l.z1;
}
let h = (0, a.Z)((e) => ({
    [l.z1]: [],
    [l.u1]: []
}));
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = f(), ...r } = t,
        a = null != t.modalKey ? t.modalKey : i()(),
        s = !1,
        o = setTimeout(() => {
            (s = !0),
                m(
                    c,
                    {
                        ...r,
                        modalKey: a
                    },
                    n
                );
        }, 300),
        l = await e();
    return (
        clearTimeout(o),
        s
            ? C(a, n) && v(a, l, r.onCloseRequest, r.onCloseCallback, n)
            : m(
                  l,
                  {
                      ...r,
                      modalKey: a
                  },
                  n
              ),
        a
    );
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f(),
        { modalKey: r, instant: a, Layer: o, onCloseRequest: l, onCloseCallback: u, backdropStyle: c } = t,
        d = null != r ? r : i()();
    return (
        (0, s.j)(() => {
            h.setState((t) => {
                let r = t[n];
                return void 0 !== r &&
                    r.some((e) => {
                        let { key: t } = e;
                        return t === d;
                    })
                    ? t
                    : {
                          ...t,
                          [n]: [
                              ...r,
                              {
                                  key: d,
                                  Layer: o,
                                  render: e,
                                  onCloseRequest: null != l ? l : () => g(d, n),
                                  onCloseCallback: u,
                                  instant: a,
                                  backdropStyle: c
                              }
                          ]
                      };
            });
        }),
        d
    );
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f(),
        n = h.getState()[t],
        r =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    (0, s.j)(() => {
        h.setState((n) =>
            void 0 === n[t]
                ? n
                : {
                      ...n,
                      [t]: n[t].filter((t) => {
                          let { key: n } = t;
                          return n !== e;
                      })
                  }
        );
    }),
        null != r && null != r.onCloseCallback && r.onCloseCallback();
}
function E(e) {
    let t = h.getState(),
        n = d
            .map((e) => {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : [];
            })
            .map((t) => {
                var n;
                return null !==
                    (n = t.find((t) => {
                        let { key: n } = t;
                        return n === e;
                    })) && void 0 !== n
                    ? n
                    : null;
            });
    if (!!n.some((e) => null != e))
        (0, s.j)(() => {
            h.setState((t) => {
                let n = { ...t };
                return (
                    d.forEach((t) => {
                        var r;
                        n[t] =
                            null === (r = n[t]) || void 0 === r
                                ? void 0
                                : r.filter((t) => {
                                      let { key: n } = t;
                                      return n !== e;
                                  });
                    }),
                    n
                );
            });
        }),
            n.forEach((e) => {
                var t;
                null == e || null === (t = e.onCloseCallback) || void 0 === t || t.call(e);
            });
}
function v(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f();
    (0, s.j)(() => {
        h.setState((a) =>
            void 0 === a[i]
                ? a
                : {
                      ...a,
                      [i]: a[i].map((a) =>
                          a.key === e
                              ? {
                                    ...a,
                                    render: t,
                                    onCloseRequest: null == n ? () => g(e, i) : n,
                                    onCloseCallback: r
                                }
                              : a
                      )
                  }
        );
    });
}
function I(e) {
    for (let t of d) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function S() {
    return I(h.getState());
}
function T() {
    return I(h());
}
function b(e) {
    var t, n;
    let { default: r, popout: i } = h();
    return i.length > 0 ? (null === (t = i.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = r.at(-1)) || void 0 === n ? void 0 : n.key) === e;
}
function y() {
    let e = h.getState();
    for (let t in e) for (let n of e[t]) g(n.key, t);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f(),
        t = h.getState()[e];
    if (null != t) for (let n of t) g(n.key, e);
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.z1,
        r = e[n];
    return null != r && r.some((e) => e.key === t);
}
function C(e, t) {
    return N(h.getState(), e, t);
}
