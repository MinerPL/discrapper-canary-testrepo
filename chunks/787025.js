n.d(t, {
  G: function() {
return m;
  },
  j: function() {
return I;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(466377),
  l = n(481060),
  u = n(568154),
  c = n(252618),
  d = n(449934),
  _ = n(792125),
  E = n(981631),
  f = n(898625),
  h = n(689938),
  p = n(209164);

function m(e) {
  let {
children: t,
wrapperClassName: n,
embedded: a
  } = e, [s, m] = i.useState(f.hO.INITIAL), I = i.useCallback(e => {
m(t => Math.max(t, e));
  }, []);
  return (0, c.Tt)({
location: h.Z.Messages.OAUTH2_TITLE
  }), (0, r.jsx)(l.ThemeContextProvider, {
theme: E.BRd.DARK,
children: (0, r.jsx)(u.Z, {
  embedded: a,
  className: o()((0, _.Q)(E.BRd.DARK), p.wave),
  splash: (0, d.gK)(),
  waveState: s,
  showLogo: !0,
  updateWaveState: I,
  children: (0, r.jsx)('div', {
    className: o()(p.oauth2Wrapper, n),
    children: t
  })
})
  });
}

function I(e) {
  let {
children: t,
footer: n,
transitionState: i,
...a
  } = e;
  return (0, r.jsxs)(s.Y0, {
size: s.Cg.DYNAMIC,
transitionState: i,
className: p.oauth2Wrapper,
...a,
children: [
  (0, r.jsx)(s.hz, {
    children: t
  }),
  null != n && (0, r.jsx)(s.mz, {
    className: p.footer,
    children: n
  })
]
  });
}