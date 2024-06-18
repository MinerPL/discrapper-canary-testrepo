"use strict";
n.d(t, {
  m: function() {
    return E
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(920906),
  l = n(442837),
  u = n(481060),
  _ = n(607070),
  d = n(745510),
  c = n(737774);

function E(e) {
  let {
    children: t,
    confettiTriggerRef: n,
    setConfettiCount: i,
    setShouldFireConfetti: r,
    tooltipProps: d
  } = e, [E, I] = o.useState(0), T = o.useRef(-1), h = o.useRef(!0), S = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), {
    scaleFactor: f
  } = (0, a.useSpring)({
    from: {
      scaleFactor: 1
    },
    to: {
      scaleFactor: 1 === E ? .9 : 2 === E ? 1.2 : 1
    },
    config: {
      tension: 380,
      friction: 7
    }
  });
  return (o.useEffect(() => () => {
    h.current = !1
  }, []), S) ? (0, s.jsx)(s.Fragment, {
    children: t
  }) : (0, s.jsx)(a.animated.div, {
    className: c.confettiTriggerWrapper,
    style: {
      transform: f.to(e => "scale(".concat(e, ")"))
    },
    children: (0, s.jsx)(u.Clickable, {
      className: c.confettiTrigger,
      onMouseDown: () => {
        I(1), r(!0), i(e => Math.min(e + 2, 200)), window.clearTimeout(T.current), T.current = window.setTimeout(() => {
          h.current && i(0)
        }, 200)
      },
      onMouseUp: () => {
        I(0), r(!1)
      },
      onMouseEnter: () => {
        var e;
        I(2), null == d || null === (e = d.onMouseEnter) || void 0 === e || e.call(d)
      },
      onMouseLeave: () => {
        var e;
        I(0), null == d || null === (e = d.onMouseLeave) || void 0 === e || e.call(d)
      },
      innerRef: n,
      children: t
    })
  })
}(r = i || (i = {}))[r.INACTIVE = 0] = "INACTIVE", r[r.PRESSED = 1] = "PRESSED", r[r.HOVERED = 2] = "HOVERED";
t.Z = function(e) {
  let {
    confettiCount: t,
    confettiTriggerRef: n,
    isFiring: i
  } = e, {
    cannon: r,
    createMultipleConfettiAt: s
  } = o.useContext(d.h), a = (0, l.e7)([_.Z], () => _.Z.useReducedMotion);
  return o.useEffect(() => () => {
    null == r || r.clearConfetti()
  }, [r]), o.useEffect(() => {
    if (!i || a || null == n.current) return;
    let e = n.current.getBoundingClientRect(),
      r = e.left + e.width / 2;
    s(r, e.top + e.height / 2, {
      velocity: {
        type: "static-random",
        minValue: {
          x: -180,
          y: -180
        },
        maxValue: {
          x: 180,
          y: 180
        }
      }
    }, Math.max(t, 20))
  }, [t, n, s, i, a]), null
}