n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var r = n(735250),
  o = n(470079),
  a = n(887024);
let i = [n(992134)],
  c = ['#FFFFFF'],
  s = 1000 / 60,
  d = {
velocity: {
  type: 'static-random',
  minValue: {
    x: 0,
    y: 1
  },
  maxValue: {
    x: 3,
    y: 3
  }
},
rotation: {
  type: 'linear-random',
  minValue: {
    x: 0,
    y: 0,
    z: 0
  },
  maxValue: {
    x: 0,
    y: 0,
    z: 360
  },
  minAddValue: {
    x: 0,
    y: 0,
    z: -5
  },
  maxAddValue: {
    x: 0,
    y: 0,
    z: 5
  }
},
size: {
  type: 'static-random',
  minValue: 2,
  maxValue: 6
},
dragCoefficient: {
  type: 'static',
  value: {
    x: 0.05,
    y: 0.05
  }
},
opacity: {
  type: 'static',
  value: 0.3
}
  };

function l(e) {
  let {
className: t,
firing: n = !0,
wind: l = 2
  } = e, [u, p] = o.useState(null), [f, _] = o.useState(null), b = (0, a.uR)(f, u), h = o.useMemo(() => new a.qA({
wind: l
  }), [l]), m = o.useCallback(() => {
let e = null == f ? void 0 : f.getCanvas();
if (null == e)
  return;
let t = e.getBoundingClientRect();
b.createConfetti({
  ...d,
  position: {
    type: 'static-random',
    minValue: {
      x: -t.width / 2,
      y: -6
    },
    maxValue: {
      x: t.width,
      y: -6
    }
  }
});
  }, [
b,
f
  ]);
  return o.useEffect(() => {
let e = n ? setInterval(m, s) : null;
return () => clearInterval(e);
  }, [
n,
m
  ]), (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(a.O_, {
    ref: _,
    className: t,
    environment: h
  }),
  (0, r.jsx)(a.Ji, {
    ref: p,
    colors: c,
    sprites: i,
    spriteWidth: 6,
    spriteHeight: 6
  })
]
  });
}