n.d(t, {
  H: function() {
return m;
  },
  M: function() {
return p;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(338545),
  o = n(990547),
  s = n(873546),
  l = n(186325),
  u = n(393238),
  c = n(699682),
  d = n(906732),
  _ = n(812663),
  E = n(863840);
let f = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: !0
};

function h(e, t) {
  return n => {
if (0 === n)
  return 'auto';
let r = 'forwards' === t.current,
  i = n > 0,
  a = !1;
return i && r && 'left' === e && (a = !0), i && !r && 'right' === e && (a = !0), !i && r && 'right' === e && (a = !0), !i && !r && 'left' === e && (a = !0), a ? ''.concat(100 * Math.abs(n), '%') : 'auto';
  };
}

function p(e) {
  return null;
}

function m(e) {
  var t, n, p, m, I;
  let {
contentDisplay: T,
fadeInOut: g = !1,
...S
  } = e, A = {}, {
analyticsLocations: N
  } = (0, d.ZP)();
  i.Children.forEach(S.children, (e, t) => {
A[e.props.id] = {
  children: e.props.children,
  impressionName: e.props.impressionName,
  impressionProperties: e.props.impressionProperties,
  index: t
};
  });
  let v = S.activeSlide,
O = (0, c.Z)(S.activeSlide);
  let R = null !== (t = S.directionOverride) && void 0 !== t ? t : (m = null != O ? A[O] : null, I = A[v], null == m ? null : m.index > I.index ? 'backwards' : m.index < I.index ? 'forwards' : null),
{
  reducedMotion: C
} = i.useContext(l.S),
y = i.useContext(_.Z),
D = A[v].impressionName,
L = {
  ...A[v].impressionProperties,
  location_stack: N
};
  y({
type: o.ImpressionTypes.MODAL,
name: D,
properties: L,
_stackContext: {
  isSlide: !0
}
  });
  let {
ref: b,
width: M = 0,
height: P = 0
  } = (0, u.Z)(v), U = {
...f,
...S.springConfig,
...C.enabled ? {
  clamp: !0
} : null
  }, w = (0, a.useSpring)({
immediate: null == O,
width: null !== (n = S.width) && void 0 !== n ? n : M,
height: P,
config: U
  }), x = (0, a.useTransition)(v, {
immediate: null == O,
value: 0,
from: {
  value: 1
},
enter: {
  value: 0
},
leave: {
  value: -1
},
config: U,
onRest: (e, t) => {
  let {
    item: n
  } = t;
  n === v && null != S.onSlideReady && S.onSlideReady(n);
}
  }), G = (0, E.Z)(R), {
width: k,
centered: B = !0
  } = S, F = s.tq ? '100%' : w.width.to(e => Math.round(e)), V = s.tq ? '100%' : w.height.to(e => Math.round(e)), H = s.tq ? {} : B ? {
transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
top: '50%'
  } : {
transform: 'scale(1.0, 1.0)'
  }, Z = s.tq ? {} : {
overflow: null !== (p = S.overflow) && void 0 !== p ? p : 'hidden'
  };
  return (0, r.jsx)(a.animated.div, {
style: {
  position: 'relative',
  width: F,
  height: V,
  ...Z
},
children: x((e, t, n) => {
  let {
    key: i
  } = n, o = {
    opacity: e.value.to(e => 1 - Math.abs(e))
  };
  return (0, r.jsx)(a.animated.div, {
    ref: t === v ? b : null,
    style: {
      position: 'absolute',
      display: T,
      flexDirection: 'column',
      backfaceVisibility: 'hidden',
      width: s.tq ? '100%' : k,
      ...H,
      ...C.enabled ? o : {
        left: e.value.to(h('left', G)),
        right: e.value.to(h('right', G)),
        ...g && o
      }
    },
    children: A[t].children
  }, i);
})
  });
}