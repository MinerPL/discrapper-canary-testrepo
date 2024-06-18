"use strict";
n.d(t, {
  I: function() {
    return E
  },
  b: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(122274);

function u() {
  return document.hasFocus()
}
let _ = {
    config: {
      friction: 50,
      tension: 900,
      mass: 1
    },
    unique: !0,
    initial: {
      dotPosition: 1
    },
    from: {
      dotPosition: 0
    },
    enter: {
      dotPosition: 1
    },
    leave: {
      dotPosition: 0
    }
  },
  d = {
    config: {
      duration: 2400
    },
    from: {
      dotCycle: 2.8
    },
    reset: !0
  };

function c(e) {
  let t = e % 2;
  return t > 1 ? 1 - (t - 1) : t
}
let E = r.memo(function(e) {
    let {
      dotRadius: t,
      dotPosition: n,
      fill: s = "currentColor",
      spacing: o = 2.5
    } = e, l = r.useRef(u()), _ = r.useRef(!0);
    r.useEffect(() => () => void(_.current = !1), []);
    let [E] = (0, a.useSpring)(() => ({
      ...d,
      to: async e => {
        let t = 2.8;
        for (; _.current;) {
          ;
          l.current = u(), l.current ? (t += 4, await e({
            dotCycle: t,
            immediate: !1
          })) : 2.8 !== t ? (t = 2.8, await e({
            dotCycle: t,
            immediate: !0
          })) : await new Promise(e => setTimeout(e, 1e3))
        }
      }
    })), I = (6 * t + t / 4 * 2) / 2;
    return (0, i.jsx)(i.Fragment, {
      children: [0, 1, 2].map(e => {
        let r = .25 * e,
          u = t + t * o * e;
        return (0, i.jsx)(a.animated.circle, {
          cx: n ? n.to([0, 1], [I, u]) : u,
          cy: t,
          r: E.dotCycle.to(e => c(e - r)).to([0, .4, .8, 1], [.8 * t, .8 * t, t, t]).to(e => l.current ? e : t),
          fill: s,
          style: {
            opacity: E.dotCycle.to(e => c(e - r)).to([0, .4, .8, 1], [.3, .3, 1, 1]).to(e => l.current ? e : 1)
          }
        }, e)
      })
    })
  }),
  I = r.memo(r.forwardRef(function(e, t) {
    let {
      dotRadius: n,
      x: r,
      y: s,
      hide: d = !1,
      themed: c = !1,
      className: I
    } = e;
    return (0, a.useTransition)(d, {
      ..._,
      key: e => e ? "true" : "false",
      immediate: !u()
    })((e, u, _) => {
      let {
        dotPosition: d
      } = e, {
        key: T
      } = _;
      return u ? null : (0, i.jsx)("svg", {
        ref: t,
        x: r,
        y: s,
        width: 6 * n + n / 2 * 2,
        height: 2 * n,
        className: o()(I, l.dots, c ? l.themed : null),
        children: (0, i.jsx)(a.animated.g, {
          style: {
            opacity: d.to(e => Math.min(1, Math.max(e, 0)))
          },
          children: (0, i.jsx)(E, {
            dotRadius: n,
            dotPosition: d
          })
        })
      }, T)
    })
  }))