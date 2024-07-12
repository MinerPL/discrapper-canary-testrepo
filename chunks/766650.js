s.d(t, {
  Z: function() {
return m;
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  i = s(120356),
  a = s.n(i),
  o = s(338545),
  l = s(442837),
  c = s(481060),
  u = s(607070),
  d = s(144114),
  h = s(317175),
  p = s(183062);

function m(e) {
  let {
show: t,
alpha2: s,
countryCode: i
  } = e, m = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), f = r.useRef(null), [C, g] = r.useState(0), [x, N] = r.useState(!1);
  r.useEffect(() => {
function e() {
  var e, s;
  g(t && null !== (s = null === (e = f.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0);
}
return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
  }, [
t,
s,
i
  ]);
  let v = (0, o.useSpring)({
  width: ''.concat(C, 'px'),
  immediate: m,
  onStart: () => {
    N(!0);
  },
  onRest: () => {
    N(!1);
  }
}),
E = e => {
  d.Z.setCountryCode(e);
};
  return (0, n.jsx)(c.Popout, {
position: 'top',
renderPopout: e => (0, n.jsx)(h.Z, {
  className: p.popout,
  onClick: t => {
    E(t), e.closePopout();
  }
}),
children: e => (0, n.jsx)('div', {
  className: a()(p.outerContainer, {
    [p.hidden]: !(t || x)
  }),
  children: (0, n.jsx)(o.animated.div, {
    className: p.container,
    style: v,
    children: (0, n.jsxs)('div', {
      className: p.innerContainer,
      ref: f,
      children: [
        (0, n.jsxs)(c.Clickable, {
          ...e,
          className: p.countryCode,
          children: [
            s,
            ' ',
            i
          ]
        }),
        (0, n.jsx)('div', {
          className: p.separator
        })
      ]
    })
  })
})
  });
}