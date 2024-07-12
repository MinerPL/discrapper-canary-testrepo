s.d(t, {
  Z: function() {
return I;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(338545),
  l = s(748780),
  c = s(481060),
  d = s(442837),
  _ = s(607070),
  E = s(663389),
  u = s(600222);

function T(e) {
  let {
children: t,
className: s,
onFlashEnd: i,
animationDelay: E = 500
  } = e, T = c.tokens.colors.TEXT_LINK, I = (0, d.e7)([_.Z], () => _.Z.useReducedMotion), S = (0, c.useToken)(T).spring({
opacity: 0
  }), N = (0, c.useToken)(T).spring({
opacity: 0.1
  }), C = (0, c.useToken)(T).spring({
opacity: 0
  }), m = (0, c.useToken)(T).spring({
opacity: 1
  }), A = e => {
e.finished && (null == i || i());
  }, [h, g] = (0, o.useSpring)(() => ({
immediate: !0,
from: {
  backgroundColor: S,
  borderColor: S
}
  })), O = E + 200 + 200, p = I ? 0 : 200;
  return a.useEffect(() => {
g({
  reset: !0,
  immediate: !1,
  to: {
    backgroundColor: S,
    borderColor: S
  },
  config: {
    duration: p,
    easing: l.Z.Easing.ease
  }
}), g({
  delay: E,
  immediate: I,
  to: [{
    backgroundColor: N,
    borderColor: m
  }],
  config: {
    duration: p,
    easing: l.Z.Easing.ease
  }
}), g({
  delay: O,
  immediate: I,
  to: [{
    backgroundColor: C,
    borderColor: C
  }],
  config: {
    duration: p,
    easing: l.Z.Easing.ease
  },
  onRest: A
});
  }, [g]), (0, n.jsx)(o.animated.div, {
style: h,
className: r()(u.settingsItemHighlight, s),
children: t
  });
}

function I(e) {
  let {
children: t,
scrollPosition: s,
animationDelay: i
  } = e, r = (0, d.e7)([E.Z], () => E.Z.getScrollPosition() === s), [o, l] = a.useState(!1);
  return (a.useEffect(() => {
r && l(!0);
  }, [r]), o) ? (0, n.jsx)(T, {
animationDelay: i,
onFlashEnd: () => l(!1),
children: t
  }) : (0, n.jsx)(n.Fragment, {
children: t
  });
}