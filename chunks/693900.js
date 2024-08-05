n.d(t, {
  n: function() {
return m;
  },
  t: function() {
return p;
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  r = n(338545),
  a = n(442837),
  l = n(481060),
  i = n(393238),
  c = n(110924),
  d = n(607070);
let u = o.createContext({
  springConfig: {},
  isExpanded: !1
});

function p(e) {
  let t = o.useMemo(() => ({
springConfig: e.springConfig,
isExpanded: e.isExpanded
  }), [
e.springConfig,
e.isExpanded
  ]);
  return (0, s.jsx)(u.Provider, {
value: t,
children: e.children
  });
}

function m(e) {
  var t;
  let {
children: n
  } = e, {
springConfig: p,
isExpanded: m
  } = o.useContext(u), x = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), {
ref: g,
height: f = null
  } = (0, i.Z)(), C = null !== (t = (0, c.Z)(f)) && void 0 !== t ? t : null, [{
height: _
  }, h] = (0, l.useSpring)(() => ({
from: {
  height: 0
},
config: p
  }));
  return o.useLayoutEffect(() => {
null !== f && h({
  height: f,
  immediate: !m || x || null === C
});
  }, [
f,
h,
m,
x,
C
  ]), (0, s.jsx)(r.animated.div, {
style: {
  height: null === C ? 'auto' : _,
  overflow: 'hidden'
},
children: (0, s.jsx)('div', {
  style: {
    overflow: 'hidden'
  },
  ref: g,
  children: n
})
  });
}