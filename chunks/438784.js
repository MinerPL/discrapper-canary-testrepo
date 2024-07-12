n.d(t, {
  I: function() {
return E;
  },
  b: function() {
return f;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(338545),
  l = n(219436);

function u() {
  return document.hasFocus();
}
let c = {
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

function _(e) {
  let t = e % 2;
  return t > 1 ? 1 - (t - 1) : t;
}
let E = i.memo(function(e) {
let {
  dotRadius: t,
  dotPosition: n,
  fill: a = 'currentColor',
  spacing: o = 2.5
} = e, l = i.useRef(u()), c = i.useRef(!0);
i.useEffect(() => () => void(c.current = !1), []);
let [E] = (0, s.useSpring)(() => ({
  ...d,
  to: async e => {
    let t = 2.8;
    for (; c.current;) {
      ;
      l.current = u(), l.current ? (t += 4, await e({
        dotCycle: t,
        immediate: !1
      })) : 2.8 !== t ? (t = 2.8, await e({
        dotCycle: t,
        immediate: !0
      })) : await new Promise(e => setTimeout(e, 1000));
    }
  }
})), f = (6 * t + t / 4 * 2) / 2;
return (0, r.jsx)(r.Fragment, {
  children: [
    0,
    1,
    2
  ].map(e => {
    let i = 0.25 * e,
      u = t + t * o * e;
    return (0, r.jsx)(s.animated.circle, {
      cx: n ? n.to([
        0,
        1
      ], [
        f,
        u
      ]) : u,
      cy: t,
      r: E.dotCycle.to(e => _(e - i)).to([
        0,
        0.4,
        0.8,
        1
      ], [
        0.8 * t,
        0.8 * t,
        t,
        t
      ]).to(e => l.current ? e : t),
      fill: a,
      style: {
        opacity: E.dotCycle.to(e => _(e - i)).to([
          0,
          0.4,
          0.8,
          1
        ], [
          0.3,
          0.3,
          1,
          1
        ]).to(e => l.current ? e : 1)
      }
    }, e);
  })
});
  }),
  f = i.memo(i.forwardRef(function(e, t) {
let {
  dotRadius: n,
  x: i,
  y: a,
  hide: d = !1,
  themed: _ = !1,
  className: f
} = e;
return (0, s.useTransition)(d, {
  ...c,
  key: e => e ? 'true' : 'false',
  immediate: !u()
})((e, u, c) => {
  let {
    dotPosition: d
  } = e, {
    key: h
  } = c;
  return u ? null : (0, r.jsx)('svg', {
    ref: t,
    x: i,
    y: a,
    width: 6 * n + n / 2 * 2,
    height: 2 * n,
    className: o()(f, l.dots, _ ? l.themed : null),
    children: (0, r.jsx)(s.animated.g, {
      style: {
        opacity: d.to(e => Math.min(1, Math.max(e, 0)))
      },
      children: (0, r.jsx)(E, {
        dotRadius: n,
        dotPosition: d
      })
    })
  }, h);
});
  }));