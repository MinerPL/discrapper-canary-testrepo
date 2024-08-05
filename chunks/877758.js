n.d(t, {
  Z: function() {
return i;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  r = n(785997),
  l = n(546641);

function i(e) {
  let {
step: t
  } = e, n = t === r.F.AGE_GATE, a = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT, i = t === r.F.CUSTOMIZE_GUILD, c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD, d = i || c, u = a || d;
  return (0, s.jsxs)('div', {
className: l.sidebar,
children: [
  (0, s.jsx)('div', {
    className: o()(l.step1, {
      [l.show]: n
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step24Clouds, {
      [l.show]: u
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step34Flag, {
      [l.show]: d
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step24Base, {
      [l.show]: u
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step24Ground, {
      [l.show]: u
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step2Base, {
      [l.show]: a
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step2Character, {
      [l.show]: a
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step34Base, {
      [l.show]: d
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step3Character, {
      [l.show]: i
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step4Character, {
      [l.show]: c
    })
  }),
  (0, s.jsx)('div', {
    className: o()(l.step24Foreground, {
      [l.show]: u
    })
  })
]
  });
}