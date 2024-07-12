n.d(t, {
  Wu: function() {
return c;
  },
  cj: function() {
return u;
  },
  e7: function() {
return l;
  },
  pF: function() {
return s;
  }
}), n(411104), n(47120);
var r = n(470079),
  i = n(902704),
  a = n(250919);

function o(e, t) {
  return e === t;
}

function s(e, t) {
  return !1;
}

function l(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o,
{
  current: l
} = (0, r.useRef)({
  stores: e,
  areStatesEqual: s,
  getStateFromStores: t,
  prevDeps: void 0,
  state: void 0
}),
u = l.state;
  if (null == n || !(0, i.E)(n, l.prevDeps)) {
let e = t();
(null == u || !s(u, e)) && (u = e);
  }
  (0, r.useLayoutEffect)(() => {
l.getStateFromStores = t, l.prevDeps = n, l.state = u;
  });
  let [, c] = (0, r.useState)(null);
  return (0, r.useLayoutEffect)(() => {
let t = () => {
  let e = l.getStateFromStores();
  !s(l.state, e) && (l.state = e, c({}));
};
t();
let n = new a.F(e, t);
return n.attach('useStateFromStores'), () => n.detach();
  }, []), u;
}

function u(e, t, n) {
  return l(e, t, n, i.Z);
}

function c(e, t, n) {
  return l(e, t, n, i.E);
}