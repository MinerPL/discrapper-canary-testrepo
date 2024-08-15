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
  s = n.n(a),
  o = n(466377),
  l = n(481060),
  u = n(568154),
  c = n(252618),
  d = n(449934),
  _ = n(792125),
  E = n(981631),
  f = n(898625),
  h = n(689938),
  p = n(68560);

function m(e) {
  let {
children: t,
wrapperClassName: n,
embedded: a
  } = e, [o, m] = i.useState(f.hO.INITIAL), I = i.useCallback(e => {
m(t => Math.max(t, e));
  }, []);
  return (0, c.Tt)({
location: h.Z.Messages.OAUTH2_TITLE
  }), (0, r.jsx)(l.ThemeContextProvider, {
theme: E.BRd.DARK,
children: (0, r.jsx)(u.Z, {
  embedded: a,
  className: s()((0, _.Q)(E.BRd.DARK), p.wave),
  splash: (0, d.gK)(),
  waveState: o,
  showLogo: !0,
  updateWaveState: I,
  children: (0, r.jsx)('div', {
    className: s()(p.oauth2Wrapper, n),
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
overlay: a,
...s
  } = e;
  return (0, r.jsxs)(o.Y0, {
size: o.Cg.DYNAMIC,
transitionState: i,
className: p.oauth2Wrapper,
...s,
children: [
  (0, r.jsx)(o.hz, {
    children: t
  }),
  a,
  null != n && (0, r.jsx)(o.mz, {
    className: p.footer,
    children: n
  })
]
  });
}