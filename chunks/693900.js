n.d(t, {
  n: function() {
return p;
  },
  t: function() {
return u;
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  r = n(338545),
  a = n(442837),
  i = n(393238),
  l = n(110924),
  c = n(607070);
let d = o.createContext({
  springConfig: {},
  onHeightChange: () => {},
  isExpanded: !1
});

function u(e) {
  let t = o.useMemo(() => ({
springConfig: e.springConfig,
isExpanded: e.isExpanded,
onHeightChange: e.onHeightChange
  }), [
e.springConfig,
e.onHeightChange,
e.isExpanded
  ]);
  return (0, s.jsx)(d.Provider, {
value: t,
children: e.children
  });
}

function p(e) {
  var t;
  let {
children: n
  } = e, {
springConfig: u,
isExpanded: p,
onHeightChange: x
  } = o.useContext(d), m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), {
ref: g,
height: C = null
  } = (0, i.Z)(), f = null !== (t = (0, l.Z)(C)) && void 0 !== t ? t : null, [{
height: _
  }, h] = (0, r.useSpring)(() => ({
from: {
  height: 0
},
config: u,
immediate: m
  }));
  return o.useLayoutEffect(() => {
if (null === f || null === C)
  return;
let e = C - f;
0 !== e && x(e);
  }, [
C,
f,
x,
p
  ]), o.useLayoutEffect(() => {
null !== C && h({
  height: C,
  immediate: !p || m || null === f
});
  }, [
C,
h,
p,
m,
f
  ]), (0, s.jsx)(r.animated.div, {
style: {
  height: null === f ? 'auto' : _,
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