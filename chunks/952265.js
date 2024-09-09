n.d(t, {
    $s: function () {
        return g;
    },
    DE: function () {
        return v;
    },
    Gw: function () {
        return _;
    },
    JQ: function () {
        return T;
    },
    Jw: function () {
        return A;
    },
    Mr: function () {
        return m;
    },
    Vn: function () {
        return E;
    },
    ZD: function () {
        return h;
    },
    f9: function () {
        return S;
    },
    h7: function () {
        return p;
    },
    nf: function () {
        return O;
    },
    o: function () {
        return I;
    },
    pT: function () {
        return N;
    },
    s9: function () {
        return f;
    }
}),
    n(411104),
    n(47120),
    n(571269),
    n(298267);
var r = n(97613),
    i = n.n(r),
    a = n(652874),
    s = n(731965),
    o = n(40851),
    l = n(602091),
    u = n(981631);
let c = n(338305).Z,
    d = [l.z1, l.u1];
function _() {
    let e = (0, o.GB)();
    return null != e ? E(e) : l.z1;
}
function E(e) {
    return e === u.IlC.POPOUT ? l.u1 : l.z1;
}
let f = (0, a.Z)((e) => ({
    [l.z1]: [],
    [l.u1]: []
}));
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = _(), ...r } = t,
        a = null != t.modalKey ? t.modalKey : i()(),
        s = !1,
        o = setTimeout(() => {
            (s = !0),
                p(
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
            ? O(a, n) && I(a, l, r.onCloseRequest, r.onCloseCallback, n)
            : p(
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
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _(),
        { modalKey: r, instant: a, Layer: o, onCloseRequest: l, onCloseCallback: u, backdropStyle: c } = t,
        d = null != r ? r : i()();
    return (
        (0, s.j)(() => {
            f.setState((t) => {
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
                                  onCloseRequest: null != l ? l : () => m(d, n),
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
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
        n = f.getState()[t],
        r =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    (0, s.j)(() => {
        f.setState((n) =>
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
function I(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _();
    (0, s.j)(() => {
        f.setState((a) =>
            void 0 === a[i]
                ? a
                : {
                      ...a,
                      [i]: a[i].map((a) =>
                          a.key === e
                              ? {
                                    ...a,
                                    render: t,
                                    onCloseRequest: null == n ? () => m(e, i) : n,
                                    onCloseCallback: r
                                }
                              : a
                      )
                  }
        );
    });
}
function T(e) {
    for (let t of d) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function g() {
    return T(f.getState());
}
function S() {
    return T(f());
}
function A(e) {
    var t, n;
    let { default: r, popout: i } = f();
    return i.length > 0 ? (null === (t = i.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = r.at(-1)) || void 0 === n ? void 0 : n.key) === e;
}
function N() {
    let e = f.getState();
    for (let t in e) for (let n of e[t]) m(n.key, t);
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.z1,
        r = e[n];
    return null != r && r.some((e) => e.key === t);
}
function O(e, t) {
    return v(f.getState(), e, t);
}
