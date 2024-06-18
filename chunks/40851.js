"use strict";
n.d(t, {
  Aq: function() {
    return S
  },
  GB: function() {
    return I
  },
  J5: function() {
    return c
  },
  UI: function() {
    return u
  },
  Wu: function() {
    return T
  },
  bp: function() {
    return h
  },
  g0: function() {
    return E
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(585483),
  o = n(830917),
  a = n(919570),
  l = n(981631);
let u = new s.b,
  _ = r.createContext({
    appContext: l.IlC.APP,
    renderWindow: window,
    windowDispatch: u,
    windowId: (0, o.UU)()
  }),
  d = new Map;

function c(e) {
  var t;
  let n = e.ownerDocument.defaultView;
  if (null == n) return;
  let i = (0, o.ZY)(n);
  return null === (t = d.get(i)) || void 0 === t ? void 0 : t.windowDispatch
}

function E(e) {
  return d.get(e)
}

function I() {
  let e = function() {
    var e;
    let t = (0, a.GR)();
    return null == t ? null : null !== (e = d.get(t)) && void 0 !== e ? e : null
  }();
  return null != e ? e.appContext : null
}

function T(e) {
  let {
    appContext: t,
    renderWindow: n,
    children: r
  } = e, a = function(e, t) {
    let n = (0, o.ZY)(t),
      i = d.get(n);
    return null == i && (i = {
      appContext: e,
      renderWindow: t,
      windowDispatch: new s.b,
      windowId: n
    }, d.set(n, i), t.addEventListener("unload", () => {
      d.delete(n)
    })), i
  }(t, n);
  return (0, i.jsx)(_.Provider, {
    value: a,
    children: r
  })
}

function h() {
  return r.useContext(_).appContext
}

function S() {
  return r.useContext(_).windowDispatch
}
t.ZP = _