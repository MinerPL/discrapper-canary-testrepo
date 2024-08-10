n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  i = n(887024);
let o = [n(123353)],
  s = ['#FFFFFF'],
  l = 1000 / 60,
  c = {
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

function d(e) {
  let {
className: t,
firing: n = !0,
wind: d = 2
  } = e, [u, f] = a.useState(null), [h, p] = a.useState(null), b = (0, i.uR)(h, u), m = a.useMemo(() => new i.qA({
wind: d
  }), [d]), g = a.useCallback(() => {
let e = null == h ? void 0 : h.getCanvas();
if (null == e)
  return;
let t = e.getBoundingClientRect();
b.createConfetti({
  ...c,
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
h
  ]);
  return a.useEffect(() => {
let e = n ? setInterval(g, l) : null;
return () => clearInterval(e);
  }, [
n,
g
  ]), (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(i.O_, {
    ref: p,
    className: t,
    environment: m
  }),
  (0, r.jsx)(i.Ji, {
    ref: f,
    colors: s,
    sprites: o,
    spriteWidth: 6,
    spriteHeight: 6
  })
]
  });
}