s.d(t, {
  Z: function() {
return h;
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  i = s(120356),
  a = s.n(i),
  o = s(338545),
  l = s(481060),
  c = s(144114),
  u = s(317175),
  d = s(183062);

function h(e) {
  let {
show: t,
alpha2: s,
countryCode: i
  } = e, h = r.useRef(null), [p, m] = r.useState(0), [f, C] = r.useState(!1);
  r.useEffect(() => {
function e() {
  var e, s;
  m(t && null !== (s = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0);
}
return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
  }, [
t,
s,
i
  ]);
  let g = (0, l.useSpring)({
  width: ''.concat(p, 'px'),
  onStart: () => {
    C(!0);
  },
  onRest: () => {
    C(!1);
  }
}),
x = e => {
  c.Z.setCountryCode(e);
};
  return (0, n.jsx)(l.Popout, {
position: 'top',
renderPopout: e => (0, n.jsx)(u.Z, {
  className: d.popout,
  onClick: t => {
    x(t), e.closePopout();
  }
}),
children: e => (0, n.jsx)('div', {
  className: a()(d.outerContainer, {
    [d.hidden]: !(t || f)
  }),
  children: (0, n.jsx)(o.animated.div, {
    className: d.container,
    style: g,
    children: (0, n.jsxs)('div', {
      className: d.innerContainer,
      ref: h,
      children: [
        (0, n.jsxs)(l.Clickable, {
          ...e,
          className: d.countryCode,
          children: [
            s,
            ' ',
            i
          ]
        }),
        (0, n.jsx)('div', {
          className: d.separator
        })
      ]
    })
  })
})
  });
}