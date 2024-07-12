n.d(t, {
  m: function() {
return E;
  }
}), n(47120);
var r, i, a = n(735250),
  o = n(470079),
  s = n(338545),
  l = n(442837),
  u = n(481060),
  c = n(607070),
  d = n(745510),
  _ = n(644308);

function E(e) {
  let {
children: t,
confettiTriggerRef: n,
setConfettiCount: r,
setShouldFireConfetti: i,
tooltipProps: d
  } = e, [E, f] = o.useState(0), h = o.useRef(-1), p = o.useRef(!0), m = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
scaleFactor: I
  } = (0, s.useSpring)({
from: {
  scaleFactor: 1
},
to: {
  scaleFactor: 1 === E ? 0.9 : 2 === E ? 1.2 : 1
},
config: {
  tension: 380,
  friction: 7
}
  });
  return (o.useEffect(() => () => {
p.current = !1;
  }, []), m) ? (0, a.jsx)(a.Fragment, {
children: t
  }) : (0, a.jsx)(s.animated.div, {
className: _.confettiTriggerWrapper,
style: {
  transform: I.to(e => 'scale('.concat(e, ')'))
},
children: (0, a.jsx)(u.Clickable, {
  className: _.confettiTrigger,
  onMouseDown: () => {
    f(1), i(!0), r(e => Math.min(e + 2, 200)), window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      p.current && r(0);
    }, 200);
  },
  onMouseUp: () => {
    f(0), i(!1);
  },
  onMouseEnter: () => {
    var e;
    f(2), null == d || null === (e = d.onMouseEnter) || void 0 === e || e.call(d);
  },
  onMouseLeave: () => {
    var e;
    f(0), null == d || null === (e = d.onMouseLeave) || void 0 === e || e.call(d);
  },
  innerRef: n,
  children: t
})
  });
}
(i = r || (r = {}))[i.INACTIVE = 0] = 'INACTIVE', i[i.PRESSED = 1] = 'PRESSED', i[i.HOVERED = 2] = 'HOVERED';
t.Z = function(e) {
  let {
confettiCount: t,
confettiTriggerRef: n,
isFiring: r
  } = e, {
cannon: i,
createMultipleConfettiAt: a
  } = o.useContext(d.h), s = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
  return o.useEffect(() => () => {
null == i || i.clearConfetti();
  }, [i]), o.useEffect(() => {
if (!r || s || null == n.current)
  return;
let e = n.current.getBoundingClientRect(),
  i = e.left + e.width / 2;
a(i, e.top + e.height / 2, {
  velocity: {
    type: 'static-random',
    minValue: {
      x: -180,
      y: -180
    },
    maxValue: {
      x: 180,
      y: 180
    }
  }
}, Math.max(t, 20));
  }, [
t,
n,
a,
r,
s
  ]), null;
};