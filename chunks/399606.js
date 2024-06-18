"use strict";
n.d(t, {
  Wu: function() {
    return _
  },
  cj: function() {
    return u
  },
  e7: function() {
    return l
  },
  pF: function() {
    return a
  }
}), n(411104), n(47120);
var i = n(470079),
  r = n(902704),
  s = n(250919);

function o(e, t) {
  return e === t
}

function a(e, t) {
  return !1
}

function l(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o,
    {
      current: l
    } = (0, i.useRef)({
      stores: e,
      areStatesEqual: a,
      getStateFromStores: t,
      prevDeps: void 0,
      state: void 0
    }),
    u = l.state;
  if (null == n || !(0, r.E)(n, l.prevDeps)) {
    let e = t();
    (null == u || !a(u, e)) && (u = e)
  }(0, i.useLayoutEffect)(() => {
    l.getStateFromStores = t, l.prevDeps = n, l.state = u
  });
  let [, _] = (0, i.useState)(null);
  return (0, i.useLayoutEffect)(() => {
    let t = () => {
      let e = l.getStateFromStores();
      !a(l.state, e) && (l.state = e, _({}))
    };
    t();
    let n = new s.F(e, t);
    return n.attach("useStateFromStores"), () => n.detach()
  }, []), u
}

function u(e, t, n) {
  return l(e, t, n, r.Z)
}

function _(e, t, n) {
  return l(e, t, n, r.E)
}