"use strict";
n.d(t, {
  $s: function() {
    return N
  },
  DE: function() {
    return R
  },
  Gw: function() {
    return d
  },
  JQ: function() {
    return f
  },
  Jw: function() {
    return m
  },
  Mr: function() {
    return h
  },
  Vn: function() {
    return c
  },
  ZD: function() {
    return I
  },
  f9: function() {
    return A
  },
  h7: function() {
    return T
  },
  nf: function() {
    return C
  },
  o: function() {
    return S
  },
  pT: function() {
    return O
  },
  s9: function() {
    return E
  }
}), n(411104), n(47120), n(571269), n(298267);
var i = n(97613),
  r = n.n(i),
  s = n(652874),
  o = n(40851),
  a = n(602091),
  l = n(981631);
let u = n(338305).Z,
  _ = [a.z1, a.u1];

function d() {
  let e = (0, o.GB)();
  return null != e ? c(e) : a.z1
}

function c(e) {
  return e === l.IlC.POPOUT ? a.u1 : a.z1
}
let E = (0, s.Z)(e => ({
  [a.z1]: [],
  [a.u1]: []
}));
async function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      contextKey: n = d(),
      ...i
    } = t,
    s = null != t.modalKey ? t.modalKey : r()(),
    o = !1,
    a = setTimeout(() => {
      o = !0, T(u, {
        ...i,
        modalKey: s
      }, n)
    }, 300),
    l = await e();
  return clearTimeout(a), o ? C(s, n) && S(s, l, i.onCloseRequest, i.onCloseCallback, n) : T(l, {
    ...i,
    modalKey: s
  }, n), s
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d(),
    {
      modalKey: i,
      instant: s,
      Layer: o,
      onCloseRequest: a,
      onCloseCallback: l,
      backdropStyle: u
    } = t,
    _ = null != i ? i : r()();
  return E.setState(t => {
    let i = t[n];
    return void 0 !== i && i.some(e => {
      let {
        key: t
      } = e;
      return t === _
    }) ? t : {
      ...t,
      [n]: [...i, {
        key: _,
        Layer: o,
        render: e,
        onCloseRequest: null != a ? a : () => h(_, n),
        onCloseCallback: l,
        instant: s,
        backdropStyle: u
      }]
    }
  }), _
}

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
    n = E.getState()[t],
    i = null != n ? n.find(t => {
      let {
        key: n
      } = t;
      return n === e
    }) : null;
  E.setState(n => void 0 === n[t] ? n : {
    ...n,
    [t]: n[t].filter(t => {
      let {
        key: n
      } = t;
      return n !== e
    })
  }), null != i && null != i.onCloseCallback && i.onCloseCallback()
}

function S(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d();
  E.setState(s => void 0 === s[r] ? s : {
    ...s,
    [r]: s[r].map(s => s.key === e ? {
      ...s,
      render: t,
      onCloseRequest: null == n ? () => h(e, r) : n,
      onCloseCallback: i
    } : s)
  })
}

function f(e) {
  for (let t of _) {
    let n = e[t];
    if (null != n && n.length > 0) return !0
  }
  return !1
}

function N() {
  return f(E.getState())
}

function A() {
  return f(E())
}

function m(e) {
  var t, n;
  let {
    default: i,
    popout: r
  } = E();
  return r.length > 0 ? (null === (t = r.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = i.at(-1)) || void 0 === n ? void 0 : n.key) === e
}

function O() {
  let e = E.getState();
  for (let t in e)
    for (let n of e[t]) h(n.key, t)
}

function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.z1,
    i = e[n];
  return null != i && i.some(e => e.key === t)
}

function C(e, t) {
  return R(E.getState(), e, t)
}